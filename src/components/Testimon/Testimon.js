import TestiComp from "./TestiComp";



const Testimon = () => {
    return (
        <div className="full-row">
            <div className="container">
                <div className="row">
                    <div className="col mb-5">
                        <span className="text-primary tagline pb-2 d-table m-auto">Testimonial</span>
                        <h2 className="down-line w-50 mx-auto mb-4 text-center w-sm-100">Whay Client Says About Us</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="testimonial-simple text-center px-5">
                            <div className="text-carusel owl-carousel">
                                <TestiComp content='Posuere mus curabitur parturient scelerisque suspendisse elementum facilisis dignissim non purus torquent turpis interdum hendrerit erat ultrices pretium risus elementum. Magnis sit. Auctor quam. Mollis. Bibendum fames
                                        lacus. Fringilla aliquet mattis lacinia quam a montes maecenas parturient urna varius. Sollicitudin pede sapien taciti dui senectus sit diam curabitur Lacus sapien.'
                                    title='Mark Wiggins' desc='CEO ( Grodins Group )' img='user1.jpg'></TestiComp>
                                <TestiComp content='Posuere mus curabitur parturient scelerisque suspendisse elementum facilisis dignissim non purus torquent turpis interdum hendrerit erat ultrices pretium risus elementum. Magnis sit. Auctor quam. Mollis. Bibendum fames
                                        lacus. Fringilla aliquet mattis lacinia quam a montes maecenas parturient urna varius. Sollicitudin pede sapien taciti dui senectus sit diam curabitur Lacus sapien.'
                                    title='Mark Wiggins' desc='CEO ( Grodins Group )' img='user2.jpg'></TestiComp>
                                <TestiComp content='Posuere mus curabitur parturient scelerisque suspendisse elementum facilisis dignissim non purus torquent turpis interdum hendrerit erat ultrices pretium risus elementum. Magnis sit. Auctor quam. Mollis. Bibendum fames
                                        lacus. Fringilla aliquet mattis lacinia quam a montes maecenas parturient urna varius. Sollicitudin pede sapien taciti dui senectus sit diam curabitur Lacus sapien.'
                                    title='Mark Wiggins' desc='CEO ( Grodins Group )' img='user3.jpg'></TestiComp>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimon;