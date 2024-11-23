const item = document.querySelector('#entrada')
const form = document.querySelector('#form')
const listaCompras = document.querySelector('#lista-compras')
let contador = 0
form.addEventListener('submit', (e) => {
    e.preventDefault()


    // cria o item da listas que vai ser o pai dos futuros elementos
    const itemLista = document.createElement('li')
    const containerItemLista  =  document.createElement('div');

    // adiciona a classe do container que é filho da li
    containerItemLista.classList.add("item-lista-contaier");

    // cria a div do paragrafo
    const containerNomeItem = document.createElement('div')
    containerNomeItem.classList.add("container-nome-compra")
    
    // checkbox
    const containerCheckbox = document.createElement('div')
    containerCheckbox.classList.add('checkbox-container')

    const checkboxInput = document.createElement('input')
    checkboxInput.type = 'checkbox'
    checkboxInput.classList.add('checkbox-input')
    // string dinamica
    checkboxInput.id = 'checkbox-' + contador++

    const checkboxLabel = document.createElement('label')
    // setAtribute(qual o atributo, valor do atributo)
    checkboxLabel.setAttribute("for", checkboxInput.id)
    
    const checkboxCustomizado = document.createElement('div')
    checkboxCustomizado.classList.add('checkbox-customizado')

    checkboxLabel.appendChild(checkboxInput)
    checkboxLabel.appendChild(checkboxCustomizado)

    checkboxLabel.addEventListener('click', (evento) => {
        // pega quem esta chamando o evento qual o elemento que estasendo clicado
        const checkboxInput = evento.currentTarget.querySelector('.checkbox-input')
        const checkboxCustomizado = evento.currentTarget.querySelector('.checkbox-customizado')

        if (checkboxInput.checked){
            checkboxCustomizado.classList.add('checked')
        }else{
            checkboxCustomizado.classList.remove('checked')
        }


    })

    containerCheckbox.appendChild(checkboxLabel)
    containerNomeItem.appendChild(containerCheckbox)



   
    // cria o elemento p 
    const nomeItem = document.createElement("p")
    // adiciona o que foi digitado no input, ao paragrafo
    nomeItem.innerText = item.value


    // adiciona o novo elemento p criado a div do paragrafo
    containerNomeItem.appendChild(nomeItem)

    // cria a div do botoes
    const containerButtons = document.createElement('div')
    // botao de delete
    const buttonRemove = document.createElement('button')
    buttonRemove.classList.add('btn-acao')
    const imageRemover = document.createElement('img')
    imageRemover.src = 'img/delete.svg'
    buttonRemove.appendChild (imageRemover)
    
    // botao edita
    const buttonEdit = document.createElement('button')
    buttonEdit.classList.add('btn-acao')
    const imageEdit = document.createElement('img')
    imageEdit.src = 'img/edit.svg'
    buttonEdit.appendChild (imageEdit)

    
    
    // adiciona os botoes
    containerButtons.appendChild(buttonRemove)
    containerButtons.appendChild(buttonEdit)

    //  adiciona na div filha do li o bloco de botoes e o bloco do checkbox e do p o container-nome-compra
    containerItemLista.appendChild(containerNomeItem)
    containerItemLista.appendChild(containerButtons)
    


    itemLista.appendChild(containerItemLista)
    listaCompras.appendChild(itemLista)
    document.querySelector('#entrada').value = ""
})
