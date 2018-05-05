import React, {Component} from "react";
import PropTypes from 'prop-types';
import "./HomePage.css";
import Post from "./Post";

class HomePage extends Component {
    state = {
        listPost: [{
            userName: 'Cô Zô Dép',
            imgSrc: 'https://s.abcnews.com/images/Entertainment/HT_TSpelling_MEM_160101_1x1_1600.jpg',
            likeText: ['không ai thèm like',],
            isLiked: false,
            timePost: 1523986145507,
            postText: "Sinh nhật zui zẻ cùng với các pé iu của Dép!",
            idPost: 'post1',

            topComments: [{
                userNameComment: 'Bà Zôn Xơn',
                commentText: 'không like cho Dép nha.'
            },
                {
                    userNameComment: 'Cô Zô Dép',
                    commentText: 'chị Xơn quá đáng lắm lun á'
                }
            ]

            ,
            comments: [{
                userNameComment: 'Bà Zôn Xơn',
                commentText: 'không like cho Dép nha.'
            },
                {
                    userNameComment: 'Cô Zô Dép',
                    commentText: 'chị Xơn quá đáng lắm lun á'
                }

            ],
        }, {
            userName: 'Tui la ai',
            imgSrc: 'https://scontent.fhan5-3.fna.fbcdn.net/v/t1.0-9/30706179_985237394984694_513570529735606272_n.jpg?_nc_cat=0&oh=1ad1c706fdda579d1cdbaf9782094e7e&oe=5B7494DB',
            likeText: ['ahihi2'],
            isLiked: false,
            timePost: 1523303045507,
            postText: "Phuong dep trai",
            idPost: 'post2',
            topComments: [{
                userNameComment: 'ahihi1',
                commentText: 'dep qua ne'
            },
                {
                    userNameComment: 'ahihi2',
                    commentText: 'ok hehe dep!'
                }
            ],
            comments: [{
                userNameComment: 'ahihi1',
                commentText: 'de qua ne'
            },
                {
                    userNameComment: 'ahihi2',
                    commentText: 'ok hehe dep'
                },
                {
                    userNameComment: 'noname',
                    commentText: 'hahah eheheh'
                }
            ],

        }],
    };

    render() {
        const listPostData = this.state.listPost.map((e, index) => {
            return (
                <Post dataPost={e}
                      key={index}
                      id={index}
                      submitComment={this._handleSummitComment}
                      likeButton={this._handleLike}/>
            );
        });

        return (
            <div className='HomePage main-pusher'>{listPostData}</div>
        );
    }

    _handleSummitComment = (e, t) => {
        for (let i = 0; i < this.state.listPost.length; i++) {
            if (t === this.state.listPost[i].idPost) {
                this.state.listPost[i].topComments.push({
                    userNameComment: 'testsummit',
                    commentText: e
                });
                this.state.listPost[i].comments.push({
                    userNameComment: 'testsummit',
                    commentText: e
                });
            }
        }

        this.setState(this.state);
    };

    _handleLike = (e, t) => {
        for (let j = 0; j < this.state.listPost.length; j++) {
            if (t === this.state.listPost[j].idPost) {
                if (e) {
                    for (let i = 0; i < this.state.listPost[j].likeText.length; i++) {
                        if (this.state.listPost[j].likeText[i] === ' and you like this') {
                            return;
                        }
                    }
                    this.state.listPost[j].likeText.push(' and you like this');
                    this.setState(this.state);
                }
                else {
                    for (let k = 0; k < this.state.listPost[j].likeText.length; k++) {
                        if (this.state.listPost[j].likeText[k] === ' and you like this') {
                            console.log("akjsdkjahd");
                            this.state.listPost[j].likeText.slice(k, 1);
                            this.setState(this.state);
                        }
                    }
                }
            }

        }
    }
}

HomePage.propTypes = {
    history: PropTypes.object,
};

export default HomePage;