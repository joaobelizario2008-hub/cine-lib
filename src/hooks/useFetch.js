import { useEffect, useState } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4M2RmZTJkYjE1ZWVlYWY1NzNhYjFjYTE4ZjEwMjQ5YyIsIm5iZiI6MTc2NTM4MzE1NS40MTY5OTk4LCJzdWIiOiI2OTM5OWJmM2U4NDkwNjM0ZDAwNmEzMWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.o8wfpoV9zHekTL4jGf5c2HocC_TkqhHVhr8E7o_Gzxg`,
  },
};

export const useFetch = (url) => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    const buscarDados = async () => {

      try {
        
        const resposta = await fetch(url, options).then((resposta) => resposta.json());
        setDados(resposta);

      } catch (error) {
        console.log("Erro ao buscar dados: ", error);
      }

    };

    buscarDados();
  }, [url]);

  return { dados };
};