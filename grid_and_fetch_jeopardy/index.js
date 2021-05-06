

/* 
    Jeopardy
    
    Write an async function 
        that uses fetch() to fetch 4 categories 
        from https://jservice.io/api/categories
        parameters: count, offset
        
    Display the categories
        in a simplified 4x5 Jeopardy Board 
        using CSS Grid
*/

async function getCategories(count,offset){
    return await fetch(`https://jservice.io/api/categories?count=${count}&offset=5`)
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.log(err))
}
function getClueHtml(clueValue){
    return `<div class="my-category-clue" style="grid-row-start:${clueValue/100 + 1}">$${clueValue}</div>`
}
getCategories(5).then(categories =>{
    // console.log(categories)
    const myCategoryTitle = categories.map(category => `<div class="my-category-title">${category.title}</div>
    ${getClueHtml(100)}
    ${getClueHtml(200)}
    ${getClueHtml(300)}
    ${getClueHtml(400)}
    `).join('')
    console.log(myCategoryTitle)
    document.body.innerHTML = `
        <div class="board">
            ${myCategoryTitle}
        </div>
    `
})

/* 
    Jeopardy (Challenge)
    
    Update getCategories to take 
        count/offset arguments
    Fetch 5 Categories (Update the display as necessary)
    
    Write a getClueHtml() function
        calculate grid-row-start based on the input value
        which will always be a multiple of 100 
*/