
// Selected elements
const start = document.getElementById("start");
const startButton = document.getElementById("startButton");
const quizDiv = document.getElementById("quiz");
const counter = document.getElementById("counter");
const bar = document.getElementById("bar");
const respuestaA = document.getElementById("A");
const respuestaB = document.getElementById("B");
const resultado = document.getElementById("datos");
const quizPreguntas = document.getElementById("quizPreguntas");
const btnsi = document.getElementById("si");
const btnno = document.getElementById("no");
const monoimg = document.getElementById("monoimg");
const divCounter = document.getElementById("divCounter");
const tituloQ = document.getElementById("tituloQ");
const tituloQP = document.getElementById("tituloQP");
//const datos = document.getElementById("datos");
const mensaje1 = document.getElementById("p-mensaje1");
const mensaje2 = document.getElementById("p-mensaje2");
const tit = document.getElementById("tit")
const grafica = document.getElementById("resultado");
const seccion = document.getElementById("seccion");
const tituloSeccion = document.getElementById("titulo-seccion");
const subtituloSeccion = document.getElementById("subtitulo-seccion");
const send = document.getElementById("send");

// Listeners
startButton.addEventListener("click", startQuiz);

// Preguntas
let preguntas = [
	{
		img : "img/tuit1.jpg",
		c : 5,
		r : 5,
		m : 7,
		title : "¿Te gusta el tuit?",
	}, {
		img : "img/tuit2.jpg",
		c : 5,
		r : 5,
		m : 7,
		title : "¿Te gusta el tuit?",
	}, {
		img : "img/tuit3.jpg",
		c : 5,
		r : 5,
		m : 0,
		title : "¿Te gusta el tuit?",
	}, {
		img : "img/tuit4.jpg",
		c : 0,
		r : 0,
		m : 7,
		title : "¿Te gusta el tuit?",
	}, {
		img : "img/tuit5.jpg",
		c : 0,
		r : 5,
		m : 0,
		title : "¿Te gusta el tuit?",
	}, {
		img1 : "img/1i.png",
		ci : 0,
		ri : 0,
		mi : 0,
		img2 : "img/1d.png",
		cd : 5,
		rd : 5,
		md : 0,
		title : "¿Qué foto publicarías?",
	}, {
		img1 : "img/2i.png",
		ci : 0,
		ri : 0,
		mi : 0,
		img2 : "img/2d.png",
		cd : 5,
		rd : 5,
		md : 0,
		title : "¿Qué foto publicarías?",
	}, {
		img1 : "img/3i.png",
		ci : 0,
		ri : 0,
		mi : 0,
		img2 : "img/3d.png",
		cd : 5,
		rd : 5,
		md : 0,
		title : "¿Qué foto publicarías?",
	}, {
		img1 : "img/4i.png",
		ci : 5,
		ri : 5,
		mi : 0,
		img2 : "img/4d.png",
		cd : 0,
		rd : 0,
		md : 0,
		title : "¿Qué foto publicarías?",
	}, {
		img : "img/yt1.png",
		c : 5,
		r : 5,
		m : 0,
		title : "¿Te gusta este canal?",
	}, {
		img : "img/yt2.png",
		c : 0,
		r : 0,
		m : 7,
		title : "¿Te gusta este canal?",
	}, {
		img : "img/yt3.png",
		c : 5,
		r : 5,
		m : 0,
		title : "¿Te gusta este canal?",
	}, {
		img : "img/yt4.png",
		c : 5,
		r : 0,
		m : 7,
		title : "¿Te gusta este canal?",
	}, {
		img : "img/yt5.png",
		c : 0,
		r : 0,
		m : 0,
		title : "¿Te gusta este canal?",
	}, {
		img : "img/yt6.png",
		c : 0,
		r : 0,
		m : 0,
		title : "¿Te gusta este canal?",
	}, {
		img : "img/yt7.png",
		c : 0,
		r : 0,
		m : 0,
		title : "¿Te gusta este canal?",
	}, {
		img : "img/yt8.png",
		c : 5,
		r : 5,
		m : 0,
		title : "¿Te gusta este canal?",
	}, {
		img : "img/yt9.png",
		c : 5,
		r : 5,
		m : 7,
		title : "¿Te gusta este canal?",
	}, {
		img : "img/yt10.png",
		c : 5,
		r : 5,
		m : 0,
		title : "¿Te gusta este canal?",
	}, {
		img : "img/yt11.png",
		c : 5,
		r : 5,
		m : 0,
		title : "¿Te gusta este canal?",
	}, {
		img : "img/f1.png",
		c : 0,
		r : 0,
		m : 7,
		title : "¿Le darías Me Gusta a esta imagen?",
	}, {
		img : "img/f2.png",
		c : 5,
		r : 5,
		m : 0,
		title : "¿Le darías Me Gusta a esta imagen?",
	}, {
		img : "img/f3.png",
		c : 5,
		r : 5,
		m : 0,
		title : "¿Le darías Me Gusta a esta imagen?",
	}, {
		img : "img/f4.png",
		c : 0,
		r : 0,
		m : 7,
		title : "¿Le darías Me Gusta a esta imagen?",
	}, {
		img : "img/f5.png",
		c : 0,
		r : 0,
		m : 0,
		title : "¿Le darías Me Gusta a esta imagen?",
	}, {
		img : "img/f6.png",
		c : 0,
		r : 0,
		m : 0,
		title : "¿Le darías Me Gusta a esta imagen?",
	}, {
		img : "img/f7.png",
		c : 0,
		r : 0,
		m : 7,
		title : "¿Le darías Me Gusta a esta imagen?",
	}, {
		img : "img/f8.png",
		c : 0,
		r : 5,
		m : 7,
		title : "¿Le darías Me Gusta a esta imagen?",
	}, {
		img : "img/f9.png",
		c : 0,
		r : 0,
		m : 0,
		title : "¿Le darías Me Gusta a esta imagen?",
	}, {
		img : "img/f10.png",
		c : 0,
		r : 0,
		m : 0,
		title : "¿Le darías Me Gusta a esta imagen?",
	}, {
		img : "img/info1.png",
		c : 5,
		r : 5,
		m : 7,
		title : "¿Cuál de estos portales utilizas? Selecciona la foto",
	}, {
		img : "img/info2.png",
		c : 0,
		r : 0,
		m : 0,
		title : "¿Cuál de estos portales utilizas? Selecciona la foto",
	}, {
		img : "img/info3.png",
		c : 0,
		r : 0,
		m : 7,
		title : "¿Cuál de estos portales utilizas? Selecciona la foto",
	}, {
		img : "img/info4.png",
		c : 5,
		r : 5,
		m : 7,
		title : "¿Cuál de estos portales utilizas? Selecciona la foto",
	}, {
		img : "img/info5.png",
		c : 5,
		r : 5,
		m : 7,
		title : "¿Cuál de estos portales utilizas? Selecciona la foto",
	},
];

