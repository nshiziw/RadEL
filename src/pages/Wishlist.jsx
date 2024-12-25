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
                                    {Cart.inStock ? (
                                        <p className="text-emerald-600 font-medium">In Stock</p>
                                    ) : (
                                        <p className="text-rose-600 font-medium">Out Of Stock</p>
                                    )}
                                </td>
                                <td className="py-3 text-center">
                                    {Cart.inStock ? (
                                    <Button label="Add to Cart" className="bg-navy-green" />
                                ): (
                                    <Button label="Add to Cart" className="bg-slate-400 cursor-not-allowed hover:bg-slate-300 transition-all duration-500" />
                                    )}
                                </td>
                            </tr>
                        ))}
                    </table>
                    <div className="mt-8 flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <p className="text-navy-green underline">Wishlist Link: </p>
                            <div className="flex gap-3">
                                <input className="border border-slate-600 px-2" type="text" placeholder="https://www.example.com" />
                                <Button label="Copy Link" className="capitalize bg-navy-green" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <Link className="text-navy-green capitalize underline" to="/clear">clear wishlist</Link>
                            <Button label="add all to cart" className="capitalize bg-navy-green" />
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