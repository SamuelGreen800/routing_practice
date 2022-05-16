import React from "react";
import {
    BrowserRouter, Route, Routes, Link
} from "react-router-dom";
import { useParams } from "react-router";


const Word = (props) => {
    const {word, color, background} = useParams();

    return (
        <div>
            {
                isNaN(word)?
                <h1 style={
                    color?
                    {color: color, backgroundColor: background}
                    :null
                }>
                    The bird is the word. But it's also: {word}
                </h1>
                :
                <h1>Your lucky number is: {word}</h1>

            }
        </div>


        
    );
    }

    export default Word