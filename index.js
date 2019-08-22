'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var listOne = ['Achaeus', 'Achilles', 'Adonis', 'Aegidius', 'Aeneas', 'Aeschylus', 'Aetius', 'Agesilaus', 'Alcibiades', 'Alex', 'Alexander', 'Alexiares', 'Alexis', 'Alexius', 'Ambrose', 'Anastasius', 'Anatole', 'Anatolius', 'Andreas', 'Andrew', 'Angel', 'Angelo', 'Angelus', 'Antiochus', 'Antisthenes', 'Arcadius', 'Aristarchus', 'Arius', 'Athanasius', 'Basil', 'Bastian', 'Christian', 'Christopher', 'Claus', 'Cleo', 'Cletus', 'Colin', 'Collin', 'Cosmas', 'Cosmo', 'Croesus', 'Cyril', 'Damian', 'Damien', 'Damon', 'Demetrius', 'Demosthenes', 'Denis', 'Dennis', 'Denys', 'Diogenes', 'Dion', 'Dionysius', 'Dorian', 'Eneas', 'Erasmus', 'Erastus', 'Euclid', 'Eugene', 'Eugenius', 'Euripides', 'Eusebius', 'Eustace', 'Galen', 'George', 'Giles', 'Gregor', 'Gregory', 'Hector', 'Hectour', 'Heraclitus', 'Heraclius', 'Hieronymus', 'Hippocrates', 'Homer', 'Hyacinth', 'Irenaeus', 'Irenæus', 'Isadore', 'Isidore', 'Jason', 'Jerome', 'Judæus', 'Klaus', 'Kristopher', 'Leander', 'Leonidas', 'Miltiades', 'Nestor', 'Nicephorus', 'Nicholas', 'Nicodemus', 'Nicolas', 'Odysseus', 'Orion', 'Orpheus', 'Paris', 'Peers', 'Pericles', 'Peter', 'Petre', 'Philemon', 'Philip', 'Phillip', 'Phillipp', 'Pierce', 'Piers', 'Plato', 'Prometheus', 'Ptolemæus', 'Ptolemy', 'Pythagoras', 'Rastus', 'Sebastian', 'Socrates', 'Sophocles', 'Sophus', 'Stacey', 'Stacy', 'Stephen', 'Steven', 'Thaddaeus', 'Thaddeus', 'Themistius', 'Theo', 'Theodore', 'Theodosius', 'Theophilus', 'Timon', 'Timothy', 'Xander', 'Zeno', 'Zeuxis'];
var listTwo = ['Agatha', 'Aglaia', 'Agnes', 'Alex', 'Alexa', 'Alexandra', 'Alexandria', 'Alexandrina', 'Alexia', 'Alexis', 'Althea', 'Anastacia', 'Anastasia', 'Andrea', 'Andrina', 'Angela', 'Angelica', 'Angelina', 'Angeline', 'Anthea', 'Aphrodite', 'Apollonia', 'Ariadne', 'Ariana', 'Ariane', 'Arianna', 'Arianne', 'Artemis', 'Athanasia', 'Athena', 'Berenice', 'Bernice', 'Candace', 'Candice', 'Caren', 'Caryn', 'Cassandra', 'Catharine', 'Catherine', 'Catheryn', 'Cathryn', 'Charmian', 'Chloe', 'Christa', 'Christian', 'Christiana', 'Christina', 'Christine', 'Cleo', 'Clio', 'Cloe', 'Coleen', 'Cora', 'Core', 'Corina', 'Corinna', 'Corinne', 'Corrine', 'Corrinne', 'Cressida', 'Cybil', 'Cybill', 'Cynthia', 'Damaris', 'Daphne', 'Delia', 'Denise', 'Dione', 'Dora', 'Dorcas', 'Dorinda', 'Doris', 'Dorothea', 'Dorothy', 'Eftychia', 'Eirene', 'Elaina', 'Elaine', 'Electra', 'Elena', 'Elissa', 'Ellen', 'Eugenia', 'Eugenie', 'Eula', 'Eulalie', 'Eunice', 'Euphemia', 'Euphrosyne', 'Euthemia', 'Evadne', 'Genesis', 'Georgia', 'Georgiana', 'Georgianna', 'Georgina', 'Greta', 'Gretta', 'Hebe', 'Helen', 'Helena', 'Helene', 'Hermione', 'Hero', 'Ilona', 'Iolanthe', 'Irene', 'Iris', 'Isadora', 'Isidora', 'Ismene', 'Jacintha', 'Jocasta', 'Jorja', 'Karen', 'Karin', 'Karina', 'Karyn', 'Kassandra', 'Katharine', 'Katherine', 'Katheryn', 'Kathryn', 'Katrina', 'Katrine', 'Khloe', 'Khloé', 'Kirsteen', 'Kirsten', 'Kore', 'Krista', 'Kristen', 'Kristin', 'Kristina', 'Kristine', 'Krystin', 'Krystina', 'Lalage', 'Larisa', 'Larissa', 'Lena', 'Lexa', 'Lidia', 'Lois', 'Lydia', 'Lyra', 'Margaret', 'Margarett', 'Margaretta', 'Margarita', 'Margery', 'Marita', 'Marjorie', 'Marjory', 'Melanie', 'Melissa', 'Mellissa', 'Melony', 'Nancy', 'Nerissa', 'Nichola', 'Nichole', 'Nicholine', 'Nicola', 'Nicole', 'Nikita', 'Oenone', 'Olympia', 'Olympias', 'Ophelia', 'Pallas', 'Parthenia', 'Penelope', 'Persephone', 'Persis', 'Peta', 'Petra', 'Phaedra', 'Phebe', 'Philippa', 'Phillida', 'Phillipa', 'Phillis', 'Philomena', 'Phoebe', 'Phyllida', 'Phyllis', 'Rhea', 'Rhoda', 'Rina', 'Sandra', 'Sapphira', 'Selena', 'Selene', 'Sibyl', 'Sibylla', 'Sofia', 'Sophia', 'Sophie', 'Stacee'];
var combinedLists = [].concat(listOne, listTwo);
/**
 * @param {String} gender
 */

function single(gender) {
  if (typeof gender === 'string') {
    if (gender === 'MALE') {
      return listOne[Math.floor(Math.random() * listOne.length)];
    } else if (gender === 'FEMALE') {
      return listTwo[Math.floor(Math.random() * listTwo.length)];
    } else {
      throw new RangeError('gender must be either MALE or FEMALE');
    }
  }

  return combinedLists[Math.floor(Math.random() * combinedLists.length)];
}
/**
 * @param {Number} length - the length of the array returned
 */

function list(length) {
  if (length === undefined || length === null) {
    throw new ReferenceError('Missing 1st argument (length)');
  }

  if (typeof length !== 'number') {
    throw new TypeError('list(length) is expecting a number, was given a ' + _typeof(length));
  }

  if (length < 0) {
    throw new RangeError('length cannot be a negative number');
  }

  var result = [];

  for (var i = 0; i < length; i++) {
    result.push(combinedLists[Math.floor(Math.random() * combinedLists.length)]);
  }

  return result;
}

exports.list = list;
exports.single = single;
