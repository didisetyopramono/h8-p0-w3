function groupAnimals(animals) {
  animals.sort();
  var arrhasil = [];
  var inisial = animals[0][0];
  var arrtampung = [];
  for (var i = 0; i < animals.length; i++) {
    if (animals[i][0] === inisial) {
      arrtampung.push(animals[i]);
    } else {
      arrhasil.push(arrtampung);
      arrtampung = [];
      inisial = animals[i][0];
      arrtampung.push(animals[i]);
    }
    if (i === animals.length-1) {
      arrhasil.push(arrtampung);
    }
  }
  return arrhasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]