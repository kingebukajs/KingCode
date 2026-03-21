/*👑King Ebuka👑 Toast library*/
window.addEventListener("load", chiz);
function chiz() {
   let kingtst = document.createElement("toast");
    kingtst.id = "toast"
    kingtst.innerText = "";
    kingtst.style.height = "30px";
    kingtst.style.whiteSpace = "nowrap";
    kingtst.style.width = "fit-content";
    kingtst.style.background = "grey";
    kingtst.style.color = "white";
    kingtst.style.borderRadius = "50px";
    kingtst.style.padding = "10px";
    kingtst.style.opacity = "0.8";
    kingtst.style.position = "fixed";
    kingtst.style.top = "80%";
    kingtst.style.left = "50%";
    kingtst.style.zIndex = "99999";
    kingtst.style.alignContent = "center";
    kingtst.style.textAlign = "center";
    kingtst.style.display = "none";
    kingtst.style.transform = "translateX(-50%)";
    document.body.appendChild(kingtst);
    window.Toast = document.getElementById("toast");
};

function toast(text) {
   Toast.style.display = "block";
   Toast.innerHTML = `<span style="{font-size: 12px;}"> ${text} </span>`;
   setTimeout(() => {Toast.style.display = "none"}, 2000);
}
/*Copyright © King Ebuka*/
/* 👑👑👑👑👑👑👑👑👑👑*/