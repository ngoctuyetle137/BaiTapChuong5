function insert_Row() {
    let rowCount = $('#sampleTable tr').length + 1;
    let newRow = `<tr>
        <td>Row${rowCount} cell1</td>
        <td>Row${rowCount} cell2</td>
    </tr>`;

    $('#sampleTable').append(newRow);
}