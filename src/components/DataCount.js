const style = {
    visibility: 'visible', 
    animationDuration: '300ms', 
    animationName: 'fadeIn',
}



const DataCount = () => {
    return(
        <div className="full-row p-0">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="fact-counter bg-secondary pt-5 pb-4 rounded">
                            <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1">
                                <div className="col">
                                    <div className="mb-30 text-center count wow fadeIn animate" data-wow-duration="300ms" style={style}>
                                        <span className="count-num text-primary h2" data-speed="3000" data-stop="310">3210</span>
                                        <h5 className="text-white font-400 pt-2">Listed Property</h5>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-30 text-center count wow fadeIn animate" data-wow-duration="300ms" style={style}>
                                        <span className="count-num text-primary h2" data-speed="3000" data-stop="51">51</span>
                                        <h5 className="text-white font-400 pt-2">Mega Project</h5>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-30 text-center count wow fadeIn animate" data-wow-duration="300ms" style={style}>
                                        <span className="count-num text-primary h2" data-speed="3000" data-stop="25">25</span>
                                        <h5 className="text-white font-400 pt-2">Awards Won</h5>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-30 text-center count wow fadeIn animate" data-wow-duration="300ms" style={style}>
                                        <span className="count-num text-primary h2" data-speed="3000" data-stop="2130">2130</span>
                                        <h5 className="text-white font-400 pt-2">Happy Clients</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataCount;