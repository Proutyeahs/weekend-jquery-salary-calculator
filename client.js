$(readyNow)

function readyNow() {
    console.log('doc is ready')
    $('#submit').on('click', submit);
    $('#container').on('click', '.delete', deleteBtn)
}



function submit() {

    let name = $('#nameIn').val();
    let last = $('#lastIn').val();
    let ID = $('#userID').val();
    let position = $('#positionIn').val();
    let salary = $('#salaryIn').val();

    console.log('clicked')
    $('#container').append(`
        <tr>
            <td>${name}</td>
            <td>${last}</td>
            <td>${ID}</td>
            <td>${position}</td>
            <td>${salary}</td>
            <td><button class="delete">delete</button></td>
        </tr>
    `)
    $('#nameIn').val('');
    $('#lastIn').val('');
    $('#userID').val('');
    $('#positionIn').val('');
    $('#salaryIn').val('');

}

function deleteBtn() {
    $(this).closest('tr').remove();
}