const idade = 32
document.writeln(typeof idade)
document.writeln("Minha idade é ", idade," anos.<br>") 


//Crie três variáveis JavaScript, duas usando const, uma usando let.
//Na variável let coloque a soma das duas variáveis const. Apresente
//valor da variável let no documento html junto da frase "A resultado
//da soma de x e y é z", sendo x o valor armazenado na primeira const,
//y o valor armazenado segunda const e z o valor armazenado na
//variável criada usando let.

const x = 5
const y = 7
let soma  = (x + y)
document.writeln("O resultado da soma de ", x, " e ", y, " é ", soma, "<br>")

//Crie três variáveis, uma usando const, duas variáveis usando let. Na
//variável const coloque o total de uma compra, por exemplo 149.90.
//Na variável let coloque a quantidade de parcelas, por exemplo 2. Na
//outra variável let coloque o valor da parcela. Apresente no
//documento html as seguintes informações:
//"O valor total da compra foi R$_,_"
//"Forma de pagamento: _x de R$_,_"
const total = 149.90
let nroParcelas = 2
let valorParcela = total / nroParcelas
document.writeln("O valor total da compra foi R$", total, "<br>")
document.writeln("Forma de pagamento: ", nroParcelas, " parcelas de R$", valorParcela , ".<br>")
console.log(valorParcela)

//Crie duas variáveis usando let. Na primeira coloque um total de
//minutos e defina um valor para ela (por exemplo, minutos = 120). Na
//segunda coloque o total em segundos destes minutos armazenados
//na primeira variável let. Apresente no documento html a seguinte
//informação: "_ minutos equivale à _ segundos!"

let minutos = 120
let segs = 60 * minutos
console.log(segs)
document.writeln(minutos, " minutos equivalem à ",segs, " segundos! <br>")

//Crie cinco variáveis usando const. Na primeira armazene o nome de
//um aluno. Na segunda, terceira e quarta coloque 3 notas (valores de
//0 à 10). Calcule a média das notas e armazene na quinta variável let
//criada. Apresente no documento html a seguinte informação:
//"O aluno _____ ficou com média _,_"
const nome = 'Fabiane', n1 = 9, n2 =8, n3=10, notaFinal = (n1 + n2 + n3) / 3

document.writeln("A aluna ", nome, " ficou com a média ",  notaFinal, "!" , "<br>")






