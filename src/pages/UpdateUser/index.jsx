import { useState, useEffect } from "react";
import { SelectProduct } from "../../components/SelectProduct";
import "./style.scss";
import api from "../../services/api";
import Header from "../../components/Header";
import moment from "moment";

import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

export default function UpdateUser() {
  const [id, setID] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [cpf, setCpf] = useState(null);
  const [birthday, setBirthday] = useState(null);
  const [plan, setPlan] = useState(null);
  const [users, setUsers] = useState([]);

  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    api
      .get("/users")
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((err) => {});
    // eslint-disable-next-line
  }, []);

  const handleChange = (value, field) => {
    switch (field) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "cpf":
        setCpf(value);
        break;
      case "birthday":
        setBirthday(value);
        break;
      case "plan":
        setPlan(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async () => {
    const data = {
      name,
      email,
      cpf,
      birthday,
      plan,
    };

    api
      .put(`/users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        alert(res.data.message);
        window.location.reload();
      })
      .catch((err) => {
        alert(err.response.data.message);
        window.location.reload();
      });
  };

  const findUser = () => {
    let newList = users;

    const filtered = newList.filter((user) => {
      return user._id === id;
    });

    if (filtered.length > 0) {
      const position = newList
        .map((user) => {
          return user._id;
        })
        .indexOf(id);
      setName(newList[position].name);
      setEmail(newList[position].email);
      setCpf(newList[position].cpf);
      setBirthday(newList[position].birthday);
      setPlan(newList[position].plan);
    }
  };

  useEffect(() => {
    findUser();
    // eslint-disable-next-line
  }, [id]);

  return (
    <>
      <Header />
      <div className="update-container">
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <p className="h1">Selecionar usuário</p>
              <SelectProduct products={users} onItemChange={setID} value={id} />
            </MDBCol>
            <MDBCol>
              {users ? (
                <>
                  <p className="h1">Atualizar usuário</p>
                  <MDBInput
                    label="Código Identificador"
                    id="userID"
                    type="text"
                    readonly
                    value={id || ""}
                  />
                  <MDBInput
                    style={{ marginTop: "10px" }}
                    label="Nome"
                    id="userName"
                    type="text"
                    value={name || ""}
                    onChange={(event) =>
                      handleChange(event.target.value, "name")
                    }
                  />
                  <MDBInput
                    style={{ marginTop: "10px" }}
                    label="Email"
                    id="userEmail"
                    type="text"
                    value={email || ""}
                    onChange={(event) =>
                      handleChange(event.target.value, "email")
                    }
                  />
                  <MDBInput
                    style={{ marginTop: "10px" }}
                    label="CPF"
                    id="userCPF"
                    type="text"
                    value={cpf || ""}
                    onChange={(event) =>
                      handleChange(event.target.value, "cpf")
                    }
                  />
                  <MDBInput
                    style={{ marginTop: "10px" }}
                    label="Data de nascimento"
                    id="userBirthday"
                    type="text"
                    value={moment(birthday).format("DD/MM/YYYY") || ""}
                    onChange={(event) =>
                      handleChange(event.target.value, "birthday")
                    }
                  />
                  <MDBInput
                    style={{ marginTop: "10px" }}
                    label="Plano atual"
                    id="userPlan"
                    type="text"
                    value={plan || ""}
                    onChange={(event) =>
                      handleChange(event.target.value, "plan")
                    }
                  />
                </>
              ) : (
                <p className="h1">Nenhum produto selecionado!</p>
              )}
              <MDBBtn style={{ marginTop: "10px" }} onClick={handleSubmit}>
                Confirmar
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
}
