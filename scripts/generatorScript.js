import { nounList } from "./wordLibrary.js"
import { adjList } from "./wordLibrary.js"
import { verbList } from "./wordLibrary.js"

// const testButton = document.getElementById("testButton")



// let buttonTest = () => {
//     console.log("Button Works")
// }

// let sentenceRadio = document.forms.namedItem("sentenceForm")

// let sentenceRadio01 = document.forms.namedItem("sentenceselection01")
// let sentenceRadio02 = document.forms.namedItem("sentenceSelection02")

let sentenceType = null
console.log("sentenceType =", sentenceType)

const type01Switch = () => {
    sentenceType = 1
    console.log("sentenceType =", sentenceType)
}

const type02Switch = () => {
    sentenceType = 2
    console.log("sentenceType =", sentenceType)
}

const generator = () => {
    // console.log(nounList)

    // console.log("List of Nouns", nounList)

    let noun = nounList[Math.floor(Math.random() * nounList.length)];
    let adjective = adjList[Math.floor(Math.random() * adjList.length)];
    let verb = verbList[Math.floor(Math.random() * verbList.length)];
    console.log(`noun: ${noun}, adjective: ${adjective}, verb: ${verb}`);

    let quoteStyle01 = `This ${noun} is ${adjective} ${verb}ing on the ${noun}!`;
    let quoteStyle02 = `Well well, isn't this a ${adjective} surprise?  ${noun} is here to finally ${verb} up the place!`;

    // let inputValue = document.getElementById("sentenceSelection");
    // console.log("input value is:", inputValue);

    let quoteOutput = ""

    if (sentenceType === 1) {
        quoteOutput = quoteStyle01
    } else if (sentenceType === 2) {
        quoteOutput = quoteStyle02
    } else {
        lquoteOutput = "Quote Error"
    };

    console.log(`quote result: ${quoteOutput}`);

    document.getElementById("quoteResult").innerHTML = quoteOutput;

};




// Attach functions to the window object to make them accessible globally
window.type01Switch = type01Switch;
window.type02Switch = type02Switch;
window.generator = generator;