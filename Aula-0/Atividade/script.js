class Bebida{
    constructor (nome, preco, volume){
        this.nome=nome
        this.preco=preco
        this.volume=volume
    }
    descricao(){
        return `${this.nome} - ${this.volume}ml - R$${this.preco.toFixed(2).replace(".",",")}`
    }
    emLitros(){
        return this.volume = (this.volume / 100).toFixed(2)
    }

}

const Guarana = new Bebida ("Guarana", 13.00, 500);
const Agua = new Bebida ("Agua", 6.00, 250);
const Suco = new Bebida ("Suco", 12.00, 500);
const CocaCola= new Bebida ("CocaCola", 13.00, 500);
const Sprite = new Bebida ("Sprite", 13.00, 500);
const Tubaina = new Bebida ("Tubaina", 13.00, 500)

console.log(Guarana.descricao());
console.log(Agua.descricao());

console.log(`${Suco.nome}: ${Suco.emLitros()}`)
console.log(`${CocaCola.nome}: ${CocaCola.emLitros()}`)
console.log(`${Sprite.nome}: ${Sprite.emLitros()}`)

const listaBebidas = [Guarana, Agua, Suco, CocaCola, Sprite, Tubaina]

const container = document.querySelector('#lista-bebidas')

function criarCardBebida(bebida) {
  const card = document.createElement('div')
  card.className = 'card'

  card.innerHTML = `
    <h3>${bebida.nome}</h3>
    <div class="info">${bebida.descricao()}</div>
  `;

  card.addEventListener('click', () => {
    alert(` 🍹${bebida.nome} Volume em litros: ${bebida.emLitros()}`)
  })

  return card
}

function renderizarPedido(textoBusca = ''){
      const filtro = textoBusca.trim().toLowerCase()

  // Limpa o container antes de re-renderizar → boa prática de idempotência.
  container.innerHTML = ''

  const bebidasFiltradas = listaBebidas.filter(b =>
    b.nome.toLowerCase().includes(filtro)
  );

  bebidasFiltradas.forEach(bebida => {
    container.appendChild(criarCardBebida(bebida))
  })

  // Fallback amigável quando nada bate — UX básico
  if (bebidasFiltradas.length === 0) {
    container.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#888;">Nenhuma bebida encontrada.</p>`
  }}

  renderizarPedido()

// Ouve o input em tempo real (evento 'input' dispara a cada tecla).
const inputFiltro = document.querySelector('#filtro')
inputFiltro.addEventListener('input', (event) => {
  renderizarPedido(event.target.value)
});