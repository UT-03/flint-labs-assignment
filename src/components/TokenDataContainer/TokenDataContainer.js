import Container from "react-bootstrap/Container";
import TokenData from "../TokenData/TokenData";
import { mantle, linea, kroma } from 'viem/chains';
import styles from "./TokenDataContainer.module.css";

const TokenDataContainer = () => {
    return (
        <Container fluid className={[styles.container, "bg-black"].join(" ")}>
            <TokenData
                heading="Mantle"
                chain={mantle}
                contractAddress="0xDCBc586cAb42a1D193CaCD165a81E5fbd9B428d7"
                blockRatePerHour={21507n}
                unit="MNT" />
            <TokenData
                heading="Linea"
                chain={linea}
                contractAddress="0xDCBc586cAb42a1D193CaCD165a81E5fbd9B428d7"
                blockRatePerHour={225n}
                unit="ETH" />
            <TokenData
                heading="Kroma"
                chain={kroma}
                contractAddress="0x7afb9de72A9A321fA535Bb36b7bF0c987b42b859"
                blockRatePerHour={1212n}
                unit="ETH" />
        </Container>
    );
}

export default TokenDataContainer;
