$('#inputName').on('keyup', function (event) {
    $('#textHolder').text($(this).val())
    if (event.which == 65) {
        // alert('It was ESCAPE key! ')
        $('#textHolder').text('')
    }
    console.log(event.which)
})