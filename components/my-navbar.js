import {Navbar, Nav } from "react-bootstrap"

export default function MyNavbar (){
    return(
        <Navbar className="fj-navbar fj-nav-base" bg="transparnet" expand="lg">
            <Navbar.Brand className="fj-navbar-brand">
                <a href="#">1234 блог</a>
                <style jsx>{`
                    a {
                    text-decoration: none;
                    }
                `}</style>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="fj-navbar-item fj-navbar-link" href="/">
                            Нүүр
                        </Nav.Link>
                </Nav>
            </Navbar.Collapse>
      </Navbar>
    )
}