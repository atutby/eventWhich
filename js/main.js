$('#inputName').on('keyup', function (event) {
    $('#textHolder').text($(this).val())

    event.preventDefault()

    if (event.which == 49) {
        // alert('It was ESCAPE key! ')
        $('#textHolder').text('')
    }

    console.log(event.which)
})