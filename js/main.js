function validar(){
	//validar nombre
	function nombre(){
		var nombre = document.getElementById('name').value; //valor ingresado al input en el id='name'
		//validar que nombre no esté vacío
		//validar que 1° caracter sea mayúscula
		//validar que sean solo letras
		if(nombre === "" || nombre === undefined || nombre.length === 0){
			alert("Error, debe ingresar nombre");
		}else if(nombre.charAt(0) != nombre.charAt(0).toUpperCase()){
			alert("Error, el nombre debe comenzar con mayúscula");
		}else if(/[0-9]/.test(nombre)){
			alert("Error, no debe ingresar números")
		}else{
			alert("Nombre ingresado correctamente")
		}
	}
	nombre();

	//validar contraseña
	function password(){
		var contrasenia = document.getElementById('input-password').value;
		//no vacio
		//que no sea 1234 ni "password"
		//que tenga al menos 6 caracteres
		if(contrasenia === "" || contrasenia === undefined || contrasenia.length === 0){
			alert("Error, debe ingresar contraseña");
		}else if(contrasenia === "1234" || contrasenia === "password"){
			alert("Error, la contraseña debe ser distinta a 1234 o password");
		}else if(contrasenia.length < 6){
			alert("Error, la contraseña debe tener al menos 6 caracteres");
		}else{
			alert("Contraseña ingresada correctamente");
		}
	}
	password();

	//validar select
	function opciones(){
		var seleccion = document.getElementsByTagName('select');
		//var seleccion = document.getElementsByClassName('form-control')[2]; //hay más de una class con el mismo nombre, entonces necesito la etiqueta en la posición 2, //con ctrl+f puedo buscar
		for(var i = 0; i < seleccion.length; i++){ //se usa for porque hay que recorrer todas las opciones del select
			if(seleccion[i].value == "0"){	//linea 34 de index.html
				alert("Debe seleccionar una opción");
			}
		}
	}
	opciones();
	
}

/*
Expresión regular valida solo letras /[0-9]/.test(nombreVariable)
*/