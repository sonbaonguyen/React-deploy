const fs2 = {
    top: '50%',left: '50%',background: 'rgba(0, 0, 0, 0.8)',width:'740px',height:'360px',
}

const fs3 = {
    fontSize:'30px',fontWeight:700,top:'260px', left:'50%',fontFamily: 'Montserrat, sans-serif',
}

const fs4 = {
    top:'325px',left:'280px', textAlign:'center', fontWeight:400, fontStyle:'normal', textDecoration:'none',width:'650px', fontSize:'16px',color:'#ffffff',lineHeight:'30px',whiteSpace:'normal',
}

const fs5 = {
    fontWeight:500,textAlign:'center',cursor:'pointer',paddingRight:'35px',paddingLeft:'35px',fontSize:'14px',fontFamily: 'Montserrat, sans-serif',lineHeight:'30px',top:'460px',left:'50%',borderTop:'2px solid #fff',borderRight:'2px solid #fff',borderBottom:'2px solid #fff',borderLeft:'2px solid #fff',
    color:'#ffffff',borderRadius:'2px',paddingTop:'10px',paddingBottom:'10px',background:'rgba(0, 0, 0, 0.1)',whiteSpace:'normal',
}

const fs52 = {
    fontWeight:500,textAlign:'center',cursor:'pointer',paddingRight:'35px',paddingLeft:'35px',fontSize:'14px',fontFamily: 'Montserrat, sans-serif',lineHeight:'30px',top:'460px',left:'50%',borderTop:'2px solid #fff',borderRight:'2px solid #fff',borderBottom:'2px solid #fff',borderLeft:'2px solid #fff',
    color:'#1a1a1a',borderRadius:'2px',paddingTop:'10px',paddingBottom:'10px',background:'#ffffff',whiteSpace:'normal',
}



const Slider = () => {
    return (
        <div className="full-row p-0 overflow-hidden">

            <div id="slider" className="overflow-hidden fs1">

                {/* <!-- Slide 1--> */}
                <div className="ls-slide" data-ls="bgsize:cover; bgposition:50% 50%; duration:4000; transition2d:104; kenburnsscale:1.00;">
                    <img width="1920" height="1080" src="assets/images/slider/1.png" className="ls-bg" alt="" />
                    <div style={fs2} className="ls-l ls-hide-phone" data-ls="scalexin:0; durationout:400; scalexout:0; scaleyout:0; parallaxlevel:0;"></div>
                    <p style={fs3} className="ls-l ls-hide-phone text-primary" data-ls="offsetyin:100%; durationin:900; delayin:100; clipin:0 0 100% 0; durationout:400; parallaxlevel:0;">FIND YOUR DREAM HOUSE</p>
                    <p style={fs4} className="ls-l ls-hide-phone" data-ls="showinfo:1; durationin:800; delayin:100; clipin:0 0 100% 0; fadein:false; texttransitionin:true; texttypein:lines_asc; textshiftin:30; textoffsetyin:-20; textstartatin:transitioninstart + 0;">Aliquet dignissim orci dignissim vehicula phasellus Erat etiam posuere felis donec augue dapibus. Congue tempus pede urna augue vivamus consectetuer. Rutrum. Litora vulputate Nec vel ac penatibus hendrerit sociis purus, nec rhoncus
                        ac vel.</p>
                    <a className="ls-l ls-hide-phone" href="#2" target="_self" data-ls="offsetyin:40; delayin:450; clipin:0 0 100% 0; durationout:400; hover:true; hoverdurationin:300; hoveropacity:1; hoverbgcolor:#ffffff; hovercolor:#444444;">
                        <p style={fs5}
                            className="">SEARCH PROPERTY</p>
                    </a>
                </div>

                {/* <!-- Slide 2--> */}
                <div className="ls-slide" data-ls="bgsize:cover; bgposition:50% 50%; duration:4000; transition2d:104; kenburnsscale:1.2;">
                    <img width="1920" height="1080" src="assets/images/slider/2.png" className="ls-bg" alt="" />
                    <div style={fs2} className="ls-l ls-hide-phone" data-ls="scalexin:0; durationout:400; scalexout:0; scaleyout:0; parallaxlevel:0;"></div>
                    <p style={fs3} className="ls-l ls-hide-phone text-primary" data-ls="offsetyin:100%; durationin:900; delayin:100; clipin:0 0 100% 0; durationout:400; parallaxlevel:0;">WE CONSTRUCT YOUR HOUSE</p>
                    <p style={fs4} className="ls-l ls-hide-phone" data-ls="showinfo:1; durationin:800; delayin:100; clipin:0 0 100% 0; fadein:false; texttransitionin:true; texttypein:lines_asc; textshiftin:30; textoffsetyin:-20; textstartatin:transitioninstart + 0;">Aliquet dignissim orci dignissim vehicula phasellus Erat etiam posuere felis donec augue dapibus. Congue tempus pede urna augue vivamus consectetuer. Rutrum. Litora vulputate Nec vel ac penatibus hendrerit sociis purus, nec rhoncus
                        ac vel.</p>
                    <a className="ls-l ls-hide-phone" href="#2" target="_self" data-ls="offsetyin:40; delayin:450; clipin:0 0 100% 0; durationout:400; hover:true; hoverdurationin:300; hoveropacity:1; hoverbgcolor:transparent; hovercolor:#ffffff;">
                        <p style={fs52}
                            className="">CONTACT US</p>
                    </a>
                </div>

            </div>
        </div>
    )
};

export default Slider;