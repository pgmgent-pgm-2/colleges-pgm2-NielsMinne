import { initForm } from './create.js';

export const API_URL = "http://localhost:3000";


export async function getPosts() {
    const response = await fetch(`${API_URL}/posts`);
    const data = await response.json();
    
    
    showPosts(data);
    return data;
}


async function deletePost(uuid) {
 
    await fetch(`${API_URL}/posts/${uuid}`, {
        method: 'DELETE'
    });

    getPosts();

}

function addListenerToButtons($buttons){
    $buttons.forEach(($button) => {
        $button.addEventListener('click', () => {
            deletePost($button.getAttribute('data-uuid'));
        })
    })
}

function showPosts(posts) {
    const $list = document.getElementById('news');
    if ($list) {
        
    
        $list.innerHTML = posts.map(post => `
        <li>
        <article>
        <a href="/detail.html?id=${post.id}">
        <strong>${post.title}</strong>
        <p>${post.description}</p>
        <button data-uuid="${post.id}">Delete</button>
        </a>
        </article>
        </li>
        `).join('');
    }
    
    const $buttons = document.querySelectorAll("button[data-uuid]");
    addListenerToButtons($buttons);
}

getPosts();
initForm();