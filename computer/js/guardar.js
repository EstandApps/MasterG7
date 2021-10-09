function guardar(){
    console.log("ejecutando funcion para guardar");
    let nombre = $("#name").val();
    let computer = {
        id: +$("#id").val(),
        brand: $("#brand").val(),
        model: +$("#model").val(),
        category_id: +$("#category_id").val(),
        name: $("#name").val()
    };

    console.log("voy a guardar", computer);

    $.ajax({
        url: "https://gc2bcf0492c105d-db202109300852.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/computer/computer",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(computer),
        statusCode:{
            201:function(){
                alert(`✔️ Se ha ingresado un nuevo cliente: ${nombre}`);
                window.location.href = "index.html";
            }
        },
    });
}