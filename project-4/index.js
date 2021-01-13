const drumButtonsLength = document.querySelectorAll('.drum').length;
console.log(drumButtonsLength);

for(var i =0; i<drumButtonsLength; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click', function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
    });
}
document.addEventListener('keypress', function(e){
    makeSound(e.key);
})

  
function makeSound(key){
    switch(key){
        case 'A':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case 'B':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case 'C':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case 'D':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case 'E':
            var tom5 = new Audio('sounds/snare.mp3');
            tom5.play();
            break;
    
        case 'F':
            var tom6 = new Audio('sounds/crash.mp3');
            tom6.play();
            break;

        case 'G':
            var tom7 = new Audio('sounds/kick-bass.mp3');
            tom7.play();
            break;

            default:console.log('Error')
    }
}


