import { useState, useRef } from "react";
import faqs from "../assets/data/faqs.json";  // Import the JSON data

const AccordionItem = ({ faq, handleToggle, active }) => {
    const contentEl = useRef();
    const { header, id, text } = faq;

    return (
        <div className={`bg-gray-200 mb-3 overflow-hidden ${active === id ? '' : ''}`}>
            <div className="">
                <div
                    className={`flex justify-between p-4 cursor-pointer transition-all duration-300 text-navy-green ${active === id ? 'bg-navy-green text-snow' : ''}`}
                    onClick={() => handleToggle(id)}
                >
                    <h5 className="font-medium text-base">{header}</h5>
                    <i
                        className={`fa fa-chevron-down transition-transform duration-300 ${active === id ? 'rotate-180 text-snow' : 'text-gray-700'}`}
                    ></i>
                </div>
            </div>
            <div
                ref={contentEl}
                className={`overflow-hidden bg-slate-100 transition-all duration-300 ${active === id ? 'h-auto ' : 'h-0'}`}
                style={
                    active === id
                        ? { height: contentEl.current.scrollHeight }
                        : { height: "0px" }
                }
            >
                <div className="p-4">
                    <p className="leading-6 text-navy-green">{text}</p>
                </div>
            </div>
        </div>
    );
};

const Faqs = () => {
    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        setActive(active === index ? null : index);
    };

    return (
        <section className="px-[10%] py-10">
            <div className="flex flex-col items-center gap-3 mb-10">
                <p className="uppercase text-gold text-xl font-medium">faqs</p>
                <p className="capitalize text-navy-green text-5xl font-italiana">
                    Questions? Look here
                </p>
            </div>
            <div className="">
                {faqs.map((faq) => (
                    <AccordionItem
                        key={faq.id}
                        faq={faq}
                        active={active}
                        handleToggle={handleToggle}
                    />
                ))}
            </div>
        </section>
    );
};

export default Faqs;
