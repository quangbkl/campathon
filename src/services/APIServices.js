
const  getPostList = () => {
    const url = 'https://hien-mau-team.herokuapp.com/new-post.php';
    const request = new Request(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },

    });
    return fetch(request).then(response => {
        return response.json();
    });
};

export default  getPostList();