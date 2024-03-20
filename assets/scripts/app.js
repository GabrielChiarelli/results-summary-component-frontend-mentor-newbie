var categoryTitles = document.getElementsByClassName("category-title");
var currentResults = document.getElementsByClassName("current-result");

var currentPoints = document.getElementsByClassName("current-points");


fetch("../../data.json")
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++)
        {
            // Displays the icons and the names of the categories
            categoryTitles[i].innerHTML = 
            `<img src="${data[i].icon}" alt="${data[i].category}">
            <p>${data[i].category}</p>`;
            
            currentResults[i].innerHTML = 
            `${data[i].score}`;
        }
        
        // Displays the average of the total score
        var totalScore = 0;
        for (let i = 0; i < data.length; i++) {
            totalScore += data[i].score;
        }
        var averagePoints = totalScore / data.length;
        averagePoints = Math.floor(averagePoints);
        currentPoints[0].innerHTML = `${averagePoints}`;
    });
