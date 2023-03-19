import React from 'react'
import {NavLink} from "react-router-dom"
import Footer from '../../shared/Footer'
import Header from '../../shared/Header'
import Preloader from '../../shared/Preloader'

const Error404 = () => {
  return (
    <>

    {/* <!-- start page-wrapper --> */}
   <div className="page-wrapper">
<Preloader/>
{/* <!-- start elito-header-section --> */}
        <Header/>
        {/* <!-- end elito-header-section --> */}

        {/* <!-- start error-404-section --> */}
        <section className="relative bg-[#222121] pt-[120px] pb-[190px] md:pb-[80px] overflow-hidden z-20 text-center">
            <div className="wraper">
                <div className="">
                  <div className="mx-auto text-center">
                      <img className="max-w-full mx-auto" src="/assets/images/error-404.svg" alt="" />
                  </div>
                  <div className="mt-[70px] px-[200px] md:mt-[50px] md:px-[100px] sm:p-0">
                      <h3 className="text-white text-[30px] mb-[35px] font-base-font font-semibold">Oops! Page Not Found!</h3>
                      <p className="text-[#D8D8D8] text-[16px] mb-[30px] leading-[22px]">We’re sorry but we can’t seem to find the page you requested. This might be because
                          you have typed the web address incorrectly.</p>
                      <NavLink to="index-2.html" className="bg-[#222121] text-[#fff] inline-block py-[12px] px-[22px] border border-[#59C378] rounded-[55px] capitalize transition-all hover:bg-[#59C378] hover:border-transparent">Back to home</NavLink>
                  </div>
                </div> 
                {/* <!-- end row --> */}
            </div> 
            {/* <!-- end container --> */}
        </section>
        {/* <!-- end error-404-section --> */}

        {/* <!-- start wpo-site-footer --> */}
        <Footer/>
        {/* <!-- end wpo-site-footer --> */}
 
    
     
      

    </div>
    {/* <!-- end of page-wrapper --> */}


    </>
  )
}

export default Error404