import React, { Component } from 'react';

export class Carousel extends Component<any> {

    render() {
        return (
            <div id="myCarousel" className="carousel slide">
                {/* <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol> */}
                <div className="carousel-inner">
                    {(this.props.images || []).map((img: { url: string; title: string }, index: number ) => (
                        <div key={index} className={index == 0 ? 'carousel-item active' : 'carousel-item'}>
                            <img key={index + 1} src={img.url} />
                            <div key={index + 2} className="carousel-caption">
                                <p>{img.title}</p>
                        </div>
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}