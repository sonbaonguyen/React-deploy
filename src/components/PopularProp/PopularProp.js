import Prop from "./Prop"



const PopularProp = () => {
    return (
        <div className="full-row bg-secondary">
            <div className="container-fluid">
                <div className="row">
                    <div className="col mb-5">
                        <h2 className="down-line text-white w-50 mx-auto text-center w-sm-100">Most Popular Property</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="4block-carusel nav-disable owl-carousel">
                            <Prop status='For Sale' feature='' img='property-grid-1.png' price='$1850' type='Apartment'
                            name='Apolo Family House Residense' location='4213 Duff Avenue South Burlington, VT 05403' room='5' bed='3' size='1100' recmd='582' authorImg='1.jpg' authorName='Ali Tufan'></Prop>
                            <Prop status='For Sale' feature='true' img='property-grid-2.png' price='$120,5500' type='Condos'
                            name='Luxury Condos Infront of River' location='2305 Tree Frog Lane Overlandpk, MO 66210' room='5' bed='3' size='1100' recmd='431' authorImg='1.jpg' authorName='Ali Tufan'></Prop>
                            <Prop status='For Rent' feature='' img='property-grid-3.png' price='$3450' type='Villa'
                            name='Gorgeous Villa Bay View' location='2305 Tree Frog Lane Overlandpk, MO 66210' room='5' bed='3' size='1100' recmd='360' authorImg='1.jpg' authorName='Ali Tufan'></Prop>
                            <Prop status='For Rent' feature='' img='property-grid-4.png' price='$1,0450' type='Condos'
                            name='New Developed Condos' location='2305 Tree Frog Lane Overlandpk, MO 66210' room='5' bed='3' size='1100' recmd='281' authorImg='1.jpg' authorName='Ali Tufan'></Prop>
                            <Prop status='For Sale' feature='' img='property-grid-1.png' price='$1850' type='Apartment'
                            name='Apolo Family House Residense' location='4213 Duff Avenue South Burlington, VT 05403' room='7' bed='5' size='1200' recmd='175' authorImg='1.jpg' authorName='Ali Tufan'></Prop>
                            <Prop status='For Sale' feature='true' img='property-grid-2.png' price='$120,5500' type='Condos'
                            name='Luxury Condos Infront of River' location='2305 Tree Frog Lane Overlandpk, MO 66210' room='5' bed='3' size='1100' recmd='91' authorImg='1.jpg' authorName='Ali Tufan'></Prop>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularProp;