import Header from "./components/Header"
import CardPrato from "./components/CardPrato"
import Rodape from "./components/Rodape"

const cardapio = [
  {
    id: 1,
    nome: "Feijoada",
    preco: 42.90,
    categoria: "Prato Principal",
    descricao: "Bom demais"
  },
  {
    id: 2,
    nome: "Moqueca",
    preco: 49.90,
    categoria: "Prato Principal",
    descricao: "Bom demais"
  },
  {
    id: 3,
    nome: "Arroz Doce",
    preco: 10.00,
    categoria: "Sobremesa",
    descricao: "Bom demais"
  },
    {
    id: 4,
    nome: "Pudim",
    preco: 15.00,
    categoria: "Sobremesa",
    descricao: "Bom demais"
  },
    {
    id: 5,
    nome: "Petit gâteau",
    preco: 25.00,
    categoria: "Sobremesa",
    descricao: "Bom demais"
  },
]

export default App

function App() {
  return (
    <main className="app" style={{background: "white"}}>
      <Header/>
      <section className="cardapio">
        <h2 style={{color: '#333333'}}>Cardápio com {cardapio.length} itens</h2>

        {cardapio.map((prato) => (
          <CardPrato
            key={prato.id}
            nome={
              <>
                {prato.categoria === 'Sobremesa' ? '🍰 ' : '🍽️ '}
                <span style={{ color: '#333333' }}>{prato.nome}</span>
              </>
            }
            preco={prato.preco}
            categoria={prato.categoria}
            descricao={prato.descricao}
          />
        ))}
        <Rodape/>
      </section>
    </main>
  );
}

