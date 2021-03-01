let form = document.querySelector('#addForm')
let inputs = document.querySelectorAll('#input')
let button = document.querySelector('#addBtn')
let videoInput = inputs[0]
let imgInput = inputs[1]
let textInput = inputs[2]

let storedVideos = window.localStorage.getItem('video') || []

// function todoRender(array) {
// 	for (let todo of array) {
// 		let li = document.createElement('li')
// 		let span = document.createElement('span')
// 		let button = document.createElement('button')

// 		span.textContent = todo
// 		span.contentEditable = true
// 		button.textContent = 'X'
// 		button.classList.add('rem-btn')

// 		li.appendChild(span)
// 		li.appendChild(button)
// 		list.appendChild(li)
// 	}
// 	removeItems()
// }


    button.onclick = (event) => {
        if(!(videoInput.value == "") && !(imgInput.value == "") && !(textInput.value == "")) {
        storedVideos.push({video: videoInput.value, img: imgInput.value, title: textInput.value})
        window.localStorage.setItem('video', JSON.stringify(storedVideos))
        // todoRender([event.target.value])
        videoInput.value = null
        imgInput.value = null
        textInput.value = null
    }
    }
    
    form.onsubmit = (event) => {
        event.preventDefault()
    }

        // storedTodos.push(result)
	    // window.localStorage.setItem('todo', JSON.stringify(storedTodos))
        // todoRender([result])


function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
//   alert("Copied the text: " + copyText.value);
}
