import React, {Component} from "react";

class DatePost extends Component {
    render() {
        return (
            <div className="day_ago">
                <a>
                    <time className="time">7 days ago</time>
                </a>
            </div>
        );
    }
}

export default DatePost;