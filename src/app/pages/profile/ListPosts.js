import React, {Component} from 'react';
import PropsTypes from "prop-types";

class ListPosts extends Component {
    createArrImg = () => {
        const {arrContents} = this.props;
        let listLi = [];
        for (let i = 0; i < arrContents.length; i++) {
            listLi.push(<img key={i} src={arrContents[i]} alt=""/>);
        }

        return listLi;
    };

    render() {
        return (
            <div className="Main">
                <div className="Img">
                    {this.createArrImg()}
                </div>
            </div>
        );
    }
}

ListPosts.propTypes = {
    arrContents: PropsTypes.array
};

export default ListPosts;