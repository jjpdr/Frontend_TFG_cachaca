import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../../components/Header";
import api from "../../services/api";

export default function PurchaseSuccess() {
  const [sessionID, setSessionID] = useState(null);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();

  useEffect(() => {
    setSessionID(query.get("session_id"));
    if (sessionID !== null) {
      api.get(`/checkout/list-items/${sessionID}`).then((res) => {
        console.log(res.data.products);
      });
    }
  }, [sessionID]);

  return (
    <>
      <Header />
    </>
  );
}
