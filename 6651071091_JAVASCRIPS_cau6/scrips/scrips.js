function getOptions() {
    let options = $('#mySelect option');
    let totalItems = options.length;

    let result = `Tổng số mục trong danh sách: ${totalItems}\nCác mục bao gồm:\n`;

    options.each(function(index, element) {
        result += `${index + 1}. ${$(element).text()}\n`;
    });

    alert(result);
}