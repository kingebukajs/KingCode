/*KingCode v6.0*/
console.log("##KingCode v6.0##");
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
    let message1 = ">_Booting_King_Ebuka_Code_Editor...";
    let message2 = ">_Checking_system_environment...";
    let message3 = ">_Loading_editor_engine...";
    let message4 = ">_Loading_developer_console...";
    let message5 = ">_Initializing_IDE_modules...";
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

/**update code**/
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
let autoCompDat = [
{id:"a", fullCode:"<a> </a>"},
{id:"abbr", fullCode:"<abbr> </abbr>"},
{id:"address", fullCode:"<address> </address>"},
{id:"area", fullCode:"<area>"},
{id:"article", fullCode:"<article> </article>"},
{id:"aside", fullCode:"<aside> </aside>"},
{id:"audio", fullCode:"<audio> </audio>"},
{id:"b", fullCode:"<b> </b>"},
{id:"base", fullCode:"<base>"},
{id:"bdi", fullCode:"<bdi> </bdi>"},
{id:"bdo", fullCode:"<bdo> </bdo>"},
{id:"blockquote", fullCode:"<blockquote> </blockquote>"},
{id:"body", fullCode:"<body> </body>"},
{id:"br", fullCode:"<br>"},
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
{id:"wbr", fullCode:"<wbr>"}
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
        
      } else {return; updatePreview()};
       
     })
     
   }else{ return; updatePreview()};
  
})

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
}

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
}


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
  output.contentWindow.console.log("Iframe error:", msg);
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
    } catch (error) {
      output.contentWindow.console.error(error);
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
  z-index: 9999;
`;
kConsBtn.onclick = ()=>{
  if (sessionStorage.getItem("consoleShown") == "true") {
    document.getElementById("king-ebuka-console").style.display = "none";
     sessionStorage.setItem("consoleShown", "false");
  }else{
    document.getElementById("king-ebuka-console").style.display = "block";
      document.getElementById("console-input").focus();
    sessionStorage.setItem("consoleShown", "true");
  }
};

document.body.appendChild(kConsBtn);
let offsetX = 0;
let offsetY = 0;
let isDragging = false;

kConsBtn.style.cursor = "grab";

kConsBtn.addEventListener("pointerdown", startDrag);
kConsBtn.addEventListener("touchstart", startDrag, { passive: false });

function startDrag(e) {
  isDragging = true;
  kConsBtn.style.cursor = "grabbing";

  let clientX = e.touches ? e.touches[0].clientX : e.clientX;
  let clientY = e.touches ? e.touches[0].clientY : e.clientY;

  const rect = kConsBtn.getBoundingClientRect();
  offsetX = clientX - rect.left;
  offsetY = clientY - rect.top;

  document.body.appendChild(kConsBtn);
}

document.addEventListener("pointermove", moveDrag);
document.addEventListener("touchmove", moveDrag, { passive: false });

function moveDrag(e) {
  if (!isDragging) return;

  if (e.cancelable) e.preventDefault(); // stop page scroll

  let clientX = e.touches ? e.touches[0].clientX : e.clientX;
  let clientY = e.touches ? e.touches[0].clientY : e.clientY;

  kConsBtn.style.left = `${clientX - offsetX}px`;
  kConsBtn.style.top = `${clientY - offsetY}px`;

  kConsBtn.style.right = "auto";
  kConsBtn.style.bottom = "auto";
}

document.addEventListener("pointerup", endDrag);
document.addEventListener("touchend", endDrag);

function endDrag() {
  isDragging = false;
  kConsBtn.style.cursor = "grab";
};

output.contentWindow.console.log("KingConsole");

output.contentWindow.onerror = function(message, source, lineno, colno, error) {
  output.contentWindow.console.error(
    `Error: ${message} at ${source}:${lineno}:${colno}`,
    error
  );
};



function func(){
  
}