import React, {Component} from "react";

class CommentPostDetail extends Component {
    state = {
        text: "",
    };

    handleChange = (e) => {
        this.setState({text: e.target.value});
    };

    handleSubmit = (e) => {
        if (e.key === 'Enter') {
            this.props.handleSubmit(this.state.text);
            this.setState({text: ""});
            e.target.blur();
        }
    };

    render() {
        return (
            <section className="sec-form">
                <form className="form-comment">
                    <textarea autoComplete="off" autoCorrect="off"
                              placeholder="Add a comment..."
                              id="commentArea"
                              onChange={this.handleChange}
                              value={this.state.text}
                              onKeyDown={this.handleSubmit}
                    />
                </form>
            </section>
        );
    }
}

export default CommentPostDetail;