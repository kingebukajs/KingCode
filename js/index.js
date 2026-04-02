/*KingCode v6.2*/
console.log("##KingCode v6.2##");
console.log("👑 King Ebuka 👑");

/**Debounce function**/
function debounce(fn, delay) {
    let timer;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
};
function pro(text) {
         return new Promise(function(resolve) {
        let promptBox = document.createElement("div");
        let promptText = document.createElement("h2");
        let promptInput = document.createElement("input");
        let promptButton = document.createElement("button");
        let promptBoxStyle = promptBox.style;
        let promptTextStyle = promptText.style;
        let promptInputStyle = promptInput.style;
        let promptButtonStyle = promptButton.style;
        
        
        /**promptBox**/
        promptBox.id = "prompt-box";
        promptBoxStyle.background = "#adadad";
        promptBoxStyle.height = "30vh";
        promptBoxStyle.width = "80vw";
        promptBoxStyle.zIndex = "999";
        promptBoxStyle.maxWidth = "400px";
        promptBoxStyle.maxHeight = "300px";
        promptBoxStyle.position = "fixed";
        promptBoxStyle.top = "50%";
        promptBoxStyle.left = "50%";
        promptBoxStyle.transform = "translate(-50%, -50%)";
        promptBoxStyle.borderRadius = "12px";
        promptBoxStyle.padding = "12px";
        promptBoxStyle.minHeight = "250px";
        promptBoxStyle.boxShadow = "5px 5px 8px 5px #09D89E,-5px -5px 8px 5px #09D89E";
        
        /**promptText**/
        promptText.id = "prompt-text";
        promptText.innerText = text;
        promptTextStyle.position = "absolute";
        promptTextStyle.top = "20%";
        promptTextStyle.left = "50%";
        promptTextStyle.transform = "translate(-50%, -50%)";
        
        /**promptInput**/
        promptInput.id = "prompt-input";
        promptInputStyle.width = "70%";
        promptInputStyle.height = "10%";
        promptInputStyle.background = "#adadad";
        promptInputStyle.borderStyle = "none";
        promptInputStyle.borderBottomStyle = "solid";
        promptInputStyle.borderBottomColor = "#73c7ff";
        promptInputStyle.position = "absolute";
        promptInputStyle.bottom = "30%";
        promptInputStyle.left = "50%";
        promptInputStyle.transform = "translate(-50%, -50%)";
        promptInputStyle.outline = "none";
        
        
        /**promptButton**/
        promptButton.id = "prompt-button";
        promptButton.innerText = "Continue";
        promptButtonStyle.position = "absolute";
        promptButtonStyle.bottom = "5%";
        promptButtonStyle.left = "50%";
        promptButtonStyle.transform = "translate(-50%, -50%)";
        promptButtonStyle.background = "#73c7ff";
        promptButtonStyle.padding = "12px";
        promptButtonStyle.borderRadius = "12px";
        promptButtonStyle.borderStyle = "none";
        promptBox.appendChild(promptText);
        promptBox.appendChild(promptInput);
        promptBox.appendChild(promptButton);
        document.body.appendChild(promptBox);
        promptInput.focus();
        
        promptButton.onclick = function() {
          resolve(promptInput.value);
          promptBox.remove();
      };
      
        
        
        
         });
      }

/*welcome page*/
function verif() {
  if ("isLoaded" in sessionStorage){
    let welcomePage = $("#welcome");
    let main = $("#main");
    welcomePage.style.display = 'none';
    main.style.display = 'block';
  } else {
    showName();
  }
}
function enableButton() {
  document.getElementById("open-button").disabled = false; 
}

/**Show and save user name**/
function showName() {
  let welcuser = document.getElementById('user-name');
  if ("userName" in localStorage) {
  welcuser.innerText = localStorage.getItem("userName")
  display1();
  } else {
    (async () => {
        let userName = await pro("Welcome to KingCode, please enter your name to continue...");
        localStorage.setItem("userName", userName);
        welcuser.innerText = userName;
        display1();
    })();
}
}

/**Fake typing logs**/
   
    let log1 = document.getElementById('log1');
    let log2 = document.getElementById('log2');
    let log3 = document.getElementById('log3');
    let log4 = document.getElementById('log4');
    let log5 = document.getElementById('log5');
    let log6 = document.getElementById('log6');
    let message1 = ">_Booting_KingCode_Editor...";
    let message2 = ">_Checking_system_environment...";
    let message3 = ">_Loading_editor_engine...";
    let message4 = ">_Loading_developer_console...";
    let message5 = ">_Initializing_autocomplete...";
    let message6 = ">_Editor_ready._Open_KingCode!";
    let i1 = 0;
    let i2 = 0;
    let i3 = 0;
    let i4 = 0;
    let i5 = 0;
    let i6 = 0;
    function display1() {
  log1.innerText += message1.charAt(i1);
 i1++;
setTimeout(display1, 30);

if(i1 == message1.length){
  display2();
}
}

    function display2() {
  log2.innerText += message2.charAt(i2);
 i2++;
setTimeout(display2, 30);
if(i2 == message2.length){
  display3();
}
}

    function display3() {
  log3.innerText += message3.charAt(i3);
 i3++;
setTimeout(display3, 30);
if(i3 == message3.length){
  display4();
}
};

    function display4() {
  log4.innerText += message4.charAt(i4);
 i4++;
setTimeout(display4, 30)
if(i4 == message4.length){
  display5();
}
}

    function display5() {
  log5.innerText += message5.charAt(i5);
 i5++;
setTimeout(display5, 30)
if(i5 == message5.length){
  display6();
}
}

    function display6() {
  log6.innerText += message6.charAt(i6);
 i6++;
setTimeout(display6, 30)
if(i6 == message6.length){
  enableButton();
}
}

  
  
function openEditor() {
  let welcomePage = $("#welcome");
  let main = $("#main");
  welcomePage.style.display = 'none';
  main.style.display = 'block';
  sessionStorage.setItem("isLoaded", true);
}

//do b t n

function doBTN(){
  let tdisp = $("#welctime");
  let net = $("#net");
  let bdisp = $("#battery-display");
  let pdisp = $("#percent-dis");
  
  setInterval(()=>{tdisp.innerText=new Date().toLocaleTimeString()}, 500);
  
 let connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

setInterval(() => {
  if (!connection) return;

  if (connection.type == "cellular") {

    if (connection.effectiveType == "slow-2g") {
      net.className = "fa-solid fa-signal"; // weak
    } else if (connection.effectiveType == "2g") {
      net.className = "fa-solid fa-signal";
    } else if (connection.effectiveType == "3g") {
      net.className = "fa-solid fa-signal";
    } else if (connection.effectiveType == "4g") {
      net.className = "fa-solid fa-signal"; // strong
    }

  } else if (connection.type == "wifi") {
    net.className = "fa-solid fa-wifi";
  }

  // offline
  if (!navigator.onLine) {
    net.className = "fa-solid fa-ban";
  }

}, 1000);
  
  setInterval(()=>{navigator.getBattery().then((battery) => {
  bdisp.value = battery.level * 100;
  pdisp.innerText = `${Math.round(battery.level*100)}%`;
});}, 1000);
  
}


