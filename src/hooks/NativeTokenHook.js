import { useEffect, useState } from "react";
import { createPublicClient, formatEther, http } from 'viem';

const useNativeToken = (chain, contractAddress) => {
    const [currentBalance, setCurrentBalance] = useState();
    const [transactionCount, setTransactionCount] = useState();
    const [gasPrice, setGasPrice] = useState();

    useEffect(() => {
        fetchToken();
        const interval = setInterval(fetchToken, 5000);

        return () => clearInterval(interval);
    });

    const fetchToken = async () => {
        const client = createPublicClient({
            chain: chain,
            transport: http(),
        });

        const balance = await client.getBalance({
            address: contractAddress,
        });
        const balanceAsEther = +(+formatEther(balance)).toFixed(3);

        const transactionCount = await client.getTransactionCount({
            address: contractAddress,
        });

        const gasPrice = await client.getGasPrice();
        const gasPriceAsGWei = +formatEther(gasPrice, "gwei");

        setCurrentBalance(balanceAsEther);
        setTransactionCount(transactionCount);
        setGasPrice(gasPriceAsGWei);
    }

    return {
        currentBalance,
        transactionCount,
        gasPrice,
    };
}

export default useNativeToken;
