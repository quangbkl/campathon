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
        const {image, title, description, link} = this.props.element;
        const {isRedirectLink} = this.state;

        if (isRedirectLink) {
            return (
                <Redirect to={"/view"+link}/>
            );
        }

        return (
            <div className="PostElement" onClick={this.handleOnClick.bind(this)}>
                <div className="Item">
                    <div className="Caption">
                        <img src={image} alt=""/>
                    </div>

                    <div className="Title">{title}</div>

                    <div className="Description">{description}</div>
                </div>

                <div className="ItemHover">View</div>
            </div>
        );
    }
}

export default PostElement;
