import React, {Component} from 'react';
import './PostElement.css';

class PostElement extends Component {
    render() {
        const {image, title, hashtag} = this.props.element;

        return (
            <div className="PostElement">
                <div className="Item">
                    <div className="Caption">
                        <img src={image} alt=""/>
                    </div>

                    <div className="Title">{title}</div>

                    <div className="HashTag">{hashtag}</div>
                </div>

                <div className="ItemHover">dgdfg</div>
            </div>
        );
    }
}

export default PostElement;
