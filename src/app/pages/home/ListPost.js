import React, {Component} from 'react';
import "./ListPost.css";
import PostElement from "./PostElement";

class ListPost extends Component {
    render() {
        const {title} = this.props;
        const data = {
            image: 'https://c1.staticflickr.com/3/2810/33291838300_375b742311_b.jpg',
            title: 'sdfdgfdsf',
            hashtag: 'dfgddsdf'
        }

        return (
            <div className="ListPost">
                <div className="Title">
                    <h3>{title}</h3>
                </div>

                <ul>
                    <li>
                        <PostElement element={data}/>
                    </li>

                    <li>
                        <PostElement element={data}/>
                    </li>

                    <li>
                        <PostElement element={data}/>
                    </li>

                    <li>
                        <PostElement element={data}/>
                    </li>

                    <li>
                        <PostElement element={data}/>
                    </li>

                    <li>
                        <PostElement element={data}/>
                    </li>

                    <li>
                        <PostElement element={data}/>
                    </li>

                    <li>
                        <PostElement element={data}/>
                    </li>

                </ul>
            </div>
        );
    }
}

export default ListPost;
