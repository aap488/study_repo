// var clickable = document.querySelectorAll(".clickable");

// clickable.addEventListener("click", function(){
// 	clickable.textContent = "X";
// 	clickable.style.color = "red";
// });

// var test = document.querySelector("#testing");

// test.addEventListener("click", function(){
// 	test.textContent = "X"
// })


// var cellOne = document.querySelector("#one");

// cellOne.addEventListener("click", function(){
// 	if (cellOne.textContent === ''){
// 		cellOne.textContent = 'X';
// 	}else if(cellOne.textContent === 'X'){
// 		cellOne.textContent = 'O';
// 	}else if(cellOne.textContent === 'O'){
// 		cellOne.textContent = '';
// 	}
// })



// Select all <td> elements
var cells = document.querySelectorAll('td');


function changeMarker(){
	if (this.textContent === ''){
		this.textContent = 'X';
	}else if(this.textContent === 'X'){
		this.textContent = 'O';
	}else if(this.textContent === 'O'){
		this.textContent = '';
	}
}

for (var i = 0; i < cells.length; i++) {
	cells[i].addEventListener("click", changeMarker)
}