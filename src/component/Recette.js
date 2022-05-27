import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';



export default function Recettes() {

    let { slug } = useParams()


    const [post, setPost] = useState([]);


    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + slug)
            .then((response) => {
                setPost(response.data.meals);
            }).catch((e) => {
                setPost('error, API not responding')
            });
    }, [slug]);

    return (
        <>
            <div style={{ display: 'grid', justifyContent: 'center', marginTop: '70px' }}>
                <Paper elevation={15}>
                    <Typography variant="body2" color="text.secondary">
                        <Card sx={{ width: 'auto' }}>
                            <div style={{ marginTop: '30px' }}>{post === [] ? "" : post.map((meal, idx) => <div>
                                <div style={{ display: 'grid', justifyContent: 'center', marginBottom: '15px' }}>
                                    <div style={{ fontWeight: 'bold', fontSize: '4em' }} key={idx}>{meal.strMeal}</div>
                                </div>
                                <div style={{ width: '700px' }}>
                                    <img style={{ width: 'auto', height: '450px' }} src={meal.strMealThumb}></img>
                                </div>
                                <br></br>
                                <div style={{ marginTop: '-35px', marginBottom: '10px' }}>
                                        <Button size="small" variant="outlined" aria-label="add to favorites" style={{ height: '30px', backgroundColor: '#e1f9ff' }}>
                                            <FavoriteIcon style={{ color: 'DA422A' }} />
                                            <p style={{ marginLeft: '5px', fontSize: '17px' }}>Save</p>
                                        </Button>
                                    </div>
                                    <br></br>
                                <div style={{ marginTop: '10px', marginRight: 'auto', marginLeft: 'auto' }}>
                                    {/* <Paper elevation={5} style={{ width: '480px', justifyContent: 'center', marginRight: 'auto', marginLeft: 'auto'}}> */}
                                    <Card sx={{ maxWidth: 1250, }}>
                                        <table style={{ width: '400px', textAlign: 'start', marginLeft: 'auto', marginRight: 'auto', color: 'grey' }} >
                                            <tr>
                                                <td style={{ fontWeight: 'bold' }}>Ingredients</td>
                                                <td style={{ fontWeight: 'bold' }}>Measure</td>
                                            </tr>
                                            <br></br>
                                            <tr>
                                                <td>{meal.strIngredient1 === "" || null ? "" : meal.strIngredient1}</td>
                                                <td>{meal.strMeasure1 === "" || null ? "" : meal.strMeasure1}</td>
                                            </tr>
                                            <tr>
                                                <td>{meal.strIngredient2 === "" || null ? "" : meal.strIngredient2}</td>
                                                <td>{meal.strMeasure2 === "" || null ? "" : meal.strMeasure2}</td>
                                            </tr>
                                            <tr>
                                                <td>{meal.strIngredient3 === "" || null ? "" : meal.strIngredient3}</td>
                                                <td>{meal.strMeasure3 === "" || null ? "" : meal.strMeasure3}</td>
                                            </tr>
                                            <tr>
                                                <td>{meal.strIngredient4 === "" || null ? "" : meal.strIngredient4}</td>
                                                <td>{meal.strMeasure4 === "" || null ? "" : meal.strMeasure4}</td>
                                            </tr>
                                            <tr>
                                                <td>{meal.strIngredient5 === "" || null ? "" : meal.strIngredient5}</td>
                                                <td>{meal.strMeasure5 === "" || null ? "" : meal.strMeasure5}</td>
                                            </tr>
                                            <tr>
                                                <td>{meal.strIngredient6 === "" || null ? "" : meal.strIngredient6}</td>
                                                <td>{meal.strMeasure6 === "" || null ? "" : meal.strMeasure6}</td>
                                            </tr>
                                            <tr>
                                                <td>{meal.strIngredient7 === "" || null ? "" : meal.strIngredient7}</td>
                                                <td>{meal.strMeasure7 === "" || null ? "" : meal.strMeasure7}</td>
                                            </tr>
                                            <tr>
                                                <td>{meal.strIngredient8 === "" || null ? "" : meal.strIngredient8}</td>
                                                <td>{meal.strMeasure8 === "" || null ? "" : meal.strMeasure8}</td>
                                            </tr>
                                            <tr>
                                                <td>{meal.strIngredient9 === "" || null ? "" : meal.strIngredient9}</td>
                                                <td>{meal.strMeasure9 === "" || null ? "" : meal.strMeasure9}</td>
                                            </tr>
                                            <tr>
                                                <td>{meal.strIngredient10 === "" || null ? "" : meal.strIngredient10}</td>
                                                <td>{meal.strMeasure10 === "" || null ? "" : meal.strMeasure10}</td>
                                            </tr>
                                            <tr>
                                                <td>{meal.strIngredient11 === "" || null ? "" : meal.strIngredient11}</td>
                                                <td>{meal.strMeasure11 === "" || null ? "" : meal.strMeasure11}</td>
                                            </tr>
                                            <tr>
                                                <td>{meal.strIngredient12 === "" || null ? "" : meal.strIngredient12}</td>
                                                <td>{meal.strMeasure12 === "" || null ? "" : meal.strMeasure12}</td>
                                            </tr>
                                            <tr>
                                                <td>{meal.strIngredient13 === "" || null ? "" : meal.strIngredient13}</td>
                                                <td>{meal.strMeasure13 === "" || null ? "" : meal.strMeasure13}</td>
                                            </tr>
                                            <tr>
                                                <td>{meal.strIngredient14 === "" || null ? "" : meal.strIngredient14}</td>
                                                <td>{meal.strMeasure14 === "" || null ? "" : meal.strMeasure14}</td>
                                            </tr>
                                            <tr>
                                                <td>{meal.strIngredient15 === "" || null ? "" : meal.strIngredient15}</td>
                                                <td>{meal.strMeasure15 === "" || null ? "" : meal.strMeasure15}</td>
                                            </tr>
                                            <tr>
                                                <td>{meal.strIngredient16 === "" || null ? "" : meal.strIngredient16}</td>
                                                <td>{meal.strMeasure16 === "" || null ? "" : meal.strMeasure16}</td>
                                            </tr>
                                            <tr>
                                                <td>{meal.strIngredient17 === "" || null ? "" : meal.strIngredient17}</td>
                                                <td>{meal.strMeasure17 === "" || null ? "" : meal.strMeasure17}</td>
                                            </tr>
                                            <tr>
                                                <td>{meal.strIngredient18 === "" || null ? "" : meal.strIngredient18}</td>
                                                <td>{meal.strMeasure18 === "" || null ? "" : meal.strMeasure18}</td>
                                            </tr>
                                            <tr>
                                                <td>{meal.strIngredient19 === "" || null ? "" : meal.strIngredient19}</td>
                                                <td>{meal.strMeasure19 === "" || null ? "" : meal.strMeasure19}</td>
                                            </tr>
                                            <tr>
                                                <td>{meal.strIngredient20 === "" || null ? "" : meal.strIngredient20}</td>
                                                <td>{meal.strMeasure20 === "" || null ? "" : meal.strMeasure20}</td>
                                            </tr>
                                        </table>
                                    </Card>
                                    {/* </Paper> */}
                                </div>
                                <br></br>
                                <p style={{ fontWeight: 'bold', fontSize: '1.3em', color: 'grey' }}>Instructions</p>
                                <div style={{ width: '650px', textAlign: 'start', margin: '30px', color: 'grey' }}>{meal.strInstructions}</div>
                            </div>)}
                                <br></br>
                                <br></br>
                            </div>
                            {/* <div>{post === [] ? "" : <div >{post.strInstructions}</div>}</div> */}
                        </Card>
                    </Typography>
                </Paper>
            </div>

        </>


    )
}
