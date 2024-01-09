import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import DataCol from "./DataCol";

const TokenDataCard = ({ heading, currentBalance, transactionCount, gasPrice, percentChangeInTwelveHours, unit }) => {
    let percentageChangeClassname = "";
    if (percentChangeInTwelveHours > 0)
        percentageChangeClassname = "text-green";
    else if (percentChangeInTwelveHours < 0)
        percentageChangeClassname = "text-red";

    return (
        <Container fluid>
            <Row>
                <h1 className="text-accent">{heading}</h1>
            </Row>
            <Row className="bg-black-300 rounded rounded-4 shadow p-3">
                <DataCol
                    heading="Current Balance"
                    value={currentBalance}
                    unit={unit} />
                <DataCol
                    heading="Transaction Count"
                    value={transactionCount} />
                <DataCol
                    heading="Current Gas Price"
                    value={gasPrice}
                    unit="Gwei" />
                <DataCol
                    heading="Change in Last 12 Hours"
                    value={percentChangeInTwelveHours}
                    unit="%"
                    valueCssClasses={percentageChangeClassname} />
            </Row>
        </Container>
    )
}

export default TokenDataCard;
