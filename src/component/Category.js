import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { myTheme, myTheme2 } from "../Theme";


function Category(props) {

  let { slug } = useParams()

  const baseURL = 'https://www.themealdb.com/api/json/v1/1/categories.php'

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + slug).then((response) => {
      console.log("Category===>", response.data.meals)
      setCategories(response.data.meals);
    });
  }, [slug]);

  return (
    <>
      <div style={{ display: 'flex', marginTop: '90px', marginBottom: '50px', justifyContent: 'center' }}>
        <Paper sx={{ display: 'flex'}} elevation={10}>
          <Card sx={{ height:'100%', display:'flex', maxWidth: 1500, justifyContent: "center" }}>
            <div style={{ height:'100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>{categories === [] ? "" : categories.map((cat, idx) =>
              <div style={{ display: 'grid', margin: '5px', marginBottom: '5px', justifyContent: "center" }} key={idx}>
                <Paper sx={{height:'100%'}} elevation={5}>
                  <Card sx={{   height: '100%', maxWidth: 300, height: 250, justifyContent: "center" }}>
                    <Link style={{ textDecoration: 'none' }} to={"/Recette/" + cat.idMeal}>
                      <div style={{ height:'100%', width: '250px', textAlign: "center", backgroundColor: "#fffde8" }}>
                        <div style={{ color: '#ff5d39', width: 'auto', paddingTop: '5px', paddingBottom: '5px', fontWeight: 'bold', textAlign: 'middle' }}>{cat.strMeal}</div>
                        <img src={cat.strMealThumb} style={{ width: '300px' }} /></div>
                    </Link>
                  </Card>
                </Paper>
              </div>
            )}
            </div>
          </Card>
        </Paper>
      </div>
    </>
  )
}

export default Category;