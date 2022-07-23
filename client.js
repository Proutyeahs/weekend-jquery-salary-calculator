$(readyNow)

function readyNow() {
    console.log('doc is ready')
    $('#submit').on('click', submit);
    $('#container').on('click', '.delete', deleteBtn)
    $('#submit').mouseenter(mouseEnter);
    $('#submit').mouseleave(mouseLeave);
}

let total = 0;

function submit() {

    let name = $('#nameIn').val();
    let last = $('#lastIn').val();
    let ID = $('#userID').val();
    let position = $('#positionIn').val();
    let salary = $('#salaryIn').val();
    total += Math.round(Number(salary / 12) * 100) / 100;
    console.log(total)

    console.log('clicked')
    $('#container').append(`
        <tr>
            <td>${name}</td>
            <td>${last}</td>
            <td>${ID}</td>
            <td>${position}</td>
            <td class="money">${salary}</td>
            <td><button class="delete">delete</button></td>
        </tr>
    `)
    $('#nameIn').val('');
    $('#lastIn').val('');
    $('#userID').val('');
    $('#positionIn').val('');
    $('#salaryIn').val('');
    
    $('#monthly').empty()
    $('#monthly').append(`Total Monthly Costs: <span id="red">$${total}</span>`)
    if (total >= 20000) {
        $('#red').addClass("red")
    }

    $('.delete').mouseenter(mouseEnter);
    $('.delete').mouseleave(mouseLeave);
    
}

function mouseLeave() {
    $(this).css('background-color', 'lightgray')
  }
  
  function mouseEnter() {
    $(this).css('background-color', 'brown')
  }

function deleteBtn() {

    let data = $(this).closest('tr')

    let salary = data.find("td:eq(4)").text()
    console.log(salary)
    total -= Math.round(Number(salary / 12) * 100) / 100;

    console.log(total)

    $('#monthly').empty()
    $('#monthly').append(`Total Monthly Costs: <span id="red">$${total}</span>`)
    if (total >= 20000) {
        $('#red').addClass("red")
    } else if (total <= 20000) {
        console.log(total)
        $('#red').addClass()
    }

    $(this).closest('tr').remove();
}