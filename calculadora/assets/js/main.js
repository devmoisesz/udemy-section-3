function criaCalculador(){
    return {
        display: document.querySelector('.display'),

        inicia(){
            this.cliqueBotoes()
            this.pressionaEnter()
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', event => {
                if(event.keyCode === 13){
                   this.result() 
                }
            })
        },

        result(){
            let conta = this.display.value

            try{
                conta = eval(conta)
                if(!conta){
                    alert('Conta inválida')
                    return
                }
                this.display.value = conta
            }catch(error){
                alert('Conta inválida')
                return
            }
        },

        clearDisplay(){
            this.display.value = ""
        },

        deleteone(){
            this.display.value = this.display.value.slice(0, -1)
        },

        cliqueBotoes(){
            //this -> calculadora
            document.addEventListener('click', event =>{
                const el = event.target
                if(el.classList.contains('btn-num')){
                    this.btnforDisplay(el.innerText)
                }

                if(el.classList.contains('btn-clear')){ //Se button Clear for clicado
                    this.clearDisplay() //chama a função limpa display(input)
                }

                if(el.classList.contains('btn-del')){ //Se button deletar for clicado
                    this.deleteone() // Chama a function deletar um
                }

                if(el.classList.contains('btn-eq')){
                    this.result()
                }
            })
        },
        btnforDisplay(valor){
            this.display.value += valor
        }
    }
}

const calculadora = criaCalculador()
calculadora.inicia()