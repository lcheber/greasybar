import React, { useState, useEffect } from 'react'
import axios from "axios";

export default function Recettes () {

    const baseURL = 'https://www.themealdb.com/api/json/v1/1/random.php'


    const [post1, setPost1] = useState([]);
    const [post2, setPost2] = useState([]);


    useEffect(() => {
        axios.get(baseURL).then((response) => {
        setPost1(response.data.meals);
        });
    }, []);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
        setPost2(response.data.meals);
        });
    }, []);

        return(
            <>
            </>
            // <div>{post===[] ? "" : post.map((foo, idx) => <div key={idx}>{foo}</div>)}</div>
            // <div>{post === [] ? "" : <div >{post.strInstructions}</div>}</div>

        )
}