let secciones = [
	{
		titulo : "TWITTER",
		subtitulo : "¿Que tweet prefieres? Elige sí o no"
	}, {
		titulo : "INSTAGRAM",
		subtitulo : "¿Qué foto publicarías? Selecciona la foto"
	}, {
		titulo : "YOUTUBE",
		subtitulo : "¿A quién seguirías?"
	}, {
		titulo : "FACEBOOK",
		subtitulo : "¿A cual meme le darías like? Elige sí o no"
	}, {
		titulo : "CONSUMO DE INFORMACIÓN",
		subtitulo : "¿Cuál de estos portales utilizas? Selecciona la foto"
	}
];

// Variables
const ultPregunta = preguntas.length - 1;
let preguntaActual = 0;
let count = 0;
let tiempo = 13; // 15s
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
	tituloQP.innerHTML = `<h1 class="ct">${q.title}</h1>`;
}

function crearInsta() {
	//console.log("Entra Insta");
	let i = preguntas[preguntaActual];
	respuestaA.innerHTML = `<div onclick="score(${i.ci}, ${i.ri}, ${i.mi})"><img src="${i.img1}" class="img"></div>`;
	respuestaB.innerHTML = `<div onclick="score(${i.cd}, ${i.rd}, ${i.md})"><img src="${i.img2}" class="img"></div>`;
	tituloQ.innerHTML = `<h1 class="ct">${i.title}</h1>`;
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
				//seccion.style.display = "none";
			quizPreguntas.style.display = "none";
			quizDiv.style.display = "block";
				//divCounter.style.display = "block";
				//if (preguntaActual == 4) { // Entra seccion de Instagram
					//mostrarSeccion(1);
					//console.log("Seccion Instagram");
				//}
			preguntaActual++;
			crearInsta();
		} else {
			//seccion.style.display = "none";
			quizDiv.style.display = "none";
			quizPreguntas.style.display = "block";
			//divCounter.style.display = "block";
			preguntaActual++;
			crearPregunta();
		}
	} else {
		// De no haber mas preguntas, terminamos el quiz y detenemos el tiempo
		console.log(`"El quiz ha terminado con la calificacion: \nClasismo: ${clasismo}\nRacismo: ${racismo}\nMachismo: ${machismo}."`);
		quizPreguntas.style.display = "none";
		quizDiv.style.display = "none";
		divCounter.style.display = "none";
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
				//seccion.style.display = "none";
			quizPreguntas.style.display = "none";
			quizDiv.style.display = "block";
				//divCounter.style.display = "block";
				//if (preguntaActual == 4) { // Entra seccion de Instagram
					//mostrarSeccion(1);
					//console.log("Seccion Instagram");
				//}
			preguntaActual++;
			crearInsta();
		} else {
			//seccion.style.display = "none";
			quizDiv.style.display = "none";
			quizPreguntas.style.display = "block";
			//divCounter.style.display = "block";
			preguntaActual++;
			crearPregunta();
		}
	} else {
		// De no haber mas preguntas, terminamos el quiz y detenemos el tiempo
		console.log(`"El quiz ha terminado con la calificacion: \nClasismo: ${clasismo}\nRacismo: ${racismo}\nMachismo: ${machismo}"`);
		quizPreguntas.style.display = "none";
		quizDiv.style.display = "none";
		divCounter.style.display = "none";
		clearInterval(TIMER);
		mostrarResultado();
	}
}

