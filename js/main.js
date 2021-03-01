// side li selectors
let seUl = document.querySelector('.list-home')
let seLi = document.querySelectorAll(".select-li");
for (var i = 0; i < seLi.length; i++) {
  seLi[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("activee");
  current[0].className = current[0].className.replace(" activee", "");
  this.className += " activee";
  });
}

// video buttn
let vid = document.querySelector('.video-plus')
async function getVideo () {
let videoOption = {
    video: true,
    audio: true
}
const displayOption = {
    video: true,
    audio: true
}
let video = await navigator.mediaDevices.getUserMedia(videoOption)
videoElement.srcObject = video
}
vid.onclick = () => {
    getVideo()
    videoElement.style.display = "block"
}

videoElement.onclick = () => {
  videoElement.style.display = "none"
}





// ================== Search function ==================
function myFunction() {
  // Declare variables
  // var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("videoSection");
  li = ul.getElementsByTagName('article');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("p")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// // voice seaarch button
voiceButton.onclick = () => {
  // Declare variables
  input = document.getElementById('myInput');
  
  const speechRecognition = window.webkitSpeechRecognition
  const voice = new speechRecognition()
  voice.lang = "en-US"
  voice.continuous = false
  
  voice.start()
  input.placeholder = 'Listening....'
  
  voice.onresult = (event) => {
    let result = event.results[0][0].transcript
    input.value = result
    myFunction()
  }
  
  voice.onspeechend = function() {
    voice.stop();
    input.placeholder = 'Search...'
  }
} // ================== Search function end ==================





// menu icon, toggle
function myFunctions() {
  var x = document.querySelector('.sidebar')
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// scroll
let header = document.querySelector('.app__header');
let slider = document.querySelector('.categories-section')
      window.addEventListener('scroll', function(){
         header.classList.toggle("bg", window.scrollY > 1)
         slider.classList.toggle("bg", window.scrollY > 1)
      });


// add Video function

let arrStore = window.localStorage.getItem('video')
// let bas = JSON.parse(arr)
if(arrStore) {
  arrStore = JSON.parse(arrStore)
  todoRender(arrStore)
}





// let detailsDiv = document.querySelector('.video-details')
// let videoCont = document.querySelector('#videoSection')
function todoRender(array) {
  for (let element of array) {
    let article = document.createElement('article')
    let iframe = document.createElement('iframe')
    let div = document.createElement('div')
    let img = document.createElement('img')
    let p = document.createElement('p') 
    
    img.setAttribute('src', element.img)
    img.setAttribute('alt', 'obloshka')
    iframe.setAttribute('src', element.video)
    p.textContent = element.title

    iframe.classList.add('iframe')
    img.classList.add('img-link-re')
    div.classList.add('video-thumbnail')
    article.classList.add('video-container')
    
    div.appendChild(p)
    // div.appendChild(detailsImg)
    // detailsDiv.appendChild(div)
    // article.appendChild(detailsDiv)
    article.appendChild(iframe)
    article.appendChild(img)
    article.appendChild(div)
    videoSection.appendChild(article)
  }
}






// // ================== Slider sort function ==================
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// // Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// // Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
} // ================== slider sort function end ==================












var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

