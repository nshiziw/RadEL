import Button from "./Button"

const Cyber = () => {
    return (
        <section className="px-[10%] py-10">
            <div className="relative">
                <img className="w-full h-64 object-cover" src="https://media.istockphoto.com/id/1174210371/photo/portrait-beautiful-woman-with-jewelry.jpg?s=612x612&w=0&k=20&c=WNV__DU0e6_itmJED9DwyHn7iyVP_IjffitMedOLqMw=" alt="" />
                <div className="absolute bottom-1/2 left-0 transform ml-10 translate-y-1/2 flex flex-col gap-2 w-1/3">
                    <p className="text-gold uppercase text-xl">cyber monday sale</p>
                    <p className="text-navy-green capitalize font-italiana text-4xl">cyber monday&apos;s best jewelry deals await you</p>
                    <p className="text-slate-600">Hello, it&apos;s really a pain to be followed. Who, when.</p>
                    <Button className="w-fit bg-gold" label="shop now" />
                </div>
            </div>
        </section>
    )
}

export default Cyber