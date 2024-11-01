import { Link } from "react-router-dom"

const Error = () => {
  return (
    <section className="flex items-center justify-center flex-col gap-6">
      <h1 className="text-[200px] font-bold bg-slate-600 bg] errorText">404</h1>
      <p className="text-slate-600 text-3xl font-semibold -mt-12">Oops! Page not Found</p>
      <p className="text-slate-600 font-medium">The page you are looking for can not be found. Take a break before trying again</p>
      <Link to="/" className="bg-navy-green text-white py-2 px-4 hover:bg-navy-green-light transition duration-300">Back to Home</Link>
    </section>
  )
}

export default Error