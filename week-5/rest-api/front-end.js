//Voorbeeld hoe een fetch er zou uitzien met de POST Method

fetch('http://localhost:3000/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: "Mijn eerste post",
        description: "Dit is mijn eerste post"
    }),
})