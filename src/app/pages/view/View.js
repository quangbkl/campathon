import React, {Component} from 'react';
import "./View.css";

class View extends Component {
    state = {
        stt: '',
        file_id: '',
        file_link: '',
        file_image: '',
        file_title: '',
        file_description: '',
        file_hash_tag: '',

    }

    getPost() {
        const url = "https://hien-mau-team.herokuapp.com/get-post.php";
        const request = new Request(
            url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: {
                    id: this.props.match.params.id_post,
                }

            })
        ;
        return fetch(request).then(response => {
            console.log(response);
            return response[0].json()
        });
    }

    componentDidMount() {
        this.getPost().then(response => {

                const {stt, file_id, file_link, file_title, file_description, file_image, file_hash_tag,} = response;
                this.setState({
                    stt: stt,
                    file_id: file_id,
                    file_link: file_link,
                    file_image: file_image,
                    file_title: file_title,
                    file_description: file_description,
                    file_hash_tag: file_hash_tag,
                });
            }
        )
    }


    render() {

        const {
            stt,
            file_id,
            file_link,
            file_image,
            file_title,
            file_description,
            file_hash_tag,
        } = this.state;


        const {id_post} = this.props.match.params


        return (
            <div className="view-container">
                <div className="title-container">
                    <img src={file_image} className="image"/>
                    <span className="title">{file_title}</span>

                </div>
                <div className="content">
                    <p>
                        {file_description}
                    </p>
                </div>

            </div>
        );
    }
}

export default View;