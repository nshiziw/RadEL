import Features from "../components/Features"
import Newsletter from "../components/Newsletter"
import { Title } from "../components/Title"
import WishLists from "../assets/data/Wishlist.json"
import { MdCancel } from "react-icons/md"
import { Link } from "react-router-dom"
import Button from "../components/Button.jsx"

const Wishlist = () => {
    return (
        <section>
            <Title source="Home" title="wishlist" />
            <main className="px-[10%] py-10">
                <div className="table w-full">
                    <table className="w-full">
                        <tr className="text-snow bg-gold">
                            <th className="py-3"></th>
                            <th className="py-3">Product</th>
                            <th className="py-3">Price</th>
                            <th className="py-3">Date Added</th>
                            <th className="py-3">Stock Status</th>
                            <th className="py-3">Operation</th>
                        </tr>
                        {WishLists.map((Cart) => (
                            <tr key={Cart.id} className="border-b border-slate-300">
                                <td className="py-3">
                                    <MdCancel className="text-navy-green text-2xl cursor-pointer" />
                                </td>
                                <td className="py-3 flex gap-2 items-center">
                                    <img className="w-16 h-16 object-cover" src={Cart.image} alt="" />
                                    <div>
                                        <p className="font-semibold capitalize text-navy-green">{Cart.name}</p>
                                        <p className="font-normal text-sm capitalize text-slate-600">{Cart.category}</p>
                                    </div>
                                </td>
                                <td className="py-3 text-center">
                                    <p className="text-navy-green font-medium">${Cart.price}</p>
                                </td>
                                <td className="py-3 text-center">
                                    <p className="text-navy-green font-medium">{Cart.dateAdded}</p>
                                </td>
                                <td className="py-3 text-center">
                                    <p className="text-navy-green font-medium">{Cart.inStock}</p>
                                </td>
                                <td className="py-3 text-center">
                                    <p className="text-navy-green font-medium">{Cart.status}</p>
                                </td>
                            </tr>
                        ))}
                    </table>
                    <div className="mt-8 flex justify-between items-center">
                        <div className="flex gap-2">
                            <input className="border border-slate-600 px-2" type="text" placeholder="Enter a Coupon Code" />
                            <Button label="Apply coupon" className="capitalize bg-navy-green" />
                        </div>
                        <div>
                            <Link className="text-navy-green capitalize underline" to="/clear">clear shopping cart</Link>
                        </div>
                    </div>
                </div>
            </main>
            <Features />
            <Newsletter />
        </section>
    )
}

export default Wishlist