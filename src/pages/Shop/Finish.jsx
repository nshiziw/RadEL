import { FaCheckCircle } from "react-icons/fa"
import { Title } from "../../components/Title"
import Button from "../../components/Button.jsx"

const Finish = () => {
    return (
        <section className="px-[10%]">
            <Title source="home" title="order completed" />
            <main>
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
                        <Button label="download invoice" className="bg-navy-green" />
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
                        <div className="flex items-center justify-between pb-4">
                            <div className="flex items-center gap-2">
                                <img className="w-12 h-12" src="https://media.istockphoto.com/id/1744118133/photo/diamond-jewelry-rings-luxury-accessories-beauty-fashion.jpg?s=612x612&w=0&k=20&c=OxHOVvMC9I2arFH6dOjl9lFl2lWbNlNKJZ9JquXKQ-Q=" alt="" />
                                <div>
                                    <p className="font-semibold text-navy-green">Gold earring</p>
                                    <p className="text-sm text-slate-600 font-medium">Earrings</p>
                                </div>
                            </div>
                            <p>$500.00</p>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Finish