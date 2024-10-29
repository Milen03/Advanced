const url = 'http://localhost:3030/jsonstore/messenger'
const messenges = document.getElementById('messages')

function attachEvents() {
    document.getElementById('submit').addEventListener('click', postMessages)
    document.getElementById('refresh').addEventListener('click', loadAllMessages)
}
async function postMessages() {
    const [autor, content] = [document.getElementById('author'), document.getElementById('content')]

    if (autor.value !== '' || content.value !== '') {
        await requset(url, { author: autor.value, content: content.value })


    }

    document.getElementById('author').value = ''
    document.getElementById('content').value = ''
}

async function loadAllMessages() {


    const res = await fetch(url)
    const data = await res.json()

    messenges.value = Object.values(data).map(({ author, content }) => `${author}: ${content}`).join('\n')
}

async function requset(url, option) {
    if (option) {
        option = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(option)
        }

    }
    const responst = await fetch(url, option)

    return responst.json()
}

attachEvents();