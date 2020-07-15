// // const heading = document.getElementById('heading')

// // console.dir(heading)

// // function hello() {
// // 	console.log('Hello!', this)
// // }


// // const person = {
// // 	name: 'Serg',
// // 	age: 48,
// // 	sayhello: hello
// // }

// // function createCalcFunction(n) {
// // 	return function() {
// // 		console.log(1000 * n)
// // 	}
// // }

// // const calc = createCalcFunction(34)
// // calc()

// // function simpleInc (n) {
// // 	return function (num) {;
// // 		return num + n;
// // 	};
// // };

// // const addfive = simpleInc ();

// function bind(){
// 	return 
// }

// console.log('Test')

function bind(context, fn) {
	return function (..args) {
		fn.apply(context, args)
	}
}