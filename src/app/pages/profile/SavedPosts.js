import React, {Component} from 'react';
import PropTypes from "prop-types";

class SavedPosts extends Component {
    createArrImg = () => {
        const {arrSaves} = this.props;
        let listLi = [];
        for (let i = 0; i < arrSaves.length; i++) {
            listLi.push(<img src={arrSaves[i]} alt=""/>);
        }

        return listLi;
    };

    render() {
        return (
            <div className="Main">
                <div className="Ramrm">
                    <span>Chỉ mình bạn có thể xem mục mình đã lưu</span>
                </div>
                <div className="ImagePost">
                    {this.createArrImg()}
                </div>
            </div>
        );
    }
}

SavedPosts.propTypes = {
    arrSaves: PropTypes.array,
};

export default SavedPosts;