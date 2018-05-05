import React, {Component} from 'react';
import PropTypes from "prop-types";

class CommentInput extends Component {
    render() {
        return (
            <div className={'commentForm'}>
                <form>
                    <input id={this.props.dataPost.idPost} type="text" className={'commentInput'}
                           placeholder={'Nhập bình luận của bạn...'}/>
                    <button onClick={this._submitCommentInput}><span className="pushComment"/></button>
                </form>
            </div>
        );
    }

    _submitCommentInput = (e) => {
        e.preventDefault();

        //@todo please remove `document.getElementById`
        const input = document.getElementById(this.props.dataPost.idPost).value;
        this.props.submitComment(input, this.props.dataPost.idPost);
        document.getElementById(this.props.dataPost.idPost).value = '';
    }
}

CommentInput.propTypes = {
    dataPost: PropTypes.object,
    submitComment: PropTypes.func.isRequired,
};

export default CommentInput;