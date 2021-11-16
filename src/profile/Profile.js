import React from 'react'
import PropTypes from "prop-types"; 

const Profile = (props) => {
const styleH1 = {color:"red" ,textAlign:"center"} ;
const styleH2 = {textAlign:"center", fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}
const centerDiv={height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}

function handleName(ob){
    alert("Welcome "+ob);
}

    return (
        handleName(props.fullName),
        <div>
            {/* Image */}
            <div style={centerDiv}>
                <img  style={{borderRadius: "50%"}} src={props.children} alt="Profile Pic"/>
            </div>
            <br/>
            <div>
            {/* Name */}
            <div>
                <h1 style={styleH1}>Name:</h1>
            <br/>
                <h2 style={styleH2}>{props.fullName}</h2>
            </div>
            <br/>
            {/* Bio */}
            <div>
                <h1 style={styleH1}>Bio:</h1>
            <br/>
                <h2 style={styleH2}>{props.bio}</h2>
            </div>
            <br/>
            {/* Profesion */}
            <div>
                <h1 style={styleH1}>Profession:</h1>
            <br/>
                <h2 style={styleH2}>{props.prof}</h2>
            </div>
            </div>
        </div>
    )
}

Profile.defaultProps={
    fullName:"Marwen Touati",
    bio:"21 years old male who loves F1, Video Games and Anime/Manga",
    prof:"Computer Science Student/Web Developper",
}

Profile.propTypes={
    fullName:PropTypes.string,
    bio:PropTypes.string,
    prof:PropTypes.string

}

export default Profile
