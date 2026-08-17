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
        this.volume = (this.volume / 100).toFixed(2)
    }

}

const Guarana = new Bebida ("Guarana", 13.00, 500),
const Agua = new Bebida ("Agua", 13.00, 500),
const Guarana = new Bebida ("Guarana", 13.00, 500),
const Guarana = new Bebida ("Guarana", 13.00, 500),
const Guarana = new Bebida ("Guarana", 13.00, 500),
const Guarana = new Bebida ("Guarana", 13.00, 500)


function renderizarPedido(){
    const card = document.createElement("div")
    card.className = 'card'

    card.innerHTML = `
    <div class="card"> ${descricao()}
    `
}