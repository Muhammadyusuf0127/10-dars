
let str = 'salom bolajonlar salom nima gap salom yaxshimisan'

let mas = str.split('')
let box1 = []

for (let i = 0; i < mas.length; i++) {
    // console.log(mas[i]);
    if (mas[i] == 's') {
        box1.push(mas[i])
    } 
}
console.log(box1.join('-') );
console.log(box1.length);


let api = prompt('! li harif kiriting')
let box = [ ]
let box2 = []
let num = '!!!Hi!'
function undov() {
    let num2 = api.split('')
    for (let i = 1; i < num2.length; i++) {
        if (num2[i] != '!') {
            box2.push(num2[i])
        } 
    }
    console.log(box2.join(''))
}
undov()