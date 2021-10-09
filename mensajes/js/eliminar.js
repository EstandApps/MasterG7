function eliminar(identificador){
    console.log("ejecutando funcion para eliminar");
    
    let message = {
        id: +identificador
    };

    console.log(message);

    $.ajax({
        url: "https://gc2bcf0492c105d-db202109300852.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(message),
        statusCode:{
            204:function(){
                alert(`👍 El mensaje se ha eliminado exitosamente.`);
                window.location.href = "index.html";

            }
        },
    });

}
