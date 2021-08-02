import Prop from "./Prop";



const RecentProp = () => {
    return (
        <div className="full-row pt-0">
            <div className="container">
                <div className="row">
                    <div className="col mb-4">
                        <div className="align-items-center d-flex">
                            <div className="me-auto">
                                <h2 className="d-table">Recent Properties</h2>
                            </div>
                            <a href="property-grid-v1.html" className="ms-auto">View All Properties</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="3block-carusel nav-disable owl-carousel">
                            <Prop img='property-grid-1.png' feature='' price='$1850' type='Apartment' name='Apolo Family House Residense' location='4213 Duff Avenue South Burlington, VT 05403' room='7' bed='5' size='1200' authorImg='1.jpg' authorName='Ali Tufan' timePost='2 Month Ago'></Prop>
                            <Prop img='property-grid-2.png' feature='true' price='$120,5500' type='Condos' name='Luxury Condos Infront of River' location='2305 Tree Frog Lane Overlandpk, MO 66210' room='5' bed='3' size='1100' authorImg='1.jpg' authorName='Ali Tufan' timePost='2 Month Ago'></Prop>
                            <Prop img='property-grid-3.png' feature='' price='$3450' type='Villa' name='Gorgeous Villa Bay View' location='2305 Tree Frog Lane Overlandpk, MO 66210' room='5' bed='3' size='1100' authorImg='1.jpg' authorName='Ali Tufan' timePost='2 Month Ago'></Prop>
                            <Prop img='property-grid-4.png' feature='' price='$1,0450' type='Condos' name='New Developed Condos' location='2305 Tree Frog Lane Overlandpk, MO 66210' room='5' bed='3' size='1100' authorImg='1.jpg' authorName='Ali Tufan' timePost='2 Month Ago'></Prop>
                            <Prop img='property-grid-1.png' feature='' price='$1850' type='Apartment' name='Apolo Family House Residense' location='4213 Duff Avenue South Burlington, VT 05403' room='7' bed='5' size='1200' authorImg='1.jpg' authorName='Ali Tufan' timePost='2 Month Ago'></Prop>
                            <Prop img='property-grid-2.png' feature='true' price='$120,5500' type='Condos' name='Luxury Condos Infront of River' location='2305 Tree Frog Lane Overlandpk, MO 66210' room='5' bed='3' size='1100' authorImg='1.jpg' authorName='Ali Tufan' timePost='2 Month Ago'></Prop>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentProp;