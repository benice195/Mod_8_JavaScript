var textBasic = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var textAnimal = 'Zielone słonie';
var textAnimalUpperCased = textAnimal.toUpperCase();
console.log(textAnimalUpperCased);

var textBasic = textBasic.replace('Papugi', textAnimalUpperCased);
var halfText = textBasic.length / 2

console.log(textBasic);

console.log(textBasic.slice(0, textBasic.length / 2));