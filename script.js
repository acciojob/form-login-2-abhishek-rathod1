//your JS code here. If required.

const fN = document.getElementById("firstName")
const lN = document.getElementById("lastName")
const pN = document.getElementById("phoneNum")
const eI = document.getElementById("emailId")

function submitInfo() {
	let first = fN.value
	let last = lN.value
	let phone = pN.value
	let email = eI.value

	alert(`First Name: ${first} Last Name: ${last} Phone Number: ${phone} Email ID: ${email}`);
	
}
