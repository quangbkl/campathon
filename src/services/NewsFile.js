export const NewsFile = () => {
    const url = 'https://hien-mau-team.herokuapp.com/new-post.php';
    const data = {};

    return fetch(url)
    }).then(res => res.json())
};