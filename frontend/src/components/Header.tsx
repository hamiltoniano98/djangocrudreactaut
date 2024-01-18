import { Navbar, navbar } from "@material-tailwind/react"


const Header = () => {
    return (
        <nav className="lg:px-8 lg:py-4 border-blue-500 rounded-lg m-2 p-2 shadow-2xl shadow-inner ">
            <div className="container mx-auto flex items-end justify-between rounded-lg text-blue-gray-900 border-black">
                    <div></div>
                    <div className="inset-x-0 bottom-0 ">
                        <button>LogOut</button>
                    </div>
                


            </div>
        </nav>

    )
}

export default Header