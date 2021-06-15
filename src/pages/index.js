import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import scrollTo from 'gatsby-plugin-smoothscroll';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>EasyLink</h1>
        <p>Easylink is your best partner<br/> to make your services and products visible</p>
        <div className="ButtonGroup">
          <div onClick={() => scrollTo('#LearnMore')} className="HeroButton1">Learn More</div>
          <Link to='/Login'><div className="HeroButton2">Get Started</div></Link>
        </div>
      </div>
      <StaticImage
        className="HeroImage"
        src="../images/Phone-Mockup.png"
        width={250}
        quality={100}
        loading="eager"
        alt="Mockup"
        style={{ marginBottom: `1.45rem` }}
      />
    </div>
    <div className="Cards">
        <div data-sal="slide-right" data-sal-delay="300" data-sal-easing="ease" data-sal-duration='1000' className='Card'>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M14.121 10.48a1 1 0 0 0-1.414 0l-.707.706a2 2 0 1 1-2.828-2.828l5.63-5.632a6.5 6.5 0 0 1 6.377 10.568l-2.108 2.135-4.95-4.95zM3.161 4.468a6.503 6.503 0 0 1 8.009-.938L7.757 6.944a4 4 0 0 0 5.513 5.794l.144-.137 4.243 4.242-4.243 4.243a2 2 0 0 1-2.828 0L3.16 13.66a6.5 6.5 0 0 1 0-9.192z"></path></g></svg>
          <h3>Services</h3>
          <p>Business services can be shown to customers for reservation</p>
        </div>
        <div data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease" data-sal-duration='1000' className='Card'>
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
          <h3>Products</h3>
          <p>Business products and the purchase link can also be shown to the customers</p>
        </div>
        <div data-sal="slide-left" data-sal-delay="300" data-sal-easing="ease" data-sal-duration='1000' className='Card'>
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          <h3>Reservation</h3>
          <p>Customers can easily reserve their service on their favorite time and date that is available</p>
        </div>
    </div>
    <section className='whysection'>
      <div className='why'>
        <div data-sal="slide-right" data-sal-duration='1000' className='whygroup'>
          <h3 id="LearnMore">Why EasyLink</h3>
          <p>You create Your brand, Your logo,<br/> 
          Your products and services in Your own APP <br/>
          that you can be proud to share with your customers.</p>
          <div className='features'>
            <div className='feature'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
            <h4>Greater loyalty</h4>
            </div>
            <div className='feature'><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
            <h4>More precise marketing - trigger</h4>
            </div>
            <div className='feature'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M104 496H72a24 24 0 01-24-24V328a24 24 0 0124-24h32a24 24 0 0124 24v144a24 24 0 01-24 24zm224 0h-32a24 24 0 01-24-24V232a24 24 0 0124-24h32a24 24 0 0124 24v240a24 24 0 01-24 24zm112 0h-32a24 24 0 01-24-24V120a24 24 0 0124-24h32a24 24 0 0124 24v352a24 24 0 01-24 24zm-224 0h-32a24 24 0 01-24-24V40a24 24 0 0124-24h32a24 24 0 0124 24v432a24 24 0 01-24 24z"></path></svg>
            <h4>Increased customer influx</h4>
            </div>
            <div className='feature'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 100-6 3 3 0 000 6zm-5.784 6A2.238 2.238 0 015 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 005 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clip-rule="evenodd"></path></svg>
            <h4>Adapted to each customer's areas of interest</h4>
            </div>
            <div className='feature'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm22.3 665.2l.2 31.7c0 4.4-3.6 8.1-8 8.1h-28.4c-4.4 0-8-3.6-8-8v-31.4C401.3 723 359.5 672.4 355 617.4c-.4-4.7 3.3-8.7 8-8.7h46.2c3.9 0 7.3 2.8 7.9 6.6 5.1 31.7 29.8 55.4 74.1 61.3V533.9l-24.7-6.3c-52.3-12.5-102.1-45.1-102.1-112.7 0-72.9 55.4-112.1 126.2-119v-33c0-4.4 3.6-8 8-8h28.1c4.4 0 8 3.6 8 8v32.7c68.5 6.9 119.9 46.9 125.9 109.2.5 4.7-3.2 8.8-8 8.8h-44.9c-4 0-7.4-3-7.9-6.9-4-29.2-27.4-53-65.5-58.2v134.3l25.4 5.9c64.8 16 108.9 47 108.9 116.4 0 75.3-56 117.3-134.3 124.1zM426.6 410.3c0 25.4 15.7 45.1 49.5 57.3 4.7 1.9 9.4 3.4 15 5v-124c-36.9 4.7-64.5 25.4-64.5 61.7zm116.5 135.2c-2.8-.6-5.6-1.3-8.8-2.2V677c42.6-3.8 72-27.2 72-66.4 0-30.7-15.9-50.7-63.2-65.1z"></path></svg>
            <h4>Increased turnover</h4>
            </div>
          </div>
        </div>
        <div data-sal="slide-left" data-sal-duration='1000' className='whyimagewrapper'>
          <StaticImage
            className="whyimage"
            src="../images/Phone-Mockup.png"
            width={250}
            quality={100}
            loading="eager"
            alt="Mockup"
            style={{ marginBottom: `1.45rem` }}
          />
        </div>
      </div>
      
    </section>
  </Layout>
)

export default IndexPage
