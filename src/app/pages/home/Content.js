import React, {Component} from 'react';
import PropTypes from "prop-types";

class Content extends Component {
    render() {
        return (
            <div>
                <div className='userDetails'>
                    <span className='avatar'
                          style={{backgroundImage: "url('http://d38we5ntdyxyje.cloudfront.net/820641/profile/CRPQIVAX_avatar_medium_square.jpg')"}}/>
                    <span className='userName'>
                        {this.props.dataPost.userName}
                    </span>
                </div>
                <img src={this.props.dataPost.imgSrc} alt="pic"/>
            </div>
        );
    }
}

Content.propTypes = {
    dataPost: PropTypes.object,
};

export default Content;
