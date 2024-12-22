import Button from "./Button";

const Newsletter = () => {
    return (
        <section className="px-[10%] py-10 flex flex-col items-center">
            <div className="title flex flex-col gap-3 self-center items-center w-2/3">
                <p className="uppercase text-gold text-xl font-medium">
                our newsletter
                </p>
                <p className="text-center capitalize text-navy-green text-5xl font-italiana">
                subscribe to our newsletter to get updates to our latest collection
                </p>
            </div>
            <div className="mt-10 flex flex-col gap-3 items-center w-1/2">
                <p className="font-medium text-slate-600">Get 20% off on your first order just by subscribing to our newsletter</p>
                <div className="flex gap-3 w-full">
                    <input type="text" placeholder="Enter Email Address" className="px-3 text-navy-green border border-navy-green w-full" />
                    <Button className="bg-gold" label="Subscribe" />
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
