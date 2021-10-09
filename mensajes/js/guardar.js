function guardar(){
    console.log("ejecutando funcion para guardar mensaje");
    let message = {
        id: +$("#id").val(),
        messagetext: $("#messagetext").val()
    };

    console.log("voy a guardar", message);

    $.ajax({
        url: "https://gc2bcf0492c105d-db202109300852.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(message),
        statusCode:{
            201:function(){
                alert(`✔️ ¡Se ha enviado un nuevo mensaje!`);
                window.location.href = "index.html";
            }
        },
    });
}