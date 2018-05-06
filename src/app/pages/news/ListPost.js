import React, {Component} from 'react';
import "./ListPost.css"
import PostElement from "./PostElement";
import {getNewView, login} from  "./../../../services/APIServices";

class ListPost extends Component{

    render(){
        const {title, data} = this.props;

        return (
            <div className="ListPost">
                <div className="Title">
                    <h3>{title}</h3>
                </div>

                <ul>
                    {
                        data.map((element) =>
                            <li>
                                <PostElement element={element}/>
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}
export default ListPost;