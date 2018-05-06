import React, {Component} from "react";
import PropTypes from 'prop-types';
import "./HomePage.css";
import ListPost from "./ListPost";
import getNewPost from "../../../services/APIServices";

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state= {
            data:''
        }
    }
    componentDidMount() {
        getNewPost.then(response =>{
            this.setState({
                data:response
            })
        })
    }

    render() {


        return (
            <div className='HomePage'>
                <ListPost title="Tài liệu mới" data={this.state.data} />
                <ListPost title="Tài liệu hay" data={this.state.data} />
            </div>
        );
    }
}

HomePage.propTypes = {
    history: PropTypes.object,
};

export default HomePage;