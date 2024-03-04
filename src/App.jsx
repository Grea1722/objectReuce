import { useEffect, useState } from "react";
import "./App.css";

const itemsApi = () =>
  new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve([
        { grupoId: 1, nombre: "Mario" },
        { grupoId: 2, nombre: "Lucia" },
        { grupoId: 1, nombre: "Luis" },
        { grupoId: 1, nombre: "Carmmen" },
        { grupoId: 3, nombre: "Boris" },
        { grupoId: 2, nombre: "Oscar" },
      ]);
    }, 500);
  });

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    itemsApi().then((res) => {
      let resultado = res.reduce((aac, curr) => {
        if (!aac[curr.grupoId]) {
          aac[curr.grupoId] = [curr];
        } else {
          aac[curr.grupoId].push(curr);
        }

        return aac;
      }, {});

      setData(resultado);
    });
  }, []);

  return (
    <>
      {Object.keys(data).map((key, i) => (
        <h1>
          Grupo {key} :
          <ul>
            {data[key].map((user, i) => (
              <li>{user.nombre}</li>
            ))}
          </ul>
        </h1>
      ))}
    </>
  );
}

export default App;
