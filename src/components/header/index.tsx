"use client"

import "./header.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";

export default function Header () {
    return (
        <>
            <Navbar className="bg-gray-800">
                <Container className="flex justify-between">
                    <Navbar.Brand className="text-white" href="#home">BooksDev</Navbar.Brand>
                    <Nav>
                        <Nav.Link className="text-white" href="#entrar">Entrar</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}