// Funcion para mostrar el resultado
function mostrarResultado() {

	resultado.style.display = "block";
	grafica.style.display = "block";

	const total = clasismo + racismo + machismo;
	

	if (total >= 120) {
		mensaje1.style.display = "block";
	} else {
		mensaje2.style.display = "block";
	}

	console.log("Total: " + total);

	// Chart
	let myChart = document.getElementById("myChart").getContext("2d");

	let barChart = new Chart(myChart, {
		type: "bar",
		data: {
			labels: ["Racista", "Clasista", "Machista"],
			datasets: [{
				label: "Porcentaje",
				data: [racismo, clasismo, machismo]
			}],
			backgroundColor: "rgba(254, 233, 239, 0.6)",
			borderWidth: 4,
			borderColor: "#000"
		},
		options: {
			scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero: true
	                }
	            }]
	        }
		},
		
	});

}

function mostrarSeccion(tipo) {
	let s = secciones[tipo];

	quizDiv.style.display = "none";
	quizPreguntas.style.display = "none";
	divCounter.style.display = "none";
	seccion.style.display = "block";

	tituloSeccion.innerHTML = `<p>${s.titulo}</p>`;
	subtituloSeccion.innerHTML = `<p>${s.subtitulo}</p>`;

	//setTimeout(contador, 3000);
}

function post() { // Envio de los resultados al servidor
	console.log("Send pressed");

	let resClasismo = clasismo;
	let resRacismo = racismo;
	let resMachismo = machismo;

	$.post('../php/envioResultados.php', {
			postClasismo: resClasismo,
			postRacismo: resRacismo,
			postMachismo: resMachismo
		}
	);
}











