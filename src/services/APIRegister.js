export const register = (username, name, password) => {
    const url = 'https://hien-mau-team.herokuapp.com/account/create.php';
    const request = new Request(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: {
            username: username,
            name: name,
            password: password,
        }

    });
    return fetch(request).then(response => {
        return response.json();
    });
};
export default register;