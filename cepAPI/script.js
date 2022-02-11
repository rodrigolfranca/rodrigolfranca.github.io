$('#btn').click(function(){
    let cep = $('#inCep').val();
    cep = cep.split("-")[0] + cep.split("-")[1];
    
    //add validação

    $.ajax({url : `https://cep.awesomeapi.com.br/json/${cep}`})
        .done( data => {
            let htmlToAppend = `<tr>
                                    <th>Endereço</th>
                                    <td>${data.address}</td>
                                </tr>
                                <tr>
                                    <th>Cidade</th>
                                    <td>${data.city}</td>
                                </tr>
                                <tr>
                                    <th>Estado</th>
                                    <td>${data.state}</td>
                                </tr>
                                <tr>
                                    <th>Bairro</th>
                                    <td>${data.district}</td>
                                </tr>
                                `
            $("#tableInfo").html("");
            $("#tableInfo").append(htmlToAppend);
            $('#iframe').attr('src', `https://www.google.com/maps?api=1&q=${data.lat}%2C${data.lng}&hl=es;z=14&output=embed`);
        })
        .falt( err => {
            console.log(err)
        })
})