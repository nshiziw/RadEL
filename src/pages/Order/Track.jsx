import Button from "../../components/Button"
import { Title } from "../../components/Title"

const Track = () => {
    return (
        <section>
            <Title source="home" title="Track Your Order" />
            <main className="px-[10%] py-10">
                <p className="text-slate-600">To track your order please enter your order ID and billing email in the boxes below and press &quot;Track Order&quot; button. The order ID was given to you on your receipt and in the confirmation email you should have received.</p>
                <div className="flex flex-col gap-8 mt-10">
                    <div className="w-full flex flex-col gap-2">
                        <p className="text-navy-green capitalize font-medium">Order ID *</p>
                        <input type="text" className="w-full border p-3 text-navy-green border-navy-green" placeholder="Enter order ID" />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <p className="text-navy-green capitalize font-medium">Billing Email *</p>
                        <input type="text" className="w-full border p-3 text-navy-green border-navy-green" placeholder="Enter email address" />
                    </div>
                    <Button className="bg-navy-green w-fit" label="Track Order" />
                </div>
            </main>
        </section>
    )
}

export default Track