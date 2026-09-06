// ================================
// NULL vs UNDEFINED
// ================================

console.log(null == undefined);   // true
console.log(null === undefined);  // false


// ================================
// NULL vs NUMBER
// ================================

console.log(null == 0);    // false
console.log(null >= 0);    // true
console.log(null <= 0);    // true
console.log(null > 0);     // false
console.log(null < 0);     // false


// ================================
// UNDEFINED vs NUMBER
// ================================

console.log(undefined == 0);   // false
console.log(undefined >= 0);   // false
console.log(undefined <= 0);   // false
console.log(undefined > 0);    // false
console.log(undefined < 0);    // false


// ================================
// STRING vs NUMBER
// ================================

console.log("10" == 10);   // true
console.log("10" === 10);  // false

console.log("10" >= 5);    // true
console.log("10" <= 15);   // true


// ================================
// BOOLEAN vs NUMBER
// ================================

console.log(true == 1);    // true
console.log(true === 1);   // false

console.log(false == 0);   // true
console.log(false === 0);  // false