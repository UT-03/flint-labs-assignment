import { useEffect, useState } from "react";
import { createPublicClient, formatEther, http } from 'viem'
import { mantle } from 'viem/chains';

const useNativeToken = (chain, contractAddress) => {
    const [isLoading, setIsLoading] = useState(false);
    const [currentBalance, setCurrentBalance] = useState();
    const [transactionCount, setTransactionCount] = useState();
    const [gasPrice, setGasPrice] = useState();

    useEffect(() => {
        fetchToken();
    }, []);

    const fetchToken = async () => {
        const address = "0xDCBc586cAb42a1D193CaCD165a81E5fbd9B428d7";
        setIsLoading(true);

        const client = createPublicClient({
            chain: chain,
            transport: http(),
        });

        const balance = await client.getBalance({
            address: contractAddress,
        });
        const balanceAsEther = +(+formatEther(balance)).toFixed(3);

        const transactionCount = await client.getTransactionCount({
            address: address,
        });

        const gasPrice = await client.getGasPrice();
        const gasPriceAsGWei = +formatEther(gasPrice, "gwei");

        setCurrentBalance(balanceAsEther);
        setTransactionCount(transactionCount);
        setGasPrice(gasPriceAsGWei);
        setIsLoading(false);
    }

    return {
        isLoading,
        currentBalance,
        transactionCount,
        gasPrice,
    };
}

export default useNativeToken;
