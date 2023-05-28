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
import LotoImage from "../../assets/trevo-quina.png";
import api from "../../services/api";
import { Props } from "../../types";

export default function Quina() {
  const [quina, setQuina] = useState<Props>({} as Props);

  useEffect(() => {
    async function GetData() {
      let resp = await api.get("/");
      setQuina(resp.data.quina);
    }

    GetData();
  }, []);
  if (!quina.numeroDoConcurso) {
    return <h2>Carregando dados...</h2>;
  } else
    return (
      <DivHor>
        <DivEl>
          <DivHorTitle>
            <img src={LotoImage} width={20} height={20} />
            <TextTitle>QUINA</TextTitle>
          </DivHorTitle>
          <Text>{`Estimativa de prêmio do próximo concurso.`}</Text>
          <br></br>
          <Text>`Sorteio em `{quina.dataApuracao}</Text>

          <TextPrize>R$ {quina.valorEstimadoProximoConcurso}</TextPrize>
        </DivEl>
        <DivEl>
          <DivHorNums>
            {quina.dezenas.map((item) => {
              return <DivBall>{item}</DivBall>;
            })}
          </DivHorNums>

          <TextWinner>
            {quina.quantidadeGanhadores}{" "}
            {quina.quantidadeGanhadores > 1 ? "GANHADORES" : "GANHADOR"}
          </TextWinner>
          <Text>
            {" "}
            Concurso {quina.numeroDoConcurso} - {quina.dataPorExtenso}
          </Text>
        </DivEl>
      </DivHor>
    );
}
