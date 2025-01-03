import Features from "../components/Features"
import Newsletter from "../components/Newsletter"
import {Title} from "../components/Title.jsx"

const Contact = () => {
  return (
    <main>
      <section>
        <Title source="Home" title="Contact us" />
      </section>
      <Features />
      <Newsletter />
    </main>
  )
}

export default Contact
