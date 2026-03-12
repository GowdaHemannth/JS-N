// // Href
// // location.href='https://www.google.com'
// // console.log(location.href);

// // Rest Parameter
// function print(...rest){

//     console.log(rest[0][0]);
//     console.log(rest[0][1]);

// }

// print("Hemanth",10,20,30,40)

function Print(a, b, c) {
  console.log(a + b + c);
}
arr = [10, 20, 30];
Print(...arr);

//  IF WE PASS  ...SPREAD IN FUNCTION IT WORKS AS A REST
//  IF WE PASS ...SPREAD WHILE CALLING FUNCTION IT WORKS AS A SPREAD

//  Mergin Multi[le Arrayy ..arr1,...arr2
let Obj1 = {
  name: "Hemanth",
};
let Obj2 = {
  ...Obj1,
  city: "Bengaluru",
};
console.log(Obj2);
