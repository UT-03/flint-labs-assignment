import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
    return (
        <Navbar
            data-bs-theme="dark"
            expand="lg"
            className="bg-body-tertiary bg-black border-bottom">
            <Container>
                <Navbar.Brand>
                    <img
                        src="../assets/flint-logo.png"
                        className="d-inline-block align-top"
                        width={30}
                        height={30}
                        alt="Flint Labs"
                    />
                    Flint Labs
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;
