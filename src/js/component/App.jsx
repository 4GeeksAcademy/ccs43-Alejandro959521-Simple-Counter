import React from "react";


import { Card1 } from "./Card1.jsx";

export function App(props) {


      return (

            <div className="bg-primary w-100 vh-100 d-flex justify-content-center align-items-center">
                  <Card1 />

                  <div className="card text-center m-2 pt-2" style={{ height: "250px", width: "200px", backgroundColor: "rgba(10, 0, 5, 0.93)", borderRadius: "50px 50px 50px 50px" }}>

                        <p className=" mt-4 text-white" style={{ fontSize: "100px" }} >{props.val6 % 10}</p>
                  </div>

                  <div className="card text-center m-2 pt-2" style={{ height: "250px", width: "200px", backgroundColor: "rgba(10, 0, 5, 0.93)", borderRadius: "50px 50px 50px 50px" }}>


                        <p className=" mt-4 text-white" style={{ fontSize: "100px" }} >{props.val5 % 10}</p>


                  </div>

                  <div className="card text-center m-2 pt-2" style={{ height: "250px", width: "200px", backgroundColor: "rgba(10, 0, 5, 0.93)", borderRadius: "50px 50px 50px 50px" }}>


                        <p className=" mt-4 text-white" style={{ fontSize: "100px" }} >{props.val4 % 10}</p>


                  </div>

                  <div className="card text-center m-2 pt-2" style={{ height: "250px", width: "200px", backgroundColor: "rgba(10, 0, 5, 0.93)", borderRadius: "50px 50px 50px 50px" }}>


                        <p className=" mt-4 text-white" style={{ fontSize: "100px" }} >{props.val3 % 10}</p>


                  </div>


                  <div className="card text-center m-2 pt-2" style={{ height: "250px", width: "200px", backgroundColor: "rgba(10, 0, 5, 0.93)", borderRadius: "50px 50px 50px 50px" }}>


                        <p className=" mt-4 text-white" style={{ fontSize: "100px" }} >{props.val2 % 10}</p>


                  </div>


                  <div className="card text-center m-2 pt-2" style={{ height: "250px", width: "200px", backgroundColor: "rgba(10, 0, 5, 0.93)", borderRadius: "50px 50px 50px 50px" }}>


                        <p className=" mt-4 text-white" style={{ fontSize: "100px" }} >{props.val1 % 10}</p>


                  </div>




            </div>

      )

}



