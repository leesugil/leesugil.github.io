// Each time page is loaded
document.addEventListener("DOMContentLoaded", function () {
	// Random variable(s)
	const random = Math.random();

	// NavBar backgroun image random position for STUDIO 3216
	const navBarEl = document.getElementById("bg-random-position-y-left");
	if (navBarEl) {
		const y = Math.floor(random * 101);
		navBarEl.style.backgroundPosition = `${0}% ${y}%`;
	}

	// Home (index.md) insert image randomizer
	const homeInsertEl = document.getElementById("home-insert-random");
	if (homeInsertEl) {
		const x = Math.ceil(random * 19);
		homeInsertEl.src = "/assets/img/home-"+x+".png";
	}
});
