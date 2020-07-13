const array = ["full", "out", "@", "home", "fixture", "group", "sub", "cue", "effect", "thru", "+", "-"];
const cmdline = document.getElementById("CMDLine");
var id = 1;

cmdline.addEventListener("keyup", () => {
    var tempString = "";
    var lastIndex = cmdline.value.lastIndexOf(" ");
    var suggestions = [];
    // Start: Creating substrings to be used through filter function
    if (lastIndex === -1) {
        lastIndex = 0;
        tempString = cmdline.value.substr(lastIndex, cmdline.value.lastIndexOf(""));
        console.log(tempString);
    } else {
        tempString = cmdline.value.substr(lastIndex + 1, cmdline.value.lastIndexOf(""));
        console.log(tempString);
    }
    // End.
    // Start: Filtering through the array and grabbing elements that include the value of tempString
    if (cmdline.value === "") {
        id = 1;
        length = 0;
        for (let index = 0; index < 6; index++) {
            document.getElementById("Button-" + index).innerHTML = "";
        }
    } else {
        array.filter((str) => {
            if (str.includes(tempString)) {
                suggestions.push(str);
            }
        })
        console.log(suggestions);
        for (let index = 0; index < suggestions.length; index++) {
            const element = suggestions[index];
            document.getElementById("Button-" + index).innerHTML = element;
        }
        suggestions = [];
    }
    // End.
});