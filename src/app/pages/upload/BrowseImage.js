import React, {Component} from 'react';

class BrowseImage extends Component {
    render() {
        return (
            <div>
                <input className="link" placeholder="Tải ảnh lên từ máy tính"/>
                <button className="link_button">Browse</button>
            </div>
        );
    }
}

export default BrowseImage;
