// For API - visit the site
// Random User: https://randomuser.me/

export async function getRandomUser() {
    const response = await fetch('https://randomuser.me/api/', {method: "GET"});
    const result = await response.json();
    return result;
}