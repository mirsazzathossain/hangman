/* Add your script here */
var arr=["education", "technology", "mathematics", "science", "engineering", "arithmetic"];

var num = document.getElementById('number').value;

var charArr;
$('.play').on('click', function(){
    $(".output").show();
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
    charArr=topic.split('');
});

$('#char').on('input', function(){
    var char = $('#char').val();
    if(char != ''){
        if(charArr.includes(char)){
            $('span').html('  Correct! :)');
            $('span').css('color', 'green');

            var index = charArr.indexOf(char);

            $(`.output>div>div:nth-child(${index+1})`).html(char);

            charArr[index]='0';
        }
        else{
            $('span').html('  Wrong! :(');
            $('span').css('color', 'red');
        }
    }
    else{
        $('span').html('');
    }
});