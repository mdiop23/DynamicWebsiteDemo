"use strict";
let winningTickets = [
    {tixNum: "1001001", expires: "2022-09-05", prize: 100000},
    {tixNum: "1298711", expires: "2022-10-10" , prize: 250000},
    {tixNum: "1309182", expires: "2022-12-30" , prize: 500000},
    {tixNum: "1456171", expires: "2023-01-20", prize: 1000000},
    {tixNum: "3332871", expires: "2022-05-20", prize: 1000000},
    {tixNum: "4651529", expires: "2022-12-15", prize: 100000},
    {tixNum: "5019181", expires: "2023-01-31", prize: 250000},
    {tixNum: "5168261", expires: "2023-03-01", prize: 1000000},
    {tixNum: "6761529", expires: "2022-12-15", prize: 250000},
    {tixNum: "7778172", expires: "2023-01-15", prize: 5000000},
    {tixNum: "8751426", expires: "2020-09-15", prize: 100000}
   ];

window.onload = init;

const jokesContainer = document.getElementById("jokesContainer");
const categoriesSelect = document.getElementById("categoriesSelect");

function init() {
    const showMeTheJokesBtn = document.getElementById("showMeTheJokesBtn");
    showMeTheJokesBtn.onclick = showMeTheJokesBtnClicked;

    populateCategoriesDropdown();
    loadWinningTicketsTable();
}

function loadWinningTicketsTable(){
    let numWinningTickets = winningTickets.length;
    for(let i = 0; i < numWinningTickets; i++){
        
        addNewRow(winningTickets[i].tixNum, winningTickets[i].prize, winningTickets[i].expires);
    }
}

function addNewRow(ticketNumber, prizeAmount, expires){
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    cell1.innerHTML = ticketNumber;
    let cell2 = row.insertCell(1);
    cell2.innerHTML = "$" + prizeAmount[i].prize.toFixed(2);
    let cell3 = row.insertCell(2);
    cell3.innerHTML = expires;
}

function populateCategoriesDropdown() {
    let categories = getCategoriesArray();

    for(let category of categories){
        const categoriesSelect = document.getElementById("categoriesSelect");
        let newOption = new Option(category, category);
        categoriesSelect.appendChild(newOption);
    }

}

function getCategoriesArray(){
    let categories = [];
    for(let dadJoke of jokes.dadJokes){
        if(categories.includes(dadJoke.category) != true){
            categories.push(dadJoke.category);
        }
    }
    categories.sort();
    return categories;
}

function addJokeToContainer(joke){
    let accordionItemDiv = document.createElement("div");
    accordionItemDiv.className = "accordion-item";

    jokesContainer.appendChild(accordionItemDiv);

    let accordionHeader = document.createElement("h2");
    accordionHeader.className = "accordion-header";

    accordionItemDiv.appendChild(accordionHeader);

    let btn = document.createElement("button");
    btn.className = "accordion-button collapsed";
    btn.type = "button";
    btn.setAttribute("data-bs-toggle", "collapse");

    let targetId = "flush-collapse-" + joke.id;

    btn.setAttribute("data-bs-target", "#" + targetId);
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-controls", targetId);

    let btnTextNode = document.createTextNode(joke.setup);
    btn.appendChild(btnTextNode);

    accordionHeader.appendChild(btn);

    let flushCollapseDiv = document.createElement("div");
    flushCollapseDiv.id = targetId;
    flushCollapseDiv.className = "accordion-collapse collapse"
    flushCollapseDiv.setAttribute("data-bs-parent","#jokesContainer");

    let accordionBody = document.createElement("div");
    accordionBody.className = "accordion-body";

    let accordionBodyTextNode = document.createTextNode(joke.punchline);

    accordionBody.appendChild(accordionBodyTextNode);

    flushCollapseDiv.appendChild(accordionBody);
}

function showMeTheJokesBtnClicked() {

    jokesContainer.innerHTML = "";
    let selectedCategory = categoriesSelect.value;

    for(let dadJoke of jokes.dadJokes){
        if(dadJoke.category == selectedCategory){
            addJokeToContainer(dadJoke);
        }
    }
}