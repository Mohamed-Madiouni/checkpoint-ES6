const pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

getAge=pet=> new Date().getFullYear() - pet.bornOn;

let petsWithAge = [];
pets.map(pet=>{
  pet.age=getAge(pet);
  petsWithAge.push(pet);
})
console.log(petsWithAge);

let dogs = [];
pets.map(pet=>pet.type==="dog"&& dogs.push(pet))
console.log(dogs);

let jasper;
pets.map(pet=>pet.name=== "Jasper" && (jasper = pet))
console.log(`Jasper is ${jasper.age} years old`);