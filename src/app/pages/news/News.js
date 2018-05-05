import React, {Component} from 'react';

class News extends Component {
    render(){
        return(
            this.prop.children
        );
    }
}

export default News;