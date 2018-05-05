import React, {Component} from 'react';
import PropTypes from "prop-types";
import moment from "moment";
import Content from "./Content";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

moment.updateLocale('en', {
    relativeTime: {
        future: "in %s",
        past: "%s trước",
        s: 'vài giây',
        ss: '%d giây',
        m: "một phút",
        mm: "%d phút",
        h: "một giờ",
        hh: "%d giờ",
        d: "một ngày",
        dd: "%d ngày",
        M: "một tháng",
        MM: "%d tháng",
        y: "một năm",
        yy: "%d năm"
    }
});

class Post extends Component {
    render() {
        return (
            <div id={this.props.id} className={'post'}>
                <Content dataPost={this.props.dataPost}/>
                <Comment id={this.props.id} dataPost={this.props.dataPost} likeButton={this.likeButtonPost}/>
                <div className="time">
                    {moment(this.props.dataPost.timePost).fromNow().toUpperCase()}
                </div>
                <CommentInput dataPost={this.props.dataPost} submitComment={this.submitCommentPost}/>
            </div>
        );

    }

    likeButtonPost = (e, t) => {
        this.props.likeButton(e, t);
    };

    submitCommentPost = (e, t) => {
        this.props.submitComment(e, t);
    }
}

Post.propTypes = {
    likeButton: PropTypes.func.isRequired,
    submitComment: PropTypes.func.isRequired,
};

export default Post;