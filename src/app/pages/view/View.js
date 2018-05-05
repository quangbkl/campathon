import React, {Component} from 'react';
import "./View.css";

class View extends Component {
    state = {
        title: '',
        content: '',
    }
    render() {

        const {title, content} = this.state;

        return(
            <div className="View">
                <div className="Title">
                    <span className="ContactTitle">Day la tieu de</span>
                </div>
                <div className="Content">
                    <p>
                        Day la noi dung cua trang
                    </p>
                </div>

            </div>
        );
    }
}

export default View;