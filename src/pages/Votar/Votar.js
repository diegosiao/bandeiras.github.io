import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Votar = () => {
  const navigate = useNavigate();
  const firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = navigate("/entrar");
    }
  }, [navigate]);

  return null;
};

export default Votar;
