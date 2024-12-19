import { MdCancel } from "react-icons/md"
import {Title} from "../../components/Title"
import { FaMinus, FaPlus } from "react-icons/fa"
const Cart = () => {
    return (
        <section>
            <Title source="home" title="shopping cart" />
            <main>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <MdCancel />
                                </td>
                                <td>
                                    <img src="https://media.istockphoto.com/id/1163354085/photo/silver-bracelets-chakra-hippie-style.jpg?s=612x612&w=0&k=20&c=9yAy_mlmIL9puKIqKdrmVsnT-0Mgw8mkg-G0svPjx_s=" alt="" />
                                    <div>
                                        <p>Gold earring</p>
                                        <p>earring</p>
                                    </div>
                                </td>
                                <td>
                                    <p>$320.00</p>
                                </td>
                                <td>
                                    <FaMinus />
                                    <p>3</p>
                                    <FaPlus />
                                </td>
                                <td>
                                    <p>$960.00</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="summary"></div>
            </main>
        </section>
    )
}

export default Cart