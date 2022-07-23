$(readyNow)

function readyNow() {
    console.log('doc is ready')
    $('#submit').on('click', submit);

    // moves the text box over when enter key is pressed and submits with enter on the last text box
    // $('#nameIn').keypress('enter', moveRight);
    // $('#lastIn').keypress('enter', moveRight);
    // $('#userID').keypress('enter', moveRight);
    // $('#positionIn').keypress('enter', moveRight);
    // $('#salaryIn').keypress('enter', submit);

    $('#container').on('click', '.delete', deleteBtn)
    $('#submit').mouseenter(mouseEnter);
    $('#submit').mouseleave(mouseLeave);
}

let total = 0;

// function moveRight() {
//     $(this).next().focus();
// }

function submit() {

    let name = $('#nameIn').val();
    let last = $('#lastIn').val();
    let ID = $('#userID').val();
    let position = $('#positionIn').val();
    let salary = $('#salaryIn').val();
    total += Math.round(Number(salary / 12) * 100) / 100;
    console.log(total)

    console.log('clicked')
    if (name && last && ID && position && salary) {
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
        
        $('#monthly').empty()
        $('#monthly').append(`Total Monthly Costs: <span id="red">$${total}</span>`)
        $('#alert').empty()
        if (total >= 20000) {
            $('#red').addClass("red")
        }
    } else {
        //alert("A text box was left empty!")
        $('#alert').empty()
        $('#alert').append('A text box was left empty!')
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