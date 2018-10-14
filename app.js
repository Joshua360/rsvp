const form = document.getElementById("registrar");
const input = form.querySelector("input");
const ul = document.getElementById("invitedList")

form.addEventListener("submit", (e)=>{
	e.preventDefault();
	const name = input.value;
	input.value ='';

	//creating the li items
	const li = document.createElement("li");
	li.textContent = name;
	ul.appendChild(li);

	//creating the label 
	const label = document.createElement("label");
	label.textContent = "confirmed";
	li.appendChild(label);

	//creating the checkbox

	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	label.appendChild(checkbox);


//making a deleteButton and appending it to every created li

const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";
li.appendChild(deleteButton);

//adding a bottom border on every li on checked


ul.addEventListener("change", (e)=>{
	const checkbox = e.target;
	const checked = checkbox.checked;
	const li =checkbox.parentNode.parentNode;

	if(checked){
		li.className = "responded";

	}else {
		li.className = " ";
	}
});

//making the deleteButton work

ul.addEventListener("click", (e)=>{

	if(e.target.tagName === "BUTTON"){
		const button = e.target;
		const listItem = button.parentNode;
		const ul = listItem.parentNode;
		ul.removeChild(listItem);
	}

});




});