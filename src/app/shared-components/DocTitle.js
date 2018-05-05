import React, {Component} from "react";
import DocumentTitle from "react-document-title";
import PropTypes from "prop-types";

class DocTitle extends Component {
    render() {
        const {title, prefix, suffix, children} = this.props;

        return (
            <DocumentTitle title={prefix + title + suffix}>
                {children}
            </DocumentTitle>
        );
    }
}

DocTitle.propTypes = {
    children: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
};

DocTitle.defaultProps = {
    prefix: '',
    suffix: ' - SpyAMZ'
};

export default DocTitle;