import { Navigate, useParams } from "react-router-dom";

import Mobilidade from "./Mobilidade";
import Postura from "./Postura";
import TreinoFuncional from "./TreinoFuncional";

export default function ContentProduct() {
  const { slug } = useParams();

  if (slug === "postura-no-dia-a-dia") {
    return <Postura />;
  }

  if (slug === "mobilidade-para-a-vida-real") {
    return <Mobilidade />;
  }

  if (slug === "treino-funcional") {
    return <TreinoFuncional />;
  }

  return <Navigate to="/conteudos" replace />;
}
