import Card from "react-bootstrap/Card";

const TokenDataCard = () => {
    return (
        <Card style={{ width: '100%' }}>
            <Card.Body>
                <Card.Title className="text-center">Mantle</Card.Title>
                <Card.Text>Current Balance: 127.45</Card.Text>
                <Card.Text>Change in last 12 hours: -12.45%</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default TokenDataCard;
