import Col from "react-bootstrap/Col";
import Skeleton from "react-loading-skeleton";

const DataCol = ({ heading, value, unit, valueCssClasses }) => {
    return (
        <Col xs={12} md={6} lg={3}>
            <h6 className="text-white-300">{heading}</h6>
            {!!value && !isNaN(value) ? (
                <p className={["text-white font-weight-bold", valueCssClasses].join(" ")}>{`${value} ${!!unit ? unit : ''}`}</p>
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