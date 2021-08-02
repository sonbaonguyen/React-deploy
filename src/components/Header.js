
const style = {
    marginRight: '100px',
}


const Header = () => {
    return (
            <div className="main-nav py-2 xs-p-0">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <nav className="navbar navbar-expand-lg nav-secondary nav-primary-hover nav-line-active">
                                <a className="navbar-brand" href="#"><img className="nav-logo" src="assets/images/logo/logo1.png" alt="Image not found !"/></a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <i className="fas fa-bars navbar-toggler-icon flat-small text-primary"></i>
                                  </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="#">Home</a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="index.html">Home 01</a></li>
                                                <li><a className="dropdown-item" href="index-2.html">Home 02</a></li>
                                                <li><a className="dropdown-item" href="index-3.html">Home 03</a></li>
                                                <li><a className="dropdown-item" href="index-4.html">Home 04</a></li>
                                                <li><a className="dropdown-item" href="index-5.html">Home 05</a></li>
                                                <li><a className="dropdown-item" href="index-6.html">Home 06</a></li>
                                                <li><a className="dropdown-item" href="index-7.html">Home 07</a></li>
                                                <li><a className="dropdown-item" href="index-8.html">Home 08</a></li>
                                                <li><a className="dropdown-item" href="index-9.html">Home 09 <span className="text-primary ps-3 font-mini">New</span></a></li>
                                                <li><a className="dropdown-item" href="index-10.html">Home 10 <span className="text-primary ps-3 font-mini">New</span></a></li>
                                                <li><a className="dropdown-item" href="index-11.html">Home 11 <span className="text-primary ps-3 font-mini">New</span></a></li>
                                                <li><a className="dropdown-item" href="index-12.html">Home 12 <span className="text-primary ps-3 font-mini">New</span></a></li>
                                                <li><a className="dropdown-item" href="index-13.html">Home 13 <span className="text-primary ps-3 font-mini">New</span></a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="#">Listing</a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="property-grid-v1.html">Property Grid</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="property-grid-v1.html">Grid View V1</a></li>
                                                        <li><a className="dropdown-item" href="property-grid-v2.html">Grid View V2</a></li>
                                                        <li><a className="dropdown-item" href="property-grid-v3.html">Grid View V3</a></li>
                                                        <li><a className="dropdown-item" href="property-grid-v4.html">Grid View V4</a></li>
                                                        <li><a className="dropdown-item" href="property-grid-v5.html">Grid View V5</a></li>
                                                        <li><a className="dropdown-item" href="property-grid-full.html">Grid Full Width</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="property-list-v1.html">Property List</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="property-list-v1.html">List View V1</a></li>
                                                        <li><a className="dropdown-item" href="property-list-v2.html">List View V2</a></li>
                                                        <li><a className="dropdown-item" href="property-list-full.html">List Full Width</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="#">Listing Variation</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="property-banner-search.html">Banner Search</a></li>
                                                        <li><a className="dropdown-item" href="property-including-slider.html">Slider Include</a></li>
                                                        <li><a className="dropdown-item" href="property-including-map.html">Map Include</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="property-map-grid-v1.html">Property With Map</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="property-map-grid-v1.html">Map Grid View V1</a></li>
                                                        <li><a className="dropdown-item" href="property-map-grid-v2.html">Map Grid View V2</a></li>
                                                        <li><a className="dropdown-item" href="property-map-grid-v3.html">Map Grid View V3</a></li>
                                                        <li><a className="dropdown-item" href="property-map-grid-v4.html">Map Grid View V4</a></li>
                                                        <li><a className="dropdown-item" href="property-map-list-v1.html">Map List View V1</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="advance-search-v1.html">Advance Search</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="advance-search-v1.html">Advance Search V1</a></li>
                                                        <li><a className="dropdown-item" href="advance-search-v2.html">Advance Search V2</a></li>
                                                        <li><a className="dropdown-item" href="advance-search-v3.html">Advance Search V3</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="#">Features</a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="property-single-v1.html">Single Property</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="property-single-v1.html">Single Property V1</a></li>
                                                        <li><a className="dropdown-item" href="property-single-v2.html">Single Property V2</a></li>
                                                        <li><a className="dropdown-item" href="property-single-v3.html">Single Property V3</a></li>
                                                        <li><a className="dropdown-item" href="property-single-v4.html">Single Property V4</a></li>
                                                        <li><a className="dropdown-item" href="property-single-v5.html">Single Property V5</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="left-filter-property-v1.html">Left Filter Search</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="left-filter-property-v1.html">Filter Property V1</a></li>
                                                        <li><a className="dropdown-item" href="left-filter-property-v2.html">Filter Property V2</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="dashboard.html">Dashboard</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="dashboard.html">My Account</a></li>
                                                        <li><a className="dropdown-item" href="dashboard-profile.html">My Profile</a></li>
                                                        <li><a className="dropdown-item" href="dashboard-profile.html">Social Media</a></li>
                                                        <li><a className="dropdown-item" href="dashboard-listing.html">My Properties</a></li>
                                                        <li><a className="dropdown-item" href="dashboard-favorite.html">Favorited Properties</a></li>
                                                        <li><a className="dropdown-item" href="dashboard-submit-property.html">Submit New Property</a></li>
                                                        <li><a className="dropdown-item" href="dashboard-message.html">Message</a></li>
                                                        <li><a className="dropdown-item" href="dashboard-agency-profile.html">Agency Profile</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown">
                                                    <a className="dropdown-toggle dropdown-item" href="agent-grid-view.html">Agents</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="agent-grid-view.html">Agents Grid View</a></li>
                                                        <li><a className="dropdown-item" href="agent-list-view.html">Agents List View</a></li>
                                                        <li><a className="dropdown-item" href="agent-details.html">Agents Details</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown">
                                                    <a className="dropdown-toggle dropdown-item" href="photo-gallery-v1.html">Photo Gallery</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="photo-gallery-v1.html">Photo Gallery V1</a></li>
                                                        <li><a className="dropdown-item" href="photo-gallery-v2.html">Photo Gallery V2</a></li>
                                                        <li><a className="dropdown-item" href="photo-gallery-v3.html">Photo Gallery V3</a></li>
                                                        <li><a className="dropdown-item" href="photo-gallery-v4.html">Photo Gallery V4</a></li>
                                                        <li><a className="dropdown-item" href="photo-gallery-v5.html">Photo Gallery V5</a></li>
                                                    </ul>
                                                </li>
                                                <li><a className="dropdown-item" href="compare.html">Compare</a></li>
                                                <li><a className="dropdown-item" href="dashboard-submit-property.html">Submit Property</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown mega-dropdown">
                                            <a className="nav-link" href="#">Pages</a>
                                            <ul className="dropdown-menu mega-dropdown-menu">
                                                <li className="mega-container">
                                                    <div className="row row-cols-lg-4 row-cols-1">
                                                        <div className="col">
                                                            <ul>
                                                                <li><a className="dropdown-item" href="about.html">About Us</a></li>
                                                                <li><a className="dropdown-item" href="our-mission.html">Our Mission</a></li>
                                                                <li><a className="dropdown-item" href="career.html">Careers</a></li>
                                                                <li><a className="dropdown-item" href="award.html">Awards</a></li>
                                                                <li><a className="dropdown-item" href="testimonials.html">Testimonials</a></li>
                                                                <li><a className="dropdown-item" href="timeline.html">Timeline</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col">
                                                            <ul>
                                                                <li><a className="dropdown-item" href="dashboard-profile.html">My Profile</a></li>
                                                                <li><a className="dropdown-item" href="dashboard-profile.html">Social Media</a></li>
                                                                <li><a className="dropdown-item" href="dashboard-listing.html">My Properties</a></li>
                                                                <li><a className="dropdown-item" href="dashboard-favorite.html">Favorited Properties</a></li>
                                                                <li><a className="dropdown-item" href="dashboard-submit-property.html">Submit New Property</a></li>
                                                                <li><a className="dropdown-item" href="#">Shortcodes</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col">
                                                            <ul>
                                                                <li><a className="dropdown-item" href="#">Feedback and Comments</a></li>
                                                                <li><a className="dropdown-item" href="#">Payments and Invoice</a></li>
                                                                <li><a className="dropdown-item" href="dashboard-change-password.html">Change Password</a></li>
                                                                <li><a className="dropdown-item" href="terms-and-condition.html">Terms And Condition</a></li>
                                                                <li><a className="dropdown-item" href="pricing-table.html">Pricing Table</a></li>
                                                                <li><a className="dropdown-item" href="dashboard-agency-profile.html">Agency Profile</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col">
                                                            <ul>
                                                                <li><a className="dropdown-item" href="our-services.html">Our Services</a></li>
                                                                <li><a className="dropdown-item" href="dashboard-submit-property.html">Submit Property</a></li>
                                                                <li><a className="dropdown-item" href="#">Invoice Details</a></li>
                                                                <li><a className="dropdown-item" href="dashboard-message.html">Message</a></li>
                                                                <li><a className="dropdown-item" href="404.html">Error Page</a></li>
                                                                <li><a className="dropdown-item" href="faq.html">FAQ</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="#">Blog</a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="#">Blog Grid</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="blog-grid-v1.html">Blog Grid V1</a></li>
                                                        <li><a className="dropdown-item" href="blog-grid-v2.html">Blog Grid V2</a></li>
                                                        <li><a className="dropdown-item" href="blog-grid-v3.html">Blog Grid V3</a></li>
                                                        <li><a className="dropdown-item" href="blog-grid-v4.html">Blog Grid V4</a></li>
                                                        <li><a className="dropdown-item" href="blog-grid-v5.html">Blog Grid V5</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="#">Blog List</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="blog-list-v1.html">Blog List V1</a></li>
                                                        <li><a className="dropdown-item" href="blog-list-v2.html">Blog List V2</a></li>
                                                    </ul>
                                                </li>
                                                <li><a className="dropdown-item" href="blog-masonry-grid.html">Masonry Grid</a></li>
                                                <li className="dropdown"> <a className="dropdown-toggle dropdown-item" href="#">Single Blog</a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="blog-single-v1.html">Blog Single V1</a></li>
                                                        <li><a className="dropdown-item" href="blog-single-v2.html">Blog Single V2</a></li>
                                                        <li><a className="dropdown-item" href="blog-single-v3.html">Blog Single V3</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="contact.html">Contact</a>
                                        </li>
                                    </ul>
                                    <a href="#" className="ms-2 btn btn-primary md-mx-none rounded-pill">+ Create Listing</a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default Header;