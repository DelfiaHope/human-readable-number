module.exports = function toReadable (number) {
  
const ten = ['', 'one', 'two', 'three', 'four', 'five', 'six', 
'seven', 'eight', 'nine']

const twenties = ['ten', 'eleven', 'twelve', 'thirteen',
'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

const dozens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty',
'seventy', 'eighty', 'ninety']

const century = ' hundred ';


let arr = String(number).split('')
let len = arr.length

if(number === 0){return 'zero'} 
  if(len === 1){return ten[number]}
  if(len === 2){
    if(number < 20){return twenties[arr[1]]
    } if(arr[1] == 0){ return dozens[arr[0]]
    } else{return dozens[arr[0]] + ' ' + ten[arr[1]]}
  }
  if(len === 3){
    console.log(ten[arr[0]] + century.slice(0,-1))
      if(arr[1] == 0 && arr[2] == 0){return ten[arr[0]] + century.slice(0,-1)}
      if(arr[1] == 0){return ten[arr[0]] + century + ten[arr[2]]}
      if(arr[1] == 1){return ten[arr[0]] + century + twenties[arr[2]]}
      if(arr[2] == 0){return ten[arr[0]] + century + dozens[arr[1]]}
      else{return ten[arr[0]] + century + dozens[arr[1]] + ' ' + ten[arr[2]]}
    }

}

