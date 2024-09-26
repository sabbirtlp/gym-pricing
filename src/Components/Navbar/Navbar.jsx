import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";



const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/contact", name: "Contact" },
        { id: 4, path: "/blog", name: "Blog" },
        { id: 5, path: "/services", name: "Services" },
    ];

    return (
        <header className="bg-black">
            <nav className=" container mx-auto flex justify-between items-center px-4 py-5">
                <h1 className="text-4xl font-bold">Tal<span className="text-green-500">HA</span></h1>
                <div onClick={() => { setOpen(!open) }} className="md:hidden text-3xl cursor-pointer">
                    {
                        open === true ? <RiCloseLargeFill /> : <HiMenuAlt1 />
                    }

                </div>
                <ul className={`md:flex md:static duration-500 transition-all flex flex-col gap-y-3 md:flex-row absolute left-0 px-5 py-5 w-full md:gap-10 md:w-auto bg-black ${open ? 'top-20' : '-top-60'}`}>
                    {routes.map(route => <Link key={route.id} route={route}></Link>)}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;