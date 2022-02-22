function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(users => displayUsers(users))
}

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => console.log(posts))
}
// loadPosts();
function displayUsers(users) {
    const ul = document.getElementById('users');
    for (const user of users) {
        const li = document.createElement('li');
        li.innerText = `User FullName: ${user.name} User Email: ${user.email}`;
        ul.appendChild(li);
    }
}