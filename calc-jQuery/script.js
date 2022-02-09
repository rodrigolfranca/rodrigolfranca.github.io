function operator(op){
    switch (op) {
        case '+':
            console.log($('#svalue').val());
            console.log(parseFloat($('#fvalue').val()));
            $('.screen').html((parseFloat($('#fvalue').val()) + parseFloat($('#svalue').val())).toFixed(2));
            break;
        case '-':
            $('.screen').html((parseFloat($('#fvalue').val()) - parseFloat($('#svalue').val())).toFixed(2));
            break;
        case 'x':
            $('.screen').html((parseFloat($('#fvalue').val()) * parseFloat($('#svalue').val())).toFixed(2));
            break;
        case '/':
            $('.screen').html((parseFloat($('#fvalue').val()) / parseFloat($('#svalue').val())).toFixed(2));
            break;
        default:
            $('.screen').html("Como diabos você chegou aqui?");
    }
}
function reset() {
    $('#fvalue').val("");
    $('#svalue').val("");
    $('.screen').html("Resultado");
}