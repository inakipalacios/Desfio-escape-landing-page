import React from "react";

function Hero(){
    return(
        <div className="row">
            <div class="px-4 py-5 my-5 text-center">
                <img class="d-block mx-auto mb-4" src={require("../img/logo.png")} width="30%"/>
                <h1 class="display-5 fw-bold">What does have Desafío Escape to offer?</h1>
                <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4">Escape rooms have become a very popular activity in recent years, which has led to an increase in the number of escape rooms around the world, including in the Basque Country.</p>
                    <p class="lead mb-4">An escape room search engine could help users quickly find available escape rooms in the area.</p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Sign up - it's free!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;