
// Selected elements
const start = document.getElementById("start");
const startButton = document.getElementById("startButton");
const quizDiv = document.getElementById("quiz");
const counter = document.getElementById("counter");
const bar = document.getElementById("bar");
const respuestaA = document.getElementById("A");
const respuestaB = document.getElementById("B");
const resultado = document.getElementById("resultado");
const quizPreguntas = document.getElementById("quizPreguntas");
const btnsi = document.getElementById("si");
const btnno = document.getElementById("no");
const monoimg = document.getElementById("monoimg");
const divCounter = document.getElementById("divCounter");

// Listeners
startButton.addEventListener("click", startQuiz);

// Preguntas
let preguntas = [
	{
		img : "img/tuit1.jpg",
		c : 5,
		r : 5,
		m : 7,
	}, {
		img : "img/tuit2.jpg",
		c : 5,
		r : 5,
		m : 7,
	}, {
		img : "img/tuit3.jpg",
		c : 5,
		r : 5,
		m : 0,
	}, {
		img : "img/tuit4.jpg",
		c : 0,
		r : 0,
		m : 7,
	}, {
		img : "img/tuit5.jpg",
		c : 0,
		r : 5,
		m : 0,
	}, {
		img1 : "img/1i.png",
		ci : 0,
		ri : 0,
		mi : 0,
		img2 : "img/1d.png",
		cd : 5,
		rd : 5,
		md : 0,
	}, {
		img1 : "img/2i.png",
		ci : 0,
		ri : 0,
		mi : 0,
		img2 : "img/2d.png",
		cd : 5,
		rd : 5,
		md : 0,
	}, {
		img1 : "img/3i.png",
		ci : 0,
		ri : 0,
		mi : 0,
		img2 : "img/3d.png",
		cd : 5,
		rd : 5,
		md : 0,
	}, {
		img1 : "img/4i.png",
		ci : 5,
		ri : 5,
		mi : 0,
		img2 : "img/4d.png",
		cd : 0,
		rd : 0,
		md : 0,
	}, {
		img : "img/yt1.png",
		c : 5,
		r : 5,
		m : 0,
	}, {
		img : "img/yt2.png",
		c : 0,
		r : 0,
		m : 7,
	}, {
		img : "img/yt3.png",
		c : 5,
		r : 5,
		m : 0,
	}, {
		img : "img/yt4.png",
		c : 5,
		r : 0,
		m : 7,
	}, {
		img : "img/yt5.png",
		c : 0,
		r : 0,
		m : 0,
	}, {
		img : "img/yt6.png",
		c : 0,
		r : 0,
		m : 0,
	}, {
		img : "img/yt7.png",
		c : 0,
		r : 0,
		m : 0,
	}, {
		img : "img/yt8.png",
		c : 5,
		r : 5,
		m : 0,
	}, {
		img : "img/yt9.png",
		c : 5,
		r : 5,
		m : 7,
	}, {
		img : "img/yt10.png",
		c : 5,
		r : 5,
		m : 0,
	}, {
		img : "img/yt11.png",
		c : 5,
		r : 5,
		m : 0,
	}, {
		img : "img/f1.png",
		c : 0,
		r : 0,
		m : 7,
	}, {
		img : "img/f2.png",
		c : 5,
		r : 5,
		m : 0,
	}, {
		img : "img/f3.png",
		c : 5,
		r : 5,
		m : 0,
	}, {
		img : "img/f4.png",
		c : 0,
		r : 0,
		m : 7,
	}, {
		img : "img/f5.png",
		c : 0,
		r : 0,
		m : 0,
	}, {
		img : "img/f6.png",
		c : 0,
		r : 0,
		m : 0,
	}, {
		img : "img/f7.png",
		c : 0,
		r : 0,
		m : 7,
	}, {
		img : "img/f8.png",
		c : 0,
		r : 5,
		m : 7,
	}, {
		img : "img/f9.png",
		c : 0,
		r : 0,
		m : 0,
	}, {
		img : "img/f10.png",
		c : 0,
		r : 0,
		m : 0,
	}, {
		img : "img/info1.png",
		c : 5,
		r : 5,
		m : 7,
	}, {
		img : "img/info2.png",
		c : 0,
		r : 0,
		m : 0,
	}, {
		img : "img/info3.png",
		c : 0,
		r : 0,
		m : 7,
	}, {
		img : "img/info4.png",
		c : 5,
		r : 5,
		m : 7,
	}, {
		img : "img/info5.png",
		c : 5,
		r : 5,
		m : 7,
	},
];

