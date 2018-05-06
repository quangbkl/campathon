import React, {Component} from "react";
import PropTypes from 'prop-types';
import "./HomePage.css";
import ListPost from "./ListPost";
// import {NewsFile} from "../../../services/NewsFile";

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state= {
            data:''
        }
    }
    componentDidMount() {
        const url = 'https://hien-mau-team.herokuapp.com/new-post.php';

        fetch(url, {
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST'
        })
            .then(function(response) {
                return response.json();
            })
            .then(response => {
                this.setState({
                    data:response
                });


            })
            .catch(function(response) {
                console.log(response);
                debugger;
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