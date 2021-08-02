

const style = {
    border: '3px solid black',
    height: 'auto',
    margin: '20px 25px',
}

const Slide = () => {
    return (
        <div>
            Hellooo e a dang ao giac hay doi mat kia biet cuoi, day la lyric co the khien a chet cuoi =))

            <div id="slideshow" style={style}>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel" data-interval="1000" data-pause="false">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="images/Yone_01.jpg" alt="First slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="images/Yone_02.jpg" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="images/Yone_03.jpg" alt="Third slide"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
            </div>
        </div>
    )
}

export default Slide;