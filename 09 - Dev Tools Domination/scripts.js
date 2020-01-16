const dogs = [{ name: 'Snickers', age: 2 }, { name: 'Hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Hello');

// Interpolated
var poop = "Poop";
console.log('Hello! I am a %s string!', 'Poop');
console.log(`Hello! I am ${poop}s string!`);

// Styled
console.log('%c I am the great text', 'background: pink;');

// warning!
console.warn('OH NO!');

// Error :|
console.error('OH Double NO!');

// Info
console.info('Want to know more?');

// Testing
console.assert(1 === 1, 'That is right!');
console.assert(1 === 2, 'That is wrong!');

// clearing
// Clears the console
// console.clear();

// Viewing DOM Elements
// console.log(p);
// console.dir(p);

// Grouping together
dogs.forEach(dog => {
	console.group(`${dog.name}`);
	console.log(`This is ${dog.name}`);
	console.log(`${dog.name} is ${dog.age} years old`);
	console.log(`${dog.name} is ${dog.age * 7} dog years old`);
	console.groupEnd(`${dog.name}`);
});

// counting
console.count('Pete');
console.count('Pete');
console.count('Pete');
console.count('Pete');
console.count('Pete');

// timing
console.time('Fetching data');
fetch('https://api.github.com/users/iikeli')
	.then(data => data.json())
	.then(data => {
		console.timeEnd('Fetching data');
		console.log(data);
	});

// Table
console.table(dogs);
