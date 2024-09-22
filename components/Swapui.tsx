import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Swapui = () => {
    return (
        <div className="w-[584px] h-[571px] rounded-[30px] bg-[rgba(255,255,255,0.05)] backdrop-blur-md shadow-glass mx-8 z-30 flex flex-col justify-between p-10">
            <div className="h-[171px] w-full bg-[rgba(217,217,217,0.1)] shadow-glass rounded-lg p-4 flex justify-between">
                <div className="w-1/2 mr-1 flex flex-col justify-between">
                    {/* Content for first inner div */}
                    <p className="text-[20px] text-white">Sell</p>
                    <p className="text-[40px] text-white">0.00</p>
                    <p className="text-[20px] text-white">$ 0.0000</p>
                </div>
                <div className="w-1/2 flex flex-col ml-1 justify-between items-end">
                    <p className="text-[20px] text-white">Sell</p>
                    <button className="h-[71px] bg-[rgba(217,217,217,0.1)] shadow-glass rounded-lg flex justify-between items-center p-3 hover:bg-[rgba(217,217,217,0.2)]">
                        <div className="h-[36px] w-[36px] bg-[rgba(98,126,234,1)] rounded-full mx-1"></div>
                        <p className="text-[30px] text-white mx-1">ETH</p>
                        <KeyboardArrowDownIcon className="text-white mx-1" />
                    </button>
                    <p className="text-[18px] text-white">Ethereum</p>
                </div>
            </div>

            {/* Second Div */}
            <div className="h-[171px] w-full bg-[rgba(217,217,217,0.1)] shadow-glass rounded-lg p-4 flex justify-between">
                {/* Content for second div */}
                <div className="w-1/2 mr-1 flex flex-col justify-between">
                    {/* Content for first inner div */}
                    <p className="text-[20px] text-white">Buy</p>
                    <p className="text-[40px] text-white">0.00</p>
                    <p className="text-[20px] text-white">$ 0.0000</p>
                </div>
                <div className="w-1/2 flex flex-col ml-1 justify-between items-end">
                    <p className="text-[20px] text-white">Sell</p>
                    <button className="h-[71px] bg-[rgba(217,217,217,0.1)] shadow-glass rounded-lg flex justify-between items-center p-3 hover:bg-[rgba(217,217,217,0.2)]">
                        <div className="h-[36px] w-[36px] bg-[rgba(255,153,0,1)] rounded-full mx-1"></div>
                        <p className="text-[30px] text-white mx-1">WBTC</p>
                        <KeyboardArrowDownIcon className="text-white mx-1" />
                    </button>
                    <p className="text-[18px] text-white">Wrapped Bitcoin</p>
                </div>
            </div>

            {/* Button Div */}
            <div className="h-[80px] w-[498px] bg-blue-500 rounded-lg mx-auto flex items-center justify-center">
                <button className="h-[80px] w-[498px] bg-blue-500 rounded-lg mx-auto flex items-center justify-center text-white shadow-glass hover:bg-blue-700">Swap</button>
            </div>
        </div>
    )
}

export default Swapui
