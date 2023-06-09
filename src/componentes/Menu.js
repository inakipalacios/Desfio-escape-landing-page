import React from "react";

function Menu() {
    return (
        <div className="row">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={require("../img/logo.png")} width="140"/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link  " aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link " href="#">About us</a>
                            </li>
                            <li class="nav-item ">
                                <a class="nav-link " href="#">Make a reservation</a>
                            </li>
                            <li class="nav-item  ">
                                <a class="nav-link  " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Provinces
                                </a>
                                <ul class="dropdown-menu ">
                                    <li><a class="dropdown-item" href="#">Araba</a></li>
                                    <li><a class="dropdown-item" href="#">Bizkaia</a></li>
                                    <li><a class="dropdown-item" href="#">Gipuzkoa</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-primary boton"  id="search" type="submit">Search</button>
                            <button class="btn  btn-primary boton" id="login" type="submit">Login</button>

                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Menu;