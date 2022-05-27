import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";

function RandomHomepage() {
  const baseURL = "https://www.themealdb.com/api/json/v1/1/random.php";

  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setPost(response.data.meals);
    });
  }, []);

  return (
    <>
      <Paper
        elevation={20}
        style={{
          display: "flex",
          justifyContent: "center",

          marginTop: "70px",
          flexWrap: "wrap",
          maxWidth: "20%",
        }}
      >
        <Card>
          <br></br>
          <br></br>
          <div className="URL" style={{ width: "370px" }}>
            {post === []
              ? ""
              : post.map((foo, idx) => (
                  <div key={idx}>
                    <img
                      style={{ width: "350px" }}
                      src={foo.strMealThumb}
                    ></img>
                  </div>
                ))}
          </div>
          <br></br>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignContent: "Center",
            }}
          >
            <div className="Meal" style={{ fontWeight: "bolder" }}>
              {post === []
                ? ""
                : post.map((foo, idx) => <div key={idx}>{foo.strMeal}</div>)}
            </div>
            <br></br>
          </div>
          <br></br>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <div
                style={{
                  justifyContent: "center",
                }}
                className="Instructions"
              >
                {post === []
                  ? ""
                  : post.map((foo, idx) => (
                      <div key={idx}>{foo.strInstructions.slice(0, 50)}...</div>
                    ))}
              </div>
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </>
  );
}

export default RandomHomepage;
