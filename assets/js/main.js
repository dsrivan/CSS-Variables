function generateAndFillSpan(str) {
    // define which span
    let spanTarget = (str.length <= 2) ? "spanBlock" : "spanColor";

    // search the color or block span
    let span = document.getElementsByClassName(spanTarget);

    // return of the function that generates the span
    span[0].innerText = "";
    span[0].innerText = str;
}

function applyStyle() {
    let color = document.getElementsByClassName('spanColor')[0];
    let stringColor = color.innerText;
    let block = document.getElementsByClassName('spanBlock')[0];
    let stringBlock = block.innerText;

    if (color != "" && stringBlock != "") {
        let string = "--var-div" + stringBlock;
        let hexaColor = "";

        switch (stringColor) {
            case "Red":
                hexaColor = "#c52a2a";
                break;
            case "Blue":
                hexaColor = "#2323cc";
                break;
            case "Green":
                hexaColor = "#259e25";
                break;
            default:
                // Yellow
                hexaColor = "#bbba1c";
        }
        document.documentElement.style.setProperty(string, hexaColor);
        color.innerText = "";
        block.innerText = "";

        disableBtn(stringColor, stringBlock);
    }
}

/* to reset styles */
function resetStyle() {
    let defaultColor = "#5a5a5a";
    let countDivs = document.querySelectorAll('section div').length + 1;
    for (let index = 1; index < countDivs; index++) {
        document.documentElement.style.setProperty("--var-div0" + index, defaultColor);

    }
    reactivateBtns();
}

/* To disable a button */
function disableBtn(cor, botao) {
    let btnColor = document.getElementsByClassName('btn-' + cor)[0];
    let btnBlock = document.getElementsByClassName('btn-' + botao)[0];

    btnColor.disabled = true;
    btnColor.classList.add('disabledBtn');

    btnBlock.disabled = true;
    btnBlock.classList.add('disabledBtn');
}

/* To reactivate the buttons */
function reactivateBtns() {
    let btns = document.querySelectorAll('.btns button');
    let countBtns = btns.length - 2;

    for (let index = 0; index < countBtns; index++) {
        btns[index].disabled = false;
        btns[index].classList.remove('disabledBtn');
    }
}