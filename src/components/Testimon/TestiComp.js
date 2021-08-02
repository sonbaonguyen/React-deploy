


const TestiComp = ({content, title, desc, img}) => {
    var myImg = 'assets/images/' + img;
    return (
        <div className="item">
            <i className="fas fa-quote-right flat-medium mb-4 d-table mx-auto"></i>
            <blockquote className="text-secondary mb-5 font-medium">“{content}”</blockquote>
            <span className="mx-auto d-table rounded-circle" style={{ width: '80px' }}>
                <img className="rounded-circle" src={myImg} alt="medical template" />
            </span>
            <h4 className="mt-4 font-400">{title}</h4>
            <span className="text-primary font-fifteen">{desc}</span>
        </div>
    )
}

export default TestiComp;