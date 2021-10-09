function actualizar(){
    console.log("ejecutando funcion para actualizar");
    
    let message = {
        id: +$("#id").val(),
        messagetext: $("#messagetext").val()
    };

    console.log(message);

    $.ajax({
        url: "https://gc2bcf0492c105d-db202109300852.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(message),
        statusCode:{
            201:function(){
                alert(`👍 Tu mensaje se ha modificado.`);
                window.location.href = "index.html";
            }
        },
    });
}