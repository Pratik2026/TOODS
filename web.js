var userinput = document.getElementById('inputval');
var box = document.getElementById('item');
var addbtn = document.getElementById('btn');
let date = document.getElementById('date');

date.innerHTML = Date().slice(0,15);
function add(){

    if (userinput.value == ""){
        return;
    }

   var work = document.createElement('div');
   work.setAttribute('class', "three");
   
   var checker = document.createElement('i');
   var trashbtn = document.createElement('i');

   var text = document.createElement('p');
   text.innerText = userinput.value;

   checker.setAttribute('class',"fa-2x fa-regular fa-square");
   trashbtn.setAttribute('class',"fa-2x fa fa-trash");

   box.appendChild(work);
   work.appendChild(checker);
   work.appendChild(text);
   work.appendChild(trashbtn);

   trashbtn.addEventListener("click", (e)=>{
    work.remove();
   })

   work.addEventListener("click",(e)=>{
    if (checker.classList.contains("fa-square")){
        checker.classList.remove("fa-regular", "fa-square");
        checker.classList.add("fa-solid", "fa-square-check");
    }
    else{
        checker.classList.remove("fa-solid", "fa-square-check");
        checker.classList.add("fa-regular", "fa-square");
    }
   })

   userinput.value = "";
}

addbtn.addEventListener("click",(e)=>{
    add();
})

function control(e){

    if (e.keyCode === 13){
        add();
    }
}

document.addEventListener("keydown", control);