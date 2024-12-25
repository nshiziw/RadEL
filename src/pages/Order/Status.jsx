import Features from "../../components/Features"
import Newsletter from "../../components/Newsletter"
import { Title } from "../../components/Title"
import Statuses from "../../assets/data/status.json"

const Status = () => {
    return (
        <section>
            <Title source="home" title="Order Status" />
            <main className="px-[10%] py-10">
                <div className="flex flex-col gap-1 text-lg">
                    <p className="font-semibold text-navy-green">Order status</p>
                    <p className="font-medium text-slate-500">Order ID: #RADEL07623ELD</p>
                </div>
                <div className="border border-navy-green p-5">
                    <div className="mb-4">
                        <p className="text-navy-green font-medium capitalize text-lg">Products</p>
                    </div>
                    {Statuses.map((Status) => (
                        <div key={Status.id} className="border-t border-navy-green py-4 flex gap-2 items-center">
                            <img className="w-14 h-14 object-cover" src={Status.image} alt="" />
                            <div className="flex flex-col">
                                <p className="capitalize font-medium text-navy-green">{Status.name}</p>
                                <div className="flex gap-2 items-center">
                                    <p className="text-slate-500 font-medium text-sm">{Status.category}</p>
                                    <p className="text-slate-500 font-medium text-sm">|</p>
                                    <p className="text-slate-500 font-medium text-sm">{Status.quantity} Qty.</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Features />
            <Newsletter />
        </section>
    )
}

export default Status