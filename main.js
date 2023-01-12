







 var nam=document.querySelector("#Ename");
 var wishes=document.querySelector(".wishes");
 var message=document.querySelector(".msg");
 var contain=document.querySelector(".img-responsive")
var image=document.querySelector(".cont-img");
var files=document.querySelector(".select-img");
// console.log(wishes.value);

function clicked(){
    // var x = document.querySelector(".wishes");
    var i = wishes.selectedIndex;
     var w=wishes.options[i].text; 
   
    // image
    let img=image.src;
    contain.src=img;
    // console.log(img);
    document.getElementById("demo").innerHTML ="Hello"+","+ nam.value+"Happy"+" "+w+" "+message.value;
}

function previewFile() {
    const preview = document.getElementById('preview');
    const file = document.getElementById('upload').files[0];
    const reader = new FileReader();
  
    // listen for 'load' events on the FileReader
    reader.addEventListener("load", function () {
      // change the preview's src to be the "result" of reading the uploaded file (below)
      preview.src = reader.result;
    }, false);
  
    // if there's a file, tell the reader to read the data
    // which triggers the load event above
    if (file) {
      reader.readAsDataURL(file);
    }
  }
 

//   buttons
var xmas=document.querySelector('#xmas');
var newYear=document.querySelector('#new');
var pongal=document.querySelector('#pongal');
var pooja=document.querySelector('#pooja');
var diwali=document.querySelector('#diwali');
const select = document.querySelector('select');

xmas.addEventListener("click",()=>{
     select.value="X'mas";
})
newYear.addEventListener("click",()=>{
    select.value="Newyear";
})
pongal.addEventListener("click",()=>{
    select.value="Pongal";
})
pooja.addEventListener("click",()=>{
    select.value="Pooja";
})
diwali.addEventListener("click",()=>{
    select.value="Diwali";
})

// gift
function show(){
  alert('please purchase 5cards')
}






