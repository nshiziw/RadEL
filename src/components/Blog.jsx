import { Link } from "react-router-dom"
import Blogs from "../assets/data/Blogs.json"
import Button from "./Button.jsx"
const Blog = () => {
    return (
        <section className="px-[10%] py-10">
            <div className="title flex justify-between items-end">
                <div className="flex flex-col gap-3">
                    <p className="text-gold font-medium text-xl uppercase">new and blogs</p>
                    <p className="capitalize text-5xl text-navy-green font-italiana">our latest news & blogs</p>
                </div>
                <Button label="View All blogs" className="bg-gold" />
            </div>
            <div className="mt-10 grid grid-cols-3 gap-8">
                {Blogs.map((blog) => (
                    <div key={blog.id} className="">
                        <div className="image relative">
                            <img className="w-full aspect-[4/3] object-cover" src={blog.image} alt="" />
                            <p className="absolute text-snow bg-gold px-3 py-2 bottom-3 -left-2">{blog.date}</p>
                            <div className="blogShape absolute w-2 h-2 bottom-[52px] -left-2 bg-gold"></div>
                        </div>
                        <div className="content mt-8 flex flex-col gap-3">
                            <p className="text-navy-green font-semibold capitalize text-xl">{blog.title}</p>
                            <p className="text-slate-600">{blog.description}</p>
                            <Link className="text-gold hover:underline" to="/blogs">Read more</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Blog