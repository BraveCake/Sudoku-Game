var sudoku_cell = [];
var sudoku_db =[1,2,3,4,5,6,7,8,9] ;
var sudoku_answer= [];
var time = document.getElementById("time");
var mins =  0;
var secs = 0;

setInterval(count_up,1000);
for(var i=0; i<81; ++i)
{
    sudoku_cell[i] = document.getElementById("c"+i)
}
(function shaffle ()
{
    var t,s;
    for(var i=8; i>0; --i)
    {
        t= parseInt(Math.random()*10-1);
         s= sudoku_db[i]  ;
         sudoku_db[i]   =   sudoku_db[t];
         sudoku_db[t] = s;
        

    }
}());
function generate()
{
    var x ;
    for(var i=0; i<9; ++i)
    {
     sudoku_cell[i].value=sudoku_db[i];
    }

     x = 3;
    for(var i=9; i<18; ++i)
    {
       
     sudoku_cell[i].value=sudoku_db[x];
     ++x;
     if(x==9) x=0;
    }
    x = 6;
    for(var i=18; i<27; ++i)
    {
       
     sudoku_cell[i].value=sudoku_db[x];
     ++x;
     if(x==9) x=0;
    }
    x=7;
    for(var i=27; i<36; ++i)
    {
       
     sudoku_cell[i].value=sudoku_db[x];
     ++x;
     if(x==9) x=0;
    }
x = 1
for(var i=36; i<45; ++i)
    {
       
     sudoku_cell[i].value=sudoku_db[x];
     ++x;
     if(x==9) x=0;
    }
    x=4;
    for(var i=45; i<54; ++i)
    {
       
     sudoku_cell[i].value=sudoku_db[x];
     ++x;
     if(x==9) x=0;
    }
    x=5;
    for(var i=54; i<63; ++i)
    {
       
     sudoku_cell[i].value=sudoku_db[x];
     ++x;
     if(x==9) x=0;
    }
    x= 8;
    for(var i=63; i<72; ++i)
    {
       
     sudoku_cell[i].value=sudoku_db[x];
     ++x;
     if(x==9) x=0;
    }
    x=2;
    for(var i=72; i<81; ++i)
    {
       
     sudoku_cell[i].value=sudoku_db[x];
     ++x;
     if(x==9) x=0;
    }
    for(var i=0; i<81; ++i)
{
    sudoku_answer[i] = sudoku_cell[i].value;
}
}
function create_gaps()
{
    var t;
for(var i=0; i<81; ++i)
{
    t=Math.floor(Math.random()*10);
    if(t>=7){

    sudoku_cell[i].value= '';
    
    }
	else
		    document.getElementById("c"+i).readOnly = true;

}
console.log(t);
}
function check()
{
    var f =0;
    for(var i=0; i<81; ++i)
    {
        if(sudoku_cell[i].value!=sudoku_answer[i]) {
        alert("incorrect answer \n :( ");
        f=1;
        break;
        }
    
    }
    if(!f)
    alert("Correct answer \n :) ");
   
}
function count_up()
{
	secs+1 ==60? ++mins: mins=mins;
	secs = (secs+1)%60;
	
	time.innerHTML = mins + "M:" + secs +"S";
	
}

generate();
create_gaps();

/* 3 notes should be taken into consideration  regarding to this code 
1st one: the game board has a pattern, I didn't randomised boxes completely, not a serious issue, it's just sort of laziness
 2nd point : diffculty is random, it's possible to set a sepcific number of gaps for each diffculty if it's desired but it's not a reliable thing due to the 3rd point (More gaps = More probabilities)
3rd point :  the check function is not based on a sudoku solver algorithm, it matches the entered values by user with original values on board before adding gaps. since sudoku puzzle may has more than a single answer your answer may end being considered as incorrect one if it's not similar to  the puzzle generator's one. 
*/  