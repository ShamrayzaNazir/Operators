// operators
// Arthmatic opr
// unary opr
// combining opr
// assigenment opr  = Represented opr


// sub, add, multi, div, exponen, modules

//add
let a = 5
let b = 6
let d = a+b
console.log(d); //11

let c = 5 
c += 6 //11
console.log(c);

//sub
let e = 8-4
console.log(e);

let f = 8
let g = 4
let h = f-g
console.log(h);

let i = 8
i -= 4
console.log(i);

// multi

let j = 8
let k = 4
let l = f * g  //32
console.log(l);

//div

let m = 8
let n = 4
let o = f/g  // 2
console.log(o);

// exponentation represent power

let p = 2 ** 3  // 8
console.log(p);

//modules represent reminder
let q = 6 % 2 //0
console.log(q);


// unary opr
//++ represent krta h increament +1
// -- represent krta h decreament -1

let num = 6
num++ //6+1 = 7
++num // 1+6 = 7
console.log(num);
console.log(num++); // 9
console.log(num);
console.log(++num); //10


let nom = 6
nom-- //6-1 = 5
--nom // 5-1 = 4
console.log(nom); //4
console.log(nom--);  //4
console.log(nom); //3
console.log(--nom); //2

let r = 6
let s = 5
let t = ++r + --s + --r + ++s - r-- + ++s - r++ + s++
console.log(6+1 + 5-1 + 6-1 + 4+1 - 6-1 + 5+1 - 5+1 + 6+1);
console.log(t);

// combining opr  +, -, *, /,() BODMAS
// B for bracker open D for div M for multi A for add S for sub
let num1 = 5+9/3*2-6+(5+5)
// 5 + 9 / 3 * 2 - 6 + 10
// 5 + 3 * 2 - 6 + 10
// 5 + 6 - 6 + 10
// 11 - 6 + 10
// 21 - 6
// 15
console.log(num1);

// = represented assignment opr
// += , -+, *=, 

//comparision opr
// >, <, >=, <=, (!= not equal) answer return in true and false

let u = 8
let v = 4
console.log(u>4); // true
console.log(u >= v); // true
console.log(u<v); // false
console.log(u != v) // ture

// logical opr
// && and opr      and me 1 b value false ho wo sb ko false btata
// || or opr       or me 1 b value true ho wo sb ko true btata
// ! not opr

let w = 8 
let x = 4
let y = 3
let z = 9
console.log(w > x && y > z && x==y && z > w); // false

console.log(w == x || y < z || z < y); // true

let enroll = true
console.log(!enroll);  // false beacause ! means false 


// home work
// BMI calculator = formula bmi = weight / height ** height

let weight  = 90
let height = 36
let bmi = weight / (height ** height);
console.log(bmi);
//console.log(bmi.toFixed(5));







