import React, {Component} from "react";
import PropTypes from 'prop-types';
import "./HomePage.css";
import ListPost from "./ListPost";

class HomePage extends Component {
    componentDidMount() {
        const url = 'https://hien-mau-team.herokuapp.com/new-post.php';

        fetch(url, {
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST'
        })
            .then(function(response) {
                return response.json();
            })
            .then(response => {
                console.log(response);
            })
            .catch(function(errow) {
                console.log(errow);
            })
    }

    render() {
        const data = [
            {
                image: 'https://c1.staticflickr.com/3/2810/33291838300_375b742311_b.jpg',
                title: 'sdfdgfdsf',
                hashTag: 'dfgdkfsjka sdfhkjds sdhjfh dsjkhfd kdshkjfh lkfhksjhdf khfdk dshfklsdjhf skjhf sdfkjshfksdsdf',
                link: './sdjh'
            },
            {
                image: 'https://c1.staticflickr.com/3/2810/33291838300_375b742311_b.jpg',
                title: 'sdfdgfdsf',
                hashTag: 'dfgdkfsjka sdfhkjds sdhjfh dsjkhfd kdshkjfh lkfhksjhdf khfdk dshfklsdjhf skjhf sdfkjshfksdsdf',
                link: './sdjkfh'
            },
            {
                image: 'https://c1.staticflickr.com/3/2810/33291838300_375b742311_b.jpg',
                title: 'sdfdgfdsf',
                hashTag: 'dfgkfsjka sdfhkjds sdhjfh dsjkhfd kdshkjfh lkfhksjhdf khfdk dshfklsdjhf skjhf sdfkjshfksddsdf',
                link: './sdjkfh'
            },
            {
                image: 'https://c1.staticflickr.com/3/2810/33291838300_375b742311_b.jpg',
                title: 'sdfdgfdsf',
                hashTag: 'dfgddsdf',
                link: './sdjkfh'
            }
        ];

        return (
            <div className='HomePage'>
                <ListPost title="Tài liệu mới" data={data} />
                <ListPost title="Tài liệu hay" data={data} />
            </div>
        );
    }
}

HomePage.propTypes = {
    history: PropTypes.object,
};

export default HomePage;