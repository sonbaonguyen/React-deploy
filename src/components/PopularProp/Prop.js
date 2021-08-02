


const Prop = ({status, feature, img, price, type, name, location, room, bed, size, authorImg, authorName, recmd}) => {
    var houseImg = 'assets/images/property_grid/' + img;
    var authorImage = 'assets/images/team/' + authorImg;
    var ft = '';
    if (feature==='true') {
        ft = <span class="featured bg-primary text-white">Featured</span>;
    }
    return (
        <div className="item">
            {/* <!-- Property Grid --> */}
            <div className="property-grid-1 property-block border transation-this hover-shadow bg-white">
                <div className="overflow-hidden position-relative transation thumbnail-img bg-secondary hover-img-zoom m-2">
                    <div className="cata position-absolute"><span className="sale bg-secondary text-white">{status}</span></div>
                    <a href="property-single-v1.html"><img src={houseImg} alt="Image Not Found!" /></a>
                    <span className="price-on text-white font-medium font-500">{price}/<small>mo</small></span>
                    <ul className="position-absolute quick-meta">
                        <li><a href="#" title="Add Compare"><i className="fas fa-exchange-alt"></i></a></li>
                        <li><a href="#" title="Add Favourite"><i className="far fa-heart"></i></a></li>
                        <li className="md-mx-none"><a className="quick-view" href="#quick-view" title="Quick View"><i className="fas fa-search-plus"></i></a></li>
                    </ul>
                </div>
                <div className="property_text p-3">
                    <span className="d-inline-block text-primary">{type}</span>
                    <h5 className="mt-2"><a className="font-400 text-secondary" href="property-single-v1.html">{name}</a></h5>
                    <span className="my-3 d-block font-fifteen"><i className="fas fa-map-marker-alt text-primary"></i> {location} </span>
                    <div className="quantity font-fifteen">
                        <ul className="d-flex">
                            <li><span>Rooms:</span> {room}</li>
                            <li><span>Beds:</span> {bed}</li>
                            <li><span>Area:</span> {size} Sqft</li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex align-items-center post-meta mt-2 p-3 border-top">
                    <div className="agent">
                        <a href="#" className="d-flex text-general align-items-center"><img className="rounded-circle me-2" src={authorImage} alt="avata" /><span>{authorName}</span></a>
                    </div>
                    <div className="post-liked ms-auto"><span>{recmd} Recommand</span></div>
                </div>
            </div>
        </div>
    )
}

export default Prop;