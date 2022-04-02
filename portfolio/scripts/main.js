// assign elements
const body=$('body');
const nameForm=$('.name_form');
const nameLabel=$('.name_label');
const nameInput=$('.name_input');
const input=$('.name_input input');
var inputValue='';
const buttonContainer=$('.form_button');
const button=$('.form_button button');
const main=$('main');
const welcome=$('.welcome');
const welcomeText=$('.welcome p');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


// events on next button click
function clickOnNextButton(){
    nameLabel.removeClass('animate__bounceInDown').addClass('animate__fadeOutUpBig');
    nameInput.removeClass('animate__fadeInLeftBig').addClass('animate__fadeOutLeftBig');
    buttonContainer.removeClass('animate__bounceInUp').addClass('animate__fadeOutDownBig');
    setTimeout(function (){
       nameForm.remove();
       body.css('align-items','unset');
       main.css('display','block');
    },1500)
    inputValue=input.val();
    if(inputValue!==''){
        welcomeText.text('Hello '+ capitalizeFirstLetter(inputValue)+', what are you interested in?');
    }
    
    
}

button.on('click',clickOnNextButton);

input.on('keyup',function (e){
    if(e.keyCode===13){
       clickOnNextButton();
    }
});




