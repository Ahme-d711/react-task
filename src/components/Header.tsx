const links = ["Home", "Products", "About"];
export default function Header() {
  return (
    <div className="flex gap-12 py-4 justify-between border-b items-center">
      <div className="">
        <h1 className="text-xl font-bold md:text-2xl">My <span className="text-lg md:text-3xl text-destructive">Store</span></h1>
      </div>
      <ul className="flex gap-4 md:gap-12 items-center">
        {links.map((link) => (
          <li className="text-sm md:text-xl hover:animate-pulse cursor-pointer" key={link}>{link}</li>
        ))}
      </ul>
    </div>
  )
}
