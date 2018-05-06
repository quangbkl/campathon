
export const login = (email, password) => {
    const url = 'https://crush.blogk.xyz/login';
    const request = new Request(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password,
            email: email,
            password: password,
        })
    });
    return fetch(request).then(response => {
        return response.json();
    });
};

const  getNewView = () => {
    const url = 'https://hien-mau-team.herokuapp.com/new-post.php';
    const request = new Request(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({

        })
    });
    return fetch(request).then(response => {
        return response.json();
    });
};

export default  getNewView;