function guardar(){
    console.log("ejecutando funcion para guardar");
    let nombre = $("#name").val()
    let client = {
        id: +$("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: +$("#age").val()
    };

    console.log("voy a guardar", client);

    $.ajax({
        url: "https://gc2bcf0492c105d-db202109300852.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(client),
        statusCode:{
            201:function(){
                alert(`✔️ Se ha ingresado un nuevo cliente: ${nombre}`);
                window.location.href = "index.html";
            }
        },
    });
}