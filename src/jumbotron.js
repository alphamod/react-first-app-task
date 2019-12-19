import React from 'react';

export function Jumbotron(props) {
    return (
        <div className="jumbotron jumbotron-fluid bg-warning mb-0">
            <div className="container-fluid m-0 p-0">
                <h1 className="display-4 text-center text-white">PIXEL <span className="text-primary">PERFECT</span></h1>
                <p className="lead text-center text-secondary">Vanakkam Mapla, React La Irunthu</p>
                <div className="d-flex justify-content-center m-4 p-4"><div className="btn rounded-pill m-4 text-dark border-white bg-white shadow-sm">Get Started</div></div>
            </div>
        </div>
    )
}