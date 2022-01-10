import React, { useState } from "react";
import Facebook from "react-facebook-login";

export default function FacebookLogin() {
    const [data, setData] = useState({});
    const [picture, setPicture] = useState("");

    const responseFacebook = (response) => {
        console.log(response);
        setData(response);
        setPicture(response.picture.data.url);

        if (response.accessToken) {
            let url = "/register?";
            if (data.name !== undefined) url += `name=${data.name}`;
            if (data.email !== undefined) url += `&email=${data.email}`;
            window.location.href = url;
        }
    };

    return (
        <div className="page-container-facebook-login">
            <Facebook
                appId="971106717149309"
                autoLoad={false}
                fields="name,email,picture"
                scope="public_profile,user_friends"
                callback={responseFacebook}
            />
        </div>
    );
}
