

// asyncTask is the executor and all it does is call 
// setTimeout with resolve and reject.

// One thing I don't understand is that resolve seems to be a
// real function here and not just a placeholder for a function.
// I thought it was a function that you passed in and that would
// be called when the async task finished.

// What's supposed to happen here is that setTimeout completes
// and calls resolve(), but resolve doesn't actually return 
// anything, because Promises don't return values.
// The form here is:
// asyncTask = (resolve, reject) => anAsyncProcessThatTakesACallback( () => resolve(something) )
const asyncTask = (peanutButter, jelly) => setTimeout(() => peanutButter('foo'), 300);

// promise1 is our promise instance to which we pass promiseFunc
const promise1 = new Promise(asyncTask);
  
promise1.then(v => console.log("Logging promise1: ", v));
  
// This code below completes before the code above.
// I used s and f here for succeed and fail. Whatever you call
// them, the Promise supplies the right function
const asyncTask2 = (s,f) => s('bar comes after foo in the code');
const promise2 = new Promise(asyncTask2);
promise2.then( v => console.log("Logging promise2: ", v) );

// Above I was using a string for the arg for resolve() or s()
// Below I use another function which I call with an argument
const arr = [];
const anotherFunc = (x) => arr.push(x)
const asyncTask3 = (s,f) => s(anotherFunc('baz'));
const promise3 = new Promise(asyncTask3);
//promise3.then( v => console.log("Logging promise3: ", v) );
console.log("From promise3, the updated array is: ", arr)


		