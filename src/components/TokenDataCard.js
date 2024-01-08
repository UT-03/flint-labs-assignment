import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DataCol from "./DataCol";

const TokenDataCard = ({ heading, currentBalance, transactionCount, gasPrice }) => {
    // return (
    //     <Card style={{ width: '100%' }}>
    //         <Card.Body>
    //             <Card.Title className="text-center">{heading}</Card.Title>
    //             <Card.Text>Current Balance: {currentBalance} ETH</Card.Text>
    //             <Card.Text>Transactions count: {transactionCount}</Card.Text>
    //             <Card.Text>Current gas price: {gasPrice} Gwei</Card.Text>
    //             <Card.Text>Change in last 12 hours: -12.45%</Card.Text>
    //         </Card.Body>
    //     </Card>
    // );

    return (
        <Container fluid>
            <Row className="bg-white border rounded shadow p-3">
                <DataCol
                    heading="Current Balance"
                    value={`${currentBalance} ETH`} />
                <DataCol
                    heading="Transaction Count"
                    value={transactionCount} />
                <DataCol
                    heading="Current Gas Price"
                    value={gasPrice} />
                <DataCol
                    heading="Change in Last 12 Hours"
                    value="-12.5%" />
            </Row>
        </Container>
    )
}

export default TokenDataCard;
