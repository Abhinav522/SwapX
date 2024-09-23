import React, { useState } from "react";
import TokenList from "./TokenList";

interface Token {
    symbol: string;
    name: string;
    color: string;
}

interface TokenSelectorProps {
    isOpen: boolean;
    onClose: () => void;
    onSelectToken: (token: Token) => void;
}

const TokenSelector: React.FC<TokenSelectorProps> = ({ isOpen, onClose, onSelectToken }) => {
    const [searchTerm, setSearchTerm] = useState('');
    if (!isOpen) return null; // Return null if the modal is not open
    return (
        <div className="fixed inset-0 bg-[rgba(13,31,45,0.5)] bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50">
            <div className="w-[500px] h-[700px] bg-[rgba(255,255,255,0.1)] backdrop-blur-none rounded-2xl p-6 flex flex-col shadow-glass">
                <p className="text-white text-[20px] mb-4">Select a token</p>
                {/*Space for search bar*/}
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // Update the search term
                    placeholder="Search for a token..."
                    className="mb-4 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="h-[600px] overflow-y-auto">
                    {/* Use the TokenList component to render the tokens */}
                    <TokenList searchTerm={searchTerm} onSelectToken={onSelectToken} />
                </div>
                <button onClick={onClose} className="mt-6 text-white p-2 bg-red-500 hover:bg-red-700 rounded-lg">Close</button>
            </div>
        </div>
    )
}

export default TokenSelector
