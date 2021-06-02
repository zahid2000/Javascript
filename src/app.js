let sayi1=10;
 sayi1="Engin Demirog";
 let student={id:1,name:"Engin"};
//console.log(student);


function save(puan=10,ogrenci ) {
    //console.log(ogrenci.name+": "+puan);
}

save(undefined,student );

let students=["Engin Demirog","Halit Kalayci","Zahid Mamedov","Busra"]

//console.log(students);

let students2=[student,{id:1,name:"Halit"},"Ankara",{city:"Istanbul"}]
//console.log(students2);

//rest-Javascript
//params-C#
//varArgs-Java
let showProducts=function (id,...products) {
    console.log(id);
    console.log(products[0])
}

//console.log(typeof showProducts);
//showProducts(10,["Elma","Armut","Karpuz"]);


//spread
let points=[1,2,3,4,32,324,12,232];

console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")


//Destructuring
let populatins=[10000,20000,30000,[40000,60000]]
let [small,medium,high,[veryHigh,maximum]]=populatins
// console.log(small)
// console.log(medium)
// console.log(high)
// console.log(veryHigh)
// console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
}
someFunction(populatins)

let category={id:1,name:"Icecek"}
console.log(category.id)
console.log(category["name"])

let {id,name}=category
console.log(id)

console.log(name)

