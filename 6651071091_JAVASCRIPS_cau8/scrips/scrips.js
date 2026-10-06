$(document).ready(function() {
    $('#btnCalculate').click(function() {
        let val1 = parseFloat($('#num1').val());
        let val2 = parseFloat($('#num2').val());
        let op = $('#operator').val();
        let res = 0;

        if (isNaN(val1) || isNaN(val2)) {
            $('#result').text('Vui lòng nhập đủ 2 số!');
            return;
        }

        switch (op) {
            case '+': res = val1 + val2; break;
            case '-': res = val1 - val2; break;
            case '*': res = val1 * val2; break;
            case '/': 
                if (val2 === 0) {
                    $('#result').text('Không thể chia cho 0!');
                    return;
                }
                res = val1 / val2; 
                break;
        }

        $('#result').text(res);
    });
});