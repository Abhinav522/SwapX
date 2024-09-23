"use client";

import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TokenSelector from './TokenSelector';
import { Token } from '@mui/icons-material';

interface Token {
    symbol: string;
    name: string;
    color: string;
}

const Swapui = () => {

    const [isSellModalOpen, setIsSellModalOpen] = useState(false);
    const [selectedSellToken, setSelectedSellToken] = useState<Token>({
        symbol: "ETH",
        name: "Ethereum",
        color: "bg-[rgba(255,153,0,1)]",
    })

    const openSellModal = () => {
        setIsSellModalOpen(true);
    };

    const closeSellModal = () => {
        setIsSellModalOpen(false);
    };

    const handleSellTokenSelect = (token: Token) => {
        setSelectedSellToken(token);
        closeSellModal();
    };

    const [isBuyModalOpen, setIsBuyModalOpen] = useState(false); // State to track buy modal
    const [selectedBuyToken, setSelectedBuyToken] = useState<Token>({
        symbol: "WBTC",
        name: "Wrapped Bitcoin",
        color: "bg-[rgba(35,129,143,1)]",
    });

    const openBuyModal = () => {
        setIsBuyModalOpen(true);
    };

    const closeBuyModal = () => {
        setIsBuyModalOpen(false);
    };

    const handleBuyTokenSelect = (token: Token) => {
        setSelectedBuyToken(token);
        closeBuyModal();
    };

    return (
        <div className='relative'>
            <div className="w-[584px] h-[571px] rounded-[30px] bg-[rgba(255,255,255,0.05)] backdrop-blur-md shadow-glass mx-8 z-30 flex flex-col justify-between p-10">
                <div className="h-[171px] w-full bg-[rgba(217,217,217,0.1)] shadow-glass rounded-lg p-4 flex justify-between">
                    <div className="w-1/2 mr-1 flex flex-col justify-between">
                        {/* Content for first inner div */}
                        <p className="text-[20px] text-white">Sell</p>
                        <p className="text-[40px] text-white">0.00</p>
                        <p className="text-[20px] text-white">$ 0.0000</p>
                    </div>
                    <div className="w-1/2 flex flex-col ml-1 justify-between items-end">
                        <div className='h-[30px]'></div>
                        <button onClick={openSellModal} className="h-[71px] bg-[rgba(217,217,217,0.1)] shadow-glass rounded-lg flex justify-between items-center p-3 hover:bg-[rgba(217,217,217,0.2)]">
                            <div className={`h-[36px] w-[36px] ${selectedSellToken.color} rounded-full mx-1`}></div>
                            <p className="text-[30px] text-white mx-1">{selectedSellToken.symbol}</p>
                            <KeyboardArrowDownIcon className="text-white mx-1" />
                        </button>
                        <p className="text-[18px] text-white mx-1">{selectedSellToken.name}</p>
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
                        <div className='h-[30px]'></div>
                        <button onClick={openBuyModal} className="h-[71px] bg-[rgba(217,217,217,0.1)] shadow-glass rounded-lg flex justify-between items-center p-3 hover:bg-[rgba(217,217,217,0.2)]">
                            <div className={`h-[36px] w-[36px] ${selectedBuyToken.color} rounded-full mx-1`}></div>
                            <p className="text-[30px] text-white mx-1">{selectedBuyToken.symbol}</p>
                            <KeyboardArrowDownIcon className="text-white mx-1" />
                        </button>
                        <p className="text-[18px] text-white mx-1">{selectedBuyToken.name}</p>
                    </div>
                </div>

                {/* Button Div */}
                <div className="h-[80px] w-[498px] bg-blue-500 rounded-lg mx-auto flex items-center justify-center">
                    <button className="h-[80px] w-[498px] bg-blue-500 rounded-lg mx-auto flex items-center justify-center text-white shadow-glass hover:bg-blue-700">Swap</button>
                </div>
            </div>

            {/* Sell Token Modal */}
            <TokenSelector
                isOpen={isSellModalOpen}
                onClose={closeSellModal}
                onSelectToken={handleSellTokenSelect}
            />

            {/* Buy Token Modal */}
            <TokenSelector
                isOpen={isBuyModalOpen}
                onClose={closeBuyModal}
                onSelectToken={handleBuyTokenSelect}
            />
        </div>

    )
}

export default Swapui
