var i = 0;
var activeWord = 0;
var words = ['Unity','Website','App','Python',"Game","C#","JS","HTML","CSS","SQl","PHP"];
var randDone = [];
var speed = 200;
var complete = true;
var reverse = false;
var projs = {
projects: [
  {
    name : "SunnyLand",
    image : "IMAGES/sunnyland.png",
    type : "Game",
    source: "None",
    time: "",
    download: "",
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
  randDone.push(activeWord);
  if(randDone.length == words.length){
    randDone.length = 0;
    console.log("Reset");
  }
  function newWord(){
    activeWord = Math.floor(Math.random() * words.length);
      if(randDone.includes(activeWord))
        newWord();
  }
  newWord();
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
      var modalTitle = document.createElement("div");
      modalTitle.className = "modalTitle";
      modalTitle.innerHTML = project.name;
      var modalInfo = document.createElement("div");
      modalInfo.className = "modalInfo";
      var infokey = Object.keys(project)
      var infodat = Object.values(project)
      for(y = 0; y < infokey.length; y++){
        if(infokey[y] == "name" || infokey[y] == "image")
          continue;
          var divInfo = document.createElement("div");
          divInfo.style.clear = "both"
        var infoText = document.createElement("p");
        infoText.innerHTML = infokey[y].toUpperCase()+": ";
        infoText.style.float = "left";
        var infoText2 = document.createElement("p");
        infoText2.innerHTML = infodat[y];
        infoText2.style.float = "right";

        divInfo.appendChild(infoText);
        divInfo.appendChild(infoText2);
        modalInfo.appendChild(divInfo);
      }
      var img = document.createElement("img");
      img.src = project.image;
      img.style.width = "100%";
    mySlides.appendChild(numbertext);
    mySlides.appendChild(modalTitle);
    mySlides.appendChild(modalInfo);

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



function gotoSite(site){
  setCookie("checked","true",1);
  setTimeout (function(){
    window.location = site;
  },300)
 
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}

window.onload = function(){

  if(getCookie("checked") != "true" && !window.location.href.includes("nav.html"))
    window.location = "nav.html";
  typeWriter();
  setupProjs();
  showSlides(slideIndex);
}