import ServiceComp from "./ServiceComp";



const Service = () => {
    return (
        <div className="full-row">
            <div className="container">
                <div className="row row-cols-lg-4 row-cols-sm-2 row-cols-1 g-4">
                    <ServiceComp title='Property Booking' desc='Nunc. Lectus eget. Iaculis dui velit velit turpis lacus nostra a aliquet integer'></ServiceComp>
                    <ServiceComp title='Payment Guarantee' desc='Nunc. Lectus eget. Iaculis dui velit velit turpis lacus nostra a aliquet integer'></ServiceComp>
                    <ServiceComp title='House Management' desc='Nunc. Lectus eget. Iaculis dui velit velit turpis lacus nostra a aliquet integer'></ServiceComp>
                    <ServiceComp title='Property Deal' desc='Nunc. Lectus eget. Iaculis dui velit velit turpis lacus nostra a aliquet integer'></ServiceComp>
                </div>
            </div>
        </div>
    )
}

export default Service;