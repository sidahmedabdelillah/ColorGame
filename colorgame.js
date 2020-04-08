var mode = 6 ;
var colors = generaterandomcolors(mode) ;
var squares = document.querySelectorAll(".square");
var colordisplay = document.getElementById('colordisplay');
var pickedcolor = pickcolor();
var message = document.getElementById('message');
var h1 = document.querySelector('h1');
var resetbtn = document.querySelector("#reset");
var easybtn = document.querySelector("#easy");
var hardbtn = document.querySelector("#hard");

easybtn.addEventListener('click' , function(){
    mode = 3 ;
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    colors = generaterandomcolors(mode);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor ;
    for(var i=0 ; i<squares.length ; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = 'none' ;
        }
          
    }
    h1.style.backgroundColor = 'steelblue';
    
});
hardbtn.addEventListener('click' , function(){
    mode = 6 ;
    hardbtn.classList.add("selected");
    easybtn.classList.remove("selected");
    colors = generaterandomcolors(mode);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor ;
    for(var i=0 ; i<squares.length ; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = 'block' ;
        }
          
    }
    h1.style.backgroundColor = 'steelblue';
});
resetbtn.addEventListener('click' , function(){
    //new colors
    colors = generaterandomcolors(mode);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor ;
    for(var i=0 ; i<squares.length ; i++){
        squares[i].style.backgroundColor = colors[i];  
    }
    h1.style.backgroundColor = 'steelblue';
    message.textContent = '' ;
    this.textContent = 'Reset Colors' ;
});

colordisplay.textContent = pickedcolor ;
for (var i=0 ; i<squares.length ; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click" , function(){
        var clicked = this.style.backgroundColor;
        console.log(clicked);
        console.log(pickedcolor);
        if(clicked==pickedcolor){
            message.textContent = 'correct' ;
            changecolor(clicked);
            h1.style.backgroundColor = clicked ;
            resetbtn.textContent = 'Play Again' ;
            
        }else{
            this.style.backgroundColor = '#232323' ;
            message.textContent = 'try again';
        }
      
    });

}
function changecolor(color){
    for(var i =0 ; i<colors.length ; i++){
        squares[i].style.backgroundColor = color ;
    }
}

function pickcolor(){
    return colors[Math.floor(Math.random() * colors.length )] ;
}

function generaterandomcolors(n){
    //make aray 
    var arr = [] ;
    //add n colors 
    for(var i =0 ; i <n ; i++){
        arr.push(randomcol());
    }
    return arr ;
}

function randomcol(){
 var red = Math.floor(Math.random()*256);
 var blue = Math.floor(Math.random()*256);
 var green = Math.floor(Math.random()*256);
 return `rgb(${red}, ${green}, ${blue})` ;
}
