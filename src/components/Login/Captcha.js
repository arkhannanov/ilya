import React, {Component} from 'react';
import {ReCAPTCHA} from "react-google-recaptcha";

class Captcha extends Component {
    componentDidMount() {
        this.refs.captcha.execute();
    }

    render() {
        return (
            <div>
                <ReCAPTCHA
                    ref="captcha"
                    sitekey="6Ldx1sYUAAAAAGvcNnXhiOPOc"
                    onChange={this.props.input.onChange}
                />
            </div>
        );
    }
}

export default Captcha;