import React from "react";

function Menu() {
    return (
        <div className="row">
           <nav class=" navbar navbar-expand-lg bg-body-tertiary navbar  navegador">

            <div class="row col-12">
            <div class="col-7 col-lg-9 color2">
                <div class="nav-item ">
                <a class="navbar-brand" href=" ">
                    <img src={require("../img/logo.png")} class="logo" alt="..."/></a>
                    
                        </div>
                    
                </div>

                <div class=" navbar-collapse d-flex col-4 col-lg-3 color3" >
                    

                <button class="btn botonRojo" type="submit">
                            Iniciar sesion
                        </button>
            <button class="btn botonRojo" type="submit">
                            Registrarse
                        </button>

                </div>
            </div>
            
            
                
            </nav>
        </div>
        
    );
}

export default Menu;