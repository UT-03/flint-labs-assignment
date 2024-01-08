import Col from "react-bootstrap/Col";

const DataCol = ({ heading, value }) => {
    return (
        <Col xs={12} md={6} lg={3}>
            <h6>{heading}</h6>
            <p>{value}</p>
        </Col>
    );
}

export default DataCol;