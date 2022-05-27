import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Link,
} from "react-router-dom";
import PaginationAlphabet from "./PaginateAlphabet";
import Grid from '@mui/material/Grid';

export default function Ingredients(props) {
  const baseURL = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";

  const [ingredients, setIngredients] = useState([]);
  // const [copy, setCopy] = useState([])
  const [dico, setDico] = useState({});
  const [letter, setLetter] = useState();
  const [bool, setBool] = useState(true);

  const refer = useRef(dico);
  refer.current = dico;

  useEffect(() => {
    setLetter("A");
    axios.get(baseURL).then((response) => {
      setIngredients(response.data.meals);
    });
  }, []);

  useEffect(() => {
    let copie = [...ingredients];
    copie.sort((a, b) => a.strIngredient.localeCompare(b.strIngredient));
    let dicoIng = {};
    copie.forEach((e, i) => {
      let firstletter = e.strIngredient.slice(0, 1).toUpperCase();
      if (dicoIng[firstletter]) {
        // si la première lettre de l'élément correspond à une une clé de du dicoIng
        dicoIng[firstletter].push(e);
      } else {
        dicoIng[firstletter] = [e];
      }
    });
    console.log(dicoIng);
    setDico(dicoIng);
  }, [ingredients]);


  const handleChange = (letter) => {
    setLetter(letter);
  };

  return (
    <>
      <div style={{ marginTop: "50px" }}>

        <PaginationAlphabet action={handleChange} />
      </div>

      <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
        {dico === {}
          ? ""
          : dico[letter]
          ? dico[letter].map((ingr, idx) => (
            <Grid item xs={3} style={{color: '#ff5d39'}}>
              <ul key={idx}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={"/Ingredient/" + ingr.strIngredient}
                >
                  {ingr.strIngredient}
                </Link>
              </ul>
              </Grid>
            ))
          : ""}
      </Grid>
    </>
  );
}
