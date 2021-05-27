const prompt = require('prompt-sync')();
const color = prompt('Please enter a secondary color or 2 primary colors with space in between. ');
var colors = color.split(" ");
var option = 0;
for (var i = 0; i < colors.length; i++){
        option++;
}

if(option == 1){
    if((colors[0] == "purple") || (colors[0] == "orange") || (colors[0] == "green")){
        if(colors[0] == "purple"){
            console.log("Purple is the result of red and blue.")
        }
        else if(colors[0] == "orange"){
            console.log("Orange is the result of red and yellow.")
        }
        else if(colors[0] == "green"){
            console.log("Green is the result of yellow and blue.")
        }
    }
    else{
        console.log("Please select a valid color.")
    }
}
else if(option == 2){
    if((colors[0] == "red") || (colors[0] == "blue") || (colors[0] == "yellow")){
        if((colors[1] == "red") || (colors[1] == "blue") || (colors[1] == "yellow")){
            if(colors[0] == "red"){
                if(colors[1] == "red"){
                    console.log('The result is red.')
                }
                else if (colors[1] == "blue"){
                    console.log('The result is purple.')
                }
                else if(colors[1] == "yellow"){
                    console.log('The result is orange.')
                }
            }
            else if(colors[0] == "blue"){
                if(colors[1] == "blue"){
                    console.log('The result is blue.')
                }
                else if (colors[1] == "red"){
                    console.log('The result is purple.')
                }
                else if(colors[1] == "yellow"){
                    console.log('The result is green.')
                }
            }
            else if(colors[0] == "yellow"){
                if(colors[1] == "blue"){
                    console.log('The result is green.')
                }
                else if (colors[1] == "red"){
                    console.log('The result is orange.')
                }
                else if(colors[1] == "yellow"){
                    console.log('The result is yellow.')
                }
            }
        }
        else{
            console.log("Please select a valid color.")
        }
    }
    else{
        console.log("Please select a valid color.")
    }
}
else{
    console.log("Too many inputs")
}




// console.log(colors);
// console.log(option);