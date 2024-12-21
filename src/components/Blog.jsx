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
                        <div className="image">
                            <img src={blog.image} alt="" />
                            <p>{blog.date}</p>
                        </div>
                        <div className="content">
                            <p>{blog.title}</p>
                            <p>{blog.description}</p>
                            <Link to="/blogs">Read more</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Blog