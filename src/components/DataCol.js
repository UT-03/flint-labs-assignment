import Col from "react-bootstrap/Col";
import Skeleton from "react-loading-skeleton";

const DataCol = ({ heading, value, unit }) => {
    return (
        <Col xs={12} md={6} lg={3}>
            <h6 className="text-white-300">{heading}</h6>
            {!!value ? (
                <p className="text-white font-weight-bold">{`${value} ${!!unit ? unit : ''}`}</p>
            ) : (
                <Skeleton count={1}
                    highlightColor="#1a1a1a9e"
                    baseColor="#3938389e"
                    width="60%" />
            )}
        </Col>
    );
}

export default DataCol;