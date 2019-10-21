/* Add your script here */
var arr=["education", "technology", "mathematics", "science", "engineering", "arithmetic"];

var num = document.getElementById('number').value;

$('.play').on('click', function(){
    var index = $('#number').val();
    var topic = arr[index];

    
    var script='';
    for(var char of topic){
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
           script+= '<div class="p-3 bd-highlight" style="border-bottom: 1px dotted red; margin-right:5px;"></div>';
        }
        else{
            script+= '<div class="p-3 bd-highlight" style="border-bottom: 1px solid black; margin-right:5px;"></div>';
        }
    }

    $('.output').append(`<div class="d-flex flex-row bd-highlight mb-3">${script}</div>`);

});