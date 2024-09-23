import React from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

interface Token {
    symbol: string;
    name: string;
    color: string;
}

interface TokenListProps {
    onSelectToken: (token: Token) => void;
    searchTerm: string;
}

const TokenList: React.FC<TokenListProps> = ({ onSelectToken, searchTerm }) => {
    const tokens = [
        { symbol: 'ETH', name: 'Ethereum', color: 'bg-[rgba(255,153,0,1)]' },
        { symbol: 'WBTC', name: 'Wrapped Bitcoin', color: 'bg-[rgba(35,129,143,1)]' },
        { symbol: 'SOL', name: 'Solana', color: 'bg-[rgba(23,120,217,1)]' },
        { symbol: 'APE', name: 'ApeCoin', color: 'bg-[rgba(217,21,217,1)]' },
        { symbol: 'ETH', name: 'Ethereum', color: 'bg-[rgba(17,171,21,1)]' },
        { symbol: 'WBTC', name: 'Wrapped Bitcoin', color: 'bg-[rgba(98,126,234,1)]' },
        { symbol: 'SOL', name: 'Solana', color: 'bg-[rgba(23,120,217,1)]' },
        { symbol: 'APE', name: 'ApeCoin', color: 'bg-[rgba(35,129,143,1)]' },
        { symbol: 'ETH', name: 'Ethereum', color: 'bg-[rgba(23,120,217,1)]' },
        { symbol: 'WBTC', name: 'Wrapped Bitcoin', color: 'bg-[rgba(17,171,21,1)]' },
        { symbol: 'SOL', name: 'Solana', color: 'bg-[rgba(255,153,0,1)]' },
        { symbol: 'APE', name: 'ApeCoin', color: 'bg-[rgba(23,120,217,1)]' },
    ];

    const filteredTokens = tokens.filter(token =>
        token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        token.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <ul className="flex flex-col gap-4">
            {filteredTokens.map((token, index) => (
                <li
                    key={`${token.symbol}-${index}`}
                    onClick={() => onSelectToken(token)}
                    className="h-[90px] cursor-pointer text-white p-2 bg-[rgba(217,217,217,0.1)] shadow-glass hover:bg-[rgba(217,217,217,0.2)] rounded-lg"
                >
                    <div className='flex h-full items-center justify-between'>
                        <div className='flex h-full items-center'>
                            <div className={`h-[60px] w-[60px] rounded-full ${token.color} m-2`}></div>
                            <div className='flex flex-col justify-center h-full m-2'>
                                <p className='text-[24px]'> {token.name}</p>
                                <p className='text-[18px]'>{token.symbol}</p>
                            </div>
                        </div>
                        <InfoOutlinedIcon className="text-white mx-1" />
                    </div>

                </li>
            ))}
        </ul>
    );
};

export default TokenList;