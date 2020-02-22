module.exports = function toReadable (number) {
    const simple = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let result = '';
    if (Math.trunc(number/100)>0){
        result+=simple[Math.trunc(number/100)]+' hundred';
    }
    if (number%100){
        if (Math.trunc(number/100)>0)result+=' ';
        if (number%100<20){
            result+=`${simple[number%100]}`
        } else {
            result+=`${tens[Math.trunc((number%100)/10)-2]}`;
            if ((number%100)%10)result+=` ${simple[(number%100)%10]}`;            
        }
    } else {
        if (!Math.trunc(number/100)>0)result+='zero';
    }
    return result;            
}
