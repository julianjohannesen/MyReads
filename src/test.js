// What a book looks like:

const ACSMFitnessBook = {
	"title": "ACSM Fitness Book",
	"authors": [
		"American College of Sports Medicine"
	],
	"publisher": "Human Kinetics",
	"publishedDate": "2003",
	"description": "Start where you are and go wherever your goals take you. No other guide offers a more comprehensive plan for developing a personal fitness program and sticking with it. Developed by the American College of Sports Medicine, ACSM Fitness Bookoffers the total package from one of the most respected organizations in the field. In its first two editions, the ACSM Fitness Booksold more than 100,000 copies. Now the classic has been enhanced and expanded with the tools you need to succeed. From simple, step-by-step instruction to new insights on nutrition, weight control, motivation, and overcoming setbacks, the authors provide the help you need to reach beyond your personal best. The key to making any fitness program effective is finding the right level of difficulty for your current ability and creating a plan that will take you to the next level. With a simple and scientifically proven fitness test, the ACSM Fitness Bookgives you everything you need to determine your starting point and monitor your ongoing progress. With sample programs, worksheets, and more, ACSM Fitness Booktakes the guesswork out of getting started and offers color photos of a variety of exercises that require minimal equipment and space. Whether your objective is to improve cardiovascular endurance, muscular strength, flexibility, or overall body condition, the ACSM Fitness Bookwill lay out a proven plan for reaching your goal in a way that works for you. Richly illustrated and easy to follow, it is the one book you need for the tools, and the motivation, to put your personal fitness program on track.",
	"industryIdentifiers": [
		{
			"type": "ISBN_10",
			"identifier": "073604406X"
		},
		{
			"type": "ISBN_13",
			"identifier": "9780736044066"
		}
	],
	"readingModes": {
		"text": false,
		"image": true
	},
	"pageCount": 175,
	"printType": "BOOK",
	"categories": [
		"Health & Fitness"
	],
	"averageRating": 5,
	"ratingsCount": 1,
	"maturityRating": "NOT_MATURE",
	"allowAnonLogging": false,
	"contentVersion": "0.4.1.0.preview.1",
	"imageLinks": {
		"smallThumbnail": "http://books.google.com/books/content?id=qpdRgb9X3EcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
		"thumbnail": "http://books.google.com/books/content?id=qpdRgb9X3EcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
	},
	"language": "en",
	"previewLink": "http://books.google.com/books?id=qpdRgb9X3EcC&printsec=frontcover&dq=fitness&hl=&cd=1&source=gbs_api",
	"infoLink": "http://books.google.com/books?id=qpdRgb9X3EcC&dq=fitness&hl=&source=gbs_api",
	"canonicalVolumeLink": "https://books.google.com/books/about/ACSM_Fitness_Book.html?hl=&id=qpdRgb9X3EcC",
	"id": "qpdRgb9X3EcC"
};

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


		