const heroes=["thor", "ironman", "spiderman"]
const dc=["superman", "flash", "batman"]

/*heroes.push(dc)

console.log(heroes) //array here is single element*/

const all=heroes.concat(dc);
console.log(all);

const all2=[...heroes,...dc]
console.log(all2)

//flat: array inside array to single array


console.log(Array.from("Mrinalini"))

//array.of: different values, eg: score1, 2, 3