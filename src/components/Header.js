import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import FlintLogo from "../assets/flint-logo.png";

const Header = () => {
    return (
        <Navbar
            data-bs-theme="dark"
            expand="lg"
            className="bg-body-tertiary bg-black border-bottom">
            <Container>
                <Navbar.Brand>
                    <img
                        src={FlintLogo}
                        className="d-inline-block align-top"
                        width={30}
                        height={30}
                        alt="Flint Labs"
                    />{' '}
                    Flint Labs
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;
