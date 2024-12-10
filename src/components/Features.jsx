import { FiHeadphones } from "react-icons/fi"
import { IoWalletOutline } from "react-icons/io5"
import { PiShippingContainer } from "react-icons/pi"

const Features = () => {
    return (
        <section className="py-10 px-[10%] grid grid-cols-3">
            <div className="flex gap-2 items-center justify-center">
                <div className="relative w-fit p-3">
                    <div className="w-10 h-10 bg-gold rounded-full"></div>
                    <PiShippingContainer className="text-5xl text-navy-green absolute top-5 left-0" />
                </div>
                <div>
                    <h1 className="text-xl text-navy-green font-semibold">Free shipping</h1>
                    <p className="text-slate-600">Free shipping on orders above $180.</p>
                </div>
            </div>
            <div className="flex gap-2 items-center justify-center">
                <div className="relative w-fit p-3">
                    <div className="w-10 h-10 bg-gold rounded-full"></div>
                    <IoWalletOutline className="text-5xl text-navy-green absolute top-5 left-0" />
                </div>
                <div>
                    <h1 className="text-xl text-navy-green font-semibold">Flexible payment</h1>
                    <p className="text-slate-600">Multiple secure payment options</p>
                </div>
            </div>
            <div className="flex gap-2 items-center justify-center">
                <div className="relative w-fit p-3">
                    <div className="w-10 h-10 bg-gold rounded-full"></div>
                    <FiHeadphones className="text-5xl text-navy-green absolute top-5 left-0" />
                </div>
                <div>
                    <h1 className="text-xl text-navy-green font-semibold">24x7 Support</h1>
                    <p className="text-slate-600">We support online all days</p>
                </div>
            </div>
        </section>
    )
}

export default Features