import Card from "react-bootstrap/Card";

const TokenDataCard = ({ heading, currentBalance, transactionCount, gasPrice }) => {
    return (
        <Card style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title className="text-center">{heading}</Card.Title>
                <Card.Text>Current Balance: {currentBalance} ETH</Card.Text>
                <Card.Text>Transactions count: {transactionCount}</Card.Text>
                <Card.Text>Current gas price: {gasPrice} Gwei</Card.Text>
                <Card.Text>Change in last 12 hours: -12.45%</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default TokenDataCard;
