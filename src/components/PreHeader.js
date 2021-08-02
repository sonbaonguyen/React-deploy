

const PreHeader = () => {
    return (
        <div className="top-header xs-mx-none bg-light border-bottom">
                <div className="container">
                    <div className="row row-cols-md-2 row-cols-1">
                        <div className="col">
                            <ul className="top-contact list-color-secondary">
                                <li><a href="#"><i className="fa fa-phone" aria-hidden="true"></i> Need Support ? +1-435-782-4312</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="nav-bar-top right list-color-secondary d-flex">
                                <li><a href="../../uniland-old/fullwidth/" target="_blank">Old Version</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="signup.html">Sign Up</a></li>
                                <li><a href="signin.html">Login</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default PreHeader;