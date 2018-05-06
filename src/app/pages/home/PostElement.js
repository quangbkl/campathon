import React, {Component} from 'react';
import './PostElement.css';
import {Redirect} from "react-router-dom";

class PostElement extends Component {
    state = {
        isRedirectLink: false
    }

    handleOnClick() {
        console.log("Redirect to home");
        this.setState({
            isRedirectLink: true
        })
    }

    render() {
        const {image, title, hashTag, link} = this.props.element;
        const {isRedirectLink} = this.state;

        if (isRedirectLink) {
            return (
                <Redirect to={link}/>
            );
        }

        return (
            <div className="PostElement" onClick={this.handleOnClick.bind(this)}>
                <div className="Item">
                    <div className="Caption">
                        <img src={image} alt=""/>
                    </div>

                    <div className="Title">{title}</div>

                    <div className="HashTag">{hashTag}</div>
                </div>

                <div className="ItemHover">Chi tiết</div>
            </div>
        );
    }
}

export default PostElement;
