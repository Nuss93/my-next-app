"use client"

import Link from "next/link"
import { Container, Nav, Navbar } from "react-bootstrap"
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();
    return (
        <Navbar bg="primary" variant="dark" sticky="top" expand="sm" collapseOnSelect>
            <Container>
                <Navbar.Brand as={Link} href="/">Nextjs 13.4 Image Gallery</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar" >
                    <Nav>
                        <Nav.Link as={Link} href="/" active={pathname === "/"}>Home</Nav.Link>
                        <Nav.Link as={Link} href="/projects" active={pathname === "/projects"}>Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}