import {SubTitle} from "../../components/Title"
import Button from "../../components/Button.jsx"
import Features from "../../components/Features.jsx"
import Newsletter from "../../components/Newsletter.jsx"
const Checkout = () => {
    return (
        <section className="">
            <SubTitle source="home" subTitle="shopping cart" title="checkout" />
            <div className="px-[10%] mt-14 mb-3">
                <h1 className="font-semibold text-2xl capitalize text-navy-green">Billing Details</h1>
            </div>
            <main className="mt-10 px-[10%] w-full flex gap-8">
                <div className="w-[70%] flex flex-col gap-8">
                    <div className="flex items-center gap-8">
                        <div className="w-full flex flex-col gap-2">
                            <p className="text-navy-green capitalize font-medium">First name *</p>
                            <input type="text" className="w-full border p-3 text-navy-green border-navy-green" placeholder="Ex. John" />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <p className="text-navy-green capitalize font-medium">Last name *</p>
                            <input type="text" className="w-full border p-3 text-navy-green border-navy-green" placeholder="Ex. Doe" />
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <p className="text-navy-green capitalize font-medium">Company  name (optional)</p>
                        <input type="text" className="w-full border p-3 text-navy-green border-navy-green" placeholder="Enter company name" />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <p className="text-navy-green capitalize font-medium">Country *</p>
                        <select className="w-full border p-3 text-navy-green border-navy-green">
                            <option value="">Select Country</option>
                            <option value="rwanda">Rwanda</option>
                        </select>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <p className="text-navy-green capitalize font-medium">Street address *</p>
                        <input type="text" className="w-full border p-3 text-navy-green border-navy-green" placeholder="Enter street address" />
                    </div>
                </div>
                <div className="summary w-[30%] border border-slate-600 h-fit px-4 py-5">
                    <div className="pb-4 border-b border-slate-600">
                        <p className="font-semibold text-navy-green">Order summary</p>
                    </div>
                    <div className="my-4">
                        <div className="flex  items-center justify-between mb-4">
                            <p className="text-slate-600 capitalize">items</p>
                            <p className="font-medium text-navy-green">4</p>
                        </div>
                        <div className="flex  items-center justify-between mb-4">
                            <p className="text-slate-600 capitalize">sub total</p>
                            <p className="font-medium text-navy-green">$4000.00</p>
                        </div>
                        <div className="flex  items-center justify-between mb-4">
                            <p className="text-slate-600 capitalize">shipping</p>
                            <p className="font-medium text-navy-green">$17.00</p>
                        </div>
                        <div className="flex  items-center justify-between mb-4">
                            <p className="text-slate-600 capitalize">taxes</p>
                            <p className="font-medium text-navy-green">$13.00</p>
                        </div>
                        <div className="flex  items-center justify-between mb-4">
                            <p className="text-slate-600 capitalize">coupon discount</p>
                            <p className="font-medium text-navy-green">$-100.00</p>
                        </div>
                    </div>
                    <div className="pt-4 border-t border-slate-600">
                        <div className="flex  items-center justify-between mb-4">
                            <p className="text-slate-600 capitalize">Total</p>
                            <p className="font-semibold text-navy-green">$3930.00</p>
                        </div>
                        <Button label="proceed to checkout" className="bg-navy-green w-full" />
                    </div>
                </div>
            </main>
            <Features />
            <Newsletter />
        </section>
    )
}   

export default Checkout