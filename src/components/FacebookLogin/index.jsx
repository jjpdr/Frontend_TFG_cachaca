import React, { useState } from "react";
import Facebook from "react-facebook-login";
import api from "../../services/api";

export default function FacebookLogin() {
    const [data, setData] = useState({});

    const responseFacebook = (response) => {
        setData(response);
        const { name, email, birthday } = data;

        if (response.accessToken && email) {
            api.get(`/users/email/${email}`)
                .then((res) => {
                    localStorage.setItem("user", JSON.stringify(res.data.user));
                    localStorage.setItem(
                        "token",
                        JSON.stringify(res.data.token)
                    );
                    localStorage.setItem(
                        "isAdmin",
                        JSON.stringify(res.data.user.isAdmin)
                    );
                    if (response.picture.data.url)
                        localStorage.setItem(
                            "picture",
                            response.picture.data.url
                        );
                    window.location.href = "/";
                })
                .catch((err) => {
                    let url = "/register?";
                    if (name !== undefined) url += `name=${name}`;
                    if (email !== undefined) url += `&email=${email}`;
                    if (birthday !== undefined) url += `&birthday=${birthday}`;
                    window.location.href = url;
                });
        } else {
            alert("Erro ao fazer login com o Facebook. Tente novamente!");
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
