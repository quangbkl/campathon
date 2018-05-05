import React, {Component} from "react";
import PropTypes from 'prop-types';
import "./HomePage.css";
import ListPost from "./ListPost";

class HomePage extends Component {

    render() {
        return (
            <div className='HomePage'>
                <ListPost title="New Post"/>
            </div>
        );
    }
}

HomePage.propTypes = {
    history: PropTypes.object,
};

export default HomePage;