import Agent from "./Agent";


const PropAgents = () => {
    return (
        <div className="full-row">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="align-items-center d-flex">
                            <div className="me-auto">
                                <div className="tagline text-primary pb-1 d-table">Our Listed</div>
                                <h2 className="d-table">Property Agents</h2>
                            </div>
                            <a href="property-grid-v1.html" className="ms-auto btn-link">View All Agents</a>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1 mt-5">
                    <Agent img='1.jpg' name="Luann McLawhorn" date='At 1st April, 2012' score='4.50'></Agent>
                    <Agent img='2.jpg' name="Ronald Johnson" date='At 1st April, 2012' score='5.00'></Agent>
                    <Agent img='3.jpg' name="John M. Riddle" date='At 1st April, 2012' score='5.00'></Agent>
                    <Agent img='4.jpg' name="John M. Riddle" date='At 1st April, 2012' score='4.00'></Agent>
                </div>
            </div>
        </div>
    )
}

export default PropAgents;