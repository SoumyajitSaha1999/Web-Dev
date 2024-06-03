// For API - visit the site
// JSON Placeholder: https://jsonplaceholder.typicode.com/

export const getPosts = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{method: "GET"});
    return response.json();
}