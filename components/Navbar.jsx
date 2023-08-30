import Link from "next/link"

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-3 px-20 mb-4 font-bold text-white bg-sky-900">
        <Link href="/">
            Home
        </Link>
    
        <ul>
            <li>
            <Link href="/about">
                About
            </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar