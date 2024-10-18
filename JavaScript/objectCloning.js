/**How to clone a JavaScript object ?

Cloning a JavaScript object is a task that is used mostly because we do not want to create the same object if the same object already exists. 

                        There are a few ways.

        Approach-01 - > iterating through each property and copying them to 
                        the new object.



        Approach-02 - > object.assign: This method does only a shallow copy.
                        It means that nested properties are still copied by reference.                                                                           
        Approach-03 - > Using Spread Opreator
*/

//* Approach -> 01
console.log("clone object using iteration method");
let src = {
  age: 12,
  wt: 55,
  height: 6,
};
let dest = {};
// clone using iteration -> if we want to more then two object in one object then iteration method is tough enough to implement clone method with two arguments
for (let key in src) {
  let newKey = key;
  let newVal = src[newKey];
  dest[newKey] = newVal;
}
console.log(src);
console.log(dest);

// ? approach -> 02 object.assign:
console.log(" clone object using assign method");

let obj1 = {
  color: "pink",
  address: 841501,
};
// * assign method
let obj2 = Object.assign({}, obj1);

console.log(obj1);
console.log(obj2);

// ? Approach-> 03 Spread operators
console.log(" clone object using spread operator");
let a = {
    client:"Rahul",
    project:"Teating"
};
// ? Apply Spread operator
let b = {...a};
console.log(a);
console.log(b);