function operator(op){
    switch (op) {
        case '+':
            console.log($('#svalue').val());
            console.log(parseFloat($('#fvalue').val()));
            $('.screen').text((parseFloat($('#fvalue').val()) + parseFloat($('#svalue').val())).toFixed(2));
            break;
        case '-':
            $('.screen').text((parseFloat($('#fvalue').val()) - parseFloat($('#svalue').val())).toFixed(2));
            break;
        case 'x':
            $('.screen').text((parseFloat($('#fvalue').val()) * parseFloat($('#svalue').val())).toFixed(2));
            break;
        case '/':
            $('.screen').text((parseFloat($('#fvalue').val()) / parseFloat($('#svalue').val())).toFixed(2));
            break;
        default:
            $('.screen').html = "Como diabos você chegou aqui?"
    }
}
function reset() {
    $('#fvalue').val("");
    $('#svalue').val("");
    $('.screen').text("Resultado");
}