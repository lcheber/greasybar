import React, { useState, useEffect } from 'react'
import axios from "axios";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Paper from '@mui/material/Paper';



function RandomRecette() {

  const baseURL = 'https://www.themealdb.com/api/json/v1/1/random.php'

  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data)
      setPost(response.data.meals);
    });
  }, []);

  return (

    <>
    <div style={{ display: 'grid', justifyContent: 'center', marginTop: '70px' }}>
    <Paper elevation={20}>
      <Card sx={{ maxWidth: 1000 }} style={{ width: '650px' }}>
        <br></br>
        <br></br>
        <div className="Meal" style={{fontWeight: 'bolder', fontSize: '2.5em'}}>{post === [] ? "" : post.map((foo, idx) => <div key={idx}>{foo.strMeal}</div>)}
        <div className="URL">{post === [] ? "" : post.map((foo, idx) => <div key={idx}><img style={{ width: '550px', marginTop: '30px'}} src={foo.strMealThumb}></img></div>)}</div>
        <br></br>
            <CardActions style={{ display: 'flex', justifyContent: 'end', paddingTop: '0px', paddingRight: '35px'}} disableSpacing>
              <IconButton  aria-label="add to favorites">
                <FavoriteIcon style={{color: 'DA422A'}}/>
              </IconButton>
            </CardActions>
      </div>

      {/* <table style={{ width: '400px', textAlign: 'start', marginLeft: 'auto', marginRight: 'auto', color: 'grey' }} >
                                            <tr>
                                                <td style={{ fontWeight: 'bold' }}>Ingredients</td>
                                                <td style={{ fontWeight: 'bold' }}>Measure</td>
                                            </tr>
                                            <br></br>
                                            <tr>
                                                <td>{meals.strIngredient1 === "" || null ? "" : meals.strIngredient1}</td>
                                                <td>{meals.strMeasure1 === "" || null ? "" : meals.strMeasure1}</td>
                                            </tr>
                                            <tr>
                                                <td>{meals.strIngredient2 === "" || null ? "" : meals.strIngredient2}</td>
                                                <td>{meals.strMeasure2 === "" || null ? "" : meals.strMeasure2}</td>
                                            </tr>
                                            <tr>
                                                <td>{meals.strIngredient3 === "" || null ? "" : meals.strIngredient3}</td>
                                                <td>{meals.strMeasure3 === "" || null ? "" : meals.strMeasure3}</td>
                                            </tr>
                                            <tr>
                                                <td>{meals.strIngredient4 === "" || null ? "" : meals.strIngredient4}</td>
                                                <td>{meals.strMeasure4 === "" || null ? "" : meals.strMeasure4}</td>
                                            </tr>
                                            <tr>
                                                <td>{meals.strIngredient5 === "" || null ? "" : meals.strIngredient5}</td>
                                                <td>{meals.strMeasure5 === "" || null ? "" : meals.strMeasure5}</td>
                                            </tr>
                                            <tr>
                                                <td>{meals.strIngredient6 === "" || null ? "" : meals.strIngredient6}</td>
                                                <td>{meals.strMeasure6 === "" || null ? "" : meals.strMeasure6}</td>
                                            </tr>
                                            <tr>
                                                <td>{meals.strIngredient7 === "" || null ? "" : meals.strIngredient7}</td>
                                                <td>{meals.strMeasure7 === "" || null ? "" : meals.strMeasure7}</td>
                                            </tr>
                                            <tr>
                                                <td>{meals.strIngredient8 === "" || null ? "" : meals.strIngredient8}</td>
                                                <td>{meals.strMeasure8 === "" || null ? "" : meals.strMeasure8}</td>
                                            </tr>
                                            <tr>
                                                <td>{meals.strIngredient9 === "" || null ? "" : meals.strIngredient9}</td>
                                                <td>{meals.strMeasure9 === "" || null ? "" : meals.strMeasure9}</td>
                                            </tr>
                                            <tr>
                                                <td>{meals.strIngredient10 === "" || null ? "" : meals.strIngredient10}</td>
                                                <td>{meals.strMeasure10 === "" || null ? "" : meals.strMeasure10}</td>
                                            </tr>
                                            <tr>
                                                <td>{meals.strIngredient11 === "" || null ? "" : meals.strIngredient11}</td>
                                                <td>{meals.strMeasure11 === "" || null ? "" : meals.strMeasure11}</td>
                                            </tr>
                                            <tr>
                                                <td>{meals.strIngredient12 === "" || null ? "" : meals.strIngredient12}</td>
                                                <td>{meals.strMeasure12 === "" || null ? "" : meals.strMeasure12}</td>
                                            </tr>
                                            <tr>
                                                <td>{meal.strIngredient13 === "" || null ? "" : meals.strIngredient13}</td>
                                                <td>{meal.strMeasure13 === "" || null ? "" : meals.strMeasure13}</td>
                                            </tr>
                                            <tr>
                                                <td>{meals.strIngredient14 === "" || null ? "" : meals.strIngredient14}</td>
                                                <td>{meals.strMeasure14 === "" || null ? "" : meals.strMeasure14}</td>
                                            </tr>
                                            <tr>
                                                <td>{meals.strIngredient15 === "" || null ? "" : meals.strIngredient15}</td>
                                                <td>{meals.strMeasure15 === "" || null ? "" : meals.strMeasure15}</td>
                                            </tr>
                                            <tr>
                                                <td>{meals.strIngredient16 === "" || null ? "" : meals.strIngredient16}</td>
                                                <td>{meals.strMeasure16 === "" || null ? "" : meals.strMeasure16}</td>
                                            </tr>
                                            <tr>
                                                <td>{meals.strIngredient17 === "" || null ? "" : meals.strIngredient17}</td>
                                                <td>{meals.strMeasure17 === "" || null ? "" : meals.strMeasure17}</td>
                                            </tr>
                                            <tr>
                                                <td>{meals.strIngredient18 === "" || null ? "" : meals.strIngredient18}</td>
                                                <td>{meals.strMeasure18 === "" || null ? "" : meals.strMeasure18}</td>
                                            </tr>
                                            <tr>
                                                <td>{meals.strIngredient19 === "" || null ? "" : meals.strIngredient19}</td>
                                                <td>{meals.strMeasure19 === "" || null ? "" : meals.strMeasure19}</td>
                                            </tr>
                                            <tr>
                                                <td>{meals.strIngredient20 === "" || null ? "" : meals.strIngredient20}</td>
                                                <td>{meals.strMeasure20 === "" || null ? "" : meals.strMeasure20}</td>
                                            </tr>
                                        </table>
         */}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <p style={{fontWeight: 'bold', fontSize: '1.3em', color: 'grey'}}>Instructions</p>
            <div style={{ display: 'grid', textAlign: 'start', width: '600px'}} className="Instructions">{post === [] ? "" : post.map((foo, idx) => <div key={idx}>{foo.strInstructions}</div>)}</div>
          </Typography>
        </CardContent>
      </Card>
      </Paper>
    </div>

  </>
)
}



export default RandomRecette
