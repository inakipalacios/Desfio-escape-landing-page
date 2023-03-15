import React from "react";

function Provincia(props){
    return(
        <a href="#">
            <img className="imagen_provincia" src={require(`../img/${props.imagen}.png`)} width="250"/>
        </a>
    );
}

export default Provincia;