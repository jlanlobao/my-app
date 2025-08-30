import Header from "@/components/header";
import { Container } from "react-bootstrap";
import { Form, Row, Col, Button } from "react-bootstrap";



export default function Home() {
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
      
      </Container>     
    </>
  );
}
