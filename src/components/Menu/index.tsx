import { NavLink } from "react-router-dom";
import { Nav, TextNav } from "./style";
import "./style.css";

export default function Menu() {
  return (
    <Nav>
      <NavLink
        to={"lotofacil"}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "loto"
        }
      >
        <TextNav>Lotofácil</TextNav>
      </NavLink>
      <NavLink
        to={"megasena"}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "mega"
        }
      >
        <TextNav>Mega Sena</TextNav>
      </NavLink>
      <NavLink
        to={"quina"}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : "quina"
        }
      >
        <TextNav>Quina</TextNav>
      </NavLink>
    </Nav>
  );
}
