import { single, list } from '../src/index';

const elementRandom = document.getElementById('random-name-here');
const elementMale = document.getElementById('male-name-here');
const elementFemale = document.getElementById('female-name-here');
const elementRandomList = document.getElementById('random-list-here');

document.getElementById("random-name").addEventListener("click", function() {
    elementRandom.innerHTML = `single() > '${single()}'`;
});

document.getElementById("random-male").addEventListener("click", function() {
    elementMale.innerHTML = `single('MALE') > '${single('MALE')}'`;
});

document.getElementById("random-female").addEventListener("click", function() {
    elementFemale.innerHTML = `single('FEMALE') > '${single('FEMALE')}'`;
});

document.getElementById("random-list").addEventListener("click", function() {
    elementRandomList.innerHTML = `list(5) > [${list(5)}]`;
});

elementRandom.innerHTML = `single() > '${single()}'`;
elementMale.innerHTML = `single('MALE') > '${single('MALE')}'`;
elementFemale.innerHTML = `single('FEMALE') > '${single('FEMALE')}'`;
elementRandomList.innerHTML = `list(5) > [${list(5)}]`;
