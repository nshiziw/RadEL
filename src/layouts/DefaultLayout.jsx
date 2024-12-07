import { Route } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Home from "../pages/Home"
import Contact from "../pages/Contact"
const DefaultLayout = () => {
    return (
        <div>
            <Header />
            <main>
                <Route path="/" component={Home} />
                <Route path="/contact" component={Contact} />
            </main>
            <Footer />
        </div>
    )
}

export default DefaultLayout