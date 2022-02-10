class Calculator {
    operand1 = "";
    operand2 = "";
    operation = "";    

    setOperand1(_operand1){
        this.operand1 = parseFloat(_operand1);
    }

    setOperand2(_operand2){
        this.operand2 = parseFloat(_operand2);
    }

    setOperator(_operation){
        this.operation = _operation;
    }

    getResult() {        
        switch (this.operation) {
            case "÷":
                if (this.operand2 === 0) {
                    return "erro div0"
                }
                return this.operand1 / this.operand2
            case "x":
                return this.operand1 * this.operand2
            case "+":
                return this.operand1 + this.operand2
            case "-":
                return this.operand1 - this.operand2
            default:
                return ""
        }
    }

    reset(){
        this.operand1 = "";
        this.operand2 = "";
        this.operation = "";
    }    
}

const calc = new Calculator
const number = $('.btn-number');

number.click(function(){
    $('#result').append(this.value)
})

$("#btn-reset").click(function(){
    calc.reset();
    $("#result").text("");
})

$('.btn-operator').click(function(){
    calc.setOperand1($("#result").text());
    if (calc.operand1 != "") {
        calc.setOperator(this.value);        
        $("#result").text("");
    }
})

$("#resulter").click(function(){
    calc.setOperand2($("#result").text());
    $("#result").text(calc.getResult());
})