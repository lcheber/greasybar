import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';


export default function Ingredient() {

    let { slug } = useParams()

    const [ingredient, setIngredient] = useState([]);


    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?i=" + slug)
            .then((response) => {
                console.log("xxxxx>", response.data.meals)
                setIngredient(response.data.meals);
            }).catch((e) => {
                setIngredient('error, API not responding')
            });
    }, []);

    return (
        <>
            <div style={{ display: 'grid', justifyContent: 'center', marginTop: '70px' }}>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 2, sm: 2, md: 2 }} style={{ minHeight: '300px'}}>
                    {ingredient === [] ? "" : ingredient.map((foo, idx) =>
                    <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }} key={idx}>
                        <Paper elevation={5} style={{width: '200px', height: '50px'}}>
                            <Card sx={{ width: '200px', height: '50px', display:'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'center', backgroundColor: '#F4D03F'}}>
                                <Link style={{ textDecoration: 'none'}} to={"/Recette/" + foo.idMeal}>
                                    {foo.strMeal}
                                </Link>
                            </Card>
                        </Paper>
                    </Grid>)}
                </Grid>
            </div>
        </>
    )
}

