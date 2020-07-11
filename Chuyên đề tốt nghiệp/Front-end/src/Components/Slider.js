import React, { Component } from 'react'

export default class Slider extends Component {
    render() {
        return (
            // Slider
            <div className="slider wow bounceInLeft" data-wow-duration="1.1s" data-interval='800'>
                <div id="mycarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#mycarousel" data-slide-to={0} className="active" />
                        <li data-target="#mycarousel" data-slide-to={1} />
                        <li data-target="#mycarousel" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active">
                            <img src="images/backgroundd.png" alt="" className="img-fluid" />
                        </div>
                        <div className="carousel-item">
                            <img src="images/backgroundd.png" alt="" className="img-fluid" />
                        </div>
                        <div className="carousel-item">
                            <img src="images/backgroundd.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            //  End Slider 
        )
    }
}
