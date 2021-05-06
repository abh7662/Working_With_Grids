/* 
    Bonus Challenge 

    Fetch the list of 642 open APIs from
        https://api.publicapis.org/entries
        
    Create a my-api component
        display the name and category of the API,
        the description, and also display the type 
        of Auth (if any) and whether or not the API 
        supports HTTPS
    
    Use CSS Grid to style my-api
        The title and category should be 
        listed as Title (Category) 
        and should link to the API docs
        
    The grid should have 4 rows
        3rem, 1rem, 4rem, 3rem respectively
        and 3 columns each 1/3rd of available width
        
    Finally, display all of the APIs
*/

async function getApis(){
    const response = await fetch("https://api.publicapis.org/entries")
    const data = await response.json()
    return data
}
function getAPIHTML(apiData){
    return `<div class="my-api">
    <div class="api-name-category">${apiData.API}(${apiData.Category})</div>
    <div class="api-description">${apiData.Description}</div>
    <div class="api-auth">Auth: ${apiData.Auth?apiData.Auth:"None"}</div>
    <div class="api-https">HTTPS?${apiData.HTTPS}</div>
</div>`
}


getApis().then(apiDatas => {
    // const apiData = apiDatas.entries[0]
    // console.log(apiData)
    document.body.innerHTML = `<div class="my-apis">${apiDatas.entries.map(getAPIHTML).join('')}</div>`
})