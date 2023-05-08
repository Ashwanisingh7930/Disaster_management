
var gender = 'neutral'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/babynames?gender=' + gender,
    headers: { 'X-Api-Key': 'XFUW2hMadA7lOXZFt4ipwA==X01hoMYkzSlkiJQK'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});


