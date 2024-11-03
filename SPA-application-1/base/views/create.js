const baseUrl = 'http://localhost:3030/data/recipes';

const sectionElement = document.getElementById('create-section');
const createForm = sectionElement.querySelector('form');

export default function createPage() {
    sectionElement.style.display = 'block';
}
createForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    data.ingredients = data.ingredients.split('\n');
    data.steps = data.steps.split('\n');
    const accessToken = localStorage.getItem('accessToken');

    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            location.href = '/';
        })
});