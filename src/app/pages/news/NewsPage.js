import React, {Component} from "react";
import "./NewsPage.scss";
import ListPost from "./ListPost";

class NewsPage extends Component {

    render() {
        const data = [
            {
                image: 'https://c1.staticflickr.com/3/2810/33291838300_375b742311_b.jpg',
                title: 'sdfdgfdsf',
                hashTag: 'dfgddsdf',
                link: './sdjkfh'
            },
            {
                image: 'https://c1.staticflickr.com/3/2810/33291838300_375b742311_b.jpg',
                title: 'sdfdgfdsf',
                hashTag: 'dfgddsdf',
                link: './sdjkfh'
            },
            {
                image: 'https://c1.staticflickr.com/3/2810/33291838300_375b742311_b.jpg',
                title: 'sdfdgfdsf',
                hashTag: 'dfgddsdf',
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



export default NewsPage;