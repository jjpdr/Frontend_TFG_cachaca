import { useContext } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import { ReactComponent as LogoCdc } from "../../assets/img/logo-cdc.svg";
import userIcon from "../../assets/img/user-icon.png";
import shoppingCartIcon from "../../assets/img/shopping-cart.png";

import ButtonComponent from "../Buttons";

import listContext from "../../pages/ShoppingCart/context";
import DropdownMenu from "../DropdownMenu";
import { useUserContext } from "../../context/User";

export default function Header() {
  const { cartCount } = useContext(listContext);
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  const { user, setID } = useUserContext();

  const handleLogout = () => {
    window.alert(`Volte sempre ${user.name}!`);
    localStorage.removeItem("picture");
    localStorage.removeItem("userID");
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    setID(null);
    window.location.href = "/";
  };

  return (
    <div className="header-container">
      <div className="header">
        <Link to="/#page-one">
          <LogoCdc className="logo" />
        </Link>
        <ButtonComponent
          tag="Link"
          destination="/#page-three"
          type="primary"
          text="FAÇA PARTE DO CLUBE!"
        />
        <ButtonComponent
          tag="Link"
          destination="/catalog"
          type="secondary"
          text="CATÁLOGO"
        />
        {!user ? (
          <>
            <ButtonComponent
              tag="Link"
              destination="/login"
              type="secondary"
              text="LOGIN"
            />
            <ButtonComponent
              tag="Link"
              destination="/register"
              type="primary"
              text="CRIAR CONTA"
            />
          </>
        ) : (
          <>
            <div className="user-data">
              <Link to={`/user/${user._id}`} className="user-info">
                <img
                  alt="user"
                  src={
                    user?.image !== undefined
                      ? `${BACKEND_URL}/users/image/${user.image}`
                      : userIcon
                  }
                />
                {user.name}
              </Link>
              <div className="shopping-cart">
                <Link to="/shopping-cart" className="shopping-img">
                  <img alt="shopping-cart" src={shoppingCartIcon}></img>
                </Link>
                <span>{cartCount}</span>
              </div>
              <button onClick={handleLogout} className="btn btn-primary">
                SAIR
              </button>
            </div>
          </>
        )}
        {user?.isAdmin && <DropdownMenu />}
      </div>
    </div>
  );
}
