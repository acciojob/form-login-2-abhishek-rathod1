//your JS code here. If required.

const fN = document.getElementById("firstName")
const lN = document.getElementById("lastName")
const pN = document.getElementById("phoneNum")
const eI = document.getElementById("emailId")

function submitInfo() {
	let first = fN.textContent
	let last = lN.textContent
	let phone = pN.textContent
	let email = eI.textContent

	alert(`First Name: ${first} Last Name: ${last} Phone Number: ${phone} Email ID: ${email}`);
	
}
