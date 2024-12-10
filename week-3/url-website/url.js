const users = [
    {
        userId: 1,
        name: 'Stef'
    },
    {
        userId: 2,
        name: 'Jan'
    },
    {
        userId: 3,
        name: 'Piet'
    }
]

const posts = [
    {
        authorId: 1,
        message: 'Yolo'
    },
    {
        authorId: 1,
        message: 'Het sneeuwt'
    },
    {
        authorId: 2,
        message: 'Let that sink in.'
    }
]


function fetchUserData(id) {
    return new Promise((resolve, reject) => {
        // Search in db for user width userId
        const user = users.find(user => user.userId === parseInt(id));

        if (user) {
            resolve(user)
        } else {
            reject(`Er is geen gebruiker gevonden met user id ${id}`);
        }
    });
}

function fetchUserPosts(user) {
    return new Promise((resolve, reject) => {
        const userPosts = posts.filter(post => post.authorId === user.userId);

        if (userPosts.length) {
            resolve(userPosts);
        } else {
            reject('Er zijn geen posts voor deze gebruiker');
        }
    });
}

function renderString(str) {
    document.getElementById('data').innerText = str;
}


const currentUrl = 'https://www.pgm.gent/lecturers?class=1pgm';

const urlObject = new URL(currentUrl);
const searchParams = urlObject.searchParams;

console.log(urlObject);
console.log(urlObject.searchParams);
console.log(urlObject.searchParams.get('class'));


searchParams.append('gender', 'male');
searchParams.set('gender', 'female');
searchParams.set('class', '2pgm');

console.log(urlObject, searchParams, urlObject.toString());
// window.location = urlObject.toString();

const currentLink = window.location.toString();
console.log('Current Link: ', currentLink);
const currentLinkParams = new URL(currentLink).searchParams;
const currentUserId = currentLinkParams.get('u')


fetchUserData(currentUserId)
    .then(user => {
        console.log(user.name);
        renderString(user.name);
    })