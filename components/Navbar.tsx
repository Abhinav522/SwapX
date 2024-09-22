
const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-16 py-4 w-full border-b border-[#455A64]">
            <div className="flex items-center z-20">
                {/* <img src="/path-to-logo.svg" alt="Logo" className="w-10 h-10 mr-2" /> */}
                <span className="text-white font-bold">SwapX</span>
            </div>

            {/* Links in the middle */}
            <div className="flex space-x-8 z-20">
                <a href="#" className="text-white hover:text-[#00B8D9]">Swap</a>
                <a href="#" className="text-white hover:text-[#00B8D9]">Explore</a>
                <a href="#" className="text-white hover:text-[#00B8D9]">Pool</a>
            </div>

            {/* Button on the right */}
            <button className="h-[50px] w-[150px] bg-[rgba(20,93,160,1)] text-white px-4 py-2 rounded-lg hover:bg-blue-700 z-20">
                Wallet
            </button>
        </nav>
    )
}

export default Navbar
