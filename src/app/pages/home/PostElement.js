import React, {Component} from 'react';
import './PostElement.css';
import {Redirect} from "react-router-dom";

class PostElement extends Component {
    state = {
        isRedirectLink: false
    }

    handleOnClick() {
        // console.log("Redirect to home");
        // this.setState({
        //     isRedirectLink: true
        // })

        window.open(this.props.element.file_link);
    }

    render() {
        const {file_image, file_title, file_hash_tag,} = this.props.element;
        const {isRedirectLink} = this.state;

        // if (isRedirectLink) {
        //     return (
        //         <Redirect to={file_link}/>
        //     );
        // }

        return (

            <div className="PostElement" onClick={this.handleOnClick.bind(this)}>
                <div className="Item">
                    <div className="Caption">
                        <img src={file_image} alt=""/>
                    </div>

                    <div className="Title">{file_title}</div>

                    <div className="HashTag">{file_hash_tag}</div>
                </div>

                <div className="ItemHover">View</div>
            </div>

        );
    }
}

export default PostElement;
