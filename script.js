// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

// TODO: Completa esta función para que busque recursivamente el regalo en la lista
function findGift(gifts, giftName, index = 0) {
    // Caso base: Si llegamos al final de la lista
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }

    if (gifts[index]===giftName){
        return `El regalo ${giftName} está en la posición ${index} de la lista.`;
    }

    return findGift(gifts, giftName, index+1);

}

let giftToFind = "Lego";
// Salida esperada:
// "Lego está en la posición 3."

// Caso cuando el regalo no está en la lista
giftToFind = "Camión";
// Salida esperada:
// "Camión no está en la lista."

console.log(findGift(gifts, giftToFind));