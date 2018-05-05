import React, {Component} from 'react';

class OptionHidden extends Component {
    render() {
        return (
            <div className="hidden">
                <div className="wrap-hidden">
                    <div className="content-op">
                        <ul>
                            <li className="item-op">
                                <button>Report inappropriate</button>
                            </li>
                            <li className="item-op">
                                <button>Embed</button>
                            </li>
                            <li className="item-op">
                                <button>Cancel</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default OptionHidden;