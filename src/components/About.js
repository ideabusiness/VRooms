import React from 'react';
import {Helmet} from "react-helmet";
import Navbar from './common/Navbar';
// import AboutCSS from './styles/About.css';
// require('./styles/About.css');

// class About extends React.Component {
	// constructor(props) {
	//   super(props);
  
	//  }
	// render() {
	//   return (
const About = (props) => {
	return (
      <div className="application">
        {/* Helmet =========================================================*/}
          <Helmet>
            <title>About VRooms</title>

            {/* customized script elements */}
            <script src="/js/drift.js" type="text/javascript"></script>
			
            {/* CSS links for this page */}
            <link rel="stylesheet" href="/css/pagestyle.css"></link>
            <link rel="stylesheet" href="/css/pages/About.css"></link>
			
          </Helmet>

              <div className="aboutWrapper">  

                <Navbar logo_filename="VRooms_V11_Hori_White" theme="opaque-black-bg"/>

                <div className="marketing">
                  <section className="section-features" id="application-home-benefits">
                    <div className="row expanded text--black">
                      <div className="small-centered small-12 columns">
                        <h1>Discover the Power of Virtual Reality Using VRooms</h1>
                      </div>
                      <div className="small-12 columns feature-container">
                        <div className="small-12 large-6 columns feature-content left">
                          <div className="feature-text">
                            <h3>Engage</h3>
                            <h5>
                                Say hello to the next generation of homebuying. 
                                Engage buyers by providing the most immersive and realistic way to view listings on web, mobile, and virtual reality.</h5>
                            <hr className="benefit-divider-1" />
                          </div>
                        </div>
                        <div className="small-12 large-6 columns image-right">
                          <img className="feature-img js-application-home-benefits-1-img" src="/assets/img/marketing/1.jpg" alt="Feature1" />
                        </div>
                      </div>
                      <div className="small-12 columns feature-container">
                        <div className="small-12 large-6 columns image-left">
                          <img className="feature-img js-application-home-benefits-2-img" src="/assets/img/marketing/2.jpg" alt="Feature2" />
                        </div>
                        <div className="small-12 large-6 columns feature-content">
                          <div className="feature-text">
                            <h3>Improve</h3>
                            <h5>Get innovative, reach out to overseas investors, increase your selling efficiency </h5>
                            <hr className="benefit-divider-2" />
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </section>

                  <section className="benefits-header cta-module">
                    <div className="row expanded">
                      <div className="small-12 medium-12 columns cta-content">
                        <h3>Be the Market Leader! Get VRooms!</h3>
                        <a className="button" href="/login" id="marketing-signup">Sign Up</a>
                      </div>
                    </div>
                  </section>

                  <section className="testimonials">
                  <div className="row expanded">
                    <div className="small-centered small-12 columns">
                      <h4>What Our Founding Team Is Excited About</h4>
                      <div className="row small-up-1 medium-up-4">
                      <div className="column column-block">
                          <img className="float-center customer-img" src="/assets/img/team/novia.png" alt="Novia Lim" />
                          <h6>“We are really excited to make virtual reality accessible from novices to tech savvy. VRooms breaks down the restrictions of a traditional home buying process and revolutionize the real estate industry. Join us now to increase your sales efficiency and maximise your customer engagement!”</h6>
                          <p><strong>Novia Lim-Sampson</strong></p>
                          <p>Founder & CEO</p>
                          
                        </div>
                        <div className="column column-block">
                          <img className="float-center customer-img" src="/assets/img/team/wayne.png" alt="Wayne Cheng" />
                          <h6>“According to Silicon Valley (on HBO), VR is like all the rage these days, so that’s why I’m doing this”</h6>
                          <p><strong>Wayne Cheng</strong></p>
                          <p>Founding Partner & C3PO</p>
                        </div>
                        <div className="column column-block">
                          <img className="float-center customer-img" src="/assets/img/team/joseph.png" alt="Joseph Huynh" />
                          <h6>“Lucas ipsum dolor sit amet chewbacca organa fisto yoda cade mandalore thrawn bothan organa dantooine. Maul calamari skywalker antilles windu ahsoka gonk. Organa organa watto moff calamari kashyyyk mon hutt grievous. Organa padmé twi'lek twi'lek moff darth qui-gon. Palpatine jawa endor mace mon moff.”</h6>
                          <p><strong>Joseph Huynh</strong></p>
                          <p>Founding Partner & CTO</p>
                        </div>
                        <div className="column column-block">
                          <img className="float-center customer-img" src="/assets/img/team/priyanka.png" alt="Priyanka Arora" />
                          <h6>“Lucas ipsum dolor sit amet chewbacca organa fisto yoda cade mandalore thrawn bothan organa dantooine. Maul calamari skywalker antilles windu ahsoka gonk. Organa padmé twi'lek twi'lek moff darth qui-gon. Palpatine jawa endor mace mon moff.”</h6>
                          <p><strong>Priyaka Arora</strong></p>
                          <p>Founding Partner & COO</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                </div>  

                

                





          </div>

          
      </div>
    // );
//   }
	)
}

export default About;


// <header className="header header--main js-header a-page" data-landing="yes" data-page="Home" data-page-name="Main">
//   <div className="description">
//     <h1 className="description__headline text--white emerge" data-duration="600" data-effect="slide" data-down="64px" data-hold="100">
//       Virtual Reality for Real Estate
//     </h1>
//     <span className="description__sub_headline text--white emerge" data-duration="600" data-effect="slide" data-down="64px" data-hold="100" data-continue="true">
//       Use VR to <strong>win</strong> more listings and <br />
//       <strong>stay ahead</strong> of your competition
//     </span>
      
//   </div>

// </header>



