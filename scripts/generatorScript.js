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

let type01Switch = () => {
    sentenceType = 1
    console.log(sentenceType)
}

let type02Switch = () => {
    sentenceType = 2
    console.log(sentenceType)
}

let generator = () => {
    // console.log(nounList)

    

    let noun = nounList[Math.floor(Math.random(nounList.length))];
    let adjective = adjList[Math.floor(Math.random(adjList.length))];
    let verb = verbList[Math.floor(Math.random(verbList.length))];
    console.log(`noun: ${noun}, adjective: ${adjective}, verb: ${verb}`);

    let quoteStyle01 = `This ${noun} is ${adjective} ${verb} on the ${noun}!`;
    let quoteStyle02 = `Well well, isn't this a ${adjective} surprise?  ${noun} is here to finally ${verb} up the place!`;

    // let inputValue = document.getElementById("sentenceSelection");
    // console.log("input value is:", inputValue);


    if (sentenceType === 1) {
        let quoteOutput = quoteStyle01
    } else if (sentenceType === 2) {
        let quoteOutput = quoteStyle02
    } else {
        let quoteOutput = "Quote Error"
    };

    console.log(`quote result: ${quoteOutput}`);

    document.getElementById("quoteResult").innerHTML = quoteOutput;

};



// generator()