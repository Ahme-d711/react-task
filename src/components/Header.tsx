import { Link } from "react-router-dom";

// const links = ["Home", "Products", "About"];

const links = [
  {title: "Home", url: "/react-task/"},
  {title: "Products", url: "/react-task/products"},
  {title: "About", url:"/react-task/about"}
]
export default function Header() {
  return (
    <div className="flex gap-12 py-4 justify-between border-b items-center">
      <Link to="/react-task/">
        <h1 className="text-xl font-bold md:text-2xl">My <span className="text-lg md:text-3xl text-destructive">Store</span></h1>
      </Link>
      <ul className="flex gap-4 md:gap-12 items-center">
        {links.map((link) => (
          <Link key={link.title} to={link.url} >
          <li className="text-sm md:text-xl hover:animate-pulse cursor-pointer">{link.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
