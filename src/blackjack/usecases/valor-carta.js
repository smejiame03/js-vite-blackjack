/**
 * Esta funcion sirve para obtener el valor de la carta
 * @param {String} carta 
 * @returns {Number} Retorna el valor
 */

export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1; //se multiplica por 1 para convertirlo de un string a un numero
}