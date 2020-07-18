const array = ["full", "out", "@", "home", "fixture", "group", "sub", "cue", "effect", "thru", "+", "-"];
const cmdline = document.getElementById("CMDLine");
var iterator = 0;
var id = 1;
var bool = true;


cmdline.addEventListener("keyup", () => {
    var subStr = "";
    var lastIndex = cmdline.value.lastIndexOf(" ");
    var suggestions = [];
    // Start: Creating substrings to be used through filter function
    if (cmdline.value.lastIndexOf(" ") === -1) {
        lastIndex = 0;
        subStr = cmdline.value.substr(lastIndex, cmdline.value.lastIndexOf(""));
        console.log(subStr);
    } else {
        subStr = cmdline.value.substr(lastIndex + 1, cmdline.value.lastIndexOf(""));
        console.log(subStr);
    }
    console.log(subStr);
    // End.
    // Start: Filtering through the array and grabbing elements that include the value of subStr
    if (cmdline.value === "") {
        id = 1;
        for (let index = 0; index < 6; index++) {
            document.getElementById("Button-" + index).innerHTML = "";
        }
    } else {
        array.filter((str) => {
            if (str.includes(subStr)) {
                suggestions.push(str);
            }
        })
        console.log(suggestions);
        if (cmdline.value.charAt(cmdline.value.length - 1) === " ") {
            for (let index = 0; index < suggestions.length; index++) {
                const element = suggestions[index];
                document.getElementById("Button-" + index).innerHTML = "";
            }
            id = 1;
        } else {
            for (let index = 0; index < suggestions.length; index++) {
                const element = suggestions[index];
                document.getElementById("Button-" + index).innerHTML = element;
            }
            for (let index = 4; index >= suggestions.length; index--) {
                const element = array[index];
                document.getElementById("Button-" + index).innerHTML = "";
            }
            suggestions = [];
        }
    }
    // End.
});


// Start: Takes the inner HTML of a button and pushes it to the CMDLine
function buttonToInput(args) {
    var string = "";
    if (cmdline.value.lastIndexOf(" ") === -1) {
        cmdline.value = args + " ";
    } else {
        string = cmdline.value.substr(0, cmdline.value.lastIndexOf(" ")) + " " + args + " ";
        console.log(string);
        cmdline.value = string;
    }
}
// End


// Start: Event listeners for each button that will pass the inner HTMl of the pressed button
// into the buttonToInput function. Resets arrowkey variables
document.getElementById("Button-0").addEventListener("click", () => {
    buttonToInput(document.getElementById("Button-0").innerHTML);
    cmdline.focus();
    bool = true;
    iterator = 0;
});


document.getElementById("Button-1").addEventListener("click", () => {
    buttonToInput(document.getElementById("Button-1").innerHTML);
    cmdline.focus();
    bool = true;
    iterator = 0;
});


document.getElementById("Button-2").addEventListener("click", () => {
    buttonToInput(document.getElementById("Button-2").innerHTML);
    cmdline.focus();
    bool = true;
    iterator = 0;
});


document.getElementById("Button-3").addEventListener("click", () => {
    buttonToInput(document.getElementById("Button-3").innerHTML);
    cmdline.focus();
    bool = true;
    iterator = 0;
});


document.getElementById("Button-4").addEventListener("click", () => {
    buttonToInput(document.getElementById("Button-4").innerHTML);
    cmdline.focus();
    bool = true;
    iterator = 0;
});
// End


// Arrow key up and down for scroling through buttons
// Arrow key left and right reserved for navigating the CMDLine
// Start: Function checks if an arrow key has been pressed or not and sets focus to the first
// button, if a button has already been pressed the function will iterate through all buttons
// in accordance to the key that has been pressed
function arrowKeyMove(move) {
    if (bool === false) {
        if (move === "Right") {
            iterator++;
            if (iterator === 5) {
                iterator = 0;
            }
            if ((iterator < 5) && (iterator > -1)) {
                console.log(iterator);
                document.getElementById("Button-" + iterator).focus();
            }
            
        }
        if (move === "Left") {
            iterator--;
            if (iterator === -1) {
                iterator = 4;
            }
            if ((iterator < 5) && (iterator > -1)) {
                console.log(iterator)
                document.getElementById("Button-" + iterator).focus();
            }
        }
    }
    if (bool === true) {
        document.getElementById("Button-0").focus();
        bool = false;
    }
}
// End


// Start: Grabs text content of the current element that has focus
function tabComplete() {
    var buttonInnerText = document.activeElement.textContent;
    console.log(iterator);
    if (cmdline.value.lastIndexOf(" ") === -1) {
        cmdline.value = buttonInnerText + " ";
    } else {
        string = cmdline.value.substr(0, cmdline.value.lastIndexOf(" ")) + " " + buttonInnerText + " ";
        console.log(string);
        cmdline.value = string;
    }
}
// End


// Start: Checks keycode of button pressed and passes arrowkey direction into arrowKeyMove
document.onkeydown = () => {
    if (event.keyCode === 38) {
        arrowKeyMove("Right");
    }
    if (event.keyCode === 40) {
        arrowKeyMove("Left");
    }
    if (event.keyCode === 9) {
        event.preventDefault();
        tabComplete();
    }
}
// End