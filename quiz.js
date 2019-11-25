
// Selected elements
const start = document.getElementById("start");
const quizDiv = document.getElementById("quiz");
const counter = document.getElementById("counter");
const bar = document.getElementById("bar");
const respuestaA = document.getElementById("A");
const respuestaB = document.getElementById("B");
const resultado = document.getElementById("resultado");

// Listeners
start.addEventListener("click", startQuiz);

// Preguntas
let preguntas = [
	{
		imgA : "img/tuit1_460x390.jpg",
		imgB : "img/tuit2.jpg",
		valueA : 1,
		valueB : 0,
	}, {
		imgA : "img/tuit3.jpg",
		imgB : "img/tuit4.jpg",
		valueA : 0,
		valueB : 1,
	}, {
		imgA : "img/tuit5.jpg",
		imgB : "img/tuit6.jpg",
		valueA : 1,
		valueB : 0,
	}, {
		imgA : "img/tuit1_460x390.jpg",
		imgB : "img/tuit2.jpg",
		valueA : 1,
		valueB : 0,
	}, {
		imgA : "img/tuit3.jpg",
		imgB : "img/tuit4.jpg",
		valueA : 0,
		valueB : 1,
	}, {
		imgA : "img/tuit5.jpg",
		imgB : "img/tuit6.jpg",
		valueA : 1,
		valueB : 0,
	}, {
		imgA : "img/tuit1_460x390.jpg",
		imgB : "img/tuit2.jpg",
		valueA : 1,
		valueB : 0,
	}, {
		imgA : "img/tuit3.jpg",
		imgB : "img/tuit4.jpg",
		valueA : 0,
		valueB : 1,
	}, {
		imgA : "img/tuit5.jpg",
		imgB : "img/tuit6.jpg",
		valueA : 1,
		valueB : 0,
	}, {
		imgA : "img/tuit3.jpg",
		imgB : "img/tuit4.jpg",
		valueA : 0,
		valueB : 1,
	}
];

// Variables
const ultPregunta = preguntas.length - 1;
let preguntaActual = 0;
let count = 0;
const tiempo = 10; // 10s
const longitud = 100; // 100%
const unidad = longitud / tiempo;
let TIMER;
let calificacion = 0;


// Funcion para iniciar el quiz
function startQuiz() {
	start.style.display = "none";
	crearPregunta();
	quizDiv.style.display = "block";
	contador();
	TIMER = setInterval(contador, 1000);
}

// Funcion para crear pregunta
function crearPregunta() {
	let q = preguntas[preguntaActual];
	// Creamos un onclick que al ser presionado el div seleccionado, este activa la funcion score pasando como parametro el valor de la pregunta
	respuestaA.innerHTML = `<div onclick="score(${q.valueA})"><img src="${q.imgA}" alt="Tuit A" class="img"></div>`;
	respuestaB.innerHTML = `<div onclick="score(${q.valueB})"><img src="${q.imgB}" alt="Tuit B" class="img"></div>`;
	//console.log("Pregunta numero: " + (preguntaActual + 1));
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
		preguntaActual++;
		crearPregunta();
		} else {
			// De no haber mas preguntas, terminamos el quiz y detenemos el tiempo
			console.log("El quiz ha terminado con la calificacion: " + calificacion);
			quizDiv.style.display = "none";
			clearInterval(TIMER);
			mostrarResultado();
		}
	}
	
}

// Funcion para el score
function score(valor) {
	if (valor == 1) {
		// Si la respuesta es TRUE
		calificacion += 1;
		//console.log(calificacion);
	} 
	count = 0;
	if (preguntaActual < ultPregunta) {
		preguntaActual++;
		crearPregunta();
	} else {
		// De no haber mas preguntas, terminamos el quiz y detenemos el tiempo
		console.log("El quiz ha terminado con la calificacion: " + calificacion);
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

	console.log("El porcentaje de calificacion es: " + porcentaje);
}



