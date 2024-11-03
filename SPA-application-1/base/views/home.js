const baseUrl='http://localhost:3030/data/recipes'
const sectionElement=document.getElementById('home-section')

export default function homePage(){
    sectionElement.style.display='block'
loadRecipes()

}


function loadRecipes(){
    fetch(baseUrl)
    .then(res=>res.json())
    .then(data=>{
        sectionElement.innerHTML=''
        const recipes=Object.values(data)
        sectionElement.append(...recipes.map(renderRecipe))
    })
    .catch(err=>alert(err.message))
}


function renderRecipe(recipe){
   

    const h2Elm=document.createElement('h2')
    h2Elm.textContent=recipe.name

    const titleDiv=document.createElement('div')
    titleDiv.classList.add('title')
    titleDiv.appendChild(h2Elm)

    const imgElement = document.createElement('img');
    imgElement.src = recipe.img;

    const smallDiv = document.createElement('div');
    smallDiv.classList.add('small');
    smallDiv.appendChild(imgElement);

    const articleElement = document.createElement('article');
    articleElement.classList.add('preview');
    articleElement.appendChild(titleDiv);
    articleElement.appendChild(smallDiv);

    articleElement.addEventListener('click',async()=>{
        const response=await fetch(`${baseUrl}/${recipe._id}`)
        const articleDetails = await response.json();

        const articleDetailsElement=renderDetailedArticle(articleDetails)
        sectionElement.innerHTML = '';
        sectionElement.appendChild(articleDetailsElement);
    })

    return articleElement
    
}


function renderDetailedArticle(article) {
    const articleElement = document.createElement('article');

    articleElement.innerHTML = `
        <h2>${article.name}</h2>
        <div class="band">
            <div class="thumb">
                <img src="${article.img}">
            </div>
            <div class="ingredients">
                <h3>Ingredients:</h3>
                <ul>
                    ${article.ingredients.map(i => `<li>${i}</li>`).join('\n')}
                </ul>
            </div>
        </div>
        <div class="description">
            <h3>Preparation:</h3>
            ${article.steps.map(step => `<p>${step}</p>`).join('\n')}
        </div>
    `;

    return articleElement;
}
