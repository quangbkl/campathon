import React, {Component} from "react";
import HeaderPostDetail from "./HeaderPostDetail";
import Status from "./Status";
import LikePostDetails from "./LikePostDetails";
import IconPostDetails from "./IconPostDetails";
import CommentPostDetail from "./CommentPostDetail";
import DatePost from "./DatePost";
import PostOption from "./PostOption";

const array = ["Sample Comment 1", "Sample Comment 2", "3", "4", "5", "6"];

class DashBoardPostDetails extends Component {
    state = {
        follow: false,
        liked: true,
        saved: false,
        commentArray: ["1", "2", "3", "4", "5", "6", "7", "8"],
        numberOfLike: 1,
    };

    toggleFollow = (e) => {
        e.preventDefault();
        this.setState({follow: !(this.state.follow)});
    };

    toggleLike = (e) => {
        e.preventDefault();
        const likes = this.state.numberOfLike;
        this.setState({numberOfLike: (this.state.liked) ? (likes - 1) : (likes + 1), liked: !this.state.liked});
    };

    toggleSave = (e) => {
        e.preventDefault();
        this.setState({saved: !this.state.saved});
    };

    handleSubmit = (text) => {
        array.push(text);
        this.setState({commentArray: array});
    };

    toggleExist = (e) => {
        e.preventDefault();
        this.setState({existed: !this.state.existed});
    };

    render() {
        return (
            <div className="wrap1">
                <article id="post-detail-article">
                    <HeaderPostDetail
                        follow={this.state.follow}
                        toggleFollow={this.toggleFollow}
                    />
                    <div className="anh-post">
                        <img
                            src="https://instagram.fhan2-1.fna.fbcdn.net/vp/285f25a4a63bb8726125075e26f045e5/5B52207A/t51.2885-15/e35/29738103_2044523352428058_1090909671570538496_n.jpg"
                            alt="unable to load"/>
                    </div>

                    <div className="right_comment">
                        <Status comment={this.state.commentArray}/>
                        <IconPostDetails
                            liked={this.state.liked}
                            saved={this.state.saved}
                            comment={this.state.comment}
                            toggleLike={this.toggleLike}
                            toggleSave={this.toggleSave}
                            handleSubmit={this.handleSubmit}
                        />
                        <LikePostDetails numberOfLike={this.state.numberOfLike}/>
                        <DatePost/>
                        <CommentPostDetail handleSubmit={this.handleSubmit}/>
                        <PostOption existed={this.state.existed} toggleExist={this.toggleExist}/>
                    </div>
                </article>
            </div>
        );
    }
}

export default DashBoardPostDetails;