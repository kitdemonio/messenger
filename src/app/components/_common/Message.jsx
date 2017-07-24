import React from 'react';
import UserImage from '../../../static/images/user-image.png';
import * as firebase from 'firebase';
import { detectTime } from '../../../utils/timeDetector'

const messageStyles = {
    backgroundColor: '#fff',
    padding: '15px',
    fontSize: '16px',
    fontWeight: '300',
    borderRadius: '5px',
    maxWidth: '405px',
    flexBasis: '100%'
};

const rowStyles = {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0'
};

const userStyles = {
    margin: '0 3.5%'
};

const imageStyles = {
    width: '35px',
    height: '35px',
};

const Message = ({data}) => {

    const messageType = () => {
        return data.from === firebase.auth().currentUser.email ? 'message-row my-message' : 'messsage-row';
    };

    return (
        <div className={messageType()} style={rowStyles}>
            <div className="user" style={userStyles}>
                <img src={UserImage} alt="User" style={imageStyles}/>
            </div>
            <div className="message" style={messageStyles}>
                <p>
                    {data.value}
                </p>
            </div>
            <span className="timestamp" style={{
                fontSize:'11px',
                color: '#a5a9ae',
                display: 'block',
                width: '70px',
                paddingRight: '.3em',
                paddingLeft: '0.6em'
            }}>{detectTime(data.timestamp)}</span>
        </div>
    )
};

export default Message;