import { BsClipboardCheck } from "react-icons/bs";
import { BsClipboard } from "react-icons/bs";
import { LuBox } from "react-icons/lu";
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaCheckSquare } from "react-icons/fa";
import Progresses from "../assets/data/Progress.json"
const Progress = () => {
    return (
        <section className="py-10 px-8 border border-navy-green my-4">
            <div>
                {Progresses.map((progress) => (
                    <div key={progress.id}>
                        <p>{progress.date}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Progress