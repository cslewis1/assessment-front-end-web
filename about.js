console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Submitted Successfully');
}

let giveCompliment = () => {
	alert("Oh Joy! You're doing great!")
}

let form = document.querySelector('#contact');
let stimpyCat = document.querySelector('#stimpy-the-cat')

form.addEventListener('submit', handleSubmit);
stimpyCat.addEventListener('mouseover', giveCompliment)