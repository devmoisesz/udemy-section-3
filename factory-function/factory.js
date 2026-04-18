//Factory function (Função fábrica)
//Construtor function
function criaPessoa(nome, sobrenome, alt, peso){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(valor){
            valor = valor.split(' ')//Divide uma string separando e retornando como um array
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
            console.log(valor)
        },
        fala(assunto){
            return `${this.nome} está ${this.assunto}.`
        },
        altura: alt,
        peso: peso,
        get imc(){
            const IMC = this.peso / (this.altura * this.altura)
            return IMC.toFixed(2)
        }
    }
}
const p1 = criaPessoa('Josias', 'Neto', 1.75, 67)
p1.nomeCompleto = 'Moisés Figueiredo Santos Machado'
console.log(p1.nome)
console.log(p1.sobrenome)