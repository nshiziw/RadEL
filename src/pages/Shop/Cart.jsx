import { MdCancel } from "react-icons/md"
import {Title} from "../../components/Title"
import { FaMinus, FaPlus } from "react-icons/fa"
const Cart = () => {
    return (
        <section className="">
            <Title source="home" title="shopping cart" />
            <main className="mt-10 px-[10%] w-full flex gap-8">
                <div className="table w-[70%]">
                    <table className="w-full">
                        <tr className="text-snow bg-gold">
                            <th className="py-3"></th>
                            <th className="py-3">Product</th>
                            <th className="py-3">Price</th>
                            <th className="py-3">Quantity</th>
                            <th className="py-3">Subtotal</th>
                        </tr>
                        <tr className="border-b border-slate-300">
                            <td className="py-3">
                                <MdCancel className="text-navy-green text-2xl cursor-pointer" />
                            </td>
                            <td className="py-3 flex gap-2 items-center">
                                <img className="w-16 h-16 object-cover" src="https://media.istockphoto.com/id/1163354085/photo/silver-bracelets-chakra-hippie-style.jpg?s=612x612&w=0&k=20&c=9yAy_mlmIL9puKIqKdrmVsnT-0Mgw8mkg-G0svPjx_s=" alt="" />
                                <div>
                                    <p className="font-semibold capitalize text-navy-green">Gold earring</p>
                                    <p className="font-normal text-sm capitalize text-slate-600">earring</p>
                                </div>
                            </td>
                            <td className="py-3 text-center">
                                <p className="text-navy-green font-medium">$320.00</p>
                            </td>
                            <td className="py-3">
                                <div className="flex  border border-slate-600 w-fit m-auto justify-center items-center">
                                    <div className="p-3 hover:bg-slate-600 text-navy-green transition-all hover:cursor-pointer hover:text-snow">
                                        <FaMinus className="transition-all"/>
                                    </div>
                                    <div className="border-l border-r border-slate-600 py-2 px-4">
                                        <p className="text-navy-green font-medium">3</p>
                                    </div>
                                    <div className="p-3 hover:bg-slate-600 text-navy-green transition-all hover:cursor-pointer hover:text-snow">
                                        <FaPlus  className="transition-all"/>
                                    </div>
                                </div>
                            </td>
                            <td className="py-3 text-center">
                                <p className="font-semibold text-navy-green">$960.00</p>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="summary w-[30%]">
                    <h1>This is the order summary section</h1>
                </div>
            </main>
        </section>
    )
}

export default Cart