import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TokenDataCard from "./TokenDataCard";
import useNativeToken from "../../hooks/NativeTokenHook";
import { toast } from "react-toastify";

const TokenData = ({ heading, chain, contractAddress, blockRatePerHour, unit }) => {
    const { currentBalance, transactionCount, gasPrice, balanceTwelveHoursAgo } = useNativeToken(chain, contractAddress, blockRatePerHour);

    const percentChangeInTwelveHours = (((currentBalance - balanceTwelveHoursAgo) / balanceTwelveHoursAgo) * 100).toFixed(3);

    const notify = () => {
        toast.info(`The percentage change in token balance of ${heading} is ${percentChangeInTwelveHours}`);
    }

    if (percentChangeInTwelveHours < -10)
        notify();

    return (
        <Container className="py-4">
            <Row className="d-flex justify-content-center">
                <Col xs={12}>
                    <TokenDataCard
                        heading={heading}
                        currentBalance={currentBalance}
                        transactionCount={transactionCount}
                        gasPrice={gasPrice}
                        percentChangeInTwelveHours={percentChangeInTwelveHours}
                        unit={unit} />
                </Col>
            </Row>
        </Container>
    );
}

export default TokenData;
