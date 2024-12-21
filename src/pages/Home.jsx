import Button from "../components/Button.jsx"
import heroEarring from "../assets/images/heroEarring.png"
import heroNecklace from "../assets/images/heroNecklace.png"
import heroRing from "../assets/images/heroRing.png"
import Features from "../components/Features.jsx"
import Category from "../components/Category.jsx"
import About from "../components/About.jsx"
import Slider from "../components/Slider.jsx"
import BestProducts from "../components/BestProducts.jsx"
import FlashSale from "../components/FlashSale.jsx"
import Arrivals from "../components/Arrivals.jsx"
import Festival from "../components/Festival.jsx"
import CollectionsTrendy from "../components/CollectionsTrendy.jsx"
import Cyber from "../components/Cyber.jsx"
import Testimonials from "../components/Testimonials.jsx"

const Home = () => {
  return (
    <main>
      <section id="hero" className="px-[10%] grid grid-cols-2 gap-8">
        <div className="bg-slate-200 hover:bg-slate-400 transition duration-500 pt-5 row-span-2 flex flex-col justify-between gap-3 text-center h-full">
          <h1 className="text-gold uppercase text-2xl font-medium">new collection</h1>
          <h1 className="font-italiana capitalize text-5xl text-navy-green">modern earrings</h1>
          <p className="text-slate-600 text-lg">Hello, it&apos;s really a pain to be followed. Who, when.</p>
          <Button className="w-fit self-center hover:text-navy-green border-2 border-navy-green bg-navy-green hover:bg-snow" label="shop now" />
          <img className="w-[90%] aspect-square object-cover self-start" src={heroEarring} alt="" />
        </div>
        <div className="bg-slate-200 hover:bg-slate-400 transition duration-500 pt-5 pl-5 relative flex justify-end">
          <div className="absolute top-5 left-5 w-8/12 flex flex-col gap-5">
            <h1 className="text-gold uppercase text-2xl font-medium">new collection</h1>
            <h1 className="font-italiana capitalize text-5xl text-navy-green">modern necklace</h1>
            <p className="text-slate-600 text-lg">Hello, it&apos;s really a pain to be followed. <br /> Who, when.</p>
            <Button className="w-fit hover:text-navy-green border-2 border-navy-green bg-navy-green hover:bg-snow" label="shop now" />
          </div>
          <img className="" src={heroNecklace} alt="" />
        </div>
        <div className="bg-slate-200 hover:bg-slate-400 transition duration-500 pt-5 pl-5 relative flex justify-end h-fit">
          <div className="absolute top-5 left-5 w-8/12 flex flex-col gap-5">
            <h1 className="text-gold uppercase text-2xl font-medium">new collection</h1>
            <h1 className="font-italiana capitalize text-5xl text-navy-green">modern rings</h1>
            <p className="text-slate-600 text-lg">Hello, it&apos;s really a pain to be followed. Who, when.</p>
            <Button className="w-fit hover:text-navy-green border-2 border-navy-green bg-navy-green hover:bg-snow" label="shop now" />
          </div>
          <img className="h-3/4 " src={heroRing} alt="" />
        </div>
      </section>
      <Features />
      <Category />
      <About />
      <Slider />
      <BestProducts />
      <Slider />
      <FlashSale />
      <Arrivals />
      <Slider />
      <Festival />
      <Slider />
      <CollectionsTrendy />
      <Cyber />
      <Slider />
      <Testimonials />
    </main>
  );
}

export default Home