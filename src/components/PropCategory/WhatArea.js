import AreaComp from "./AreaComp";



const WhatArea = () => {
    return (
        <div className="full-row bg-light">
            <div className="container">
                <div className="row">
                    <div className="col mb-5">
                        <h2 className="main-title down-line w-50 mx-auto mb-4 text-center w-sm-100">What You Area Looking For?</h2>
                        <span className="d-table w-50 w-sm-100 sub-title mx-auto text-center">Mauris primis turpis Laoreet magna felis mi amet quam enim curae. Sodales semper tempor dictum faucibus habitasse.</span>
                    </div>
                </div>
                <div className="row row-cols-xl-4 row-cols-sm-2 row-cols-1 g-4">
                    <AreaComp title='House' desc='Tellus lobortis dapibus erat eu et. Senectus quam vitae in arcu nisi quam'></AreaComp>
                    <AreaComp title='Land' desc='Tellus lobortis dapibus erat eu et. Senectus quam vitae in arcu nisi quam'></AreaComp>
                    <AreaComp title='Office' desc='Tellus lobortis dapibus erat eu et. Senectus quam vitae in arcu nisi quam'></AreaComp>
                    <AreaComp title='Business' desc='Tellus lobortis dapibus erat eu et. Senectus quam vitae in arcu nisi quam'></AreaComp>
                </div>
            </div>
        </div>
    )
}

export default WhatArea;