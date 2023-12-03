/*navigator.splashscreen.show();
window.setTimeout(function () {
	navigator.splashscreen.hide();
}, splashDuration - fadeDuration);*/

// document.addEventListener("DOMContentLoaded", function (event) {
//   pokaziPocetnu();
// });
function pokaziPocetnu() {
	document.getElementById("mojProfil").hidden = true;
	document.getElementById("home").hidden = false;
	document.getElementById("gumbprofil").classList.remove("active");
	document.getElementById("gumbhome").classList.add("active");
	document.getElementById("gumbprofilikona").classList.remove("active");
	document.getElementById("gumbhomeikona").classList.add("active");
	document.getElementById("bolesti").hidden = true;
	document.getElementById("lijekovi").hidden = true;
	document.getElementById("prirodni").hidden = true;
	document.getElementById("filter-container").classList.add("hide");
	document.getElementById("filter-container2").classList.add("hide");
	document.getElementById("filter-container3").classList.add("hide");
	document.getElementById("mojProfil").classList.add("hide");
	bolestiListContainer.style.display = "none";
	lijekoviListContainer.style.display = "none";
	prirodniLijekoviListContainer.style.display = "none";
}

function pokaziMojProfil() {
	document.getElementById("mojProfil").hidden = false;
	document.getElementById("home").hidden = true;
	document.getElementById("gumbprofil").classList.add("active");
	document.getElementById("gumbhome").classList.remove("active");
	document.getElementById("gumbprofilikona").classList.add("active");
	document.getElementById("gumbhomeikona").classList.remove("active");
	document.getElementById("bolesti").hidden = true;
	document.getElementById("lijekovi").hidden = true;
	document.getElementById("prirodni").hidden = true;
	document.getElementById("filter-container").classList.add("hide");
	document.getElementById("filter-container2").classList.add("hide");
	document.getElementById("filter-container3").classList.add("hide");
	document.getElementById("mojProfil").classList.remove("hide");
	bolestiListContainer.style.display = "none";
	lijekoviListContainer.style.display = "none";
	prirodniLijekoviListContainer.style.display = "none";
}

function pokaziLijekove() {
	document.getElementById("home").hidden = true;
	document.getElementById("bolesti").hidden = true;
	document.getElementById("lijekovi").hidden = false;
	document.getElementById("prirodni").hidden = true;

	document.getElementById("filter-container").classList.remove("hide");
	document.getElementById("filter-container2").classList.add("hide");
	document.getElementById("filter-container3").classList.add("hide");
	document.getElementById("mojProfil").classList.add("hide");
	pokaziSveLijekove();
	bolestiListContainer.style.display = "none";
	prirodniLijekoviListContainer.style.display = "none";
}

function pokaziBolesti() {
	document.getElementById("home").hidden = true;
	document.getElementById("bolesti").hidden = false;
	document.getElementById("lijekovi").hidden = true;
	document.getElementById("prirodni").hidden = true;
	document.getElementById("filter-container").classList.add("hide");
	document.getElementById("filter-container2").classList.remove("hide");
	document.getElementById("filter-container3").classList.add("hide");
	document.getElementById("mojProfil").classList.add("hide");
	pokaziSveBolesti();
	lijekoviListContainer.style.display = "none";
	prirodniLijekoviListContainer.style.display = "none";
}

function pokaziNarodnu() {
	document.getElementById("home").hidden = true;
	document.getElementById("bolesti").hidden = true;
	document.getElementById("lijekovi").hidden = true;
	document.getElementById("prirodni").hidden = false;
	document.getElementById("filter-container").classList.add("hide");
	document.getElementById("filter-container2").classList.add("hide");
	document.getElementById("filter-container3").classList.remove("hide");
	document.getElementById("mojProfil").classList.add("hide");
	pokaziSvePrirodneLijekove();
	bolestiListContainer.style.display = "none";
	lijekoviListContainer.style.display = "none";
}

