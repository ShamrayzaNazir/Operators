// operators
// Arthmatic opr
// unary opr
// combining opr
// assigenment opr  = Represented opr
// sub, add, multi, div, exponen, modules
//add
var a = 5;
var b = 6;
var d = a + b;
console.log(d); //11
var c = 5;
c += 6; //11
console.log(c);
//sub
var e = 8 - 4;
console.log(e);
var f = 8;
var g = 4;
var h = f - g;
console.log(h);
var i = 8;
i -= 4;
console.log(i);
// multi
var j = 8;
var k = 4;
var l = f * g; //32
console.log(l);
//div
var m = 8;
var n = 4;
var o = f / g; // 2
console.log(o);
// exponentation represent power
var p = Math.pow(2, 3); // 8
console.log(p);
//modules represent reminder
var q = 6 % 2; //0
console.log(q);
// unary opr
//++ represent krta h increament +1
// -- represent krta h decreament -1
var num = 6;
num++; //6+1 = 7
++num; // 1+6 = 7
console.log(num);
console.log(num++); // 9
console.log(num);
console.log(++num); //10
var nom = 6;
nom--; //6-1 = 5
--nom; // 5-1 = 4
console.log(nom); //4
console.log(nom--); //4
console.log(nom); //3
console.log(--nom); //2
var r = 6;
var s = 5;
var t = ++r + --s + --r + ++s - r-- + ++s - r++ + s++;
console.log(6 + 1 + 5 - 1 + 6 - 1 + 4 + 1 - 6 - 1 + 5 + 1 - 5 + 1 + 6 + 1);
console.log(t);
// combining opr  +, -, *, /,() BODMAS
// B for bracker open D for div M for multi A for add S for sub
var num1 = 5 + 9 / 3 * 2 - 6 + (5 + 5);
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
var u = 8;
var v = 4;
console.log(u > 4); // true
console.log(u >= v); // true
console.log(u < v); // false
console.log(u != v); // ture
// logical opr
// && and opr      and me 1 b value false ho wo sb ko false btata
// || or opr       or me 1 b value true ho wo sb ko true btata
// ! not opr
var w = 8;
var x = 4;
var y = 3;
var z = 9;
console.log(w > x && y > z && x == y && z > w); // false
console.log(w == x || y < z || z < y); // true
var enroll = true;
console.log(!enroll); // false beacause ! means false 
// home work
// BMI calculator = formula bmi = weight / height ** height
var weight = 90;
var height = 36;
var bmi = weight / (Math.pow(height, height));
console.log(bmi);
//console.log(bmi.toFixed(5));
