import React, {useState} from "react";


import axiosWithAuth from "./axiosWithAuth"

const Jokes = () => {
    const displayJokes = e => {
        e.preventDefault();
        axiosWithAuth
              .get("/")
              .then(res => {
                console.log(res)
                        
              })
              .catch(err => {
                console.log(err)
              
              })
      }

    return (
        <>
            
        </>
    )
}

export default Jokes;