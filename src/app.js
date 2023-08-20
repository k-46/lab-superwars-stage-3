const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers =[]
    detailedPlayers = players.map(function(names,index){
        return{
        name: names,
        strength : getRandomStrength(),
        image: `images/super-${index+1}.png`,
        type : index%2==0 ? "hero" : "villain"
    }});

    // Instead of forloop use Map method
    // Code here
console.log(detailedPlayers)
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';
    let hero = players.filter(function(item){
        return item.type=="hero";
    })
    let villain = players.filter(function(item){
        return item.type=="villain";
    })
    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    if(type=="hero"){
    fragment=hero.map(function(item){
        return `<div class="player">
        <img src="${item.image}" alt="">
        <div class="name">${item.name}</div>
        <div class="strength">${item.strength}</div>
        </div>`
    })}
    else if(type=="villain"){
        fragment=villain.map(function(item){
            return `<div class="player">
            <img src="${item.image}" alt="">
            <div class="name">${item.name}</div>
            <div class="strength">${item.strength}</div>
            </div>`
        })
    }

    return fragment.join('\n');
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}