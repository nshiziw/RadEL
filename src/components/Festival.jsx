import Button from "./Button"

const Festival = () => {
    return (
        <section className="px-[10%] grid grid-cols-2">
            <div>
                <img className="w-full outline -outline-offset-[20px] outline-snow" src="https://media.istockphoto.com/id/1011049394/photo/fairytale-hero-renaissance-redhead-princess-with-hairstyle-in-castle-fabulous-rococo-queen-in.jpg?s=612x612&w=0&k=20&c=PTvqOcZCLdtjg75L4mjAgFdmxnlgDnHhVJw6Kl64wfQ=" alt="" />
            </div>
            <div className="flex flex-col gap-6 justify-center p-10">
                <p className="uppercase text-gold text-xl font-medium">festival sale offers</p>
                <p className="capitalize text-5xl text-navy-green font-italiana">upto 25% off all jewelry favorites - limited time!</p>
                <p className="text-slate-600">Thank you very much. For he is bound by the pleasures of repudiation, and the expedient elders know nothing of his will for him?</p>
                <Button label="shop now" className="w-fit bg-gold hover:bg-gold-dark transition-all duration-500" />
            </div>
        </section>
    )
}

export default Festival