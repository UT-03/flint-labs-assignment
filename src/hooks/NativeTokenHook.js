import { useEffect, useState } from "react";

const useNativeToken = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [tokenBalance, setTokenBalance] = useState();

    useEffect(() => {
        fetchToken();
    }, []);

    const fetchToken = async () => {
        setIsLoading(true);
        setTokenBalance(125.45);
        setIsLoading(false);
    }

    return {
        isLoading,
        tokenBalance,
    };
}

export default useNativeToken;