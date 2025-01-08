import { API_URL, getPosts } from "./main.js";

export function initForm() {

    const $form = document.getElementById('create-form');
    
    if ($form) {
        const $titleField = $form.querySelector('input');
        const $descriptionField = $form.querySelector('textarea');
        $form.addEventListener('submit', async (e) => {
            e.preventDefault();
    
            await createPost({
                title: $titleField.value ,
                description: $descriptionField.value
            })
    
            $titleField.value = '';
            $descriptionField.value = '';
    
            getPosts();
           
        })
        
    }

    
}

async function createPost(content) {
    await fetch(`${API_URL}/posts`, {
        method: 'POST',
        body: JSON.stringify(content),
        headers: {
            'Content-Type': 'application/json',
        }
    })
}