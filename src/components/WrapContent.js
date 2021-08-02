import WrapHeader from "./WrapHeader"
import Slider from "./Slider"
import PropSearch from "./PropSearch"
import Service from "./Service/Service"
import RecentProp from "./RecentProp/RecentProp"
import WhatArea from "./PropCategory/WhatArea"
import PropAgents from "./PropAgent/PropAgents"
import DataCount from "./DataCount"
import Testimon from "./Testimon/Testimon"
import PopularProp from "./PopularProp/PopularProp"
import RecentPost from "./RecentPost/RecentPost"
import SubNow from "./SubNow"
import Footer from "./Footer"
import Copyright from "./Copyright"


const WrapContent = () => {
    return (
        <div id="page_wrapper" className="bg-white">
            <WrapHeader />
            <Slider />
            <PropSearch />
            <Service />
            <RecentProp />
            <WhatArea />
            <PropAgents />
            <DataCount />
            <Testimon />
            <PopularProp />
            <RecentPost />
            <SubNow />
            <Footer />
            <Copyright />
            {/* Scroll to top */}
            <a href="#" className="text-general scroll-top-vertical xs-mx-none" id="scroll">Scroll to top</a>
            {/* END Scroll to top */}
        </div>
    )
}

export default WrapContent;