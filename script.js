/*Aqui ficará a lógica da calculadora*/
//By Vinícius Paiva Cruz.

//chamando o espaço em que ficará a conta e o resultado
var numero = document.querySelector('.numero')

//Porcentagem
const porcentagem = document.querySelector('.porcentagem')
porcentagem.addEventListener('click', function(){
    numero.innerHTML = numero.innerHTML + '%'
})

//Raiz Quadrada
const raiz = document.querySelector('.raiz')
raiz.addEventListener('click', function(){
    var numero = document.querySelector('.numero').innerHTML
    document.querySelector('.numero').innerHTML = Math.sqrt(numero)
})

//X ao quadrado
const x_ao_quadrado = document.querySelector('.x_ao_quadrado')
x_ao_quadrado.addEventListener('click', function(){
    numero.innerHTML = numero.innerHTML * numero.innerHTML
})

//1 sobre X
const um_sobre_x = document.querySelector('.um_sobre_x')
um_sobre_x.addEventListener('click', function(){
    numero.innerHTML = 1/(numero.innerHTML)
})

//CE
const CE = document.querySelector('.CE')
CE.addEventListener('click', function(){
    numero.innerHTML = ''
})

//C
const C = document.querySelector('.C')
C.addEventListener('click', function(){
    numero.innerHTML = ''
})

//delete
const del = document.querySelector('.del')
del.addEventListener('click', function(){
    var numero = document.querySelector('.numero').innerHTML
    console.log(numero.length)
    document.querySelector('.numero').innerHTML = numero.substring(0, numero.length - 1)
})

//Sinal de divisão
const dividir = document.querySelector('.dividir')
dividir.addEventListener('click', function(){
    numero.innerHTML = numero.innerHTML + '/'
})

//Sinal de vezes
const X = document.querySelector('.X')
X.addEventListener('click', function(){
    numero.innerHTML = numero.innerHTML + '*'
})

//Sinal de Mais
const mais = document.querySelector('.mais')
mais.addEventListener('click', function(){
    numero.innerHTML = numero.innerHTML + '+'
})

//Sinal de menos
const menos = document.querySelector('.menos')
menos.addEventListener('click', function(){
    numero.innerHTML = numero.innerHTML + '-'
})

//Sinal de ponto
const ponto = document.querySelector('.ponto')
ponto.addEventListener('click', function(){
    numero.innerHTML = numero.innerHTML + '.'
})

//Inicio da função numeros
function numbers(){
    //Numero 1
    const um = document.querySelector('.um')
    um.addEventListener('click', function(){
        numero.innerHTML = numero.innerHTML + '1'
    })
    //Numero 2
    const dois = document.querySelector('.dois')
    dois.addEventListener('click', function(){
        numero.innerHTML = numero.innerHTML + '2'
    })
    //Numero 3
    const tres = document.querySelector('.tres')
    tres.addEventListener('click', function(){
        numero.innerHTML = numero.innerHTML + '3'
    })
    //Numero 4
    const quatro = document.querySelector('.quatro')
    quatro.addEventListener('click', function(){
        numero.innerHTML = numero.innerHTML + '4'
    })
    //Numero 5
    const cinco = document.querySelector('.cinco')
    cinco.addEventListener('click', function(){
        numero.innerHTML = numero.innerHTML + '5'
    })
    //Numero 6
    const seis = document.querySelector('.seis')
    seis.addEventListener('click', function(){
        numero.innerHTML = numero.innerHTML + '6'
    })
    //Numero 7
    const sete = document.querySelector('.sete')
    sete.addEventListener('click', function(){
        numero.innerHTML = numero.innerHTML + '7'
    })
    //Numero 8
    const oito = document.querySelector('.oito')
    oito.addEventListener('click', function(){
        numero.innerHTML = numero.innerHTML + '8'
    })
    //Numero 9
    const nove = document.querySelector('.nove')
    nove.addEventListener('click', function(){
        numero.innerHTML = numero.innerHTML + '9'
    })
    //Numero 0
    const zero = document.querySelector('.zero')
    zero.addEventListener('click', function(){
        numero.innerHTML = numero.innerHTML + '0'
    })

}//Fim da função numeros

numbers();//Chamando a função numeros

//Ao apertar o botão =, deve-se calcular o que foi pedido pelo usuário
var igual = document.querySelector('.igual')
igual.addEventListener('click', function(){
    calcular()
})

//Essa é a função que vai calcular os numeros inseridos na calculadora
function calcular(){
    var numero = document.querySelector('.numero').innerHTML
    //Se a caixa numeros não estiver vazia, leia o código abaixo
    if(numero){
        document.querySelector('.numero').innerHTML = eval(numero)
    }
}

//Mais ou menos
var mais_ou_menos = document.querySelector('.mais_ou_menos')
mais_ou_menos.addEventListener('click', function(){
    var numero = document.querySelector('.numero').innerHTML
    document.querySelector('.numero').innerHTML = numero - numero * 2
})