function actualizar(){
    console.log("ejecutando funcion para actualizar");
    
    let nombre = $("#name").val()
    let cliente = {
        id: +$("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: +$("#age").val()
    };

    console.log(cliente);

    $.ajax({
        url: "https://gc2bcf0492c105d-db202109300852.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(cliente),
        statusCode:{
            201:function(){
                alert(`👍 Se ha actualizado correctamente el cliente: ${nombre}`);
                window.location.href = "index.html";
            }
        },
    });
}