/**load saved code**/
function loadCode() {
  let template = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
  
  </style>
  <title></title>
</head>
<body>
  
  <script>
  </script>
</body>
</html>



`;
  if ("html" in localStorage && "css" in localStorage && "js" in localStorage) {
  document.getElementById("html").value =  localStorage.getItem("html");
  document.getElementById("css").value =  localStorage.getItem("css");
  document.getElementById("js").value =  localStorage.getItem("js");
  updatePreview();
  }
  else {
  document.getElementById("html").value =  template;
  updatePreview();
  }
}

/**assign variables**/
    let html = document.getElementById("html");
    let css = document.getElementById("css");
    let js = document.getElementById("js");
    let output = document.getElementById("output");
    let buttons = document.querySelectorAll(".buttons");
    let inputs = document.querySelectorAll(".inputsection");
    let its = document.querySelectorAll(".inputsection");
    let opstyle = document.createElement("style");
    output.contentDocument.head.appendChild(opstyle);
    let csnippets = document.getElementById("cselect");
    let inputarea = document.getElementById("inputarea");
    let fsp = document.getElementById('toggle1');
    let fse = document.getElementById('toggle2');
    let lsls = "layout" in localStorage;
    //swaped layout
    let slot = "calc(80px + 47vh)";
    let slit = "82px";
    
    //normal layout
    let nlot = "82px";
    let nlit = "calc(80px + 47vh)";
    

/**update preview**/
function updatePreview() {
  
    const doc = output.contentDocument || output.contentWindow.document;
    
    let kCons = document.getElementById("log-container");
  kCons.innerHTML = "";

    // Update HTML
    doc.body.innerHTML = html.value;

    // Update CSS
    opstyle.textContent = css.value;
    
    //run js
    try {
      output.contentWindow.eval(js.value);
    doc.querySelectorAll('script').forEach((script) => {
      output.contentWindow.eval(script.innerText)
    });
    } catch (err) {
      output.contentWindow.console.error(`${err}`);
      scrollBottom();
    };

    localStorage.setItem("html", html.value);
    localStorage.setItem("css", css.value);
    localStorage.setItem("js", js.value);
};

const debouncedUpdate = debounce(updatePreview, 500);

inputs.forEach(input => {
  input.addEventListener('input', debouncedUpdate);
});


/*auto complete*/
/**css**/

let autoCompCss = [
{id:"accent-color", fullCode:"accent-color: ;"},
{id:"acco", fullCode:"accent-color: ;"},
{id:"align-content", fullCode:"align-content: ;"},
{id:"alco", fullCode:"align-content: ;"},
{id:"align-items", fullCode:"align-items: ;"},
{id:"alit", fullCode:"align-items: ;"},
{id:"align-self", fullCode:"align-self: ;"},
{id:"alse", fullCode:"align-self: ;"},
{id:"alignment-baseline", fullCode:"alignment-baseline: ;"},
{id:"all", fullCode:"all: ;"},
{id:"animation", fullCode:"animation: ;"},
{id:"ani", fullCode:"animation: ;"},
{id:"animation-composition", fullCode:"animation-composition: ;"},
{id:"animation-delay", fullCode:"animation-delay: ;"},
{id:"animation-direction", fullCode:"animation-direction: ;"},
{id:"animation-duration", fullCode:"animation-duration: ;"},
{id:"animation-fill-mode", fullCode:"animation-fill-mode: ;"},
{id:"animation-iteration-count", fullCode:"animation-iteration-count: ;"},
{id:"animation-name", fullCode:"animation-name: ;"},
{id:"animation-play-state", fullCode:"animation-play-state: ;"},
{id:"animation-range", fullCode:"animation-range: ;"},
{id:"animation-range-end", fullCode:"animation-range-end: ;"},
{id:"animation-range-start", fullCode:"animation-range-start: ;"},
{id:"animation-timeline", fullCode:"animation-timeline: ;"},
{id:"animation-timing-function", fullCode:"animation-timing-function: ;"},
{id:"appearance", fullCode:"appearance: ;"},
{id:"aspect-ratio", fullCode:"aspect-ratio: ;"},
{id:"backdrop-filter", fullCode:"backdrop-filter: ;"},
{id:"backface-visibility", fullCode:"backface-visibility: ;"},
{id:"background", fullCode:"background: ;"},
{id:"bg", fullCode:"background: ;"},
{id:"background-attachment", fullCode:"background-attachment: ;"},
{id:"background-blend-mode", fullCode:"background-blend-mode: ;"},
{id:"background-clip", fullCode:"background-clip: ;"},
{id:"background-color", fullCode:"background-color: ;"},
{id:"bgco", fullCode:"background-color: ;"},
{id:"background-image", fullCode:"background-image: ;"},
{id:"bgim", fullCode:"background-image: ;"},
{id:"background-origin", fullCode:"background-origin: ;"},
{id:"background-position", fullCode:"background-position: ;"},
{id:"bgpo", fullCode:"background-position: ;"},
{id:"background-position-x", fullCode:"background-position-x: ;"},
{id:"background-position-y", fullCode:"background-position-y: ;"},
{id:"background-repeat", fullCode:"background-repeat: ;"},
{id:"background-size", fullCode:"background-size: ;"},
{id:"block-size", fullCode:"block-size: ;"},
{id:"border", fullCode:"border: ;"},
{id:"bo", fullCode:"border: ;"},
{id:"border-block", fullCode:"border-block: ;"},
{id:"border-block-color", fullCode:"border-block-color: ;"},
{id:"border-block-end", fullCode:"border-block-end: ;"},
{id:"border-block-end-color", fullCode:"border-block-end-color: ;"},
{id:"border-block-end-style", fullCode:"border-block-end-style: ;"},
{id:"border-block-end-width", fullCode:"border-block-end-width: ;"},
{id:"border-block-start", fullCode:"border-block-start: ;"},
{id:"border-block-start-color", fullCode:"border-block-start-color: ;"},
{id:"border-block-start-style", fullCode:"border-block-start-style: ;"},
{id:"border-block-start-width", fullCode:"border-block-start-width: ;"},
{id:"border-block-style", fullCode:"border-block-style: ;"},
{id:"border-block-width", fullCode:"border-block-width: ;"},
{id:"border-bottom", fullCode:"border-bottom: ;"},
{id:"bobot", fullCode:"border-bottom: ;"},
{id:"border-bottom-color", fullCode:"border-bottom-color: ;"},
{id:"border-bottom-left-radius", fullCode:"border-bottom-left-radius: ;"},
{id:"border-bottom-right-radius", fullCode:"border-bottom-right-radius: ;"},
{id:"border-bottom-style", fullCode:"border-bottom-style: ;"},
{id:"border-bottom-width", fullCode:"border-bottom-width: ;"},
{id:"border-collapse", fullCode:"border-collapse: ;"},
{id:"border-color", fullCode:"border-color: ;"},
{id:"boco", fullCode:"border-color: ;"},
{id:"border-end-end-radius", fullCode:"border-end-end-radius: ;"},
{id:"co", fullCode:"color: ;"},
{id:"border-end-start-radius", fullCode:"border-end-start-radius: ;"},
{id:"border-image", fullCode:"border-image: ;"},
{id:"border-image-outset", fullCode:"border-image-outset: ;"},
{id:"border-image-repeat", fullCode:"border-image-repeat: ;"},
{id:"border-image-slice", fullCode:"border-image-slice: ;"},
{id:"border-image-source", fullCode:"border-image-source: ;"},
{id:"border-image-width", fullCode:"border-image-width: ;"},
{id:"border-inline", fullCode:"border-inline: ;"},
{id:"border-inline-color", fullCode:"border-inline-color: ;"},
{id:"border-inline-end", fullCode:"border-inline-end: ;"},
{id:"border-inline-end-color", fullCode:"border-inline-end-color: ;"},
{id:"border-inline-end-style", fullCode:"border-inline-end-style: ;"},
{id:"border-inline-end-width", fullCode:"border-inline-end-width: ;"},
{id:"border-inline-start", fullCode:"border-inline-start: ;"},
{id:"border-inline-start-color", fullCode:"border-inline-start-color: ;"},
{id:"border-inline-start-style", fullCode:"border-inline-start-style: ;"},
{id:"border-inline-start-width", fullCode:"border-inline-start-width: ;"},
{id:"border-inline-style", fullCode:"border-inline-style: ;"},
{id:"border-inline-width", fullCode:"border-inline-width: ;"},
{id:"border-left", fullCode:"border-left: ;"},
{id:"border-left-color", fullCode:"border-left-color: ;"},
{id:"border-left-style", fullCode:"border-left-style: ;"},
{id:"border-left-width", fullCode:"border-left-width: ;"},
{id:"border-radius", fullCode:"border-radius: ;"},
{id:"bora", fullCode:"border-radius: ;"},
{id:"border-right", fullCode:"border-right: ;"},
{id:"border-right-color", fullCode:"border-right-color: ;"},
{id:"border-right-style", fullCode:"border-right-style: ;"},
{id:"border-right-width", fullCode:"border-right-width: ;"},
{id:"border-spacing", fullCode:"border-spacing: ;"},
{id:"border-style", fullCode:"border-style: ;"},
{id:"border-top", fullCode:"border-top: ;"},
{id:"bot", fullCode:"border-top: ;"},
{id:"border-top-color", fullCode:"border-top-color: ;"},
{id:"border-top-left-radius", fullCode:"border-top-left-radius: ;"},
{id:"border-top-right-radius", fullCode:"border-top-right-radius: ;"},
{id:"border-top-style", fullCode:"border-top-style: ;"},
{id:"border-top-width", fullCode:"border-top-width: ;"},
{id:"border-width", fullCode:"border-width: ;"},
{id:"box-decoration-break", fullCode:"box-decoration-break: ;"},
{id:"box-shadow", fullCode:"box-shadow: ;"},
{id:"bxsh", fullCode:"box-shadow: ;"},
{id:"box-sizing", fullCode:"box-sizing: ;"},
{id:"break-after", fullCode:"break-after: ;"},
{id:"break-before", fullCode:"break-before: ;"},
{id:"break-inside", fullCode:"break-inside: ;"},
{id:"caption-side", fullCode:"caption-side: ;"},
{id:"caret-color", fullCode:"caret-color: ;"},
{id:"caret-shape", fullCode:"caret-shape: ;"},
{id:"caret-animation", fullCode:"caret-animation: ;"},
{id:"clear", fullCode:"clear: ;"},
{id:"clip", fullCode:"clip: ;"},
{id:"clip-path", fullCode:"clip-path: ;"},
{id:"color", fullCode:"color: ;"},
{id:"color-adjust", fullCode:"color-adjust: ;"},
{id:"color-scheme", fullCode:"color-scheme: ;"},
{id:"column-count", fullCode:"column-count: ;"},
{id:"column-fill", fullCode:"column-fill: ;"},
{id:"column-gap", fullCode:"column-gap: ;"},
{id:"column-rule", fullCode:"column-rule: ;"},
{id:"column-rule-color", fullCode:"column-rule-color: ;"},
{id:"column-rule-style", fullCode:"column-rule-style: ;"},
{id:"column-rule-width", fullCode:"column-rule-width: ;"},
{id:"column-span", fullCode:"column-span: ;"},
{id:"column-width", fullCode:"column-width: ;"},
{id:"columns", fullCode:"columns: ;"},
{id:"contain", fullCode:"contain: ;"},
{id:"contain-intrinsic-size", fullCode:"contain-intrinsic-size: ;"},
{id:"contain-intrinsic-block-size", fullCode:"contain-intrinsic-block-size: ;"},
{id:"contain-intrinsic-height", fullCode:"contain-intrinsic-height: ;"},
{id:"contain-intrinsic-inline-size", fullCode:"contain-intrinsic-inline-size: ;"},
{id:"contain-intrinsic-width", fullCode:"contain-intrinsic-width: ;"},
{id:"content", fullCode:"content: ;"},
{id:"content-visibility", fullCode:"content-visibility: ;"},
{id:"corner-shape", fullCode:"corner-shape: ;"},
{id:"counter-increment", fullCode:"counter-increment: ;"},
{id:"counter-reset", fullCode:"counter-reset: ;"},
{id:"counter-set", fullCode:"counter-set: ;"},
{id:"cue", fullCode:"cue: ;"},
{id:"cursor", fullCode:"cursor: ;"},
{id:"display", fullCode:"display: ;"},
{id:"dis", fullCode:"display: ;"},
{id:"empty-cells", fullCode:"empty-cells: ;"},
{id:"filter", fullCode:"filter: ;"},
{id:"flex", fullCode:"flex: ;"},
{id:"flex-basis", fullCode:"flex-basis: ;"},
{id:"flex-direction", fullCode:"flex-direction: ;"},
{id:"flexdir", fullCode:"flex-direction: ;"},
{id:"flex-flow", fullCode:"flex-flow: ;"},
{id:"flex-grow", fullCode:"flex-grow: ;"},
{id:"dir", fullCode:"direction: ;"},
{id:"flex-shrink", fullCode:"flex-shrink: ;"},
{id:"flex-wrap", fullCode:"flex-wrap: ;"},
{id:"float", fullCode:"float: ;"},
{id:"font", fullCode:"font: ;"},
{id:"font-display", fullCode:"font-display: ;"},
{id:"font-family", fullCode:"font-family: ;"},
{id:"fofam", fullCode:"font-family: ;"},
{id:"font-feature-settings", fullCode:"font-feature-settings: ;"},
{id:"font-kerning", fullCode:"font-kerning: ;"},
{id:"font-optical-sizing", fullCode:"font-optical-sizing: ;"},
{id:"font-palette", fullCode:"font-palette: ;"},
{id:"font-size", fullCode:"font-size: ;"},
{id:"fos", fullCode:"font-size: ;"},
{id:"font-size-adjust", fullCode:"font-size-adjust: ;"},
{id:"font-stretch", fullCode:"font-stretch: ;"},
{id:"font-style", fullCode:"font-style: ;"},
{id:"font-synthesis", fullCode:"font-synthesis: ;"},
{id:"font-synthesis-weight", fullCode:"font-synthesis-weight: ;"},
{id:"font-synthesis-style", fullCode:"font-synthesis-style: ;"},
{id:"font-synthesis-small-caps", fullCode:"font-synthesis-small-caps: ;"},
{id:"font-variant", fullCode:"font-variant: ;"},
{id:"font-variant-alternates", fullCode:"font-variant-alternates: ;"},
{id:"font-variant-caps", fullCode:"font-variant-caps: ;"},
{id:"font-variant-east-asian", fullCode:"font-variant-east-asian: ;"},
{id:"font-variant-ligatures", fullCode:"font-variant-ligatures: ;"},
{id:"font-variant-numeric", fullCode:"font-variant-numeric: ;"},
{id:"font-variation-settings", fullCode:"font-variation-settings: ;"},
{id:"font-weight", fullCode:"font-weight: ;"},
{id:"forced-color-adjust", fullCode:"forced-color-adjust: ;"},
{id:"gap", fullCode:"gap: ;"},
{id:"grid", fullCode:"grid: ;"},
{id:"grid-area", fullCode:"grid-area: ;"},
{id:"grid-auto-columns", fullCode:"grid-auto-columns: ;"},
{id:"grid-auto-flow", fullCode:"grid-auto-flow: ;"},
{id:"grid-auto-rows", fullCode:"grid-auto-rows: ;"},
{id:"grid-column", fullCode:"grid-column: ;"},
{id:"grid-column-end", fullCode:"grid-column-end: ;"},
{id:"grid-column-start", fullCode:"grid-column-start: ;"},
{id:"grid-row", fullCode:"grid-row: ;"},
{id:"grid-row-end", fullCode:"grid-row-end: ;"},
{id:"grid-row-start", fullCode:"grid-row-start: ;"},
{id:"grid-template", fullCode:"grid-template: ;"},
{id:"grid-template-areas", fullCode:"grid-template-areas: ;"},
{id:"grid-template-columns", fullCode:"grid-template-columns: ;"},
{id:"grid-template-rows", fullCode:"grid-template-rows: ;"},
{id:"hanging-punctuation", fullCode:"hanging-punctuation: ;"},
{id:"height", fullCode:"height: ;"},
{id:"h", fullCode:"height: ;"},
{id:"hyphenate-character", fullCode:"hyphenate-character: ;"},
{id:"hyphenate-limit-chars", fullCode:"hyphenate-limit-chars: ;"},
{id:"hyphenate-limit-last", fullCode:"hyphenate-limit-last: ;"},
{id:"hyphenate-limit-lines", fullCode:"hyphenate-limit-lines: ;"},
{id:"hyphenate-limit-zone", fullCode:"hyphenate-limit-zone: ;"},
{id:"hyphens", fullCode:"hyphens: ;"},
{id:"image-orientation", fullCode:"image-orientation: ;"},
{id:"image-rendering", fullCode:"image-rendering: ;"},
{id:"image-resolution", fullCode:"image-resolution: ;"},
{id:"initial-letter", fullCode:"initial-letter: ;"},
{id:"inline-size", fullCode:"inline-size: ;"},
{id:"inset", fullCode:"inset: ;"},
{id:"inset-block", fullCode:"inset-block: ;"},
{id:"inset-block-end", fullCode:"inset-block-end: ;"},
{id:"inset-block-start", fullCode:"inset-block-start: ;"},
{id:"inset-inline", fullCode:"inset-inline: ;"},
{id:"inset-inline-end", fullCode:"inset-inline-end: ;"},
{id:"inset-inline-start", fullCode:"inset-inline-start: ;"},
{id:"isolation", fullCode:"isolation: ;"},
{id:"justify-content", fullCode:"justify-content: ;"},
{id:"juscon", fullCode:"justify-content: ;"},
{id:"justify-items", fullCode:"justify-items: ;"},
{id:"justify-self", fullCode:"justify-self: ;"},
{id:"letter-spacing", fullCode:"letter-spacing: ;"},
{id:"lighting-color", fullCode:"lighting-color: ;"},
{id:"line-break", fullCode:"line-break: ;"},
{id:"line-clamp", fullCode:"line-clamp: ;"},
{id:"line-height", fullCode:"line-height: ;"},
{id:"line-height-step", fullCode:"line-height-step: ;"},
{id:"list-style", fullCode:"list-style: ;"},
{id:"list-style-image", fullCode:"list-style-image: ;"},
{id:"list-style-position", fullCode:"list-style-position: ;"},
{id:"list-style-type", fullCode:"list-style-type: ;"},
{id:"margin", fullCode:"margin: ;"},
{id:"ma", fullCode:"margin: ;"},
{id:"margin-block", fullCode:"margin-block: ;"},
{id:"margin-block-end", fullCode:"margin-block-end: ;"},
{id:"margin-block-start", fullCode:"margin-block-start: ;"},
{id:"margin-bottom", fullCode:"margin-bottom: ;"},
{id:"mabo", fullCode:"margin-bottom: ;"},
{id:"margin-inline", fullCode:"margin-inline: ;"},
{id:"margin-inline-end", fullCode:"margin-inline-end: ;"},
{id:"margin-inline-start", fullCode:"margin-inline-start: ;"},
{id:"margin-left", fullCode:"margin-left: ;"},
{id:"male", fullCode:"margin-left: ;"},
{id:"margin-right", fullCode:"margin-right: ;"},
{id:"mari", fullCode:"margin-right: ;"},
{id:"margin-top", fullCode:"margin-top: ;"},
{id:"mato", fullCode:"margin-top: ;"},
{id:"marker", fullCode:"marker: ;"},
{id:"marker-end", fullCode:"marker-end: ;"},
{id:"marker-mid", fullCode:"marker-mid: ;"},
{id:"marker-start", fullCode:"marker-start: ;"},
{id:"mask", fullCode:"mask: ;"},
{id:"mask-border", fullCode:"mask-border: ;"},
{id:"mask-border-mode", fullCode:"mask-border-mode: ;"},
{id:"mask-border-outset", fullCode:"mask-border-outset: ;"},
{id:"mask-border-repeat", fullCode:"mask-border-repeat: ;"},
{id:"mask-border-slice", fullCode:"mask-border-slice: ;"},
{id:"mask-border-source", fullCode:"mask-border-source: ;"},
{id:"mask-border-width", fullCode:"mask-border-width: ;"},
{id:"mask-clip", fullCode:"mask-clip: ;"},
{id:"mask-composite", fullCode:"mask-composite: ;"},
{id:"mask-image", fullCode:"mask-image: ;"},
{id:"mask-mode", fullCode:"mask-mode: ;"},
{id:"mask-origin", fullCode:"mask-origin: ;"},
{id:"mask-position", fullCode:"mask-position: ;"},
{id:"mask-repeat", fullCode:"mask-repeat: ;"},
{id:"mask-size", fullCode:"mask-size: ;"},
{id:"mask-type", fullCode:"mask-type: ;"},
{id:"max-block-size", fullCode:"max-block-size: ;"},
{id:"max-height", fullCode:"max-height: ;"},
{id:"maxh", fullCode:"max-height: ;"},
{id:"max-inline-size", fullCode:"max-inline-size: ;"},
{id:"max-width", fullCode:"max-width: ;"},
{id:"maxw", fullCode:"max-width: ;"},
{id:"min-block-size", fullCode:"min-block-size: ;"},
{id:"min-height", fullCode:"min-height: ;"},
{id:"minh", fullCode:"min-height: ;"},
{id:"min-inline-size", fullCode:"min-inline-size: ;"},
{id:"min-width", fullCode:"min-width: ;"},
{id:"minw", fullCode:"min-width: ;"},
{id:"mix-blend-mode", fullCode:"mix-blend-mode: ;"},
{id:"object-fit", fullCode:"object-fit: ;"},
{id:"object-position", fullCode:"object-position: ;"},
{id:"offset", fullCode:"offset: ;"},
{id:"offset-anchor", fullCode:"offset-anchor: ;"},
{id:"offset-distance", fullCode:"offset-distance: ;"},
{id:"offset-path", fullCode:"offset-path: ;"},
{id:"offset-position", fullCode:"offset-position: ;"},
{id:"offset-rotate", fullCode:"offset-rotate: ;"},
{id:"opacity", fullCode:"opacity: ;"},
{id:"order", fullCode:"order: ;"},
{id:"orphans", fullCode:"orphans: ;"},
{id:"outline", fullCode:"outline: ;"},
{id:"outline-color", fullCode:"outline-color: ;"},
{id:"outline-offset", fullCode:"outline-offset: ;"},
{id:"outline-style", fullCode:"outline-style: ;"},
{id:"outline-width", fullCode:"outline-width: ;"},
{id:"overflow", fullCode:"overflow: ;"},
{id:"overflow-anchor", fullCode:"overflow-anchor: ;"},
{id:"overflow-block", fullCode:"overflow-block: ;"},
{id:"overflow-clip-margin", fullCode:"overflow-clip-margin: ;"},
{id:"overflow-inline", fullCode:"overflow-inline: ;"},
{id:"overflow-wrap", fullCode:"overflow-wrap: ;"},
{id:"overflow-wrap-anywhere", fullCode:"overflow-wrap: anywhere;"},
{id:"overflow-x", fullCode:"overflow-x: ;"},
{id:"overflow-y", fullCode:"overflow-y: ;"},
{id:"overscroll-behavior", fullCode:"overscroll-behavior: ;"},
{id:"overscroll-behavior-block", fullCode:"overscroll-behavior-block: ;"},
{id:"overscroll-behavior-inline", fullCode:"overscroll-behavior-inline: ;"},
{id:"overscroll-behavior-x", fullCode:"overscroll-behavior-x: ;"},
{id:"overscroll-behavior-y", fullCode:"overscroll-behavior-y: ;"},
{id:"padding", fullCode:"padding: ;"},
{id:"pa", fullCode:"padding: ;"},
{id:"padding-block", fullCode:"padding-block: ;"},
{id:"padding-block-end", fullCode:"padding-block-end: ;"},
{id:"padding-block-start", fullCode:"padding-block-start: ;"},
{id:"padding-bottom", fullCode:"padding-bottom: ;"},
{id:"pabo", fullCode:"padding-bottom: ;"},
{id:"padding-inline", fullCode:"padding-inline: ;"},
{id:"padding-inline-end", fullCode:"padding-inline-end: ;"},
{id:"padding-inline-start", fullCode:"padding-inline-start: ;"},
{id:"padding-left", fullCode:"padding-left: ;"},
{id:"pale", fullCode:"padding-left: ;"},
{id:"padding-right", fullCode:"padding-right: ;"},
{id:"left", fullCode:"left: ;"},
{id:"le", fullCode:"left: ;"},
{id:"pari", fullCode:"padding-right: ;"},
{id:"padding-top", fullCode:"padding-top: ;"},
{id:"pato", fullCode:"padding-top: ;"},
{id:"page-break-after", fullCode:"page-break-after: ;"},
{id:"page-break-before", fullCode:"page-break-before: ;"},
{id:"page-break-inside", fullCode:"page-break-inside: ;"},
{id:"paint-order", fullCode:"paint-order: ;"},
{id:"perspective", fullCode:"perspective: ;"},
{id:"perspective-origin", fullCode:"perspective-origin: ;"},
{id:"bo", fullCode:"bottom: ;"},
{id:"place-content", fullCode:"place-content: ;"},
{id:"place-items", fullCode:"place-items: ;"},
{id:"place-self", fullCode:"place-self: ;"},
{id:"pointer-events", fullCode:"pointer-events: ;"},
{id:"position", fullCode:"position: ;"},
{id:"pos", fullCode:"position: ;"},
{id:"quotes", fullCode:"quotes: ;"},
{id:"resize", fullCode:"resize: ;"},
{id:"right", fullCode:"right: ;"},
{id:"ri", fullCode:"right: ;"},
{id:"rotate", fullCode:"rotate: ;"},
{id:"row-gap", fullCode:"row-gap: ;"},
{id:"ruby-align", fullCode:"ruby-align: ;"},
{id:"ruby-position", fullCode:"ruby-position: ;"},
{id:"scale", fullCode:"scale: ;"},
{id:"scroll-behavior", fullCode:"scroll-behavior: ;"},
{id:"scroll-margin", fullCode:"scroll-margin: ;"},
{id:"scroll-margin-block", fullCode:"scroll-margin-block: ;"},
{id:"scroll-margin-block-end", fullCode:"scroll-margin-block-end: ;"},
{id:"scroll-margin-block-start", fullCode:"scroll-margin-block-start: ;"},
{id:"scroll-margin-bottom", fullCode:"scroll-margin-bottom: ;"},
{id:"scroll-margin-inline", fullCode:"scroll-margin-inline: ;"},
{id:"scroll-margin-inline-end", fullCode:"scroll-margin-inline-end: ;"},
{id:"scroll-margin-inline-start", fullCode:"scroll-margin-inline-start: ;"},
{id:"scroll-margin-left", fullCode:"scroll-margin-left: ;"},
{id:"scroll-margin-right", fullCode:"scroll-margin-right: ;"},
{id:"scroll-margin-top", fullCode:"scroll-margin-top: ;"},
{id:"scroll-padding", fullCode:"scroll-padding: ;"},
{id:"scroll-padding-block", fullCode:"scroll-padding-block: ;"},
{id:"scroll-padding-block-end", fullCode:"scroll-padding-block-end: ;"},
{id:"scroll-padding-block-start", fullCode:"scroll-padding-block-start: ;"},
{id:"scroll-padding-bottom", fullCode:"scroll-padding-bottom: ;"},
{id:"scroll-padding-inline", fullCode:"scroll-padding-inline: ;"},
{id:"scroll-padding-inline-end", fullCode:"scroll-padding-inline-end: ;"},
{id:"scroll-padding-inline-start", fullCode:"scroll-padding-inline-start: ;"},
{id:"scroll-padding-left", fullCode:"scroll-padding-left: ;"},
{id:"scroll-padding-right", fullCode:"scroll-padding-right: ;"},
{id:"scroll-padding-top", fullCode:"scroll-padding-top: ;"},
{id:"scroll-snap-align", fullCode:"scroll-snap-align: ;"},
{id:"scroll-snap-stop", fullCode:"scroll-snap-stop: ;"},
{id:"scroll-snap-type", fullCode:"scroll-snap-type: ;"},
{id:"scrollbar-color", fullCode:"scrollbar-color: ;"},
{id:"scrollbar-gutter", fullCode:"scrollbar-gutter: ;"},
{id:"scrollbar-width", fullCode:"scrollbar-width: ;"},
{id:"scroll-timeline", fullCode:"scroll-timeline: ;"},
{id:"scroll-timeline-name", fullCode:"scroll-timeline-name: ;"},
{id:"scroll-timeline-axis", fullCode:"scroll-timeline-axis: ;"},
{id:"shape-image-threshold", fullCode:"shape-image-threshold: ;"},
{id:"shape-margin", fullCode:"shape-margin: ;"},
{id:"shape-outside", fullCode:"shape-outside: ;"},
{id:"tab-size", fullCode:"tab-size: ;"},
{id:"table-layout", fullCode:"table-layout: ;"},
{id:"text-align", fullCode:"text-align: ;"},
{id:"text-align-last", fullCode:"text-align-last: ;"},
{id:"text-combine-upright", fullCode:"text-combine-upright: ;"},
{id:"text-decoration", fullCode:"text-decoration: ;"},
{id:"text-decoration-color", fullCode:"text-decoration-color: ;"},
{id:"text-decoration-line", fullCode:"text-decoration-line: ;"},
{id:"text-decoration-skip", fullCode:"text-decoration-skip: ;"},
{id:"text-decoration-skip-ink", fullCode:"text-decoration-skip-ink: ;"},
{id:"text-decoration-style", fullCode:"text-decoration-style: ;"},
{id:"text-emphasis", fullCode:"text-emphasis: ;"},
{id:"text-emphasis-color", fullCode:"text-emphasis-color: ;"},
{id:"text-emphasis-position", fullCode:"text-emphasis-position: ;"},
{id:"text-emphasis-style", fullCode:"text-emphasis-style: ;"},
{id:"text-indent", fullCode:"text-indent: ;"},
{id:"text-justify", fullCode:"text-justify: ;"},
{id:"text-orientation", fullCode:"text-orientation: ;"},
{id:"text-overflow", fullCode:"text-overflow: ;"},
{id:"text-rendering", fullCode:"text-rendering: ;"},
{id:"text-shadow", fullCode:"text-shadow: ;"},
{id:"text-size-adjust", fullCode:"text-size-adjust: ;"},
{id:"text-spacing", fullCode:"text-spacing: ;"},
{id:"text-transform", fullCode:"text-transform: ;"},
{id:"text-underline-offset", fullCode:"text-underline-offset: ;"},
{id:"text-underline-position", fullCode:"text-underline-position: ;"},
{id:"text-wrap", fullCode:"text-wrap: ;"},
{id:"text-wrap-mode", fullCode:"text-wrap-mode: ;"},
{id:"text-wrap-style", fullCode:"text-wrap-style: ;"},
{id:"top", fullCode:"top: ;"},
{id:"touch-action", fullCode:"touch-action: ;"},
{id:"transform", fullCode:"transform: ;"},
{id:"transform-box", fullCode:"transform-box: ;"},
{id:"transform-origin", fullCode:"transform-origin: ;"},
{id:"transform-style", fullCode:"transform-style: ;"},
{id:"transition", fullCode:"transition: ;"},
{id:"transition-delay", fullCode:"transition-delay: ;"},
{id:"transition-duration", fullCode:"transition-duration: ;"},
{id:"transition-property", fullCode:"transition-property: ;"},
{id:"transition-timing-function", fullCode:"transition-timing-function: ;"},
{id:"translate", fullCode:"translate: ;"},
{id:"unicode-bidi", fullCode:"unicode-bidi: ;"},
{id:"user-select", fullCode:"user-select: ;"},
{id:"vertical-align", fullCode:"vertical-align: ;"},
{id:"view-timeline", fullCode:"view-timeline: ;"},
{id:"view-timeline-name", fullCode:"view-timeline-name: ;"},
{id:"view-timeline-axis", fullCode:"view-timeline-axis: ;"},
{id:"view-transition-name", fullCode:"view-transition-name: ;"},
{id:"view-transition-duration", fullCode:"view-transition-duration: ;"},
{id:"view-transition-timing-function", fullCode:"view-transition-timing-function: ;"},
{id:"visibility", fullCode:"visibility: ;"},
{id:"white-space", fullCode:"white-space: ;"},
{id:"widows", fullCode:"widows: ;"},
{id:"width", fullCode:"width: ;"},
{id:"w", fullCode:"width: ;"},
{id:"bot", fullCode:"bottom: ;"},
{id:"will-change", fullCode:"will-change: ;"},
{id:"word-break", fullCode:"word-break: ;"},
{id:"word-spacing", fullCode:"word-spacing: ;"},
{id:"writing-mode", fullCode:"writing-mode: ;"},
{id:"z-index", fullCode:"z-index: ;"},
{id:"zin", fullCode:"z-index: ;"},
{id:"zoom", fullCode:"zoom: ;"}
  ];
  
/*html*/
let autoCompDat = [
{id:"id", fullCode:'id=""'},
{id:"class", fullCode:'class=""'},
{id:"style", fullCode:'style=""'},
{id:"title", fullCode:'title=""'},
{id:"hidden", fullCode:'hidden'},
{id:"tabindex", fullCode:'tabindex=""'},
{id:"lang", fullCode:'lang=""'},
{id:"onclick", fullCode:'onclick=""'},
{id:"dir", fullCode:'dir=""'},
{id:"draggable", fullCode:'draggable=""'},
{id:"contenteditable", fullCode:'contenteditable=""'},
{id:"spellcheck", fullCode:'spellcheck=""'},
{id:"accesskey", fullCode:'accesskey=""'},
{id:"translate", fullCode:'translate=""'},
{id:"autocapitalize", fullCode:'autocapitalize=""'},
{id:"data-*", fullCode:'data-=""'},
{id:"href", fullCode:'href=""'},
{id:"target", fullCode:'target=""'},
{id:"rel", fullCode:'rel=""'},
{id:"download", fullCode:'download'},
{id:"hreflang", fullCode:'hreflang=""'},
{id:"referrerpolicy", fullCode:'referrerpolicy=""'},
{id:"src", fullCode:'src=""'},
{id:"alt", fullCode:'alt=""'},
{id:"width", fullCode:'width=""'},
{id:"height", fullCode:'height=""'},
{id:"controls", fullCode:'controls'},
{id:"autoplay", fullCode:'autoplay'},
{id:"loop", fullCode:'loop'},
{id:"muted", fullCode:'muted'},
{id:"poster", fullCode:'poster=""'},
{id:"preload", fullCode:'preload=""'},
{id:"type", fullCode:'type=""'},
{id:"name", fullCode:'name=""'},
{id:"value", fullCode:'value=""'},
{id:"placeholder", fullCode:'placeholder=""'},
{id:"required", fullCode:'required'},
{id:"disabled", fullCode:'disabled'},
{id:"readonly", fullCode:'readonly'},
{id:"checked", fullCode:'checked'},
{id:"min", fullCode:'min=""'},
{id:"max", fullCode:'max=""'},
{id:"step", fullCode:'step=""'},
{id:"maxlength", fullCode:'maxlength=""'},
{id:"minlength", fullCode:'minlength=""'},
{id:"pattern", fullCode:'pattern=""'},
{id:"autocomplete", fullCode:'autocomplete=""'},
{id:"multiple", fullCode:'multiple'},
{id:"abbr", fullCode:"<abbr> </abbr>"},
{id:"address", fullCode:"<address> </address>"},
{id:"article", fullCode:"<article> </article>"},
{id:"aside", fullCode:"<aside> </aside>"},
{id:"audio", fullCode:"<audio> </audio>"},
{id:"b", fullCode:"<b> </b>"},
{id:"base", fullCode:"<base>"},
{id:"bdi", fullCode:"<bdi> </bdi>"},
{id:"bdo", fullCode:"<bdo> </bdo>"},
{id:"blockquote", fullCode:"<blockquote> </blockquote>"},
{id:"body", fullCode:"<body> </body>"},
{id:"button", fullCode:"<button> </button>"},
{id:"canvas", fullCode:"<canvas> </canvas>"},
{id:"caption", fullCode:"<caption> </caption>"},
{id:"cite", fullCode:"<cite> </cite>"},
{id:"code", fullCode:"<code> </code>"},
{id:"col", fullCode:"<col>"},
{id:"colgroup", fullCode:"<colgroup> </colgroup>"},
{id:"data", fullCode:"<data> </data>"},
{id:"datalist", fullCode:"<datalist> </datalist>"},
{id:"dd", fullCode:"<dd> </dd>"},
{id:"del", fullCode:"<del> </del>"},
{id:"details", fullCode:"<details> </details>"},
{id:"dfn", fullCode:"<dfn> </dfn>"},
{id:"dialog", fullCode:"<dialog> </dialog>"},
{id:"div", fullCode:"<div> </div>"},
{id:"dl", fullCode:"<dl> </dl>"},
{id:"dt", fullCode:"<dt> </dt>"},
{id:"em", fullCode:"<em> </em>"},
{id:"embed", fullCode:"<embed>"},
{id:"fieldset", fullCode:"<fieldset> </fieldset>"},
{id:"figcaption", fullCode:"<figcaption> </figcaption>"},
{id:"figure", fullCode:"<figure> </figure>"},
{id:"footer", fullCode:"<footer> </footer>"},
{id:"form", fullCode:"<form> </form>"},
{id:"h1", fullCode:"<h1> </h1>"},
{id:"h2", fullCode:"<h2> </h2>"},
{id:"h3", fullCode:"<h3> </h3>"},
{id:"h4", fullCode:"<h4> </h4>"},
{id:"h5", fullCode:"<h5> </h5>"},
{id:"h6", fullCode:"<h6> </h6>"},
{id:"head", fullCode:"<head> </head>"},
{id:"header", fullCode:"<header> </header>"},
{id:"hr", fullCode:"<hr>"},
{id:"html", fullCode:"<html> </html>"},
{id:"i", fullCode:"<i> </i>"},
{id:"iframe", fullCode:"<iframe> </iframe>"},
{id:"img", fullCode:"<img>"},
{id:"input", fullCode:"<input>"},
{id:"ins", fullCode:"<ins> </ins>"},
{id:"kbd", fullCode:"<kbd> </kbd>"},
{id:"label", fullCode:"<label> </label>"},
{id:"legend", fullCode:"<legend> </legend>"},
{id:"li", fullCode:"<li> </li>"},
{id:"link", fullCode:"<link>"},
{id:"main", fullCode:"<main> </main>"},
{id:"map", fullCode:"<map> </map>"},
{id:"mark", fullCode:"<mark> </mark>"},
{id:"marquee", fullCode:"<marquee> </marquee>"},
{id:"menu", fullCode:"<menu> </menu>"},
{id:"meta", fullCode:"<meta>"},
{id:"meter", fullCode:"<meter> </meter>"},
{id:"nav", fullCode:"<nav> </nav>"},
{id:"noscript", fullCode:"<noscript> </noscript>"},
{id:"object", fullCode:"<object> </object>"},
{id:"ol", fullCode:"<ol> </ol>"},
{id:"optgroup", fullCode:"<optgroup> </optgroup>"},
{id:"option", fullCode:"<option> </option>"},
{id:"output", fullCode:"<output> </output>"},
{id:"p", fullCode:"<p> </p>"},
{id:"param", fullCode:"<param>"},
{id:"picture", fullCode:"<picture> </picture>"},
{id:"pre", fullCode:"<pre> </pre>"},
{id:"progress", fullCode:"<progress> </progress>"},
{id:"q", fullCode:"<q> </q>"},
{id:"rb", fullCode:"<rb> </rb>"},
{id:"rp", fullCode:"<rp> </rp>"},
{id:"rt", fullCode:"<rt> </rt>"},
{id:"rtc", fullCode:"<rtc> </rtc>"},
{id:"ruby", fullCode:"<ruby> </ruby>"},
{id:"s", fullCode:"<s> </s>"},
{id:"samp", fullCode:"<samp> </samp>"},
{id:"script", fullCode:"<script> </script>"},
{id:"section", fullCode:"<section> </section>"},
{id:"select", fullCode:"<select> </select>"},
{id:"slot", fullCode:"<slot> </slot>"},
{id:"small", fullCode:"<small> </small>"},
{id:"source", fullCode:"<source>"},
{id:"span", fullCode:"<span> </span>"},
{id:"strong", fullCode:"<strong> </strong>"},
{id:"style", fullCode:"<style> </style>"},
{id:"sub", fullCode:"<sub> </sub>"},
{id:"summary", fullCode:"<summary> </summary>"},
{id:"sup", fullCode:"<sup> </sup>"},
{id:"svg", fullCode:"<svg> </svg>"},
{id:"table", fullCode:"<table> </table>"},
{id:"tbody", fullCode:"<tbody> </tbody>"},
{id:"td", fullCode:"<td> </td>"},
{id:"template", fullCode:"<template> </template>"},
{id:"textarea", fullCode:"<textarea> </textarea>"},
{id:"tfoot", fullCode:"<tfoot> </tfoot>"},
{id:"th", fullCode:"<th> </th>"},
{id:"thead", fullCode:"<thead> </thead>"},
{id:"time", fullCode:"<time> </time>"},
{id:"title", fullCode:"<title> </title>"},
{id:"tr", fullCode:"<tr> </tr>"},
{id:"track", fullCode:"<track>"},
{id:"u", fullCode:"<u> </u>"},
{id:"ul", fullCode:"<ul> </ul>"},
{id:"var", fullCode:"<var> </var>"},
{id:"video", fullCode:"<video> </video>"},
{id:"wbr", fullCode:"<wbr>"},
{id:"area", fullCode:"<area>"},
{id:"a", fullCode:"<a> </a>"},
{id:"br", fullCode:"<br>"},
];

$("#html").addEventListener("keydown", function(e){
  let input =$("#html");
   if(e.key == "Enter"){
     autoCompDat.forEach(data=>{
       let cPos = input.selectionStart;
       let tbc = input.value.slice(0, cPos);
       let tac = input.value.slice(cPos);
      if(tbc.trimEnd().toLowerCase().endsWith(data.id) == true){
        e.preventDefault();
        let changed = tbc.slice(0, tbc.lastIndexOf(data.id));
        let toInput = changed + data.fullCode + tac;
        input.value = toInput;
        input.selectionStart = cPos + 2;
        input.selectionEnd = cPos+ 2;
        input.focus();
         updatePreview();
        
      } else {updatePreview()};
       
     })
     
   }else{updatePreview()};
  
});
$("#css").addEventListener("keydown", function(e){
  let input = $("#css");
   if(e.key == "Enter"){
     autoCompCss.forEach(data=>{
       let cPos = input.selectionStart;
       let tbc = input.value.slice(0, cPos);
       let tac = input.value.slice(cPos);
      if(tbc.trimEnd().toLowerCase().endsWith(data.id) == true){
        e.preventDefault();
        let changed = tbc.slice(0, tbc.lastIndexOf(data.id));
        let toInput = changed + data.fullCode + tac;
        input.value = toInput;
        input.selectionStart = tbc.lastIndexOf(data.id)+data.fullCode.length-1;
        input.selectionEnd = tbc.lastIndexOf(data.id)+data.fullCode.length-1;
     //   input.selectionEnd = cPos+ data.fullCode.length+2-data.id.length;
        input.focus();
         updatePreview();
        
      } else {updatePreview()};
       
     })
     
   }else{updatePreview()};
  
});

/**fsp ||fse**/
function enableFsp(e){  
  if(e.checked == true){  
    fse.checked = false;  
    inputarea.style.display = "none";  
    output.style.display = "block";
    output.style.height = "94vh";  
    output.style.top = nlot;  
  }else{  
    inputarea.style.display = "block";  
    output.style.height = "47vh";  
    output.style.top = lsls == true? slot : nlot;
    inputs.forEach(input => {  
      input.style.height = "47vh";  
      input.style.top = lsls == true? slit : nlit;  
    });
  }  
};  
  
function enableFse(e){  
  if(e.checked == true){  
    fsp.checked = false;  
    output.style.display = "none";  
    inputarea.style.display = "block"; 
    inputs.forEach(input => {  
      input.style.height = "94vh";  
      input.style.top = "82px";  
    });  
  }else{  
    output.style.display = "block";  
    output.style.height = "47vh";
    output.style.top = lsls == true? slot : nlot;
    inputs.forEach(input => {  
      input.style.height = "47vh";  
      input.style.top = lsls == true? slit : nlit;  
    });  
  }  
};

function checkLayout() {
  if(lsls == true){
    output.style.top = slot;
    inputs.forEach(input => {
      input.style.top = slit;
    });
  }else{
    output.style.top = nlot;
    inputs.forEach(input => {
      input.style.top = nlit;
    })
  }
};

function swapLayout(){
  if(lsls == false){
    lsls = true;
    localStorage.setItem("layout", "shii");
    checkLayout();
  }else if(lsls == true){
    lsls = false;
    localStorage.removeItem("layout");
    checkLayout();
  }
};

/**show or hide inputs**/
function show(inp) {
  king = inp;
  if (king == 'htmlinp') {
    inputs.forEach(input => {
  input.style.display = "none"
});
   buttons.forEach(button => {
     button.style.color = "#fff"
     button.style.borderTopColor = "#2e2e2e"
   });
    html.style.display = "block";
    $('#hbtn').style.color = '#09D89E';
    $('#hbtn').style.borderTopColor = 'yellow';
    html.focus();
  }
  
  else if (king == 'cssinp') {
    inputs.forEach(input => {
  input.style.display = "none"
});

   buttons.forEach(button => {
     button.style.color = "#fff"
     button.style.borderTopColor = "#2e2e2e"
   });
    css.style.display = "block";
    $('#cbtn').style.color = '#09D89E';
    $('#cbtn').style.borderTopColor = 'yellow';
    css.focus();
  }
  
  else {
    inputs.forEach(input => {
  input.style.display = "none"
});

   buttons.forEach(button => {
     button.style.color = "#fff"
     button.style.borderTopColor = "#2e2e2e"
   });
    js.style.display = "block";
    $('#jbtn').style.color = '#09D89E';
    $('#jbtn').style.borderTopColor = 'yellow';
    js.focus();
  }
};

/**snippets**/
function snip(txtarea) {
  if (txtarea == 'css') {
  let pos = css.selectionStart;
  console.log(pos);
  let voj = pos;
  let snips = csnippets.value;
  css.value = css.value.slice(0, voj) + snips + css.value.slice(pos);
  updatePreview();
  csnippets.value = "";
}
};

/**move caret**/
function moveCaret(destination) {
  let kingEdit = window.currentInput;
  let currentPos = kingEdit.selectionStart;
  let prevChar = currentPos - 1;
  let nextChar = currentPos + 1;
  let going = destination;
  if (going == 'left') {
    let pos = Math.max(0, prevChar);
    kingEdit.selectionStart = pos;
    kingEdit.selectionEnd = pos;
    kingEdit.focus();
  } 
  else if (going == 'right') {
    let pos = Math.min(kingEdit.value.length, nextChar);
    kingEdit.selectionStart = pos;
    kingEdit.selectionEnd = pos;
    kingEdit.focus();
  }
}

/** console section **/

output.contentWindow.console.log = (...args) => {
  let kCons = document.getElementById("log-container");

  const text = args.map(arg =>
    typeof arg === "object" ? JSON.stringify(arg) : arg
  ).join(" ");

  kCons.innerHTML += `
    <div class="c-log">
      <p class="c-time">${new Date().toLocaleTimeString()}</p>
      <div class="overtext">
        <p class="c-result log">
          <i class="fa-solid fa-angle-right"></i> ${text}
        </p>
      </div>
    </div>
  `;
};

output.contentWindow.onerror = function(msg) {
  output.contentWindow.console.error("Error:", msg);
};

output.contentWindow.console.error=(text)=>{
  let kCons = document.getElementById("log-container");
kCons.innerHTML += `
<div class="c-log">
     <p class="c-time">${new Date().toLocaleTimeString()}</p>
   <div class="overtext">
     <p class="c-result err"><i class="fa-solid fa-circle-xmark"></i> ${text}</p>
   </div>
   </div>
`
};

output.contentWindow.console.warn=(text)=>{
  let kCons = document.getElementById("log-container");
kCons.innerHTML +=
 `<div class="c-log">
     <p class="c-time">${new Date().toLocaleTimeString()}</p>
   <div class="overtext">
     <p class="c-result warn"><i class="fa-solid fa-triangle-exclamation"></i> ${text}</p>
   </div>
   </div>`
};

output.contentWindow.ptc=(text)=>{
  let kCons = document.getElementById("log-container");
kCons.innerHTML += `
<div class="c-log">
     <p class="c-time">${new Date().toLocaleTimeString()}</p>
   <div class="overtext">
     <p class="c-result"> <i class="fa-solid fa-angle-left"></i> ${text}</p>
   </div>
   </div>
`
};

output.contentWindow.console.clear=()=>{
  let kCons = document.getElementById("log-container");
  kCons.innerHTML = "";
};

function scrollBottom() {
  let kCons = document.getElementById("log-container");
  kCons.scrollTop = kCons.scrollHeight;
};


//testing.

let cosInp = document.getElementById("console-input");

cosInp.onkeydown = function (e) {
  if (e.key === "Enter") {
    e.preventDefault();

    let value = cosInp.value;

    output.contentWindow.ptc(value);

    try {
      let result = output.contentWindow.eval(value);
      output.contentWindow.console.log(result);
      scrollBottom();
    } catch (error) {
      output.contentWindow.console.error(error);
      scrollBottom();
    }

    cosInp.value = "";
    scrollBottom();
  }
};

var kConsBtn = document.createElement("button");
kConsBtn.innerHTML = "⌨";
kConsBtn.id = "cbtn";

kConsBtn.style.cssText = `
  height: 40px;
  width: 40px;
  border-radius: 12px;
  border: none;
  background-color: rgba(180,180,180,0.8);
  position: fixed;
  bottom: 100px;
  right: 14px;
  font-size: 20px;
  color: white;
  z-index: 99999;
  cursor: grab;
  user-select: none;
  touch-action: none;
`;

document.body.appendChild(kConsBtn);

//  console toggle logic
function toggleConsole(){
  const cons = document.getElementById("king-ebuka-console");

  if (sessionStorage.getItem("consoleShown") === "true") {
    cons.style.display = "none";
    sessionStorage.setItem("consoleShown", "false");
  } else {
    cons.style.display = "block";
    scrollBottom();
    document.getElementById("console-input").focus();
    sessionStorage.setItem("consoleShown", "true");
  }
}

// ---------------- DRAG SYSTEM ----------------
let offsetX = 0;
let offsetY = 0;
let startX = 0;
let startY = 0;
let isDragging = false;
let hasMoved = false;

kConsBtn.addEventListener("pointerdown", (e) => {
  e.preventDefault();

  isDragging = true;
  hasMoved = false;

  startX = e.clientX;
  startY = e.clientY;

  const rect = kConsBtn.getBoundingClientRect();
  offsetX = e.clientX - rect.left;
  offsetY = e.clientY - rect.top;

  kConsBtn.style.cursor = "grabbing";
});

document.addEventListener("pointermove", (e) => {
  if (!isDragging) return;

  const dx = Math.abs(e.clientX - startX);
  const dy = Math.abs(e.clientY - startY);

  // only start drag if movement is enough
  if (dx > 5 || dy > 5) {
    hasMoved = true;
  }

  if (!hasMoved) return;

  kConsBtn.style.left = (e.clientX - offsetX) + "px";
  kConsBtn.style.top = (e.clientY - offsetY) + "px";

  kConsBtn.style.right = "auto";
  kConsBtn.style.bottom = "auto";
});

document.addEventListener("pointerup", () => {
  if (!isDragging) return;

  isDragging = false;
  kConsBtn.style.cursor = "grab";

  // treat as click if no drag happened
  if (!hasMoved) {
    toggleConsole();
  }
});

output.contentWindow.console.log("KingConsole");

output.contentWindow.onerror = function(message, source, lineno, colno, error) {
  output.contentWindow.console.error(
    `Error: ${message} at ${source}:${lineno}:${colno}`,
    error
  );
};

/*let clickCount = 0;
const versionEl = document.getElementById("version");
versionEl.addEventListener("click", () => {
  clickCount++;

  if (clickCount === 3) {
    triggerPreeks();
    clickCount = 0;
  }

  setTimeout(() => {
    clickCount = 0;
  }, 1500);
});*/


function func(){
  
}