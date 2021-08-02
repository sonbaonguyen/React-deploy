


const Agent = ({img, name, date, score}) => {
    var myImg = 'assets/images/team/' + img;
    return (
        <div className="col">
            <div className="thumb-team-simple">
                <img className="rounded-lg" src={myImg} alt="" />
                <div className="user-info d-flex py-4">
                    <div className="me-auto">
                        <h5 className="text-dark mb-2 font-400"><a href="#">{name}</a></h5>
                        <span className="text-secondary font-fifteen">{date}</span>
                    </div>
                    <div className="member-score font-small bg-primary d-table text-white ms-auto">
                        <span>Score: {score}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Agent;