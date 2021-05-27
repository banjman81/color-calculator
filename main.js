const prompt = require('prompt-sync')();
console.log('1) Combine Color')
console.log('2) Deconstruct Color')
const option = prompt("Please enter an option ")

var numOption = Number(option);

if(isNaN(numOption)){
    console.log("Please select a valid option.")
}
else{
    if(numOption == 1){
        const color1 = prompt("please choose a primary for the first color. ")
        if((color1 == "red") || (color1 == "blue") || (color1 == "yellow")){
            const color2 = prompt("please choose a primary for the second color. ")
            if((color2 == "red") || (color2 == "blue") || (color2 == "yellow")){
                if(color1 == "red"){
                    if(color2 == "red"){
                        console.log('The result is red.')
                    }
                    else if (color2 == "blue"){
                        console.log('The result is purple.')
                    }
                    else if(color2 == "yellow"){
                        console.log('The result is orange.')
                    }
                }
                else if(color1 == "blue"){
                    if(color2 == "blue"){
                        console.log('The result is blue.')
                    }
                    else if (color2 == "red"){
                        console.log('The result is purple.')
                    }
                    else if(color2 == "yellow"){
                        console.log('The result is green.')
                    }
                }
                else if(color1 == "yellow"){
                    if(color2 == "blue"){
                        console.log('The result is green.')
                    }
                    else if (color2 == "red"){
                        console.log('The result is orange.')
                    }
                    else if(color2 == "yellow"){
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
    // option 2 color deconstruction
    else if(numOption == 2){
        const color = prompt("please a secondary colors to deconstruct. ")
        if((color == "purple") || (color == "orange") || (color == "green")){
            if(color == "purple"){
                console.log("Purple is the result of red and blue.")
            }
            else if(color == "orange"){
                console.log("Orange is the result of red and yellow.")
            }
            else if(color == "green"){
                console.log("Green is the result of yellow and blue.")
            }
        }
        else{
            console.log("Please select a valid color.")
        }
    }
    else{
        console.log("Please select a valid option.")
    }
}