import React, { Component } from "react";

const randomNumberGenerator = (max, min) => {
    return (
        Math.floor(Math.random() * max) + min 
    )
} 

export default randomNumberGenerator;