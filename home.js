console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
	alert('You have successfully submited your information.')
}

let form = document.querySelector('form#contact');
let img = document.getElementById('mean-cat')

console.log(img)



form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseenter', () => {
	 alert("Don't touch the cat please.")
})