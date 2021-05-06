/* 
    TV Guide
    
    Write an async function called findShow(query)
        performs a fetch call to:
        https://api.tvmaze.com/singlesearch/shows?q=${query}&embed=seasons
        and returns the resulting show object
        
    Build a layout to display the show
        - Title
        - Summary
        - Seasons listed as individual divs
*/

async function findShow(query){
    const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}&embed=seasons`)
    const data = await response.json()
    return data
}

const getSeasonHTML = (season) =>{
    return `
        <div class="season">Season${season.number}</div>
        `
}
const getShowHTML = (show) =>{
    return `<div class="tv-guide">
    <div class="content">
    
    <h2>${show.name}</h2>
    ${show.summary}
    
    </div>
    <div class="seasons">
        ${show._embedded.seasons.map(getSeasonHTML).join('')}
    </div>
</div>`
}

findShow("office").then(show => {
    document.body.innerHTML = `
    ${getShowHTML(show)}
`
})
// findShow("office").then(a => {
//     console.log(a.name)
//     console.log(a.summary)
//     a._embedded.seasons.map(b => console.log(b.number))
    

// })