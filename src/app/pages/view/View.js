import React, {Component} from 'react';
import "./View.css";

class View extends Component {
    state = {
        title: 'Thông báo thu tiền học học kì 2',
        tagName: '',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum ac nibh eu ullamcorper. Morbi in libero convallis, eleifend dui sit amet, elementum ligula. Etiam nunc felis, iaculis ac commodo in, accumsan ac odio. Suspendisse vitae dignissim tortor. Vestibulum leo eros, vulputate malesuada feugiat placerat, tempus vel sapien. Suspendisse enim neque, faucibus a nunc quis, tristique venenatis leo. Nullam tristique venenatis vestibulum. Vivamus pharetra velit vitae arcu faucibus, quis convallis nunc dapibus. Donec tempor est lorem. Quisque interdum, risus at hendrerit laoreet, mauris nulla imperdiet massa, vitae auctor lorem est eu nisi. Mauris tristique justo risus, vel rhoncus massa convallis eu. Cras mattis ante elementum arcu ornare posuere. Curabitur a dapibus leo, ac pretium arcu. In ut purus quam. Morbi a risus odio.',
        description: '',
        documentURL: '',
        image: 'https://images.pexels.com/photos/55787/pexels-photo-55787.jpeg?auto=compress&cs=tinysrgb&h=350',

    }

    render() {

        const {title, content, image} = this.state;


        return (
            <div className="view-container">
                <div className="title-container">
                    <img src={image} className="image"/>
                    <span className="title">{title}</span>

                </div>
                <div className="content">
                    <p>
                        {content}
                    </p>
                </div>

            </div>
        );
    }
}

export default View;