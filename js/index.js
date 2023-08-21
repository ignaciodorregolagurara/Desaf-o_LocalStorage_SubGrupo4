let btnGuardar = document.getElementById("buttonText");
let input = document.getElementById("inputText");

btnGuardar.addEventListener('click', function(){
    let txt = input.value;
    localStorage.setItem("texto", txt);
    if(localStorage.getItem("texto") !== null)
    {
        alert("Guardado con éxito");
    }
});

