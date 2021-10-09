function eliminar(identificador){
    console.log("ejecutando funcion para eliminar");
    
    let computer = {
        id: +identificador
    };

    console.log(computer);

    $.ajax({
        url: "https://gc2bcf0492c105d-db202109300852.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/computer/computer",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(computer),
        statusCode:{
            204:function(){
                alert(`👍 El computador se ha eliminado exitosamente.`);
                window.location.href = "index.html";

            }
        },
    });

}
