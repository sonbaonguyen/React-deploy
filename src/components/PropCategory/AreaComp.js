


const AreaComp = ({title, desc}) => {
    return (
        <div className="col">
            <div className="text-center p-35 bg-white transation hover-shadow h-100 rounded">
                <i className="fas fa-network-wired text-primary flat-small"></i>
                <h5 className="mb-3 font-400"><a href="#" className="d-block text-secondary hover-text-primary mt-4">{title}</a></h5>
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default AreaComp;