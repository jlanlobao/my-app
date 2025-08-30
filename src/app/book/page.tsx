import Header from "@/components/header";
import { Container } from "react-bootstrap";

export default function Book() {
  return (
    <>
      <Header />
      <Container>

        <div className="flex items-start">
          <>
            <img src="https://placehold.co/240x360?text=Sem+Capa" alt="Capa do Livro" className="mx-auto mt-4" />
            <p className="flex justify-between">
              <span>Ano: 2023</span>
              <span>/</span>
              <span>Paginas: 150</span>
            </p>
            <p className="text-center m-0">ISBN: 978-3-16-148410-0</p>
            <p className="text-center m-0">Editora: Editora Exemplo</p>
            <p className="text-center m-0">Genero: Ficção</p>
          </>
          <div className="ml-4 mt-4">
            <h2 className="font-bold">Título do Livro</h2>
            <p className="text-gray-800 font-semibold">Subtítulo do Livro</p>
            <p className="text-gray-600">Autor: Nome do Autor</p>
            <p>Descrição do livro.</p>
          </div>
        </div>
        
      </Container>
    </>
  );
}