import { useEffect, useState } from "react";
import { createPublicClient, formatEther, http } from 'viem';

const INTERVAL_TIME_IN_SECS = 5;

const formatBalance = (balance) => {
    return +(+formatEther(balance));
}

/*
This hook takes chain, contract address and block rate per hour and returns 
current balance, transaction count, current gas price and token balance 12 hours earlier
*/
const useNativeToken = (chain, contractAddress, blockRatePerHour) => {
    const [currentBalance, setCurrentBalance] = useState();
    const [transactionCount, setTransactionCount] = useState();
    const [gasPrice, setGasPrice] = useState();
    const [balanceTwelveHoursAgo, setBalanceTwelveHoursAgo] = useState();

    useEffect(() => {
        const fetchToken = async () => {
            const client = createPublicClient({
                chain: chain,
                transport: http(),
            });

            const balance = await client.getBalance({
                address: contractAddress,
            });

            const transactionCount = await client.getTransactionCount({
                address: contractAddress,
            });

            const gasPrice = await client.getGasPrice();
            const gasPriceAsGWei = +formatEther(gasPrice, "gwei");

            const currentBlock = await client.getBlock();
            const currentBlockNumber = currentBlock.number;

            const blockNumberTwelveHoursAgo = currentBlockNumber - (12n * blockRatePerHour);

            const pastBalance = await client.getBalance({
                address: contractAddress,
                blockNumber: blockNumberTwelveHoursAgo,
            });

            setCurrentBalance(formatBalance(balance));
            setTransactionCount(transactionCount);
            setGasPrice(gasPriceAsGWei);
            setBalanceTwelveHoursAgo(formatBalance(pastBalance));
        }

        fetchToken();
        const interval = setInterval(fetchToken, INTERVAL_TIME_IN_SECS * 1000);

        return () => clearInterval(interval);
    }, [chain, contractAddress, blockRatePerHour]);

    return {
        currentBalance,
        transactionCount,
        gasPrice,
        balanceTwelveHoursAgo,
    };
}

export default useNativeToken;
