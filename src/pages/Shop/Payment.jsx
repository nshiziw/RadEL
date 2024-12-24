import {SubTitle} from "../../components/Title"
import Button from "../../components/Button.jsx"
import Features from "../../components/Features.jsx"
import Newsletter from "../../components/Newsletter.jsx"
import { FaCcPaypal, FaCcVisa, FaCreditCard, FaGoogle } from "react-icons/fa"
import { HiCreditCard } from "react-icons/hi"
const Payment = () => {
    return (
        <section className="">
            <SubTitle source="home" subTitle="shopping cart" title="payment" />
            <div className="px-[10%] mt-14 mb-3">
                <h1 className="font-semibold text-2xl capitalize text-navy-green">Select payment method</h1>
            </div>
            <main className="mt-10 px-[10%] w-full flex gap-8">
                <div className="w-[70%] flex flex-col gap-5">
                    <div className="w-full flex gap-3 items-center border p-4 border-slate-600">
                        <input type="radio" name="address" className="accent-navy-green transform scale-[1.7]" id="paypal" />
                        <div className="flex items-center gap-2">
                            <FaCcPaypal className="text-3xl text-navy-green" />
                            <label className="text-navy-green font-medium" htmlFor="paypal">Paypal</label>
                        </div>
                    </div>
                    <div className="w-full flex gap-3 items-center border p-4 border-slate-600">
                        <input type="radio" name="address" className="accent-navy-green transform scale-[1.7]" id="visa" />
                        <div className="flex items-center gap-2">
                            <FaCcVisa className="text-3xl text-navy-green" />
                            <label className="text-navy-green font-medium" htmlFor="visa">Visa</label>
                        </div>
                    </div>
                    <div className="w-full flex gap-3 items-center border p-4 border-slate-600">
                        <input type="radio" name="address" className="accent-navy-green transform scale-[1.7]" id="google" />
                        <div className="flex items-center gap-2">
                            <FaGoogle className="text-3xl text-navy-green" />
                            <label className="text-navy-green font-medium" htmlFor="google">Google Pay</label>
                        </div>
                    </div>
                    <div className="w-full flex gap-3 items-center border p-4 border-slate-600">
                        <input type="radio" name="address" className="accent-navy-green transform scale-[1.7]" id="delivery" />
                        <div className="flex items-center gap-2">
                            <HiCreditCard className="text-3xl text-navy-green" />
                            <label className="text-navy-green font-medium" htmlFor="delivery">Cash on Delivery</label>
                        </div>
                    </div>
                    <div className="w-full flex gap-3 items-start border p-4 border-slate-600">
                        <input type="radio" name="address" className="accent-navy-green transform scale-[1.7]" id="new" />
                        <div className="flex flex-col gap-6 w-full">
                            <div className="flex items-center gap-2">
                                <FaCreditCard className="text-3xl text-navy-green" />
                                <label className="text-navy-green font-medium" htmlFor="new">Add new credit/debit card</label>
                            </div>
                            <div className="w-full flex flex-col gap-2 ">
                                <p className="text-navy-green capitalize font-medium">card holder name *</p>
                                <input type="text" className="w-full border p-3 text-navy-green border-navy-green" placeholder="Ex. John Doe" />
                            </div>
                            <div className="w-full flex flex-col gap-2 ">
                                <p className="text-navy-green capitalize font-medium">card number *</p>
                                <input type="text" className="w-full border p-3 text-navy-green border-navy-green" placeholder="Enter card number" />
                            </div>
                            <div className="flex items-center gap-8">
                                <div className="w-full flex flex-col gap-2">
                                    <p className="text-navy-green capitalize font-medium">Expiry Date *</p>
                                    <input type="text" className="w-full border p-3 text-navy-green border-navy-green" placeholder="Enter Date" />
                                </div>
                                <div className="w-full flex flex-col gap-2">
                                    <p className="text-navy-green capitalize font-medium">CVV *</p>
                                    <input type="text" className="w-full border p-3 text-navy-green border-navy-green" placeholder="000" />
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="checkbox" className="accent-navy-green w-5 h-5" />
                                <p>Save card for future payments</p>
                            </div>
                            <Button label="Add Card" className="bg-navy-green w-fit" />
                        </div>
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
                        <Button label="complete order" className="bg-navy-green w-full" />
                    </div>
                </div>
            </main>
            <Features />
            <Newsletter />
        </section>
    )
}   

export default Payment