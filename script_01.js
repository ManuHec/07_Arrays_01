/* Die Satzbau-Maschine | Arrays */

//****02.Therie: Array****

//let arr;

// 02a. Theorie: Schleife ( for-schleife)
// for - Schleife als Wiederholungs-Struktur

// Inkrement (untere Grenze --> obere Grenze)
// for (let i = 0; i < 10; i++) {
//     output(i);
// }

//Dekrament (obere grenze --> untere Grenze)
// for /let i = 10; i > 0, i--){
//     output(i);
// }


//arr = new Array(); // Konstruktor
// arr = []; // Literal
// arr = [2, 4, 7, 11];
// arr = [true, true, false];
// arr = ["Ich", "bin", "Max", "Mütze"];


// output(arr);
// output(arr.length); // Anzahl der Elemente
// output(arr[0]); // Index (1.Position im Array)
// output(arr[2]);
// output(arr[arr.length - 1]); // Index ( Letzte Position im Arry)

// 02b For- Schleife für Array _ Index

// let arr = ["Ich", "bin", "die", "colle", "Maxine", "Mützerich"];
// for (let i = 0; i < arr.length; i++) {
//     output(arr[i]);
// }

// Überlegungen - Transponierung
// 1. Einer Variablen kann Ihr eigener Wert zugewiesen werden.
//Solange die Variable existiert, bleibt dieser erhalten.
// Hier: Aufsummierung

//zu "FUß" - DRY !!!!
// let a = 0; // Anfangswert
// output("inhalt von a: " +a);
// a = a + 1; // a = 0 + 1
// output (" inhalt von a: " +a);
// a = a + 1; // a = 1 + 1
// output ("inhalt von a: = +a");

// Besser mit FOR- Schleife

// let a = 0; // Anfangswert
// for (let i = 0; i < 10; i++) {
//     output("in der loop: = " + a);
//     a = a + 1;
// }
// output("nach der loop: = " + a);

// Verkettung eines Stringe / Transponierung

// let str = ""; // Anfangswert
// const addStr = "Test";
// const gap = " ";

// for (let i = 0; i < 10; i++) {

//     output("in der loop: " + str);

//     str = str + addStr + gap;

// }

// output("nach der loop: " + str);







//*** */ 01. Funtionalität mit Einzelparameter***
// --> "Ich bin Max Mütze."

// //output(getSentence("Ich", "bin", "Max", "Mütze"));

//function getSentence(word1, word2, word3, word4, ) {

//     const gap = " ";
//     const punct = ".";
//     const str = word1 + gap +
//         word2 + gap +
//         word3 + gap +
//         word4 +
//         punct;

//     return str;

// }

//*****01a. Funktionalität mit Array 1******
// Kretik | Überlegung
// word1,word2,....wordN :: Semantische Struktur
// arr[0], arr[1].....arr[n]:: Nummerische Struktur (0,1,2,3...n)
// --> Tranformation semantisches Problem --> numerisches Problem


//output(getSentenceArr(["Ich", "bin", "Max", "Mütze"]));
// function getSentenceArr(arr) {

//     const gap = " ";
//     const punct = ".";
//     const str = arr[0] + gap +
//         arr[1] + gap +
//         arr[2] + gap +
//         arr[3] +
//         punct;

//     return str;

// }

//*****01b. Funktionalität mit Array 1******
// Transponierung untereinander --> nebeneinander


output(getSentenceArr2(["Ich", "bin", "Max", "Mütze"]));
output(getSentenceArr2(["Ich", "bin", "der", "coole", "Max", "Mütze"]));

function getSentenceArr2(arr) {

    const gap = " ";
    const punct = ".";
    let str = "";

    for (let i = 0; i < arr.length; i++) {

        // wenn ich noch NICHT das letzte Element habe --> gap
        // wenn ich das letzte Element habe --> punct
        // a = a+1 || a +=1

        if (i != arr.length - 1) {
            str += arr[i] + gap;
        } else {
            str += arr[i] + punct
        }
    }
    return str;

}




// Modul: Ausgabe in Konsole : Test
//output("hi");

function output(outputStr) {
    console.log(outputStr);
}