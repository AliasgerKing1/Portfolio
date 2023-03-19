import React from 'react'
import Footer from '../../shared/Footer'
import Header from "../../shared/Header"
const Service = () => {
  return (
    <>
        {/* <!-- start page-wrapper --> */}
       <div className="page-wrapper">
            {/* <!-- start preloader --> */}
            {/* <div className="preloader">
                <div className="vertical-centered-box">
                    <div className="content">
                        <div className="loader-circle"></div>
                        <div className="loader-line-mask">
                            <div className="loader-line"></div>
                        </div>
                        <img src="/assets/images/preloader.png" alt="" />
                    </div>
                </div>
            </div> */}
            {/* <!-- start elito-header-section --> */}
            <Header/>
            {/* <!-- end elito-header-section --> */}
    
           {/* <!-- start of elito-service-area --> */}
             <section className="section-wrap bg-[#191919] overflow-hidden z-50">
                    <div className="absolute left-0 top-[-70%] sm:top-[-40%] -z-10">
                        <svg className="fill-[#FFE500]" width="995" height="1495" viewBox="0 0 995 1495" fill="none">
                            <g opacity="0.3" filter="url(#filter0_f_39_4268)">
                                <circle cx="247.5" cy="747.5" r="247.5" fill="#FFE500" />
                            </g>
                            <defs>
                                <filter id="filter0_f_39_4268" x="-500" y="0" width="1495" height="1495"
                                    filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4267" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                    <div className="wraper sm:max-w-[540px] col:max-w[100%]">
                        {/* <!-- start section title --> */}
                        <div className="max-w-[640px] mx-auto text-center text-white mb-[60px] md:mb-[40px]">
                            <h2 className="heading-font font-bold text-5xl md:text-[35px] sm:text-[22px] mb-[15px]">Popular Services
                            </h2>
                            <p className="base-font text-lg font-normal">Must explain to yotu how all this mistaken idea of
                                denouncing
                                pleasure born and give you
                                a complete account the system</p>
                        </div>
                        {/* <!-- end section title --> */}
        
                        {/* <!-- start elito-service-wrap --> */}
                        <ul className="nav nav-tabs  flex col:flex-col-reverse items-center justify-center list-none"
                            id="tabs-tabFill" role="tablist">
                            <li className="nav-item text-center" role="presentation">
                                <a href="#tabs-homeFill" className="nav-link inline-block focus:border-transparent border-tab
                                w-[250px] md:w-[180px] sm:w-[120px] col:w-[150px] h-[65px] md:h-[55px] sm:h-[45px] bg-[#373737] active:bg-transparent 
                                 text-center mr-7 md:mr-5 sm:mr-[10px] col:mr-0 rounded-[38px] font-bold text-[22px] md:text-[16px] sm:text-[14px] leading-[65px] 
                                 md:leading-[55px] sm:leading-[35px] p-0 border-2 border-transparent 
                                 text-white active:text-[#FFE600] active:border-[#373737]" id="tabs-home-tabFill"
                                    data-bs-toggle="pill" data-bs-target="#tabs-homeFill" role="tab"
                                    aria-controls="tabs-homeFill" aria-selected="true">Development</a>
        
                            </li>
                            <li className="nav-item text-center" role="presentation">
                                <a href="#tabs-profileFill" className="nav-link inline-block focus:border-transparent border-tab active
                                w-[250px] md:w-[180px] sm:w-[120px] col:w-[150px] h-[65px] md:h-[55px] sm:h-[45px] bg-[#373737] active:bg-transparent 
                                 text-center mr-7 md:mr-5 sm:mr-[10px] col:mr-0 rounded-[38px] font-bold text-[22px] md:text-[16px] sm:text-[14px] leading-[65px] 
                                 md:leading-[55px] sm:leading-[35px] p-0 border-2 border-transparent 
                                 text-white active:text-[#FFE600] active:border-[#373737] col:mb-[10px]"
                                    id="tabs-profile-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-profileFill"
                                    role="tab" aria-controls="tabs-profileFill" aria-selected="false">Design</a>
                            </li>
                            <li className="nav-item text-center" role="presentation">
                                <a href="#tabs-messagesFill" className="nav-link inline-block focus:border-transparent border-tab
                                w-[250px] md:w-[180px] sm:w-[120px] col:w-[150px] h-[65px] md:h-[55px] sm:h-[45px] bg-[#373737] active:bg-transparent 
                                 text-center mr-7 md:mr-5 sm:mr-[10px] col:mr-0 rounded-[38px] font-bold text-[22px] md:text-[16px] sm:text-[14px] leading-[65px] 
                                 md:leading-[55px] sm:leading-[35px] p-0 border-2 border-transparent 
                                 text-white active:text-[#FFE600] active:border-[#373737] col:mb-[10px]"
                                    id="tabs-messages-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-messagesFill"
                                    role="tab" aria-controls="tabs-messagesFill" aria-selected="false">Marketing</a>
                            </li>
                        </ul>
        
                        <div className="tab-content" id="tabs-tabContentFill">
                            {/* <!-- service-content --> */}
                            <div className="tab-pane" id="tabs-homeFill" role="tabpanel" aria-labelledby="tabs-home-tabFill">
                                <div className="mt-[65px]">
                                    <div className="w-[31%] lg:w-[30%] md:w-[46%] sm:w-full mx-[10px] sm:mx-0 inline-block bg-transparent shadow-[0_8px_17px_0_rgba(0,0,0,20%),0_6px_20px_0_rgba(0,0,0,29%)] rounded-[12px] 
                                        text-center px-[40px] lg:px-[20px] py-[50px] md:mb-[30px] group">
                                        <div
                                            className="max-w-[120px] max-h-[120px] bg-[#373737]
                                              group-hover:bg-[#59C378] mx-auto leading-[120px] mb-[30px] rounded-[50%] transition-all">
                                            <i
                                                className="fi flaticon-coding transition-all text-[50px] text-[#FFE600] group-hover:text-white"></i>
                                        </div>
                                        <h2
                                            className="font-bold font-base-font text-[26px] lg:text-[20px] leading-[31px] text-white mb-[20px] text-center">
                                            Web Development</h2>
                                        <p className="text-[16px] md:text-[14px] text-[#D8D8D8] my-6 md:my-4">Explain to you how all
                                            this mistaken idea of denouncing pleasure born and give you complete account the
                                            system.</p>
                                        <a href="service-single.html" className="text-center flex items-center justify-center
                                         font-bold  text-white leading-[19px] group hover:text-[#FFE600] transition-all"><i
                                                className="fi flaticon-right-arrow transition-all mr-7 sm:mr-3"></i> Learn More</a>
                                    </div>
                                    <div className="w-[31%] lg:w-[30%] md:w-[46%] sm:w-full mx-[10px] sm:mx-0 inline-block bg-transparent shadow-[0_8px_17px_0_rgba(0,0,0,20%),0_6px_20px_0_rgba(0,0,0,29%)]  rounded-[12px] 
                                        text-center px-[40px] lg:px-[20px] py-[50px] md:mb-[30px] group">
                                        <div
                                            className="max-w-[120px] max-h-[120px] bg-[#373737]
                                              group-hover:bg-[#59C378] mx-auto leading-[120px] mb-[30px] rounded-[50%] transition-all">
                                            <i
                                                className="fi flaticon-app-development transition-all text-[50px] text-[#FFE600] group-hover:text-white"></i>
                                        </div>
                                        <h2
                                            className="font-bold font-base-font text-[26px] lg:text-[20px] leading-[31px] text-white mb-[20px] text-center">
                                            App Development</h2>
                                        <p className="text-[16px] md:text-[14px] text-[#D8D8D8] my-6 md:my-4">Explain to you how all
                                            this mistaken idea of denouncing pleasure born and give you complete account the
                                            system.</p>
                                        <a href="service-single.html" className="text-center flex items-center justify-center
                                         font-bold  text-white leading-[19px] group hover:text-[#FFE600] transition-all"><i
                                                className="fi flaticon-right-arrow transition-all mr-7 sm:mr-3"></i> Learn More</a>
                                    </div>
                                    <div className="w-[31%] lg:w-[30%] md:w-[46%] sm:w-full mx-[10px] sm:mx-0 inline-block bg-transparent shadow-[0_8px_17px_0_rgba(0,0,0,20%),0_6px_20px_0_rgba(0,0,0,29%)]  rounded-[12px] 
                                        text-center px-[40px] lg:px-[20px] py-[50px] md:mb-[30px] group">
                                        <div
                                            className="max-w-[120px] max-h-[120px] bg-[#373737]
                                              group-hover:bg-[#59C378] mx-auto leading-[120px] mb-[30px] rounded-[50%] transition-all">
                                            <i
                                                className="fi flaticon-smartphone transition-all text-[50px] text-[#FFE600] group-hover:text-white"></i>
                                        </div>
                                        <h2
                                            className="font-bold font-base-font text-[26px] lg:text-[20px]  leading-[31px] text-white mb-[20px] text-center">
                                            Softwere Development</h2>
                                        <p className="text-[16px] md:text-[14px] text-[#D8D8D8] my-6 md:my-4">Explain to you how all
                                            this mistaken idea of denouncing pleasure born and give you complete account the
                                            system.</p>
                                        <a href="service-single.html" className="text-center flex items-center justify-center
                                         font-bold  text-white leading-[19px] group hover:text-[#FFE600] transition-all"><i
                                                className="fi flaticon-right-arrow transition-all mr-7 sm:mr-3"></i> Learn More</a>
                                    </div>
                                </div>
                            </div>
        
                            {/* <!-- service-content --> */}
                            <div className="tab-pane show active" id="tabs-profileFill" role="tabpanel"
                                aria-labelledby="tabs-profile-tabFill">
                                <div className="mt-[65px]">
                                    <div className="w-[31%] lg:w-[30%] md:w-[46%] sm:w-full mx-[10px] sm:mx-0 inline-block bg-transparent shadow-[0_8px_17px_0_rgba(0,0,0,20%),0_6px_20px_0_rgba(0,0,0,29%)]  rounded-[12px] 
                                        text-center px-[40px] lg:px-[20px] py-[50px] md:mb-[30px] group">
                                        <div
                                            className="max-w-[120px] max-h-[120px] bg-[#373737]
                                              group-hover:bg-[#59C378] mx-auto leading-[120px] mb-[30px] rounded-[50%] transition-all">
                                            <i
                                                className="fi flaticon-vector transition-all text-[50px] text-[#FFE600] group-hover:text-white"></i>
                                        </div>
                                        <h2
                                            className="font-bold font-base-font text-[26px] lg:text-[20px] leading-[31px] text-white mb-[20px] text-center">
                                            Graphic Design</h2>
                                        <p className="text-[16px] md:text-[14px] text-[#D8D8D8] my-6 md:my-4">Explain to you how all
                                            this mistaken idea of denouncing pleasure born and give you complete account the
                                            system.</p>
                                        <a href="service-single.html" className="text-center flex items-center justify-center
                                         font-bold  text-white leading-[19px] group hover:text-[#FFE600] transition-all"><i
                                                className="fi flaticon-right-arrow transition-all mr-7 sm:mr-3"></i> Learn More</a>
                                    </div>
                                    <div className="w-[31%] lg:w-[30%] md:w-[46%] sm:w-full mx-[10px] sm:mx-0 inline-block bg-transparent shadow-[0_8px_17px_0_rgba(0,0,0,20%),0_6px_20px_0_rgba(0,0,0,29%)]  rounded-[12px] 
                                        text-center px-[40px] lg:px-[20px] py-[50px] md:mb-[30px] group">
                                        <div
                                            className="max-w-[120px] max-h-[120px] bg-[#373737]
                                              group-hover:bg-[#59C378] mx-auto leading-[120px] mb-[30px] rounded-[50%] transition-all">
                                            <i
                                                className="fi flaticon-palette transition-all text-[50px] text-[#FFE600] group-hover:text-white"></i>
                                        </div>
                                        <h2
                                            className="font-bold font-base-font text-[26px] lg:text-[20px] leading-[31px] text-white mb-[20px] text-center">
                                            Brand Identity</h2>
                                        <p className="text-[16px] md:text-[14px] text-[#D8D8D8] my-6 md:my-4">Explain to you how all
                                            this mistaken idea of denouncing pleasure born and give you complete account the
                                            system.</p>
                                        <a href="service-single.html" className="text-center flex items-center justify-center
                                         font-bold  text-white leading-[19px] group hover:text-[#FFE600] transition-all"><i
                                                className="fi flaticon-right-arrow transition-all mr-7 sm:mr-3"></i> Learn More</a>
                                    </div>
                                    <div className="w-[31%] lg:w-[30%] md:w-[46%] sm:w-full mx-[10px] sm:mx-0 inline-block bg-transparent shadow-[0_8px_17px_0_rgba(0,0,0,20%),0_6px_20px_0_rgba(0,0,0,29%)]  rounded-[12px] 
                                        text-center px-[40px] lg:px-[20px] py-[50px] md:mb-[30px] group">
                                        <div
                                            className="max-w-[120px] max-h-[120px] bg-[#373737]
                                              group-hover:bg-[#59C378] mx-auto leading-[120px] mb-[30px] rounded-[50%] transition-all">
                                            <i
                                                className="fi flaticon-add transition-all text-[50px] text-[#FFE600] group-hover:text-white"></i>
                                        </div>
                                        <h2
                                            className="font-bold font-base-font text-[26px] lg:text-[20px]  leading-[31px] text-white mb-[20px] text-center">
                                            UI/UX Design</h2>
                                        <p className="text-[16px] md:text-[14px] text-[#D8D8D8] my-6 md:my-4">Explain to you how all
                                            this mistaken idea of denouncing pleasure born and give you complete account the
                                            system.</p>
                                        <a href="service-single.html" className="text-center flex items-center justify-center
                                         font-bold  text-white leading-[19px] group hover:text-[#FFE600] transition-all"><i
                                                className="fi flaticon-right-arrow transition-all mr-7 sm:mr-3"></i> Learn More</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- service-content --> */}
                            <div className="tab-pane" id="tabs-messagesFill" role="tabpanel" aria-labelledby="tabs-profile-tabFill">
                                <div className="mt-[65px]">
                                    <div className="w-[31%] lg:w-[30%] md:w-[46%] sm:w-full mx-[10px] sm:mx-0 inline-block bg-transparent shadow-[0_8px_17px_0_rgba(0,0,0,20%),0_6px_20px_0_rgba(0,0,0,29%)]  rounded-[12px] 
                                        text-center px-[40px] lg:px-[20px] py-[50px] md:mb-[30px] group">
                                        <div
                                            className="max-w-[120px] max-h-[120px] bg-[#373737]
                                              group-hover:bg-[#59C378] mx-auto leading-[120px] mb-[30px] rounded-[50%] transition-all">
                                            <i
                                                className="fi flaticon-social-media transition-all text-[50px] text-[#FFE600] group-hover:text-white"></i>
                                        </div>
                                        <h2
                                            className="font-bold font-base-font text-[26px] lg:text-[20px] leading-[31px] text-white mb-[20px] text-center">
                                            Social Media Marketing</h2>
                                        <p className="text-[16px] md:text-[14px] text-[#D8D8D8] my-6 md:my-4">Explain to you how all
                                            this mistaken idea of denouncing pleasure born and give you complete account the
                                            system.</p>
                                        <a href="service-single.html" className="text-center flex items-center justify-center
                                         font-bold  text-white leading-[19px] group hover:text-[#FFE600] transition-all"><i
                                                className="fi flaticon-right-arrow transition-all mr-7 sm:mr-3"></i> Learn More</a>
                                    </div>
                                    <div className="w-[31%] lg:w-[30%] md:w-[46%] sm:w-full mx-[10px] sm:mx-0 inline-block bg-transparent shadow-[0_8px_17px_0_rgba(0,0,0,20%),0_6px_20px_0_rgba(0,0,0,29%)]  rounded-[12px] 
                                        text-center px-[40px] lg:px-[20px] py-[50px] md:mb-[30px] group">
                                        <div
                                            className="max-w-[120px] max-h-[120px] bg-[#373737]
                                              group-hover:bg-[#59C378] mx-auto leading-[120px] mb-[30px] rounded-[50%] transition-all">
                                            <i
                                                className="fi flaticon-promotion transition-all text-[50px] text-[#FFE600] group-hover:text-white"></i>
                                        </div>
                                        <h2
                                            className="font-bold font-base-font text-[26px] lg:text-[20px] leading-[31px] text-white mb-[20px] text-center">
                                            Digital Marketing</h2>
                                        <p className="text-[16px] md:text-[14px] text-[#D8D8D8] my-6 md:my-4">Explain to you how all
                                            this mistaken idea of denouncing pleasure born and give you complete account the
                                            system.</p>
                                        <a href="service-single.html" className="text-center flex items-center justify-center
                                         font-bold  text-white leading-[19px] group hover:text-[#FFE600] transition-all"><i
                                                className="fi flaticon-right-arrow transition-all mr-7 sm:mr-3"></i> Learn More</a>
                                    </div>
                                    <div className="w-[31%] lg:w-[30%] md:w-[46%] sm:w-full mx-[10px] sm:mx-0 inline-block bg-transparent shadow-[0_8px_17px_0_rgba(0,0,0,20%),0_6px_20px_0_rgba(0,0,0,29%)]  rounded-[12px] 
                                        text-center px-[40px] lg:px-[20px] py-[50px] md:mb-[30px] group">
                                        <div
                                            className="max-w-[120px] max-h-[120px] bg-[#373737]
                                              group-hover:bg-[#59C378] mx-auto leading-[120px] mb-[30px] rounded-[50%] transition-all">
                                            <i
                                                className="fi flaticon-email-marketing transition-all text-[50px] text-[#FFE600] group-hover:text-white"></i>
                                        </div>
                                        <h2
                                            className="font-bold font-base-font text-[26px] lg:text-[20px]  leading-[31px] text-white mb-[20px] text-center">
                                            Email Marketing</h2>
                                        <p className="text-[16px] md:text-[14px] text-[#D8D8D8] my-6 md:my-4">Explain to you how all
                                            this mistaken idea of denouncing pleasure born and give you complete account the
                                            system.</p>
                                        <a href="service-single.html" className="text-center flex items-center justify-center
                                         font-bold  text-white leading-[19px] group hover:text-[#FFE600] transition-all"><i
                                                className="fi flaticon-right-arrow transition-all mr-7 sm:mr-3"></i> Learn More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end elito-service-wrap --> */}
        
                    </div>
        
        
             </section>
             {/* <!-- end of elito-service-area --> */}
    
             {/* <!-- start elito-partners-area --> */}
             <section className="bg-[#131313] py-[85px]">
                <h2 className="hidden">partner</h2>
                <div className="wraper">
                    <div className="partners-slider owl-carousel">
                        <div className="item">
                            <img className="mx-auto grayscale" src="/assets/images/partners/1.png" alt="" />
                        </div>
                        <div className="item">
                            <img className="mx-auto grayscale" src="/assets/images/partners/2.png" alt="" />
                        </div>
                        <div className="item">
                            <img className="mx-auto grayscale" src="/assets/images/partners/3.png" alt="" />
                        </div>
                        <div className="item">
                            <img className="mx-auto grayscale" src="/assets/images/partners/4.png" alt="" />
                        </div>
                    </div>
                </div>
             </section>
             {/* <!-- end elito-partners-area --> */}
        
           {/* <!-- start wpo-site-footer --> */}
             <Footer/>
             {/* <!-- end wpo-site-footer --> */}
          
    
        </div>
        {/* <!-- end of page-wrapper --> */}


    </>
  )
}

export default Service