console.log('it works'); 


$(document).ready(function() {
$('.submit').click(function (event) {
    
    

    var email = $('.email').val()
    var subject = $('.subject').val()
    var message = $('.message').val()
    var statusElm = $('.status')
    statusElm.empty()

    if (email.length > 5 && email.includes('@') && email.includes('.')) {
        statusElm.append('<div>E-mail is valid</div>')
    } else {
        event.preventDefault()
        statusElm.append('<div>E-mail is not valid</div>')
    }


    if (subject.length >= 2) {
        statusElm.append('<div>Subject is valid</div>')
    } else {
        event.preventDefault()
        statusElm.append('<div>Subject is not valid</div>')
    }

    if (message.length >= 10) {
        statusElm.append('<div>Message is valid</div>')
    } else {
        event.preventDefault()
        statusElm.append('<div>Message needs to be atleast 10 chars long</div>')
    }
})
})