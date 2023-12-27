let countdisplay = document.getElementById("countrender");
let count = 0;

let saverender = document.getElementById("save-el");



function increment(){
    count += 1;
    countdisplay.textContent = count;
    
}
function save(){
    savestr = count + " - ";;
    saverender.textContent += savestr; 
    countdisplay.textContent = 0;
     count = 0;


}



    
