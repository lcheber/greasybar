import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { MenuItem } from '@mui/material'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { myTheme, myTheme2 } from "../Theme";


function Categories(props) {
  let { slug } = useParams()

  const baseURL = 'https://www.themealdb.com/api/json/v1/1/categories.php'

  const [post, setPost] = useState([]);
  const [country, setCountry] = useState([])

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      // console.log(response.data)
      setPost(response.data.categories);
    });
  }, [slug]);

  useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list').then((response) => {
      setCountry(response.data.meals);
    });
  }, []);


  return post === []
    ? ""
    : post.map((foo, idx) => (
      <Grid key={idx} item sx={{ width: '120px' }}>
        <MenuItem theme={myTheme2}>
          <Link refresh="true" style={{ textDecoration: 'none' }} to={"/Category/" + foo.strCategory}>
            <Box item>{foo.strCategory}</Box>
          </Link>
        </MenuItem>
      </Grid>
    ))
}

export default Categories;