function BinToDec(num) {
    let number = parseInt(num, 2).toString(10);
    return number
} 


function DecToBin(num) {
    let number = parseInt(num, 10).toString(2);
    return number
} 

function convert() {
    const decInput = document.querySelector('.dec');
    const binInput = document.querySelector('.bin');

    let txtDec = document.querySelector('.decTxt');
    let txtBin = document.querySelector('.binTxt');

    txtDec.innerHTML = DecToBin(decInput.value)
    txtBin.innerHTML = BinToDec(binInput.value)

}