

const style = {
    marginTop: '-60px',
    zIndex: 99,
}


const PropSearch = () => {
    return (
        <div className="full-row p-0" style={style}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form className="bg-white rounded shadow-sm quick-search px-5 py-4 form-icon-right position-relative" action="#" method="post" >
                            <div className="row row-cols-lg-6 row-cols-md-3 row-cols-1 g-3">
                                <div className="col">
                                    <input type="text" className="form-control" name="keyword" placeholder="Enter Keyword..."/>
                                </div>
                                <div className="col">
                                    <select className="form-control">
										<option>Property Types</option>
										<option>House</option>
										<option>Office</option>
										<option>Appartment</option>
										<option>Condos</option>
										<option>Villa</option>
										<option>Small Family</option>
										<option>Single Room</option>
									</select>
                                </div>
                                <div className="col">
                                    <div className="position-relative">
                                        <input type="text" className="form-control" name="location" placeholder="Location"/>
                                        <i className="fas fa-map-marker-alt y-center text-dark"></i>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="position-relative">
                                        <button className="form-control price-toggle toggle-btn" data-target="#data-range-price">Price <i className="fas fa-angle-down font-mini icon-font y-center text-dark"></i></button>
                                        <div id="data-range-price" className="price_range price-range-toggle">
                                            <div className="area-filter price-filter">
                                                <span className="price-slider">
												<input className="filter_price" type="text" name="price" value="0;10000000" />
											</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="position-relative">
                                        <button className="form-control text-start toggle-btn" data-target="#aditional-check">Advanced <i className="fas fa-ellipsis-v font-mini icon-font y-center text-dark"></i></button>
                                    </div>
                                </div>
                                <div className="col">
                                    <button className="btn btn-primary w-100">Search</button>
                                </div>
                                {/* <!-- Advance Features --> */}
                                <div id="aditional-check" className="aditional-features p-5">
                                    <h5 className="mb-3">Aditional Options</h5>
                                    <ul className="row row-cols-lg-4 row-cols-md-2 row-cols-1 custom-check-box mb-4">
                                        <li className="col">
                                            <input type="checkbox" className="custom-control-input hide" id="customCheck1"/>
                                            <label className="custom-control-label" for="customCheck1">Air Conditioning</label>
                                        </li>
                                        <li className="col">
                                            <input type="checkbox" className="custom-control-input hide" id="customCheck2"/>
                                            <label className="custom-control-label" for="customCheck2">Garage Facility</label>
                                        </li>
                                        <li className="col">
                                            <input type="checkbox" className="custom-control-input hide" id="customCheck3"/>
                                            <label className="custom-control-label" for="customCheck3">Swiming Pool</label>
                                        </li>
                                        <li className="col">
                                            <input type="checkbox" className="custom-control-input hide" id="customCheck4"/>
                                            <label className="custom-control-label" for="customCheck4">Fire Security</label>
                                        </li>

                                        <li className="col">
                                            <input type="checkbox" className="custom-control-input hide" id="customCheck5"/>
                                            <label className="custom-control-label" for="customCheck5">Fire Place Facility</label>
                                        </li>
                                        <li className="col">
                                            <input type="checkbox" className="custom-control-input hide" id="customCheck6"/>
                                            <label className="custom-control-label" for="customCheck6">Play Ground</label>
                                        </li>
                                        <li className="col">
                                            <input type="checkbox" className="custom-control-input hide" id="customCheck7"/>
                                            <label className="custom-control-label" for="customCheck7">Ferniture Include</label>
                                        </li>
                                        <li className="col">
                                            <input type="checkbox" className="custom-control-input hide" id="customCheck8"/>
                                            <label className="custom-control-label" for="customCheck8">Marbel Floor</label>
                                        </li>

                                        <li className="col">
                                            <input type="checkbox" className="custom-control-input hide" id="customCheck9"/>
                                            <label className="custom-control-label" for="customCheck9">Store Room</label>
                                        </li>
                                        <li className="col">
                                            <input type="checkbox" className="custom-control-input hide" id="customCheck10"/>
                                            <label className="custom-control-label" for="customCheck10">Hight Class Door</label>
                                        </li>
                                        <li className="col">
                                            <input type="checkbox" className="custom-control-input hide" id="customCheck11" />
                                            <label className="custom-control-label" for="customCheck11">Floor Heating System</label>
                                        </li>
                                        <li className="col">
                                            <input type="checkbox" className="custom-control-input hide" id="customCheck12"/>
                                            <label className="custom-control-label" for="customCheck12">Garden Include</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropSearch;