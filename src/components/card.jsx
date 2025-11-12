import React from "react";

const Card = () => {
  return (
    <>
      <div className="Card-1">
        <div className="inner-card">
          <p className="bill">Bill</p>
          <div className="selector-box">
            <figure>
              <img src="\images\icon-dollar.svg" alt="" />
            </figure>
            <h1 className="num-1">142.55</h1>
          </div>
          <div className="Tip">
            <p>Select Tip %</p>
          </div>
          <div className="Grid">
            <div className="five">
              <h1>5%</h1>
            </div>
            <div className="ten">
              <h1>10%</h1>
            </div>
            <div className="fiften">
              <h1>15%</h1>
            </div>
            <div className="t-five">
              <h1>25%</h1>
            </div>
            <div className="fifty">
              <h1>50%</h1>
            </div>
            <div className="custom">
              <h1>Custom</h1>
            </div>
          </div>
          <div>
            <div className="peeps">
              <p>Number Of People</p>
            </div>
            <div className="selector-box-2">
              <figure>
                <img src="\images\icon-person.svg" alt="" />
              </figure>
              <p>5</p>
            </div>
          </div>
        </div>
        <div className="card-2">
          <div className="justify-1">
            <div className="container-1">
              <p>Tip Amount</p>
              <p>/ person</p>
            </div>
            <div className="numbs">
              <h2>$4.27</h2>
            </div>
          </div>
          <div className="justify-2">
            <div className="container-2">
              <p>Total</p>
              <p>/ person</p>
            </div>
            <div className="numbs">
              <h2>$32.79 </h2>
            </div>
          </div>
          <div>
            <button className="btn-1">
              <h2>RESET</h2>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