// Variables
const ultPregunta = preguntas.length - 1;
let preguntaActual = 0;
let count = 0;
const tiempo = 15; // 15s
const longitud = 100; // 100%
const unidad = longitud / tiempo;
let TIMER;
let calificacion = 0;
let clasismo = 0;
let racismo = 0;
let machismo = 0;


// Funcion para iniciar el quiz
function startQuiz() {
	start.style.display = "none";
	crearPregunta();
	quizPreguntas.style.display = "block";
	divCounter.style.display = "block";
	contador();
	TIMER = setInterval(contador, 1000);
}


// Funcion para crear pregunta
function crearPregunta() {
	let q = preguntas[preguntaActual];
	// Creamos un onclick que al ser presionado el div seleccionado, este activa la funcion score pasando como parametro el valor de la pregunta
	monoimg.innerHTML = `<img src="${q.img}" class="img">`;
	btnsi.innerHTML = `<div onclick="score(${q.c}, ${q.r}, ${q.m})"><button class="btn btn-light boton" id="si">SÍ</button></div>`;
	btnno.innerHTML = `<div onclick="score(0, 0, 0)"><button class="btn btn-light boton" id="no">NO</button></div>`;
}

function crearInsta() {
	console.log("Entra Insta");
	let i = preguntas[preguntaActual];
	respuestaA.innerHTML = `<div onclick="score(${i.ci}, ${i.ri}, ${i.mi})"><img src="${i.img1}" class="img"></div>`;
	respuestaB.innerHTML = `<div onclick="score(${i.cd}, ${i.rd}, ${i.md})"><img src="${i.img2}" class="img"></div>`;
	console.log("indice: " + preguntaActual);
}


// Funcion para el contador de tiempo
function contador() {
	if (count <= tiempo) {
		counter.innerHTML = count;
		bar.style.width = (count * unidad) + "%";
		count++;
	} else {
		count = 0;
	if (preguntaActual < ultPregunta) {
		if (preguntaActual > 3 && preguntaActual < 8) {
			// Preguntas de Instagram segun el orden en el array
			console.log("Zona de preguntas de Insta");
			preguntaActual++;
			quizPreguntas.style.display = "none";
			quizDiv.style.display = "block";
			crearInsta();
		} else {
			preguntaActual++;
			quizDiv.style.display = "none";
			quizPreguntas.style.display = "block";
			crearPregunta();
		}
	} else {
		// De no haber mas preguntas, terminamos el quiz y detenemos el tiempo
		console.log(`"El quiz ha terminado con la calificacion: \nClasismo: ${clasismo}\nRacismo: ${racismo}\nMachismo: ${machismo}."`);
		quizDiv.style.display = "none";
		clearInterval(TIMER);
		mostrarResultado();
		}
	}
}

// Funcion para el score
function score(c, r, m) {
	clasismo += c;
	racismo += r;
	machismo += m;
	count = 0;
	console.log("Puntuaciones: C = " + clasismo + " R = " + racismo + " M = " + machismo);
	if (preguntaActual < ultPregunta) {
		if (preguntaActual > 3 && preguntaActual < 8) {
			// Preguntas de Instagram segun el orden en el array
			preguntaActual++;
			quizPreguntas.style.display = "none";
			quizDiv.style.display = "block";
			crearInsta();
		} else {
			preguntaActual++;
			quizDiv.style.display = "none";
			quizPreguntas.style.display = "block";
			crearPregunta();
		}
	} else {
		// De no haber mas preguntas, terminamos el quiz y detenemos el tiempo
		console.log(`"El quiz ha terminado con la calificacion: \nClasismo: ${clasismo}\nRacismo: ${racismo}\nMachismo: ${machismo}."`);
		quizDiv.style.display = "none";
		clearInterval(TIMER);
		mostrarResultado();
	}
}

// Funcion para mostrar el resultado
function mostrarResultado() {
	resultado.style.display = "block";

	const porcentaje = 100 * (calificacion / preguntas.length);

	let img = 	(porcentaje >= 80) ? "img/5.png" :
				(porcentaje >= 60) ? "img/4.png" :
				(porcentaje >= 40) ? "img/3.png" :
				(porcentaje >= 20) ? "img/2.png" :
				"img/1.png";

	resultado.innerHTML = `<img src="${img}">`;
	resultado.innerHTML += `<p>Resultado: ${porcentaje}%</p>`;

}



