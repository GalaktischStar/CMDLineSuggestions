const array = ["full", "out", "@", "home", "fixture", "group", "sub", "cue", "effect", "thru", "+", "-"];
const cmdline = document.getElementById("CMDLine");
const button0 = document.getElementById("Button-0");
const button1 = document.getElementById("Button-1");
const button2 = document.getElementById("Button-2");
const button3 = document.getElementById("Button-3");
const button4 = document.getElementById("Button-4");
var id = 1;


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


button0.addEventListener("click", () => {
    buttonToInput(button0.innerHTML);
    cmdline.focus();
});


button1.addEventListener("click", () => {
    buttonToInput(button1.innerHTML);
    cmdline.focus();
});


button2.addEventListener("click", () => {
    buttonToInput(button2.innerHTML);
    cmdline.focus();
});


button3.addEventListener("click", () => {
    buttonToInput(button3.innerHTML);
    cmdline.focus();
});


button4.addEventListener("click", () => {
    buttonToInput(button4.innerHTML);
    cmdline.focus();
});


// Arrow key up and down for scroling through buttons
// Arrow key left and right reserved for navigating the CMDLine
function arrowKeyMove(move) {
    var iterator = 0;
    if (move === "Right") {

        iterator++;
    }
    if (move === "Left") {

        iterator--;
    }
}


document.onkeydown = () => {
    if (event.keyCode === 38) {
        arrowKeyMove("Right");
    }
    if (event.keyCode === 40) {
        arrowKeyMove("Left");
    }
}