import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import api from "../services/api";

const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [id, setID] = useState(localStorage.getItem("userID"));

  useEffect(() => {
    if (!id) return setUser(null);
    api
      .get(`/users/${id}`)
      .then((res) => {
        setUser(res.data.user);
        localStorage.setItem("isAdmin", JSON.stringify(res.data.user.isAdmin));
      })
      .catch((err) => {});
    // eslint-disable-next-line
  }, [id]);

  return (
    <UserContext.Provider value={{ user, id, setID }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);
