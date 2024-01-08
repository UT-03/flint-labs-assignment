import Col from "react-bootstrap/Col";
import Skeleton from "react-loading-skeleton";

const DataCol = ({ heading, value, unit }) => {
    return (
        <Col xs={12} md={6} lg={3}>
            <h6>{heading}</h6>
            {!!value ? (

                <p>{`${value} ${!!unit ? unit : ''}`}</p>
            ) : (
                <Skeleton count={1} />
            )}
        </Col>
    );
}

export default DataCol;