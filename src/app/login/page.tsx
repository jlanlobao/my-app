import Header from "@/components/header";
import { Container, Button } from "react-bootstrap";

export default function Login() {
  return (
    <>
      <Header />
      <Container>

        <h1 className="mt-4 font-bold text-center">Login</h1>
          <input type="text" placeholder="Usuário" className="border p-2 w-full mt-4" />
          <input type="password" placeholder="Senha" className="border p-2 w-full mt-4" />
          <div className="flex justify-center w-full mt-2">
            <button className="bg-gray-800 text-white py-3 px-6 mt-4 rounded">Entrar</button>
          </div>
      </Container>
    </>
  );
}