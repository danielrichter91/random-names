parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"2u/B":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.single=i;var e=["Achaeus","Achilles","Adonis","Aegidius","Aeneas","Aeschylus","Aetius","Agesilaus","Alcibiades","Alex","Alexander","Alexiares","Alexis","Alexius","Ambrose","Anastasius","Anatole","Anatolius","Andreas","Andrew","Angel","Angelo","Angelus","Antiochus","Antisthenes","Arcadius","Aristarchus","Arius","Athanasius","Basil","Bastian","Christian","Christopher","Claus","Cleo","Cletus","Colin","Collin","Cosmas","Cosmo","Croesus","Cyril","Damian","Damien","Damon","Demetrius","Demosthenes","Denis","Dennis","Denys","Diogenes","Dion","Dionysius","Dorian","Eneas","Erasmus","Erastus","Euclid","Eugene","Eugenius","Euripides","Eusebius","Eustace","Galen","George","Giles","Gregor","Gregory","Hector","Hectour","Heraclitus","Heraclius","Hieronymus","Hippocrates","Homer","Hyacinth","Irenaeus","Irenæus","Isadore","Isidore","Jason","Jerome","Judæus","Klaus","Kristopher","Leander","Leonidas","Miltiades","Nestor","Nicephorus","Nicholas","Nicodemus","Nicolas","Odysseus","Orion","Orpheus","Paris","Peers","Pericles","Peter","Petre","Philemon","Philip","Phillip","Phillipp","Pierce","Piers","Plato","Prometheus","Ptolemæus","Ptolemy","Pythagoras","Rastus","Sebastian","Socrates","Sophocles","Sophus","Stacey","Stacy","Stephen","Steven","Thaddaeus","Thaddeus","Themistius","Theo","Theodore","Theodosius","Theophilus","Timon","Timothy","Xander","Zeno","Zeuxis"],a=["Agatha","Aglaia","Agnes","Alex","Alexa","Alexandra","Alexandria","Alexandrina","Alexia","Alexis","Althea","Anastacia","Anastasia","Andrea","Andrina","Angela","Angelica","Angelina","Angeline","Anthea","Aphrodite","Apollonia","Ariadne","Ariana","Ariane","Arianna","Arianne","Artemis","Athanasia","Athena","Berenice","Bernice","Candace","Candice","Caren","Caryn","Cassandra","Catharine","Catherine","Catheryn","Cathryn","Charmian","Chloe","Christa","Christian","Christiana","Christina","Christine","Cleo","Clio","Cloe","Coleen","Cora","Core","Corina","Corinna","Corinne","Corrine","Corrinne","Cressida","Cybil","Cybill","Cynthia","Damaris","Daphne","Delia","Denise","Dione","Dora","Dorcas","Dorinda","Doris","Dorothea","Dorothy","Eftychia","Eirene","Elaina","Elaine","Electra","Elena","Elissa","Ellen","Eugenia","Eugenie","Eula","Eulalie","Eunice","Euphemia","Euphrosyne","Euthemia","Evadne","Genesis","Georgia","Georgiana","Georgianna","Georgina","Greta","Gretta","Hebe","Helen","Helena","Helene","Hermione","Hero","Ilona","Iolanthe","Irene","Iris","Isadora","Isidora","Ismene","Jacintha","Jocasta","Jorja","Karen","Karin","Karina","Karyn","Kassandra","Katharine","Katherine","Katheryn","Kathryn","Katrina","Katrine","Khloe","Khloé","Kirsteen","Kirsten","Kore","Krista","Kristen","Kristin","Kristina","Kristine","Krystin","Krystina","Lalage","Larisa","Larissa","Lena","Lexa","Lidia","Lois","Lydia","Lyra","Margaret","Margarett","Margaretta","Margarita","Margery","Marita","Marjorie","Marjory","Melanie","Melissa","Mellissa","Melony","Nancy","Nerissa","Nichola","Nichole","Nicholine","Nicola","Nicole","Nikita","Oenone","Olympia","Olympias","Ophelia","Pallas","Parthenia","Penelope","Persephone","Persis","Peta","Petra","Phaedra","Phebe","Philippa","Phillida","Phillipa","Phillis","Philomena","Phoebe","Phyllida","Phyllis","Rhea","Rhoda","Rina","Sandra","Sapphira","Selena","Selene","Sibyl","Sibylla","Sofia","Sophia","Sophie","Stacee"];function i(i){if("string"==typeof i){if("MALE"===i)return e[Math.floor(Math.random()*e.length)];if("FEMALE"===i)return a[Math.floor(Math.random()*a.length)];throw new RangeError("gender must be either MALE or FEMALE")}var r=[].concat(e,a);return r[Math.floor(Math.random()*r.length)]}
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("../src/index"),n=document.getElementById("random-name-here"),t=document.getElementById("male-name-here"),i=document.getElementById("female-name-here");document.getElementById("random-name").addEventListener("click",function(){n.innerHTML=(0,e.single)()}),document.getElementById("random-male").addEventListener("click",function(){t.innerHTML=(0,e.single)("MALE")}),document.getElementById("random-female").addEventListener("click",function(){i.innerHTML=(0,e.single)("FEMALE")}),n.innerHTML=(0,e.single)(),t.innerHTML=(0,e.single)("MALE"),i.innerHTML=(0,e.single)("FEMALE");
},{"../src/index":"2u/B"}]},{},["Focm"], null)
//# sourceMappingURL=demo.b6759b60.js.map