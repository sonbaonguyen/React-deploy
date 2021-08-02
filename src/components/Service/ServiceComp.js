
const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const iStyle = {
    color: 'white',
    fontSize: '1.3rem',
}


const ServiceComp = ({title, desc}) => {
    return (
        <div className="col">
            <div className="thumb-angle-left mb-4 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1000ms">
                <div className="box-70px bg-primary p-3" style={divStyle}><i style={iStyle} className="far fa-clone"></i></div>
                <h5 className="mt-5 mb-3 font-400"><a href="#" className="transation">{title}</a></h5>
                <p>{desc}</p>
                <a href="#" className="btn-link">Read More</a>
            </div>
        </div>
    )
}

export default ServiceComp;