import { Header } from "./components/Header";
import { Container } from "./components/Container";

function App() {
  return (
    <>
      <Header />
      <Container>
        <h1>Troque caracteres por outros</h1>
        <div style={{ display: "flex", gap: "2rem" }}>
          <div>
            <label htmlFor="">Entrada</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Saída</label>
            <input type="text" />
          </div>
        </div>
        <div>
          <div>
            <label htmlFor="">texto de entrada</label>
            <textarea name="" id="" cols={30} rows={10}></textarea>
          </div>
          <div>
            <label htmlFor="">texto de saída</label>
            <textarea name="" id="" cols={30} rows={10}></textarea>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
