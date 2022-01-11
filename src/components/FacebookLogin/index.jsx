import React, { useState } from "react";
import Facebook from "react-facebook-login";
import moment from "moment";

export default function FacebookLogin() {
    const [data, setData] = useState({});
    const [picture, setPicture] = useState("");

    const responseFacebook = (response) => {
        setData(response);
        setPicture(response.picture.data.url);
        const { name, email, birthday } = data;

        if (response.accessToken) {
            let url = "/register?";
            if (name !== undefined) url += `name=${name}`;
            if (email !== undefined) url += `&email=${email}`;
            if (birthday !== undefined) url += `&birthday=${birthday}`;
            window.location.href = url;
        }
    };

    return (
        <div className="page-container-facebook-login">
            <Facebook
                appId="971106717149309"
                autoLoad={false}
                fields="name,email,picture,birthday"
                scope="public_profile,user_friends,user_birthday,email"
                callback={responseFacebook}
                returnScopes={true}
            />
        </div>
    );
}
