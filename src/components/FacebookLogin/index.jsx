import Facebook from "react-facebook-login";
import api from "../../services/api";
import "./style.scss";
import { useUserContext } from "../../context/User";

export default function FacebookLogin() {
    const { setID } = useUserContext();

    const responseFacebook = (response) => {
        const { name, email, birthday } = response;

        api.get(`/users/email/${email}`)
            .then((res) => {
                localStorage.setItem("token", JSON.stringify(res.data.token));
                localStorage.setItem("userID", res.data.user._id);
                setID(res.data.user._id);
                if (response.picture.data.url)
                    localStorage.setItem("picture", response.picture.data.url);
                window.location.href = "/";
            })
            .catch((err) => {
                let url = "/register?";
                if (name !== undefined) url += `name=${name}`;
                if (email !== undefined) url += `&email=${email}`;
                if (birthday !== undefined) url += `&birthday=${birthday}`;
                window.location.href = url;
            });
    };

    return (
        <div>
            <Facebook
                appId="971106717149309"
                autoLoad={false}
                fields="name,email,picture,birthday"
                scope="public_profile,user_friends,user_birthday,email"
                callback={responseFacebook}
                returnScopes={true}
                cssClass="styling-fb-button"
            />
        </div>
    );
}