function izracunajIndeks() {
	var tezina = document.getElementById("tezina").value;
	var visina = document.getElementById("visina").value;

	if (tezina && visina) {
		var bmi = (tezina / ((visina / 100) * (visina / 100))).toFixed(2);
		displayResult(bmi);
	} else {
		alert("Unesite i visinu i težinu.");
	}
}

function displayResult(bmi) {
	var resultElement = document.getElementById("rezultat");

	var imageElement = document.getElementById("rezultatimg");

	if (bmi < 18.5) {
		imageElement.src = "./img/pothranjenost.png";
	} else if (bmi < 24.9) {
		imageElement.src = "./img/normalna_tezina.png";
	} else if (bmi < 29.9) {
		imageElement.src = "./img/prekomjerna_tezina.png";
	} else if (bmi < 40) {
		imageElement.src = "./img/pretilost.png";
	} else {
		imageElement.src = "./img/ekstremna_pretilost.png";
	}

	resultElement.innerHTML = "Tvoj BMI je: " + bmi;
}

function Reset() {
	document.getElementById("tezina").value = "";
	document.getElementById("visina").value = "";
	document.getElementById("rezultat").innerHTML = "";
	document.getElementById("rezultatimg").src = "";
}

// funkcija koja mice dijakriticke znakove

function prilagodiImeStranice(str) {
	return str
		.toLowerCase()
		.replace(/\s+/g, "-") // razmak = -
		.replace(/[čć]/g, "c") // č, ć = c
		.replace(/š/g, "s") // š = s
		.replace(/[žž]/g, "z") // ž = z
		.replace(/[đ]/g, "d"); // đ = d
}

function handleItemClick(li) {
	window.location.href = prilagodiImeStranice(li) + ".html";
}

//*filter lijekovi

const lijekoviData = {
	A: ["Aspirin", "Antibiotik", "Antidepresiv"],
	B: ["Benzodiazepin", "Beta blokator", "Biljni pripravak"],
	C: ["Ciklosporin", "Cipralex", "Cetirizin"],
	D: ["Diazepam", "Diklofenak", "Difenhidramin"],
	E: ["Enalapril", "Eritromicin", "Escitalopram"],
	F: ["Famotidin", "Fenobarbital", "Furosemid"],
	G: ["Gabapentin", "Gentamicin", "Ginko Biloba"],
	H: ["Hidroklorotiazid", "Hormonska terapija", "Heparin"],
	I: ["Ibuprofen", "Insulin", "Imunoglobulin"],
	J: ["Jačanje kostiju", "Jodomarin", "Jednostavna analgetika"],
	K: ["Kalcij", "Kaptopril", "Ketoprofen"],
	L: ["Laksativ", "Levofloksacin", "Letrozol"],
	M: ["Metformin", "Metoprolol", "Mirtazapin"],
	N: ["Naproxen", "Nitrati", "Nortriptilin"],
	O: ["Omeprazol", "Oksikodon", "Ondansetron"],
	P: ["Paracetamol", "Prednizon", "Propranolol"],
	R: ["Ranitidin", "Rosuvastatin", "Rituximab"],
	S: ["Salbutamol", "Sertralin", "Statini"],
	T: ["Tramadol", "Tretinoin", "Tamsulosin"],
	U: ["Ursodeoksiholna kiselina", "Ustekinumab", "Ubikinon"],
	V: ["Vitamini", "Valsartan", "Venlafaksin"],
	Z: ["Zopiclon", "Zolpidem", "Zovirax"],
};

const lijekoviListContainer = document.getElementById("lijekovi");

function filterLijekovi(letter) {
	const lijekoviForLetter = lijekoviData[letter] || [];

	displayLijekovi(lijekoviForLetter);

	hideLijekoviForOtherLetters(letter);

	document.getElementById("lijekovi").style.display = "block";
}

