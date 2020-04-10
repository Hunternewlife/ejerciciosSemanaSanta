
function posONeg(){
    var numero = document.getElementById('numero').value;
    var alerta = document.getElementById('alertas');
    var caracter = numero[0];
    if(numero == ''){
        alert('Error debes poner un numero')
    } else {
        if(caracter == '-'){
            alerta.innerHTML = 'Su numero es negativo'
        } else {
            alerta.innerHTML = 'Su numero es positivo'
        }
    }
}

function generateItems(){
    var numero = document.getElementById('numero').value;
    var contenedor = document.getElementById('container');
    if(numero == ''){
        alert('error debes ingresar un numero');
    } else {
        var toNumber = Number(numero);
        var alert = document.getElementById('alert').innerHTML = 'Ahora ingresa las diferentes edades'
        for(let i = 0; i<toNumber; i++){
            var edad = document.createElement('h4');
            edad.innerHTML = 'Edad ' + (i+1) + ' persona ';
            var newInput = document.createElement('input');
            newInput.setAttribute('class','aContar');
            contenedor.appendChild(edad);
            contenedor.appendChild(newInput);
        }        
    } 
}

function calc(){
    console.log('working');
    items = document.querySelectorAll('.aContar');
    /* console.log(items[0].value); */
    var newNumber = 0;
    for(let i = 0; i<items.length; i++){
        numero =items[i].value;
        newNumber += Number(numero); 
        console.log(numero);
    }
    var promedio = newNumber/items.length;
    console.log(newNumber);
    console.log(promedio);
    var texto = document.getElementById('resultados');
    texto.innerHTML = 'El total de las edades es de ' + newNumber + ' anos y el promedio de edad fue de ' + promedio;
    alert('El total de las edades es ' + newNumber + ' y el promedio de edad fue de ' + promedio);

}


function crono(){
    var segundos = 0;
    var minutos = 0;
    var seconds = document.getElementById('segundos');
    var minutes = document.getElementById('minutos');
    var inicio =  setInterval(function(){ 
            if (segundos < 60){
                segundos += 1;
                seconds.innerHTML = segundos;
            } else {
                segundos = 1;
                seconds.innerHTML = segundos;
            }
            if(segundos == 60){
                if(minutos < 60){
                    minutos += 1;
                    minutes.innerHTML = minutos;
                } else {
                    minutos = 1;
                    minutos.innerHTML = minutos;
                }
            }   
            if(minutos == 1){
                clearInterval(inicio);
                segundos = 00;
                seconds.innerHTML = segundos;
            }
        }, 1000);   
}

function vowels(){
    let texto = document.getElementById('texto');
    let resultado = document.getElementById('resultados');
    let vocales = ['a','e','i','o','u'];
    var palabra = texto.value;
    let palabra2 = palabra.split(', ');
    let totales = [];
    for(let i = 0; i < palabra.length; i++){
        for(let y = 0; y < vocales.length; y++){
            if(palabra[i] === vocales[y]){
                totales.push(vocales[y]);
            }
        }
    } 
    console.log(totales);
    resultado.innerHTML = "Hay un total de " + totales.length + ' vocales y estas son ' + totales;
} 

var areas = 0;
function cuadrado(){
    areas = 1;
    var container = document.getElementById('contenedor');  
    var area1 = document.createElement('input');
    area1.setAttribute('id','a1');
    area1.setAttribute('type','number');
    area1.setAttribute('placeholder','lado1');
    contenedor.appendChild(area1);
    var area2 = document.createElement('input');
    area2.setAttribute('id','a2');
    area2.setAttribute('type','number');
    area2.setAttribute('placeholder','lado2');
    contenedor.appendChild(area2);
}

function rectangulo(){
    areas = 2;
    var container = document.getElementById('contenedor');
    var area1 = document.createElement('input');
    area1.setAttribute('id','a1');
    area1.setAttribute('type','number');
    area1.setAttribute('placeholder','base');
    contenedor.appendChild(area1);
    var area2 = document.createElement('input');
    area2.setAttribute('id','a2');
    area2.setAttribute('type','number');
    area2.setAttribute('placeholder','altura');
    contenedor.appendChild(area2);
}

function triangulo(){

    rectangulo();
    areas = 3;
}

function circulo(){
    areas = 4;
    var container = document.getElementById('contenedor');
    var area1 = document.createElement('input');
    area1.setAttribute('id','a1');
    area1.setAttribute('type','number');
    area1.setAttribute('placeholder','Radio');
    contenedor.appendChild(area1);
}

function calcular(){
    var dato1 = document.getElementById('a1').value;
    var rta = document.getElementById('rta');
    var result = 0;
    if(areas == 1){
        var dato2 = document.getElementById('a2').value;
        result = dato1*dato2;
        console.log(result);
        console.log(areas);
    } else if (areas == 2) {
        var dato2 = document.getElementById('a2').value;
        result = dato1*dato2;
        console.log(result);
        console.log(areas);
    } else if (areas == 3) {
        var dato2 = document.getElementById('a2').value;
        result = (dato1/2)*dato2;
        console.log(result);
        console.log(areas);
    } else if (areas == 4) {
        result = Math.round(Math.PI * ((dato1)*2))
        console.log(result);
        console.log(areas);
    } else {
        console.log('error pendejo')
    }
    rta.innerHTML = 'El area de su elemento es ' + result;
}

function multiplox(){
    var multi = document.getElementById('multi');
    for(let i = 0; i<500; i++){
        if(i%8 == 0){
            multi.innerHTML += (i + "<br>")
        }
    }
}

function figa(){
    var figContainer = document.getElementById('figContainer');
    var step = 0;
    var star = '*';
    for(let i = 0; i<5;i++){
        figContainer.innerHTML += star + '<br>';
        star += '**'
    }
    star = star.slice(0,-2);
    star = star.slice(0,-2);
    for(let i = 0; i<4;i++){
        star = star.slice(0,-2);
        figContainer.innerHTML += star + '<br>';
    }
}

function figb(){
    var figcontainer = document.getElementById('figContainer');
    star = '***********'
    for(let i = 0; i<4;i++){        
        star = star.slice(0,-2);
        figContainer.innerHTML += star + '<br>';
    }
    star = '*'
    for(let i = 0; i<5;i++){
        
        figContainer.innerHTML += star + '<br>';
        star += '**'
    }
}

function figc(){
    var figcontainer = document.getElementById('figContainer');
    var piramide = prompt("cuantos datos desea ingresar");
    console.log(piramide);
    if(isNaN(piramide)){
        alert('Por favor solo de numeros');
    } else {
        let star = "*"
        for(let i = 0; i<piramide; i++){
            figContainer.innerHTML += star + '<br>';
            star += '*'
        }
    }
}

