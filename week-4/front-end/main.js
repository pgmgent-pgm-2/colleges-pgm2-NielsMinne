function showData(message) {
    const app = document.getElementById('app');
    app.innerText = message;
}

async function fetchData() {
    const response = await fetch('http://localhost:8080');
    const { message } = await response.json();
    showData(message)
}

fetchData();