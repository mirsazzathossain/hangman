/* Add your script here */
var arr=["education", "technology", "mathematics", "science", "engineering", "arithmetic"];

var num = document.getElementById('number').value;

$('.play').on('click', function(){
    var index = $('#number').val();
    var topic = arr[index];

    for(var char of topic){
        console.log(char);
    }

});