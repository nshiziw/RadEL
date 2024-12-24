import {SubTitle} from "../../components/Title"
import Button from "../../components/Button.jsx"
import Features from "../../components/Features.jsx"
import Newsletter from "../../components/Newsletter.jsx"
const Checkout = () => {
    return (
        <section className="">
            <SubTitle source="home" subTitle="shopping cart" title="checkout" />
            <main className="mt-10 px-[10%] w-full flex gap-8">
                <div className="table w-[70%]">
                    
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