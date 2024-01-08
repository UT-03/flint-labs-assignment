import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TokenDataCard from "./TokenDataCard";
import useNativeToken from "../hooks/NativeTokenHook";

const TokenData = ({ heading, chain, contractAddress, unit }) => {
    const { currentBalance, transactionCount, gasPrice } = useNativeToken(chain, contractAddress);

    return (
        <Container className="py-5">
            <Row className="d-flex justify-content-center">
                <Col xs={12}>
                    <TokenDataCard
                        heading={heading}
                        currentBalance={currentBalance}
                        transactionCount={transactionCount}
                        gasPrice={gasPrice}
                        unit={unit} />
                </Col>
            </Row>
        </Container>
    );
}

export default TokenData;
