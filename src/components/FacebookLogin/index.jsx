import React, { useState } from "react";
import Facebook from "react-facebook-login";

export default function FacebookLogin() {
    const [data, setData] = useState({});
    const [picture, setPicture] = useState("");

    const responseFacebook = (response) => {
        setData(response);
        setPicture(response.picture.data.url);

        const { name, email } = data;

        if (response.accessToken) console.log(name, email);
    };

    return (
        <div className="page-container-facebook-login">
            <Facebook
                appId="971106717149309"
                autoLoad={true}
                fields="name,email,picture"
                scope="public_profile,user_friends"
                callback={responseFacebook}
            />
        </div>
    );
}
