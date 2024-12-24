import { FaCheckCircle } from "react-icons/fa"
import { Title } from "../../components/Title"
import Button from "../../components/Button.jsx"
import Carts from "../../assets/data/Cart.json"
import Newsletter from "../../components/Newsletter"
import Features from "../../components/Features"

const Finish = () => {
    return (
        <section className="">
            <Title source="home" title="order completed" />
            <main className="px-[10%]">
                <div className="title py-10 flex flex-col items-center gap-3">
                    <FaCheckCircle className="text-gold text-7xl" />
                    <p className="font-semibold text-navy-green text-4xl">Your order is completed!</p>
                    <p className="text-slate-600 font-medium">Thank you. Your order has been received.</p>
                </div>
                <div className="download p-6 bg-gold flex justify-between items-center">
                    <div>
                        <p className="text-snow">Oder ID</p>
                        <p className="text-navy-green font-semibold">#RADEL07623ELD</p>
                    </div>
                    <div>
                        <p className="text-snow">Payment Method</p>
                        <p className="text-navy-green font-semibold">#RADEL07623ELD</p>
                    </div>
                    <div>
                        <p className="text-snow">Transaction ID</p>
                        <p className="text-navy-green font-semibold">#RADEL07623ELD</p>
                    </div>
                    <div>
                        <p className="text-snow">Estimated Delivery Date</p>
                        <p className="text-navy-green font-semibold">#RADEL07623ELD</p>
                    </div>
                    <div>
                        <Button label="download invoice" className="bg-navy-green capitalize" />
                    </div>
                </div>
                <div className="border border-navy-green p-6 mt-8">
                    <div className="pb-4 border-b border-navy-green">
                        <p className="text-xl text-navy-green font-semibold">Oder details</p>
                    </div>
                        <div className="mt-4">
                            <div className="flex justify-between items-center mb-4">
                                <p className="font-semibold text-navy-green">Products</p>
                                <p className="font-semibold text-navy-green">Sub Total</p>
                            </div>
                            {Carts.map((Cart) => (
                                <div  key={Cart.id} className="flex items-center justify-between pb-4">
                                    <div className="flex items-center gap-2">
                                        <img className="w-12 h-12" src={Cart.image} alt="" />
                                        <div>
                                            <p className="font-semibold text-navy-green">{Cart.name}</p>
                                            <p className="text-sm text-slate-600 font-medium">{Cart.category}</p>
                                        </div>
                                    </div>
                                    <p>${Cart.price}</p>
                                </div>
                            ))}
                        </div>
                    <div className="flex flex-col gap-2 border-y py-4 border-navy-green">
                        <div className="flex justify-between items-center">
                            <p className="font-medium text-navy-green">Shipping</p>
                            <p className="font-medium text-navy-green">$80.00</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="font-medium text-navy-green">Taxes</p>
                            <p className="font-medium text-navy-green">$34.00</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="font-medium text-navy-green">Coupon Discount</p>
                            <p className="font-medium text-navy-green">-$100.00</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <p className="font-semibold text-xl text-navy-green">Total</p>
                        <p className="font-semibold text-xl text-navy-green">$3210.00</p>
                    </div>
                </div>
            </main>
            <Features />
            <Newsletter />
        </section>
    )
}

export default Finish