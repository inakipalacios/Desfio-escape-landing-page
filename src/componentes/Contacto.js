import React from "react";
import "../hojas-de-estilo/Contacto.css";

function Contacto(){
    return(
        <div className="row contacto">
            <h3>Contact Us</h3>
            <div class="mb-3">
                <label for="nameContact" class="form-label">Name</label>
                <input type="text" class="form-control" id="nameContact"/>
            </div>
            <div class="mb-3">
                <label for="emailContact" class="form-label">Email address</label>
                <input type="email" class="form-control" id="emailContact" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
                <label for="mensajeContact" class="form-label">Example textarea</label>
                <textarea class="form-control" id="mensajeContact" rows="3"></textarea>
            </div>
            <div class="mb-3">
                <button type="button" class="btn btn-primary">Send message</button>
            </div>
        </div>
    );
}

export default Contacto;