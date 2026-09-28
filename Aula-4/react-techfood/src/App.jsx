import { useState } from "react"
import Header from "./components/Header"
import CardPrato from "./components/CardPrato"
import Rodape from "./components/Rodape"
import { cardapio } from "./data/cardapio"
import "./App.css"



export default App

function App() {
  const [totalItens, setTotalItens] = useState(0)

  function adicionarAoPedido(quantidade) {
    setTotalItens(totalItens + quantidade)
  }

  return (
    <main className="app">
      <Header totalItens={totalItens}/>
      <section className="cardapio">

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
            onAdicionar={adicionarAoPedido}
          />
        ))}
        <Rodape />
      </section>
    </main>
  );
}