function hideLijekoviForOtherLetters(selectedLetter) {
	const lijekoviListContainer = document.getElementById("lijekovi");
	for (const letter in lijekoviData) {
		if (letter !== selectedLetter) {
			if (lijekoviListContainer) {
				lijekoviListContainer.style.display = "none";
			}
		}
	}
}

function displayLijekovi(lijekovi) {
	const lijekoviListContainer = document.getElementById("podacilijekovi");

	lijekoviListContainer.innerHTML = "";

	const lijekoviContainer = document.createElement("div");
	lijekoviContainer.className = "lijekovi-container";

	lijekovi.forEach((li) => {
		const lijekDiv = document.createElement("div");

		// link koji vodi do tog lijeka
		const clickableItem = document.createElement("a");
		clickableItem.href = li.toLowerCase() + ".html";
		clickableItem.textContent = li;
		clickableItem.addEventListener("click", function (event) {
			event.preventDefault();
			handleItemClick(li);
		});

		lijekDiv.appendChild(clickableItem);
		lijekoviContainer.appendChild(lijekDiv);
	});

	lijekoviListContainer.appendChild(lijekoviContainer);
}

// POKAZI SVE
function pokaziSveLijekove() {
	displayLijekovi(Object.values(lijekoviData).flat());
	showLijekoviContainer();
}
function showLijekoviContainer() {
	if (lijekoviListContainer) {
		lijekoviListContainer.style.display = "block";
	}
}

//*bolesti

const bolestiData = {
	A: ["Alergije", "Artritis", "Astma"],
	B: ["Bipolarni poremećaj", "Bolesti srca", "Bronhitis"],
	C: ["Ciroza jetre", "Cistična fibroza", "Cista"],
	D: ["Dijabetes", "Dizenterija", "Depresija"],
	E: ["Epilepsija", "Endometrioza", "Ekcem"],
	F: ["Fibromijalgija", "Febrilne konvulzije"],
	G: ["Glavobolja", "Gripa", "Grlobolja"],
	H: ["Hipertenzija", "Hepatitis", "HIV/AIDS"],
	I: ["Infarkt", "Insomnija", "Išijas"],
	J: ["Jadež", "Jetrena insuficijencija"],
	K: ["Katarakta", "Kolitis", "Karcinom"],
	L: ["Leukemija", "Lupus"],
	M: ["Migrena", "Multipla skleroza", "Meningitis"],
	N: ["Narkolepsija", "Neuralgija", "Nadutost"],
	O: ["Osteoporoza", "Oboljenja bubrega"],
	P: ["Parkinsonova bolest", "Pneumonija", "Psihoza"],
	R: ["Reumatoidni artritis", "Rak dojke", "Rinitis"],
	S: ["Šećerna bolest", "Sinusitis"],
	T: ["Tuberkuloza", "Tromboza", "Trudnički dijabetes"],
	U: ["Ulcer", "Ulcerozni kolitis"],
	V: ["Virusne infekcije", "Vitiligo"],
	Z: ["Zauške", "Zubobolja"],
};

const bolestiListContainer = document.getElementById("bolesti");

// pokazuje bolesti koje pocinju na odabrano slovo
function filterBolesti(letter) {
	const bolestiForLetter = bolestiData[letter] || [];

	displayBolesti(bolestiForLetter);

	hideBolestiForOtherLetters(letter);

	bolestiListContainer.style.display = "block";
}

//sakriva sve osim odabranog slova
function hideBolestiForOtherLetters(selectedLetter) {
	for (const letter in bolestiData) {
		if (letter !== selectedLetter) {
			if (bolestiListContainer) {
				bolestiListContainer.style.display = "none";
			}
		}
	}
}

