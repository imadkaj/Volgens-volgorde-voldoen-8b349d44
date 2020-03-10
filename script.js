let input = document.querySelectorAll("input");
let message = document.querySelector("h4");

const antwoorden = [
    "Parijs",
    8,
    "IJselmeer",
    ["Volkswagen", "Audi", "Opel", "Porsche", "BMW", "Mercedes", "Mercedes-Benz"],
    ["Texel", "Vlieland", "Terschelling", "Ameland", "Schiermonnikoog"],
];


function getCorrectAnswers()
{
    var points = 0;
    for(var i = 0; i < antwoorden.length; i++)
    {
        var isMultipleChoice = Array.isArray(antwoorden[i]);
        if(isMultipleChoice)
        {
            if(antwoorden[i].includes(input[i].value))
            {
                points++;
            }
        } 
        else
        {
            if(antwoorden[i] == input[i].value)
            {
                points++;
            }
        }
    }
    return points;
}

function showMessage()
{
    message.innerText = "Je hebt er " + getCorrectAnswers() + " goed";
}