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
                <div className="download p-5 bg-gold flex justify-between items-center">
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
            </main>
        </section>
    )
}

export default Finish