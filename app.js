// BUCLES
/*
let contador

contador = 0
console.log(contador) // 0

contador++ // contador = contador + 1
console.log(contador) // 1

contador++ // contador = contador + 1
console.log(contador) // 2

contador++ // contador = contador + 1
console.log(contador) // 3

contador++ // contador = contador + 1

console.log(contador)

contador = contador + 1
contador = contador + 1
contador = contador + 1
contador = contador + 1

console.log(contador)

contador+=2 // contador = contador + 2
console.log(contador)

let contador, contador2 = 0
//   Valor inicial ; condición de corte ; avance 
for( contador = 5  ; contador < 13      ; contador++  )
{
    contador2++
    console.log("Hola")
    console.log("")
}
console.log(contador) // 13
console.log(contador2) // 8


let contador = 0
//   Valor inicial ; condición de corte ; avance 
console.log(contador) 

for( contador = 1  ; contador      ; contador++  ) // Nunca termina porque la condición SIEMPRE
                                                   // Es TRUE porque contador ahora es 1
{
    console.log("Hola")
    console.log("")
}
console.log(contador) 



let contador = 0

for( contador = 10  ; contador >= 0 ; contador-- )
{
    console.log("Hola")
    console.log("")
}
console.log(contador) 

*/
let contador
const AVANCE = 2
const VALORMINIMO = 0
const VALORMAXIMO = 20

for( contador = VALORMINIMO  ; contador < VALORMAXIMO ; contador+=AVANCE )
{
    console.log(contador)
}
