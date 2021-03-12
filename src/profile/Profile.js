import React from 'react';
import PropTypes from "prop-types";

import 'bootstrap/dist/css/bootstrap.css';

const Profile = (props) => {


    const Handelname = () => {
        alert(`Hello ${props.username}`)

    }

    const stylecontenu = { marginleft: '170px', marginright: '310px', margintop: '20%', border: '2px solid black', paddingbottom: 10 }
    return <>
        <div >
            <div>
                <h1 > Profil for <span style={{color:'red'}}>{props.username}</span></h1> </div>
            <br />
            <img src={props.src} className='picture' alt="" />
            {props.children}
            <br />
            <br/>
            <div style={stylecontenu}>
                <h6> Email address: {props.emailAddress} </h6>
                <h6> Bio: {props.bio}  </h6>
                <h6>  Profession: {props.profession} </h6>
            </div>
            <br/>
            <br/>
            <div  >
                <button onClick={Handelname} class="btn btn-info" > Hi put your name please...! </button>
            </div>
        </div>
    </>
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    emailAddress: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,

};
Profile.defaultProps = {
    username: 'chayma nefzi',
    emailAddress: ' not found',
    bio: ' not found',
    profession: ' not found'

};

export default Profile;