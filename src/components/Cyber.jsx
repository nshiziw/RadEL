import Button from "./Button"

const Cyber = () => {
    return (
        <section className="px-[10%] py-10">
            <div className="relative">
                <img className="border w-full h-64 object-cover" src="https://www.unoaerre.it/media/wysiwyg/UNOAERREnatale_3_.png" alt="" />
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