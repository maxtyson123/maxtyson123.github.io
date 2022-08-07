var i = 0;
var activeWord = 0;
var words = ['Unity','Website','App','Python',"Game","C#","JS","HTML","CSS","SQl","PHP"];
var speed = 200;
var complete = true;
var reverse = false;
var projs = {
projects: [
  {
    name : "SunnyLand",
    image : "IMAGES/sunnyland.png",
    type : "Game"
  },
  {
    name : "Para",
    image : "IMAGES/time.png",
    type : "Game"
  }
]
}

function typeWriter() {
 var typediv = document.getElementById("xyzDevloper");
 if(!complete){
    if(!reverse){
      if (i < words[activeWord].length) {
        var displayetxt = typediv.innerHTML;  
        displayetxt = displayetxt.replace("|", words[activeWord].charAt(i));
        displayetxt += "|";
        typediv.innerHTML = displayetxt;
        i++;
      }else{
        reverse = true;
        i = words[activeWord].length;
        speed = 800;
      }
    }else{
      speed = 100;
      if (i > 0) {
        var displayetxt = typediv.innerHTML;  
        displayetxt = displayetxt.replace(words[activeWord].charAt(i), "");
        displayetxt = displayetxt.replace("|", "");
        displayetxt += "|";
        typediv.innerHTML = displayetxt;
        i--;
      }else{
        complete = true;
        reverse = false;
      }
    }
   
 }else{ 
  typediv.innerHTML = "|";
  i = 0;
  activeWord = Math.floor(Math.random() * words.length);
  complete = false;
  speed = 200;
 }
 setTimeout(typeWriter, speed);
}

function setupProjs(){
  var projsContainer = document.getElementById("projectsGrid")
  var modalSlides = document.getElementById("modalSlides")
  var modalcolumns = document.getElementById("modalcolumns")
  for(let x = 0; x < projs.projects.length; x++){
    var project = projs.projects[x];
    //Display
    var projDisplay = document.createElement("div");
    projDisplay.className = "proj";
    projDisplay.onclick = function(){
      openModal();
      currentSlide(x+1);
    }
    projDisplay.style.backgroundImage = "url('"+project.image+"')";
      //Title
      var projTitlehov = document.createElement("div");
      projTitlehov.className = "projTitlehov";
        //Text
        var spacer = document.createElement("h1");
        spacer.innerHTML = "&nbsp;";
        var title = document.createElement("h1");
        title.innerHTML = project.name;
        var type = document.createElement("h4");
        type.innerHTML = project.type;
      //Title
      projTitlehov.appendChild(spacer); 
      projTitlehov.appendChild(title); 
      projTitlehov.appendChild(type); 
    //Display
    projDisplay.appendChild(projTitlehov); 
    projsContainer.appendChild(projDisplay);
    //Modal Contnet
    var mySlides = document.createElement("div");
    mySlides.className = "mySlides";
      var numbertext = document.createElement("div");
      numbertext.className = "numbertext";
      numbertext.innerHTML = (x+1)+" / "+projs.projects.length
      var img = document.createElement("img");
      img.src = project.image;
      img.style.width = "100%";
    mySlides.appendChild(numbertext);
    mySlides.appendChild(img);
    modalSlides.appendChild(mySlides);
    var column = document.createElement("div");
    column.className = "column";
    var colimg = document.createElement("img");
    colimg.src = project.image;
    colimg.style.width = "100%";
    colimg.alt = project.name;
    colimg.className = "demo cursor";
    colimg.onclick = function(){
      currentSlide(x+1)
    }
    column.appendChild(colimg);
    modalcolumns.appendChild(column);
  }
}

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

window.onload = function(){

    typeWriter();
    setupProjs();
    showSlides(slideIndex);
}
