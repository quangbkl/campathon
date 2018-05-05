import React, {Component} from 'react';
import cameraImg from "./image/camera.png";

class ImageUpload extends Component {
    render() {
        return (
            <div className="img_upload">
                <img className="thumb" alt="camera" src={cameraImg}/>
            </div>
        );
    }
}


export default ImageUpload;
