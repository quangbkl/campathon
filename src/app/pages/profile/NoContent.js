import React, {Component} from 'react';

class NoContent extends Component {
    render() {
        return (
            <div className="Main">
                <div className="Start">
                    <b>Bắt đầu chia sẻ khoảng khắc của bạn.</b>
                    <p>Tải ứng dụng để chia sẻ ảnh hoặc video đầu tiên của bạn.</p>
                    <img id="appstore"
                         src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_vietnamese-vi.png/e806481bc99e.png"
                         alt=""/>
                    <img id="chplay"
                         src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_vietnamese-vi.png/585da63c67f8.png"
                         alt=""/>
                </div>
                <div className="Image">
                    <img className="https://www.instagram.com/static/images/mediaUpsell.jpg/7e0cb2166ce8.jpg"
                         width="380px" alt=""/>
                </div>
            </div>
        );
    }
}

export default NoContent;