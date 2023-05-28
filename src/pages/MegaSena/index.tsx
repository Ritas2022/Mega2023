import { useEffect, useState } from "react";
import {
  DivEl,
  TextTitle,
  DivHor,
  Text,
  TextPrize,
  TextWinner,
  DivHorNums,
  DivHorTitle,
  DivBall,
} from "./styles";
import LotoImage from "../../assets/trevo-megasena.png";
import api from "../../services/api";
import { Props } from "../../types";

export default function MegaSena() {
  const [mega, setMega] = useState<Props>({} as Props);

  useEffect(() => {
    async function GetData() {
      let resp = await api.get("/");
      setMega(resp.data.megasena);
    }

    GetData();
  }, []);
  if (!mega.numeroDoConcurso) {
    return <h2>Carregando dados...</h2>;
  } else
    return (
      <DivHor>
        <DivEl>
          <DivHorTitle>
            <img src={LotoImage} width={20} height={20} />
            <TextTitle>MEGA SENA</TextTitle>
          </DivHorTitle>
          <Text>{`Estimativa de prêmio do próximo concurso.`}</Text>
          <br></br>
          <Text>Sorteio em {mega.dataApuracao}</Text>

          <TextPrize>R$ {mega.valorEstimadoProximoConcurso}</TextPrize>
        </DivEl>
        <DivEl>
          <DivHorNums>
            {mega.dezenas.map((item) => {
              return <DivBall>{item}</DivBall>;
            })}
          </DivHorNums>

          <TextWinner>
            {mega.quantidadeGanhadores}{" "}
            {mega.quantidadeGanhadores > 1 ? "GANHADORES" : "GANHADOR"}
          </TextWinner>
          <Text>
            {" "}
            Concurso {mega.numeroDoConcurso} - {mega.dataPorExtenso}
          </Text>
        </DivEl>
      </DivHor>
    );
}
