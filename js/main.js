$('#inputName').on('keyup', function (event) {
    $('#textHolder').text($(this).val())

    // event.preventDefault()

    // var keyCode = event.originalEvent.data.charCodeAt(0);

    if (event.which == 49) {
        // alert('It was ESCAPE key! ')
        $('#textHolder').text('')
    }

    // console.log(keyCode)
    console.log(event.which)
    console.log('================text=====================')

})