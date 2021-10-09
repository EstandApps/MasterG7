function eliminar(identificador){
    console.log("ejecutando funcion para eliminar");
    
    let client = {
        id: +identificador
    };

    console.log(client);

    $.ajax({
        url: "https://gc2bcf0492c105d-db202109300852.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(client),
        statusCode:{
            204:function(){
                alert(`👍 El cliente se ha eliminado exitosamente.`);
                window.location.href = "index.html";

            }
        },
    });

}
