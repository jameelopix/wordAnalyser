import { names } from './nameList.js';
import {coordinatingConjunctions, subordinatingConjunctions, correlativeConjunctions} from "./conjunction.js";
import {compoundPrepositions, phrasalPrepositions, simplePrepositions} from "./preposition";

// console.log(names);       // 3.14159

// document.addEventListener('alpine:init', () => {
//
//     console.log(names);
//     Alpine.store('wordList', {
//         appName: "JApplabs",
//         names111: names
//     });
// });
//
// document.addEventListener('alpine:init', () => {
//
//     console.log("Inside module files - darkmode...");
//     Alpine.store('darkMode', {
//         on: false,
//
//         toggle() {
//             this.on = ! this.on
//         }
//     })
// })


// document.addEventListener('alpine:init', () => {
//
//     console.log("Inside module files...");
//     Alpine.plugin(() => {
//         // Alpine.store('config', { appName });
//
//             Alpine.store('wordList', {
//         appName: "JApplabs",
//         names111: names
//     });
//
//         Alpine.store('darkMode', {
//             on: false,
//
//             toggle() {
//                 this.on = ! this.on
//             }
//         });
//
//     });
// });


// function waitForAlpine() {
//     console.log("Inside module files...");
//     if (window.Alpine && Alpine.store) {
//
//         console.log("Inside module files...If section");
//         // Alpine.store('config', { appName });
//
//                     Alpine.data('wordList', {
//         appName: "JApplabs",
//         names111: names,
//
//
//                         on: false,
//
//                         toggle() {
//                             this.on = ! this.on
//                         }
//     });
//         console.log(Alpine.data('wordList'));
//
//     } else {
//         setTimeout(waitForAlpine, 50);
//     }
// }

// waitForAlpine();

if (window.Alpine) {
    feedData();

} else {
    document.addEventListener('alpine:init', () => {
        feedData();
    });
}

function feedData(){
    Alpine.data('wordList', () => ({

        appName: "JApplabs",
        names: names,

        conjunctions: [...coordinatingConjunctions,...subordinatingConjunctions,...correlativeConjunctions],
        prepositions: [...simplePrepositions, ...compoundPrepositions, ...phrasalPrepositions],
        // ...names,


        init() {
            // Alpine's special init method, runs when component initializes
            // console.log('myAppData component initialized. Its products:', this.products);
            // console.log('Is products an array?', Array.isArray(this.products));

            // console.log(this.appName);
            // console.log(this.names);

            console.log(this);
        },
    }));
}