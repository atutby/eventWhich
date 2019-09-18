$('#inputName').on('keyup', function (event) {
    $('#textHolder').text($(this).val())
    if (event.which == 27) {
        // alert('It was ESCAPE key! ')
        $('#textHolder').text('')
    }
})