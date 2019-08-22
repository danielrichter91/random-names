import { single } from '../src/index';

const elementRandom = document.getElementById('random-name-here');
const elementMale = document.getElementById('male-name-here');
const elementFemale = document.getElementById('female-name-here');

document.getElementById("random-name").addEventListener("click", function() {
    elementRandom.innerHTML = single();
});

document.getElementById("random-male").addEventListener("click", function() {
    elementMale.innerHTML = single('MALE');
});

document.getElementById("random-female").addEventListener("click", function() {
    elementFemale.innerHTML = single('FEMALE');
});

elementRandom.innerHTML = single();
elementMale.innerHTML = single('MALE');
elementFemale.innerHTML = single('FEMALE');
