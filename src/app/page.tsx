"use client"

import Header from "@/components/header";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Form, Row, Col, Button } from "react-bootstrap";
import { getBooks } from "../services/fetchLivros";
import Spinner from 'react-bootstrap/Spinner';


export default function Home() {
  const [livros, setLivros] = useState([]);
  const [teste, setTeste] = useState<string[]>([])


  useEffect(() => {
    async function load() {
      const data: any = getBooks();

      // Criar a metrica para exibir alguns livros... 
      setLivros(data)


      setTeste(["Leonardo", "Maria"])

      // Resgatar aqui o id do localstorage ou username
    }

    load();
  }, []);

  return (
    <>
      <Header />
      <Container>

        <h1 className="mt-4 text-4xl font-bold text-center text-red-500">Bem-vindo ao <br />BooksDev</h1>
        <p className="mt-4 text-center">Explore nossa coleção de livros e encontre sua próxima leitura favorita.</p>

        <Form className="d-flex justify-content-center align-items-center" role="search">
          <Row >
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Buscar"
                className=" mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Buscar</Button>
            </Col>
          </Row>
        </Form>




        {teste.length === 0 ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : teste.map(e => (
          <div>
            <p>{e}</p>
          </div>
        ))}


        {
          /*
          Exibir os livros desejados aqui! 
          com MAP
          */
        }

      </Container>
    </>
  );
}
