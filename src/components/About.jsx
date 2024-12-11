import AboutVideo from "../assets/videos/aboutVideo.mp4"
const About = () => {
    return (
        <section className="py-10 px-[10%] grid grid-cols-2">
            <div>
                <video muted={true} src={AboutVideo}></video>
            </div>
            <div>
                <div className="title">
                    <div>
                        <p>about us</p>
                        <h1>the art and soul behind our jewelry</h1>
                    </div>
                    <img src="https://media.istockphoto.com/id/1944923205/photo/close-up-of-the-wedding-rings-of-the-bride-and-groom-in-a-box.jpg?s=612x612&w=0&k=20&c=wAGhhCQD0KMyZy6uDUVdTSEYjUXmH49znFShw1V_VG4=" alt="" />
                </div>
                <p>Thank you very much. For he is bound by the pleasures of repudiation, and the expedient elders know nothing of his will for him?</p>
                <div>
                    <div>
                        <h1>20+</h1>
                        <p>Categories</p>
                    </div>
                    <div>
                        <h1>6000+</h1>
                        <p>Products</p>
                    </div>
                    <div>
                        <h1>99%</h1>
                        <p>Satisfied customer</p>
                    </div>
                </div>
                <div>
                    <p>Wilson Nshizirungu</p>
                    <div>
                        <p>Wilson nshizirungu</p>
                        <div></div>
                        <p>Founder of RaEl</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About