function displayBolesti(bolesti) {
	const bolestiListContainer = document.getElementById("podaci");

	bolestiListContainer.innerHTML = "";

	const bolestiContainer = document.createElement("div");
	bolestiContainer.className = "bolesti-container";

	bolesti.forEach((li) => {
		const bolestDiv = document.createElement("div");

		// link koji vodi do te bolesti
		const clickableItem = document.createElement("a");
		clickableItem.href = li.toLowerCase() + ".html";
		clickableItem.textContent = li;
		clickableItem.addEventListener("click", function (event) {
			event.preventDefault();
			handleItemClick(li);
		});

		bolestDiv.appendChild(clickableItem);
		bolestiContainer.appendChild(bolestDiv);
	});

	bolestiListContainer.appendChild(bolestiContainer);
}

// POKAZI SVE
function pokaziSveBolesti() {
	displayBolesti(Object.values(bolestiData).flat());
	showBolestiContainer();
}
function showBolestiContainer() {
	if (bolestiListContainer) {
		bolestiListContainer.style.display = "block";
	}
}

//*filter prirodno

const prirodniLijekoviData = {
	A: ["Aloe vera", "Anis", "Arnika"],
	B: ["Bazga", "Bosiljak"],
	C: ["Cimet", "Čaj od kamilice", "Češnjak"],
	D: ["Đumbir"],
	E: ["Eukaliptus"],
	F: ["Fenjerasta kopriva", "Feniks perunika"],
	G: ["Gavez", "Ginkgo biloba"],
	H: ["Hajdučka trava"],
	I: ["Imela", "Ivančica"],
	J: ["Jasmin"],
	K: ["Kamilica", "Kopriva", "Kurkuma"],
	L: ["Lavanda", "Limun"],
	M: ["Majčina dušica", "Maslačak", "Matricarija", "Menta"],
	N: ["Neven", "Njegač", "Njemačka kamilica"],
	O: ["Origano"],
	P: ["Pelargonij", "Pelud", "Peršin"],
	R: ["Rajčica", "Ružmarin"],
	S: ["Sljez", "Stolisnik"],
	T: ["Timijan"],
	U: ["Ulje crnog kima"],
	V: ["Valerijana", "Vinova loza", "Vitamin C"],
	Z: ["Zeleni čaj", "Zlatni korijen", "Žutika"],
};

const prirodniLijekoviListContainer = document.getElementById("prirodni");

// filtriraj kad se klikne na pojedino slovo
function prirodniLijekovi(letter) {
	const prirodniForLetter = prirodniLijekoviData[letter] || [];

	displayPrirodni(prirodniForLetter);

	hidePrirodniForOtherLetters(letter);

	prirodniLijekoviListContainer.style.display = "block";
}

function hidePrirodniForOtherLetters(selectedLetter) {
	for (const letter in prirodniLijekoviData) {
		if (letter !== selectedLetter) {
			if (prirodniLijekoviListContainer) {
				prirodniLijekoviListContainer.style.display = "none";
			}
		}
	}
}

// pokazi popis prirodnih lijekova
function displayPrirodni(prirodni) {
	const prirodniListContainer = document.getElementById("podaciprirodni");
	prirodniListContainer.innerHTML = "";

	const prirodniContainer = document.createElement("div");
	prirodniContainer.className = "prirodni-container";

	prirodni.forEach((li) => {
		const prirodniDiv = document.createElement("div");

		// link koji vodi do tog prirodnog lijeka
		const clickableItem = document.createElement("a");
		clickableItem.href = li.toLowerCase() + ".html";
		clickableItem.textContent = li;
		clickableItem.addEventListener("click", function (event) {
			event.preventDefault();
			handleItemClick(li);
		});

		prirodniDiv.appendChild(clickableItem);
		prirodniContainer.appendChild(prirodniDiv);
	});

	prirodniListContainer.appendChild(prirodniContainer);
}

// POKAZI SVE
function pokaziSvePrirodneLijekove() {
	displayPrirodni(Object.values(prirodniLijekoviData).flat());
	showPrirodniLijekoviContainer();
}
function showPrirodniLijekoviContainer() {
	if (prirodniLijekoviListContainer) {
		prirodniLijekoviListContainer.style.display = "block";
	}
}
