

// Useful JavaScript


// Adding text to an element in an HTML file.
var myHeader = "This is my Header!";
document.getElementById("header").innerHTML = myHeader;


// Example of a Object Method.
var userObject = {
	firstName: "John",
	lastName: "Smith",
	fullName: function() {
		console.log("The users full name is " + this.firstName + " " + this.lastName + ".")
	}
}

userObject.fullName()


// Functions
function camelCase(string){
	// Returns a string with the first letter capitalized.

	var newString = string.charAt(0).toUpperCase() + string.slice(1);
	return newString;
}

function deleteItem(array, arrayItem){
	// Delete an item from an array by the items value. 

     var index = array.indexOf(arrayItem);
     array.splice(index, 1); 
}