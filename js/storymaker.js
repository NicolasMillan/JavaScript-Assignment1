// Assignment 1 | COMP1073 Client-Side JavaScript
/* Nicolas Millan Stn.200533728
23F Client-Side JavaScript - 03 */

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
var arrayNoun1 = ["The turkey","Mom","Dad","The dog","My teacher", "The elephant", "The cat"];
var buttonNoun1 = document.querySelector("#noun1");

var arrayVerb1 = ["sat on","ate","dance with","saw","doesn't llike","kissed"];
var buttonVerb1 = document.querySelector("#verb");

var arrayAdjective = ["a funny","a scary","a goofy","a slimy","a barking", "a fat"];
var buttonAdjective = document.querySelector("#adjective");

var arrayNoun2 = ["goat","monkey","fish","cow","frog", "bug", "worm"];
var buttonNoun2 = document.querySelector("#noun2");

var arraySettign = ["on the midom","on the chair","in my spagetti","in my soup","on the grass", "in my shoes"];
var buttonSetting = document.querySelector("#setting");
// Constants for p tag to display query selectors
var buttonShowStory = document.querySelector("#playback");
var buttonShowRandomStory = document.querySelector("#random");
// Constants for final buttons and p tags
// Variables for pre-defined arrays
// Variables for count to grab array elements
var currentIndex = 0;
var currentIndex2 = 0;
var currentIndex3 = 0;
var currentIndex4 = 0;
var currentIndex5 = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    var textNoun1 = document.querySelector("#choosenNoun1");//select the button
    // if-else to change count setting
    if (currentIndex <= arrayNoun1.length){
        currentIndex = Math.floor(Math.random() * arrayNoun1.length)//randomize the content in the array

        var nounReturn = arrayNoun1[currentIndex];
        textNoun1.textContent = arrayNoun1[currentIndex];//print out the array content  
    } else {
        currentIndex = 0; //start over the array
    }  
    return nounReturn;//return the value for random function
}

function verb_on_click() {
    var textVerb1 = document.querySelector("#choosenVerb");//select the button

    if(currentIndex2 <= arrayVerb1.length){
        currentIndex2 = Math.floor(Math.random() * arrayVerb1.length)//randomize the content in the array

        var verbReturn = arrayVerb1[currentIndex2];
        textVerb1.textContent = arrayVerb1[currentIndex2];//print out the array content  
    }else{
        currentIndex2 = 0;//start over the array
    }
    return verbReturn;//return the value for random function
}

function adjective_on_click() {
    var textAdjective = document.querySelector("#choosenAdjective");//select the button
 
    if(currentIndex3 < arrayAdjective.length){
        currentIndex3 = Math.floor(Math.random() * arrayAdjective.length);//randomize the content in the array

        var adjectiveReturn = arrayAdjective[currentIndex3]
        textAdjective.textContent = arrayAdjective[currentIndex3];//print out the array content  
    }else{
        currentIndex3 = 0;//start over the array
    }
    return adjectiveReturn;//return the value for random function
}

function noun2_on_click() {
    var textNoun2 = document.querySelector("#choosenNoun2");//select the button

    if (currentIndex4 < arrayNoun2.length){
        currentIndex4 = Math.floor(Math.random() * arrayNoun2.length);//randomize the content in the array

        var noun2Return = arrayNoun2[currentIndex4];
        textNoun2.textContent = arrayNoun2[currentIndex4];//print out the array content  
    } else {
        currentIndex4 = 0; //start over the array
    }  
    return noun2Return;//return the value for random function
}

function setting_on_click() {
    var textSetting = document.querySelector("#choosenSetting");//select the button

    if (currentIndex5 < arraySettign.length){
        currentIndex5 = Math.floor(Math.random() * arraySettign.length);//randomize the content in the array

        var settingReturn = arraySettign[currentIndex5];
        textSetting.textContent = arraySettign[currentIndex5];//print out the array content  
    } else {
        currentIndex5 = 0; //start over the array
    }  
    return settingReturn;//return the value for random function
}

// concatenate the user story and display
function playback_on_click() {

    var nounVariable = arrayNoun1[currentIndex];
    var verbVariable = arrayVerb1[currentIndex2];
    var adjectiveVariable = arrayAdjective[currentIndex3];
    var noun2Variable = arrayNoun2[currentIndex4];
    var settingVariable = arraySettign[currentIndex5];

    var textFinalStory = document.querySelector("#story");
    var finalStory = `${nounVariable} ${verbVariable} ${adjectiveVariable} ${noun2Variable} ${settingVariable}`;

    textFinalStory.textContent = finalStory;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {

    var textFinalStory = document.querySelector("#story");
    // var randomStory = noun1_on_click()+" "+ verb_on_click() /* + adjective_on_click + noun2_on_click + setting_on_click */;
    var randomStory = `${noun1_on_click()} ${verb_on_click()} ${adjective_on_click()} ${noun2_on_click()} ${setting_on_click()}`;

    textFinalStory.textContent = randomStory;
}

/* Event Listeners
-------------------------------------------------- */
buttonNoun1.addEventListener("click", noun1_on_click);
buttonVerb1.addEventListener("click", verb_on_click);
buttonAdjective.addEventListener("click", adjective_on_click);
buttonNoun2.addEventListener("click", noun2_on_click);
buttonSetting.addEventListener("click", setting_on_click);
buttonShowStory.addEventListener("click", playback_on_click);
buttonShowRandomStory.addEventListener("click", random_on_click);


