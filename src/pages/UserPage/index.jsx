import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import moment from "moment";

import "./style.scss";

import api from "../../services/api";
import Header from "../../components/Header";

export default function UserPage() {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        api.get(`/users/${id}`)
            .then((res) => {
                setUser(res.data.user);
            })
            .catch((err) => {});
        // eslint-disable-next-line
    }, []);

    return (
        <div className="page-container-user-page">
            <Header />
            <div className="content">
                <h1>Nome: {user.name}</h1>
                <h1>Email: {user.email}</h1>
                <h1>CPF: {user.cpf}</h1>
                <h1>Data de nascimento: {moment(user.birthday).format("DD/MM/yyyy")}</h1>
            </div>
        </div>
    );
}
