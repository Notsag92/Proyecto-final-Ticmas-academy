 document.getElementById ('contactarme').onclick=function () {
    console.log ("N° cel= funciona :D");
    document.getElementById("contactarme").innerHTML = "N° Tel: (011) 15xxxxxxx" 

}

function habilitarmodooscuro() {
    let main_body = document.body;
    main_body.classList.toggle("modo-oscuro");

    
    if (document.getElementById('checkitem').checked) {
        console.log("checked");
    } else {
        console.log("NOT checked");
    }
}
