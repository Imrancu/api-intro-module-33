function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => displayPosts(posts))
}

function displayPosts(posts) {
    for (const post of posts) {
        console.log(post)
    }
}