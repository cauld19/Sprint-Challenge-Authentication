import React, {useState, useEffect} from "react";

import axios from "axios";

import JokeCard from "./JokeCard"

import {axiosWithAuth} from "./axiosWithAuth"



const Jokes = props => {

    const [jokes, setJokes] = useState([])

    const token = localStorage.getItem("token")

    const options = {
        headers: {'Authorization': token}
      };



    useEffect( () => {
        
    const fetchJokes = async () => {
        
        await axios
           .get('http://localhost:3300/api/jokes', options)
           .then(res => {
                setJokes(res.data)   
           })
           .catch(error => {
               console.log(error)
           })
       }
       fetchJokes()
   },[])



    return (
        <div>
            <JokeCard jokes={jokes}/>
        </div>
    )
}

export default Jokes;