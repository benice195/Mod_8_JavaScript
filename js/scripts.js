var textBasic = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var textAnimal = 'Zielone słonie';
var textAnimalUpperCased = textAnimal.toUpperCase();
console.log(textAnimalUpperCased);

var textBasic = textBasic.replace('Papugi', textAnimalUpperCased);
console.log(textBasic);
console.log(textBasic.length / 2);
console.log(textBasic.length);
console.log(textBasic.slice(0, length / 2));