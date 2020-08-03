var gabriela = {
    nombre: 'Gabriela',
    edad: 98
}
var david = {
    nombre: 'David',
    edad: 99
}

function isOlder(persona1, persona2, callback){
    if(persona1.edad > persona2.edad){
        callback(persona1, persona2)
    }else{
        callback(persona2, persona1)
    }
}

function printOlder(personaMayor, personaMenor) {
    if (personaMayor.edad === personaMenor.edad){
        console.log(`${personaMayor.nombre} y ${personaMenor.nombre} tienen la misma edad`)
    } else {
        console.log(`${personaMayor.nombre} es mayor a ${personaMenor.nombre}`)
    }

}

isOlder(gabriela, david, printOlder)
