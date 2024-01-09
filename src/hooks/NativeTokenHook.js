import { useEffect, useState } from "react";
import { createPublicClient, formatEther, http } from 'viem';

const INTERVAL_TIME_IN_SECS = 5;

const formatBalance = (balance) => {
    return +(+formatEther(balance));
}

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

    useEffect(() => {
        const fetchBalance12HrsAgo = async () => {
            if (!currentBalance)
                return;

            const client = createPublicClient({
                chain: chain,
                transport: http(),
            });

            const currentTimeStamp = BigInt(Math.floor(Date.now() / 1000));

            const requiredTimeStamp = BigInt(currentTimeStamp - (12n * 60n * 60n));

            const lowerLimitStamp = requiredTimeStamp - (60n * 60n);
            const higherLimitStamp = requiredTimeStamp + (60n * 60n);

            const currentBlock = await client.getBlock();

            let block = currentBlock;
            let blockNumber = currentBlock.number;

            console.log(blockNumber);
            let requestsMade = 0;

            const averageBlockTime = BigInt(10n);

            while (block.timestamp - requiredTimeStamp > 0) {
                let decreaseBlocks = (block.timestamp - requiredTimeStamp) / averageBlockTime;

                console.log("decreaseBlocks", decreaseBlocks);

                if (decreaseBlocks < 1) {
                    break;
                }

                blockNumber -= decreaseBlocks;

                block = await client.getBlock({
                    blockNumber: blockNumber,
                });
                requestsMade += 1;
            }

            // If we stepped below lower limit
            if (lowerLimitStamp && block.timestamp < lowerLimitStamp) {
                while (block.timestamp < lowerLimitStamp) {
                    blockNumber += 1n;

                    block = await client.getBlock({
                        blockNumber: blockNumber,
                    });
                    requestsMade += 1;
                }
            }

            // If we stepped above upper limit
            if (higherLimitStamp && block.timestamp >= higherLimitStamp) {
                while (block.timestamp >= higherLimitStamp) {
                    blockNumber -= 1;

                    block = await client.getBlock({
                        blockNumber: blockNumber,
                    });
                    requestsMade += 1;
                }
            }

            console.log(block);
            console.log("Requests made: ", requestsMade);



            console.log(currentBlock);
        }

        // fetchBalance12HrsAgo();

        const interval = setInterval(fetchBalance12HrsAgo, 60 * 60 * 1000);

        return () => clearInterval(interval);

    }, [chain]);

    return {
        currentBalance,
        transactionCount,
        gasPrice,
        balanceTwelveHoursAgo,
    };
}

export default useNativeToken;
