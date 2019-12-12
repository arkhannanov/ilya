import React, {Component} from 'react';
import * as zxcvbn from "zxcvbn";
import './PasswordStrengthMeter.css';

class PasswordStrengthMeter extends Component {

    createPasswordLabel = (result) => {
        switch (result.score) {
            case 0:
                return 'Слабый';
            case 1:
                return 'Слабый';
            case 2:
                return 'Нормальный';
            case 3:
                return 'Хороший';
            case 4:
                return 'Сильный';
            default:
                return 'Слабый';
        }
    }

    render() {
        const {password} = this.props;
        const testedResult = zxcvbn(password);
        console.log(testedResult);
        return (
            <div className="password-strength-meter">
                {password && (
                    <div className={`color-${testedResult.score}`}>{this.createPasswordLabel(testedResult)}</div>)}
            </div>
    );
    }
}

export default PasswordStrengthMeter;