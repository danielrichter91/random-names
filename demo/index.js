import randomNames from '../src/index';

const elementRandom = document.getElementById('random-name-here');
const elementMale = document.getElementById('male-name-here');
const elementFemale = document.getElementById('female-name-here');

document.getElementById("random-name").addEventListener("click", function() {
    elementRandom.innerHTML = randomNames();
});

document.getElementById("random-male").addEventListener("click", function() {
    elementMale.innerHTML = randomNames('MALE');
});

document.getElementById("random-female").addEventListener("click", function() {
    elementFemale.innerHTML = randomNames('FEMALE');
});

elementRandom.innerHTML = randomNames();
elementMale.innerHTML = randomNames('MALE');
elementFemale.innerHTML = randomNames('FEMALE');
