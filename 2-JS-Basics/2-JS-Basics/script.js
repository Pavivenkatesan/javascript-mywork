console.log('HelloWorld!');
/*
Var age = 5;
if(age<10){
    console.log('John is a Boy')
}
else if (age < 20&&age>13){
    console.log('John is a teenager');
 } else if(age>20&&age<30)
    {console.log('John is a young man.');
    }
    else{
        console.log('Johan is a Man')
    }

    var job= prompt("What is john's profession?");
    alert('John works as a '+ job +'. Lets see what does he do');

    switch (job)
    {
        case 'teacher':
        console.log('John teaches Kids.');
        break;

        case 'driver':
        console.log('John drives a cab in NewYork');
        break;

        case 'cop':
        console.log('John helps fight crime.');
        break;
        default:
        console.log('John does something else.');
        break;
        
    }
    const multiply=5;
    var johnHeight, smithHeight, johnAge, smithAge, scoreJohn, scoresmith, thirdHeight, thirdAge, scoreThird;
    var flag =false;
    var flag1=false;
   
    
    
    
    twoValues();
    decisiontwovalues();
    
    // while(Thirdvaluedecision()===true||decisiontwovalues()===true);
    // {
    //     //console.log('END OF GAME');
    //     console.log('******************THE END********************');
    // }

     function decisiontwovalues() 
    {
      
        if (parseFloat(scoreJohn)>parseFloat(scoresmith))
        {
            console.log('John is the Winner');
            console.log('END OF GAME');
            flag=true;
            return;
            
            
        }
        else if (parseFloat(scoresmith)>parseFloat(scoreJohn)) 
        {
            console.log('Smith is the Winner');
            console.log('END OF GAME');
            flag=true;
            return;
        }
        else if (parseFloat(scoresmith)===parseFloat(scoreJohn))
        {
            console.log('The score is tied btw John and Smith,('+scoreJohn+','+scoresmith+')enter third set of values to decide');
            console.log("Score of John and Smith " + scoreJohn);
            thirdValue();
            Thirdvaluedecision();
            
        }   
    
    };
     function Thirdvaluedecision()
    {    do
        {
            if  (parseFloat(scoreThird) < parseFloat(scoreJohn)&&parseFloat(scoreThird) < parseFloat(scoresmith)||parseFloat(scoreThird)===parseFloat(scoreJohn))
            { 
                console.log('It is a tie between John and Smith again('+scoreJohn+','+scoresmith+') Please enter two different sets of values for decision');
                console.log('Continue game to determine winner...');
                twoValues();
                decisiontwovalues();  
                console.log('Flag value:'+flag);
                return;
                // console.log('The return value of process is:' +decisiontwovalues(process));
            
            }
            // else if (parseFloat(scoreJohn)===parseFloat(scoreThird)&&parseFloat(scoreThird)===parseFloat(scoresmith))
            // { 
            //     console.log('It is a tie again between John,Smith and kevin('+scoreJohn+','+scoresmith+','+scoreThird+') Enter three different set of third value again');
            //     console.log('Continue game to determine winner...');
            //     twoValues();
            //     decisiontwovalues(false); 
            //     return false;
                
            //     //thirdValue();
            // }
            else if (parseFloat(scoreThird) > parseFloat(scoreJohn)&&parseFloat(scoreThird) > parseFloat(scoresmith)&&!flag===true)
            {
                console.log('Kevin score' + scoreThird);
                console.log('Final tied value ' + scoreJohn);
                console.log('Kevin is the winner');
                flag1=true; 
                break;
            } 
        }
        while(flag===true||flag1===true)
        {
            console.log('******************THE END********************');
        } 
    };

    function thirdValue()
    {
        thirdHeight=prompt('Enter the third value of height:');
        thirdAge=prompt('Enter the third value of Age:');
        scoreThird= thirdHeight+thirdAge*multiply;
        console.log('Thirdvaluescore '+scoreThird);
        flag=false;
        //Thirdvaluedecision();
    };  
    function twoValues(){
        johnHeight= prompt('Enter the height of John in cms:');
        johnAge=prompt('Enter the age of john in years:');
        smithHeight= prompt('Enter the height of Smith in cms:');
        smithAge=prompt('Enter the age of smith in years:');
        alert('Game Calculation Begins.......');
        scoreJohn=johnHeight+johnAge*multiply;
        scoresmith=smithHeight+smithAge*multiply;
    };*/

    var names= ['John', 'Jane','Mark','Bob','Mary'];

    for(var i=names.length-1; i>=0; i--)
    {
        console.log(names[i]);
    } 
