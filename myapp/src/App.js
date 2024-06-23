
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Container, Nav} from "react-bootstrap";

function App(){
    return(
        <Navbar bg = "warning" data-bs-theme = "dark">
            <container>
                <Navbar.Brand href = "#home">react</Navbar.Brand>
                <Nav className = "me-auto">
                    <Nav.Link href = "#home">Home</Nav.Link>
                    <Nav.Link href = "#">Login</Nav.Link>
                    <Nav.Link href = "#">Register</Nav.Link>
                </Nav>
            </container>
        </Navbar>
    );
}
export default App;