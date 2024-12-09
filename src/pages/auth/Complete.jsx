import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import completeImg from "../../assets/images/complete.jpg";
import Button from "../../components/Button";
import { CiImageOn } from "react-icons/ci";




function Complete(props) {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps } = useDropzone({
        accept: {
        "image/*": [],
        },
        onDrop: (acceptedFiles) => {
        setFiles(
            acceptedFiles.map((file) =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
            })
            )
        );
        },
    });

    const thumbs = files.map((file) => (
        <img
            key={file.name}
            src={file.preview}
            style={{ display: 'block', width: '110px', borderRadius: '100px', border: "2px solid #0E343D", height: '110px', objectFit: 'cover' }}
            // Revoke data uri after image is loaded
            onLoad={() => {
                URL.revokeObjectURL(file.preview);
            }}
        />
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
    }, [files]);
    return (
        
            <section className="h-screen w-full flex text-slate-600">
            <div className="w-1/2">
                <img
                className="w-full h-full object-cover outline -outline-offset-[25px] outline-snow"
                src={completeImg}
                alt=""
                />
            </div>
            <div className="w-1/2 p-[5%] flex flex-col gap-5 justify-center">
                <h1 className="font-italiana text-3xl text-navy-green-dark">RadEl</h1>
                <p className="text-gold text-4xl font-semibold capitalize">Complete Your Profile</p>
                <p className="text-lg">
                    Don&apos;t worry, only you can see your personal data.
                </p>
                <form>
                    <div className="flex flex-col gap-5">
                        <div>
                            <label className="text-slate-600">
                                Profile Photo (Optional)
                            </label>
                            <section className="container flex items-center gap-2 mt-2">
                                <div {...getRootProps({ className: "dropzone flex flex-col items-center border-2 p-3 border-dashed rounded-lg" })}>
                                    <input {...getInputProps()} />
                                    <CiImageOn className="text-4xl" />
                                    <p>Drag a photo</p>
                                    <p className="font-semibold text-navy-green cursor-pointer">Browse</p>
                                </div>
                                <aside className="rounded-lg flex items-center justify-center">{thumbs}</aside>
                            </section>
                        </div>
                        <div>
                            <label className="text-slate-600">Phone <span className="text-rose-600">*</span></label>
                            <input
                                className="w-full border border-navy-green p-4"
                                type="tel"
                                placeholder="Enter phone number"
                            />
                        </div>
                        <div>
                            <label className="text-slate-600">Gender <span className="text-rose-600">*</span></label>
                            <select className="w-full border border-navy-green p-4">
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                    </div>
                    <Button className="mt-4 w-full" label="Complete Profile" />
                </form>
            </div>
            </section>
    );
}

export default Complete;
