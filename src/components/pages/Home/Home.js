import React from 'react'
import Footer from '../../shared/Footer'
import Header from '../../shared/Header'

const Home = () => {
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
<Header/>
        {/* <!-- start elito-hero-section --> */}
        <section className=" bg-[#131313] h-[940px] xl:h-[900px] lg:h-[650px] md:h-[950px] sm:h-[850px] col:h-[800px]  relative z-40 overflow-hidden">
                <div className="w-full h-full bg-cover bg-center  text-left z-50">
                    <div className="wraper">
                            <div className="flex-1">
                                <div className="w-[660px] lg:w-[470px] mt-[210px] xl:mt-[150px]  md:mt-[100px] md:w-full  md:text-center">
                                        <h2 className="text-white text-[90px] capitalize font-bold leading-[100px] mb-[10px]  lg:text-[65px] lg:mb-[10px] lg:leading-[75px] md:text-[45px] md:leading-[45px]  col:text-[35px] col:leading-[35px] col:mb-[0px]">
                                        <span className="block text-[60px] text-[#FFE600] lg:text-[45px] md:text-[35px] col:text-[35px] col:leading-[35px] col:mb-[0px]">Hello,</span>
                                            I am Aliasger.</h2>
                                        <h5 className="text-[#59C378] text-[32px] capitalize font-semibold leading-[39px] mb-[20px] lg:text-[28px] md:text-[22px] md:mb-[10px] col:text-[20px]  col:mb-[5px]">FULL STACK DEVELOPER</h5>
                                        <p className="text-white text-[19px] capitalize font-normal leading-[33px] mb-[30px] col:text-[15px] col:leading-[28px] md:mx-[80px] col:mx-0">Must explain to how all this mistaken idea denouncing pleasure pain
                                            the system and expound the actua.</p>
                                    <div className="slide-btn"><a className="theme-btn" href="about.html">Hire Me</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-[53%] rounded-[50%] right-[200px] z-10 transform -translate-y-1/2 2xl:max-w-[500px] lg:max-w-[450px]  lg:top-[54%] 2xl:right-[80px] xl:right-[30px] lg:right-[50px] md:top-[68%] md:mx-auto md:right-auto md:left-1/2 md:-translate-x-1/2 sm:top-[75%] sm:w-[400px] sm:h-[400px] sm:left-1/2 sm:m-0 col:top-[68%] col:w-[300px] col:h-[300px]">
                        <img className="rounded-[50%]" src="/assets/images/slider/1.jpg" alt="" />
                             <div className="absolute left-0 top-[20%] w-[110px] h-[110px] p-[20px] bg-white rounded-[25px] md:top-[15%] md:w-[95px] md:h-[95px] md:p-[15px] md:rounded-[15px] col:top-[10%] col:w-[70px] col:h-[70px] col:p-[15px] col:rounded-[15px] floating-item">
                                <img className="rounded-[0px] max-w-[100%]" src="/assets/images/icon/photoshop.svg" alt="" />
                            </div>
                             <div className="absolute left-auto right-0 top-[20%] w-[110px] h-[110px] p-[20px] bg-white rounded-[25px] md:w-[95px] md:h-[95px] md:p-[15px] md:rounded-[15px] col:top-[10%] col:w-[70px] col:h-[70px] col:p-[15px] col:rounded-[15px] floating-item">
                                <img src="/assets/images/icon/react.svg" alt="" />
                            </div>
                            <div className="absolute top-auto right-[10%] bottom-0 w-[110px] h-[110px] p-[20px] bg-white rounded-[25px] md:right-0 md:bottom-[40px] col:left-auto col:right-0 col:top-auto col:bottom-[25px]  md:w-[95px] md:h-[95px] md:p-[15px] md:rounded-[15px]  col:w-[70px] col:h-[70px] col:p-[15px] col:rounded-[15px] floating-item">
                                <img src="/assets/images/icon/python.svg" alt="" />
                            </div>
                            <div className="absolute left-0 bottom-[5%] bg-white  rounded-[40px] py-[0] px-[20px]  flex items-center floating-item">
                                <div className="icon">
                                    <i className="fi flaticon-verified mr-[10px] text-[50px] text-[#59C378] col:text-[40px]"></i>
                                </div>
                                <div className="p-text">
                                    <h3 className="text-[25px] mb-0 text-[#202020] col:text-[20px]"><span className="odometer" data-count="1500">4</span>+</h3>
                                    <p className="text-[15px] mb-0 text-[#585858]">Complete Project</p>
                                </div>
                            </div>
                    </div>

            <div className="absolute top-0 left-0 -z-10">
                <svg className=" fill-[#FF4155]" width="1038" height="938" viewBox="0 0 1038 938" fill="none">
                    <g opacity="0.5" filter="url(#filter0_f_39_4392)">
                        <circle cx="290.5" cy="282.5" r="247.5" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4392" x="-457" y="-465" width="1495" height="1495"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4392" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="absolute top-[50%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 -z-10">
                <svg className="fill-[#FFE600]" width="1295" height="938" viewBox="0 0 1295 938" fill="none">
                    <g opacity="0.4" filter="url(#filter0_f_39_4393)">
                        <circle cx="647.5" cy="561.5" r="247.5" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4393" x="0" y="-86" width="1295" height="1295"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_39_4393" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="absolute top-0 right-0 -z-10">
                <svg className="fill-[#48C5EA]" width="752" height="747" viewBox="0 0 752 747" fill="none">
                    <g opacity="0.45" filter="url(#filter0_f_39_4394)">
                        <circle cx="647.5" cy="99.5" r="247.5" />
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4394" x="0" y="-548" width="1295" height="1295"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_39_4394" />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="absolute left-0 bottom-0 -z-10">
                <img src="/assets/images/slider/line-1.png" alt="" />
            </div>
            <div className="absolute right-0 top-0 -z-10">
                <img src="/assets/images/slider/line-2.png" alt="" />
            </div>
        </section>
        {/* <!-- end elito-hero-section --> */}
        
        {/* <!-- start elito-about-section --> */}
        <section className="section-wrap bg-[#191919] md:pb-[60px] overflow-hidden z-50" id='about'>
            <div className="wraper">
                <div className="grid-rows-1 grid grid-cols-2 md:grid-cols-1 items-center">
                    <div className="relative z-20 md:max-w-[480px]">
                        <div className="max-w-[350px] col:max-w-[350px]  text-center rounded-[10px] pb-[180px] bg-gradient-to-b to-[#1B1B19] from-[#2E2C1F] xl:ml-[20px] col:ml-0">
                            <h2 className="text-[140px] col:text-[90px] text-[#FFE600] font-bold base-font">04</h2>
                            <span className="text-white text-[18px] font-normal ">Months of Experience</span>
                        </div>
                        <div className="absolute right-[170px] lg:right-[80px] col:right-0  bottom-10 max-w-[300px] col:max-w-[350px] px-[20px] py-[20px] rounded-[12px] z-10 bg-transparent flex items-center justify-center 
                        before:absolute before:content before:left-0 before:top-0 before:w-full before:h-full before:opacity-[1] before:-z-20 before:rounded-[12px] before:bg-gradient-to-l to-[#939393] from-[#1c1a1a4d] 
                        after:absolute after:left-[2px] after:top-[2px] after:w-[98%] after:h-[98%] after:content after:bg-[#2D2B1F] after:opacity-[.85] after:-z-10 after:rounded-[12px]">
                        <h3 className="mr-[15px] w-[50%] text-[45px]  text-[#59C378] font-bold base-font flex items-center">
                                <span className="odometer" data-count="100">100</span>%</h3>
                            <p className="text-[15px] w-[50%] text-white font-normal base-font">Clients Satisfections</p>
                        </div>
                    </div>
                    <div className="about-right z-20 md:mt-7">
                        <div className="max-w-[640px] mx-auto text-left text-white mb-[60px] md:mb-[40px]">
                            <h2 className="heading-font font-bold text-5xl md:text-[35px] sm:text-[22px] mb-[15px]">My
                                Advantages</h2>
                            <p className="base-font text-lg font-normal">Must explain to you how all this mistaken idea of
                                denouncing pleasure and praising pain was born and I will give you a complete account
                                the system and expound the actual and praising pain was born.</p>
                        </div>
                        <ul className="flex flex-wrap  mx-[-15px]">
                            <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#acac39] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                                    <h3 className="font-bold text-[35px] text-white flex items-center justify-center"><span
                                            className="odometer" data-count="98">95</span>%</h3>
                                    <p className="font-normal text-[16px] text-[#FFE600]">React</p>
                                </div>
                            </li>
                            <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#59c37899] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                                    <h3 className="font-bold text-[35px] text-white flex items-center justify-center"><span
                                        className="odometer" data-count="92">90</span>%</h3>
                                <p className="font-normal text-[16px] text-[#59C378]">NodeJS</p>
                                </div>
                            </li>
                            <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#dd584f99] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                                    <h3 className="font-bold text-[35px] text-white flex items-center justify-center"><span
                                        className="odometer" data-count="88">83</span>%</h3>
                                <p className="font-normal text-[16px] text-[#DD584F]">AngularJS</p>
                                </div>
                            </li>
                            <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#ff9a0099] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                                    <h3 className="font-bold text-[35px] text-white flex items-center justify-center"><span
                                        className="odometer" data-count="72">95</span>%</h3>
                                <p className="font-normal text-[16px] text-[#FF9A00]">MongoDB</p>
                                </div>
                            </li>
                            <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#00a9ff99] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                                    <h3 className="font-bold text-[35px] text-white flex items-center justify-center"><span
                                        className="odometer" data-count="43">60</span>%</h3>
                                <p className="font-normal text-[16px] text-[#00A9FF]">Github</p>
                                </div>
                            </li>
                            <li className="mx-[15px] rounded-[12px] mb-7 bg-gradient-to-t to-[#9e00ff99] from-[#1f1e1c99] basis-[28.33%] lg:basis-[26%] col:basis-[40%]">
                                <div className="rounded-[12px] bg-[#1F1E1D] mt-[3px] mr-[3px] ml-[3px] p-10 lg:p-[20px] text-center ">
                                    <h3 className="font-bold text-[35px] text-white flex items-center justify-center"><span
                                        className="odometer" data-count="40">40</span>%</h3>
                                <p className="font-normal text-[16px] text-[#AD00FF]">PYthon</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="absolute top-[50px] left-0  z-0">
                <img src="/assets/images/about/shape1.png" alt="" className="" />
            </div>
            <div className="absolute right-0 bottom-0  z-0">
                <img src="/assets/images/about/shape2.png" alt="" className="" />
            </div>
            <div className="absolute bottom-[-95%] left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 z-0">
                <svg className="fill-[#FFE500]" width="995" height="1495" viewBox="0 0 995 1495" fill="none">
                    <g opacity="0.3" filter="url(#filter0_f_39_4267)">
                        <circle cx="247.5" cy="747.5" r="247.5" fill="#FFE500"></circle>
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4267" x="-500" y="0" width="1495" height="1495"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4267"></feGaussianBlur>
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="absolute bottom-[-95%] right-[-10%]  z-10">
                <svg className="fill-[#AD00FF]" width="1252" height="1901" viewBox="0 0 1252 1901" fill="none">
                    <g opacity="0.15" filter="url(#filter0_f_39_4265)">
                        <circle cx="950" cy="950.004" r="450"></circle>
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4265" x="-0.00012207" y="0.00402832" width="1900" height="1900"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4265"></feGaussianBlur>
                        </filter>
                    </defs>
                </svg>
            </div>
        </section>
        {/* <!-- end elito-about-section --> */}

        {/* <!-- start of elito-service-area --> */}
        <section className="section-wrap bg-[#191919] overflow-hidden z-50" id='services'>
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
                            <div className="w-[31%] lg:w-[30%] md:w-[46%] sm:w-full mx-[10px] sm:mx-0 inline-block bg-[#232221] border-2 border-[#373737] rounded-[12px] 
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
                            <div className="w-[31%] lg:w-[30%] md:w-[46%] sm:w-full mx-[10px] sm:mx-0 inline-block bg-[#232221] border-2 border-[#373737] rounded-[12px] 
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
                            <div className="w-[31%] lg:w-[30%] md:w-[46%] sm:w-full mx-[10px] sm:mx-0 inline-block bg-[#232221] border-2 border-[#373737] rounded-[12px] 
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
                            <div className="w-[31%] lg:w-[30%] md:w-[46%] sm:w-full mx-[10px] sm:mx-0 inline-block bg-[#232221] border-2 border-[#373737] rounded-[12px] 
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
                            <div className="w-[31%] lg:w-[30%] md:w-[46%] sm:w-full mx-[10px] sm:mx-0 inline-block bg-[#232221] border-2 border-[#373737] rounded-[12px] 
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
                            <div className="w-[31%] lg:w-[30%] md:w-[46%] sm:w-full mx-[10px] sm:mx-0 inline-block bg-[#232221] border-2 border-[#373737] rounded-[12px] 
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
                            <div className="w-[31%] lg:w-[30%] md:w-[46%] sm:w-full mx-[10px] sm:mx-0 inline-block bg-[#232221] border-2 border-[#373737] rounded-[12px] 
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
                            <div className="w-[31%] lg:w-[30%] md:w-[46%] sm:w-full mx-[10px] sm:mx-0 inline-block bg-[#232221] border-2 border-[#373737] rounded-[12px] 
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
                            <div className="w-[31%] lg:w-[30%] md:w-[46%] sm:w-full mx-[10px] sm:mx-0 inline-block bg-[#232221] border-2 border-[#373737] rounded-[12px] 
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

        {/* <!-- start elito-work-section --> */}
        <section className="section-wrap bg-[#191919] overflow-hidden z-50" id='expirience'>
            <div className="wraper">
                {/* <!-- start section title --> */}
                <div className="max-w-[640px] mx-auto text-center text-white mb-[60px] md:mb-[40px]">
                    <h2 className="heading-font font-bold text-5xl md:text-[35px] sm:text-[22px] mb-[15px]">My Work
                        Experience</h2>
                    <p className="base-font text-lg font-normal">Must explain to yotu how all this mistaken idea of
                        denouncing
                        pleasure born and give you
                        a complete account the system</p>
                </div>
                {/* <!-- end section title --> */}
                {/* <!-- start work-single-item --> */}
                <div className="grid grid-rows-1">
                    <ul className="flex items-center justify-between sm:flex-wrap col:block mb-8
                     bg-[#282828] px-[70px] md:px-[30px] py-[20px] rounded-lg border transition border-transparent hover:border hover:border-[#494949] ">
                        <li
                            className="base-font text-white font-bold text-3xl sm:w-1/2 sm:text-[16px] col:w-full col:text-center col:mb-[10px]">
                            2015 - 2016</li>
                        <li><img src="/assets/images/work/1.png" alt="" className="sm:w-1/2 col:w-full col:text-center max-w-[100px] col:mx-auto" /></li>
                        <li className="sm:w-1/2 col:w-full col:text-center col:mt-[20px]">
                            <h2 className="base-font text-white font-bold text-2xl sm:text-[16px] ">Junior Visual Designer
                            </h2>
                            <p className="base-font text-[#DD584F] font-normal text-[15px] sm:text-[14px]">Trapeza Group,
                                USA.</p>
                        </li>
                        <li className="col:text-center col:mt-[10px]"><a href="#"
                                className="text-white text-[16px] font-bold transition hover:text-[#FFE600] sm:w-1/2 sm:text-[14px] col:w-full col:text-center">
                                <i className="ti-arrow-right transition mr-7 text-[16px] col:mr-[5px]"></i>Go to website</a>
                        </li>
                    </ul>
                    <ul className="flex items-center justify-between sm:flex-wrap col:block mb-8
                     bg-[#282828] px-[70px] md:px-[30px] py-[20px] rounded-lg border
                      transition border-transparent hover:border hover:border-[#494949] ">
                        <li
                            className="base-font text-white font-bold text-3xl sm:w-1/2 sm:text-[16px] col:w-full col:text-center col:mb-[10px]">
                            2017 - 2018</li>
                        <li><img src="/assets/images/work/2.png" alt=""
                                className="sm:w-1/2 col:w-full col:text-center max-w-[100px] col:mx-auto" /></li>
                        <li className="sm:w-1/2 col:w-full col:text-center col:mt-[20px]">
                            <h2 className="base-font text-white font-bold text-2xl sm:text-[16px] ">UI/UX Designer</h2>
                            <p className="base-font text-[#DD584F] font-normal text-[15px] sm:text-[14px]">Gallerie
                                Ontario, Canada <span className="text-[#727272] inline-block">(Remote)</span></p>
                        </li>
                        <li className="col:text-center col:mt-[10px]"><a href="#"
                                className="text-white text-[16px] font-bold transition hover:text-[#FFE600] sm:w-1/2 sm:text-[14px] col:w-full col:text-center">
                                <i className="ti-arrow-right transition mr-7 text-[16px] col:mr-[5px]"></i>Go to website</a>
                        </li>
                    </ul>
                    <ul className="flex items-center justify-between sm:flex-wrap col:block mb-8
                     bg-[#282828] px-[70px] md:px-[30px] py-[20px] rounded-lg border
                      transition border-transparent hover:border hover:border-[#494949] ">
                        <li
                            className="base-font text-white font-bold text-3xl sm:w-1/2 sm:text-[16px] col:w-full col:text-center col:mb-[10px]">
                            2019 - 2020</li>
                        <li><img src="/assets/images/work/3.png" alt=""
                                className="sm:w-1/2 col:w-full col:text-center max-w-[100px] col:mx-auto" / ></li>
                        <li className="sm:w-1/2 col:w-full col:text-center col:mt-[20px]">
                            <h2 className="base-font text-white font-bold text-2xl sm:text-[16px] ">Seinor UI/UX Desinger
                            </h2>
                            <p className="base-font text-[#DD584F] font-normal text-[15px] sm:text-[14px]">Morson Hybrid,
                                Canada</p>
                        </li>
                        <li className="col:text-center col:mt-[10px]"><a href="#"
                                className="text-white text-[16px] font-bold transition hover:text-[#FFE600] sm:w-1/2 sm:text-[14px] col:w-full col:text-center">
                                <i className="ti-arrow-right transition mr-7 text-[16px] col:mr-[5px]"></i>Go to website</a>
                        </li>
                    </ul>
                    <ul className="flex items-center justify-between sm:flex-wrap col:block 
                     bg-[#282828] px-[70px] md:px-[30px] py-[20px] rounded-lg border
                      transition border-transparent hover:border hover:border-[#494949] ">
                        <li
                            className="base-font text-white font-bold text-3xl sm:w-1/2 sm:text-[16px] col:w-full col:text-center col:mb-[10px]">
                            2021 - 2022</li>
                        <li><img src="/assets/images/work/4.png" alt=""
                                className="sm:w-1/2 col:w-full col:text-center max-w-[100px] col:mx-auto" /></li>
                        <li className="sm:w-1/2 col:w-full col:text-center col:mt-[20px]">
                            <h2 className="base-font text-white font-bold text-2xl sm:text-[16px] ">Product Designer</h2>
                            <p className="base-font text-[#DD584F] font-normal text-[15px] sm:text-[14px]">Myant Inc.
                                Etobicoke, ON <span className="text-[#727272] inline-block">(Remote)</span> </p>
                        </li>
                        <li className="col:text-center col:mt-[10px]"><a href="#"
                                className="text-white text-[16px] font-bold transition hover:text-[#FFE600] sm:w-1/2 sm:text-[14px] col:w-full col:text-center">
                                <i className="ti-arrow-right transition mr-7 text-[16px] col:mr-[5px]"></i>Go to website</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <!-- end work-single-item --> */}
            {/* <!-- bg-shape --> */}
            <div className="absolute top-1/2 col:top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
                <svg className="fill-[#E34E44] " width="1500" height="1500" fill="none">
                    <g filter="url(#a)" opacity=".45">
                        <circle cx="750" cy="750" r="200" />
                    </g>
                    <defs>
                        <filter id="a" width="1500" height="1500" x="0" y="0" colorInterpolationFilters="sRGB"
                            filterUnits="userSpaceOnUse">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_39_4212" stdDeviation="275" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </section>
        {/* <!-- end elito-work-section --> */}

        {/* <!-- start elito-project-section --> */}
        <section className="relative bg-[#191919] pt-[120px] pb-[190px] md:pb-[80px] overflow-hidden z-20" id='work'>
            <div className="wraper">
                <div className="flex md:block grid-cols-2 items-center mb-[60px] md:mb-[40px]">
                    {/* <!-- start section title --> */}
                    <div className="max-w-[540px] md:text-center text-left md:m-auto md:mb-[40px] text-white">
                        <h2 className="heading-font font-bold text-5xl md:text-[35px] sm:text-[22px] mb-[15px]">Recent Work.
                        </h2>
                        <p className="base-font text-lg font-normal pr-[80px] md:pr-0">Must explain to you how all this
                            mistaken idea pleasure
                            born and give you a complete account.</p>
                    </div>
                    {/* <!-- end section title --> */}
                    <div className="w-[130px] h-[130px] ml-auto rounded-full text-center text-[55px] leading-[130px] bg-[#303030] 
                    relative before:absolute before:left-[-10px] before:top-[-10px] before:w-[150px]
                     before:decoration-dashed before:z-10 before:h-[150px] before:border
                      before:border-[#383838] before:content before:rounded-full md:m-auto ">
                        <i className="fi flaticon-self-growth text-[55px] text-[#FFE600]"></i>
                    </div>
                </div>
                <div className="wpo-project-slide owl-carousel pb-[90px] md:pb[60px] owl-loaded owl-drag">

                <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(-2700px, 0px, 0px)', transition: 'all 0.3s ease 0s', width: '5400px'}}><div className="owl-item cloned" style={{width: '420px', marginRright: '30px'}}><div className="project-item group">
                        <div className="overflow-hidden">
                            <img className="w-full transition ease-in-out scale-100 group-hover:scale-110" src="/assets/images/project/img-1.jpg" alt="" />
                        </div>
                        <div className="pt-[30px]">
                            <h2 className="leading-[35px] font-base-font font-semibold text-[25px] xl:text-[22px] md:text-[20px]">
                                <a className="text-white transition ease-in-out hover:text-[#3faf60]" href="portfolio-single.html">Arkio - Architecture &amp; Interior WordPress Theme</a>
                            </h2>
                            <span className="font-normal text-[14px] leading-[18px] text-[#D8D8D8]">Architecture /
                                Business</span>
                        </div>
                    </div></div><div className="owl-item cloned" style={{width: '420px', marginRright: '30px'}}><div className="project-item group">
                        <div className="overflow-hidden">
                            <img className="w-full transition ease-in-out scale-100 group-hover:scale-110" src="/assets/images/project/img-2.jpg" alt="" />
                        </div>
                        <div className="pt-[30px]">
                            <h2 className="leading-[35px] font-base-font font-semibold text-[25px]
                             xl:text-[22px] md:text-[20px]">
                                <a className="text-white transition ease-in-out hover:text-[#3faf60]" href="portfolio-single.html">Follio - Multipurpose Portfolio HTML5 Template</a></h2>
                            <span className="font-normal text-[14px] leading-[18px] text-[#D8D8D8]">Web Design</span>
                        </div>
                    </div></div><div className="owl-item cloned" style={{width: '420px', marginRright: '30px'}}><div className="project-item group">
                        <div className="overflow-hidden">
                            <img className="w-full transition ease-in-out scale-100 group-hover:scale-110" src="/assets/images/project/img-3.jpg" alt="" />
                        </div>
                        <div className="pt-[30px]">
                            <h2 className="leading-[35px] font-base-font font-semibold text-[25px]
                             xl:text-[22px] md:text-[20px]">
                                <a className="text-white transition ease-in-out hover:text-[#3faf60]" href="portfolio-single.html">Elito - Tailwind CSS Creative Portfolio HTML5 Template</a></h2>
                            <span className="font-normal text-[14px] leading-[18px] text-[#D8D8D8]">Website /
                                Creative</span>
                        </div>
                    </div></div><div className="owl-item" style={{width: '420px', marginRright: '30px'}}><div className="project-item group">
                        <div className="overflow-hidden">
                            <img className="w-full transition   ease-in-out  scale-100 group-hover:scale-110" src="/assets/images/project/img-1.jpg" alt="" />
                        </div>
                        <div className="pt-[30px]">
                            <h2 className="leading-[35px] font-base-font font-semibold text-[25px] xl:text-[22px] md:text-[20px]">
                                <a className="text-white transition ease-in-out hover:text-[#3faf60]" href="portfolio-single.html">Arkio - Architecture &amp; Interior WordPress Theme</a>
                            </h2>
                            <span className="font-normal text-[14px] leading-[18px] text-[#D8D8D8]">Architecture /
                                Business</span>
                        </div>
                    </div></div><div className="owl-item" style={{width: '420px', marginRright: '30px'}}><div className="project-item group">
                        <div className="overflow-hidden">
                            <img className="w-full transition ease-in-out scale-100 group-hover:scale-110" src="/assets/images/project/img-2.jpg" alt="" />
                        </div>
                        <div className="pt-[30px]">
                            <h2 className="leading-[35px] font-base-font font-semibold text-[25px]
                             xl:text-[22px] md:text-[20px]">
                                <a className="text-white transition ease-in-out hover:text-[#3faf60]" href="portfolio-single.html">Follio - Multipurpose Portfolio HTML5 Template</a></h2>
                            <span className="font-normal text-[14px] leading-[18px] text-[#D8D8D8]">Web Design</span>
                        </div>
                    </div></div><div className="owl-item active" style={{width: '420px', marginRright: '30px'}}><div className="project-item group">
                        <div className="overflow-hidden">
                            <img className="w-full transition ease-in-out scale-100 group-hover:scale-110" src="/assets/images/project/img-2.jpg" alt="" />
                        </div>
                        <div className="pt-[30px]">
                            <h2 className="leading-[35px] font-base-font font-semibold text-[25px]
                             xl:text-[22px] md:text-[20px]">
                                <a className="text-white transition ease-in-out hover:text-[#3faf60]" href="portfolio-single.html">Follio - Multipurpose Portfolio HTML5 Template</a></h2>
                            <span className="font-normal text-[14px] leading-[18px] text-[#D8D8D8]">Web Design</span>
                        </div>
                    </div></div><div className="owl-item active" style={{width: '420px', marginRright: '30px'}}><div className="project-item group">
                        <div className="overflow-hidden">
                            <img className="w-full transition ease-in-out scale-100 group-hover:scale-110" src="/assets/images/project/img-3.jpg" alt="" />
                        </div>
                        <div className="pt-[30px]">
                            <h2 className="leading-[35px] font-base-font font-semibold text-[25px]
                             xl:text-[22px] md:text-[20px]">
                                <a className="text-white transition ease-in-out hover:text-[#3faf60]" href="portfolio-single.html">Elito - Tailwind CSS Creative Portfolio HTML5 Template</a></h2>
                            <span className="font-normal text-[14px] leading-[18px] text-[#D8D8D8]">Website /
                                Creative</span>
                        </div>
                    </div></div><div className="owl-item cloned" style={{width: '420px', marginRright: '30px'}}><div className="project-item group">
                        <div className="overflow-hidden">
                            <img className="w-full transition   ease-in-out  scale-100 group-hover:scale-110" src="/assets/images/project/img-1.jpg" alt="" />
                        </div>
                        <div className="pt-[30px]">
                            <h2 className="leading-[35px] font-base-font font-semibold text-[25px] xl:text-[22px] md:text-[20px]">
                                <a className="text-white transition ease-in-out hover:text-[#3faf60]" href="portfolio-single.html">Arkio - Architecture &amp; Interior WordPress Theme</a>
                            </h2>
                            <span className="font-normal text-[14px] leading-[18px] text-[#D8D8D8]">Architecture /
                                Business</span>
                        </div>
                    </div></div><div className="owl-item cloned" style={{width: '420px', marginRright: '30px'}}><div className="project-item group">
                        <div className="overflow-hidden">
                            <img className="w-full transition ease-in-out scale-100 group-hover:scale-110" src="/assets/images/project/img-2.jpg" alt="" />
                        </div>
                        <div className="pt-[30px]">
                            <h2 className="leading-[35px] font-base-font font-semibold text-[25px]
                             xl:text-[22px] md:text-[20px]">
                                <a className="text-white transition ease-in-out hover:text-[#3faf60]" href="portfolio-single.html">Follio - Multipurpose Portfolio HTML5 Template</a></h2>
                            <span className="font-normal text-[14px] leading-[18px] text-[#D8D8D8]">Web Design</span>
                        </div>
                    </div></div><div className="owl-item cloned" style={{width: '420px', marginRright: '30px'}}><div className="project-item group">
                        <div className="overflow-hidden">
                            <img className="w-full transition ease-in-out scale-100 group-hover:scale-110" src="/assets/images/project/img-3.jpg" alt="" />
                        </div>
                        <div className="pt-[30px]">
                            <h2 className="leading-[35px] font-base-font font-semibold text-[25px]
                             xl:text-[22px] md:text-[20px]">
                                <a className="text-white transition ease-in-out hover:text-[#3faf60]" href="portfolio-single.html">Elito - Tailwind CSS Creative Portfolio HTML5 Template</a></h2>
                            <span className="font-normal text-[14px] leading-[18px] text-[#D8D8D8]">Website /
                                Creative</span>
                        </div>
                    </div></div></div></div></div>
            </div>
            <div className="absolute top-1/2 left-[30%] transform -translate-x-1/2 -translate-y-1/2 -z-10">
                <svg className="fill-[#FFE500]" width="1325" height="1687" viewBox="0 0 1325 1687" fill="none">
                    <g filter="url(#filter0_f_39_4166)">
                        <circle cx="481.5" cy="843.5" r="343.5" fillOpacity="0.27"></circle>
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4166" x="-362" y="0" width="1687" height="1687" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_4166"></feGaussianBlur>
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className="absolute bottom-0 left-0 -z-10">
                <img src="/assets/images/project/line-1.png" alt="" />
            </div>
            <div className="absolute right-0 top-0 -z-10">
                <img src="/assets/images/project/line-2.png" alt="" />
            </div>
        </section>
        {/* <!-- end elito-project-section --> */}

        {/* <!-- start elito-testimonial-section --> */}
        <section className="relative bg-[#2C2C2C] z-50">
            <div className="section-wrap col:pt-[130px] overflow-hidden">
                <div className="wraper">
                    <div className="grid grid-cols-2 md:grid-cols-1 gap-3 items-center relative z-20 wpo-testimonial-wrap">
                        <div className="relative w-[474px] h-[469px] col:w-[220px] col:h-[220px] z-10 flex justify-center flex-col mx-auto md:mb-[40px]">
                             <div className="relative w-[250px] h-[250px] col:w-[180px] col:h-[180px] z-10 sm:mx-auto">
                                <div className="slider-for slick-initialized slick-slider">
                                    <div aria-live="polite" className="slick-list draggable"><div className="slick-track" style={{opacity: '1', width: '1500px'}} role="listbox"><div className="relative w-[250px] h-[250px] col:w-[180px] col:h-[180px] rounded-[8px] slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: '250px', position: 'relative', left: '0px', top: '0px', zIndex: '999', opacity: '1'}} tabIndex="-1" role="option" aria-describedby="slick-slide00">
                                        <img className="rounded-[50%]" src="/assets/images/testimonial/img-1.jpg" alt="" />
                                    </div><div className="relative w-[250px] h-[250px] col:w-[180px] col:h-[180px] rounded-[8px] slick-slide" data-slick-index="1" aria-hidden="true" style={{width: '250px', position: 'relative', left: '-250px',top: '0px' ,zIndex: '998', opacity: '0',}} tabIndex="-1" role="option" aria-describedby="slick-slide01">
                                        <img className="rounded-[50%]" src="/assets/images/testimonial/img-2.jpg" alt="" />
                                    </div><div className="relative w-[250px] h-[250px] col:w-[180px] col:h-[180px] rounded-[8px] slick-slide" data-slick-index="2" aria-hidden="true" style={{width: '250px', position: 'relative', left: '-500px',top: '0px' ,zIndex: '998', opacity: '0',}} tabIndex="-1" role="option" aria-describedby="slick-slide02">
                                        <img className="rounded-[50%]" src="/assets/images/testimonial/img-3.jpg" alt="" />
                                    </div><div className="relative w-[250px] h-[250px] col:w-[180px] col:h-[180px] rounded-[8px] slick-slide" data-slick-index="3" aria-hidden="true" style={{width: '250px', position: 'relative', left: '-750px',top: '0px' ,zIndex: '998', opacity: '0',}} tabIndex="-1" role="option" aria-describedby="slick-slide03">
                                        <img className="rounded-[50%]" src="/assets/images/testimonial/img-4.jpg" alt="" />
                                    </div><div className="relative w-[250px] h-[250px] col:w-[180px] col:h-[180px] rounded-[8px] slick-slide" data-slick-index="4" aria-hidden="true" style={{width: '250px', position: 'relative', left: '-1000px', top:' 0px', zIndex: '998', opacity: '0',}} tabIndex="-1" role="option" aria-describedby="slick-slide04">
                                        <img className="rounded-[50%]" src="/assets/images/testimonial/img-5.jpg" alt="" />
                                    </div><div className="relative w-[250px] h-[250px] col:w-[180px] col:h-[180px] rounded-[8px] slick-slide" data-slick-index="5" aria-hidden="true" style={{width: '250px', position: 'relative', left: '-1250px', top: '0px', zIndex: '998', opacity: '0',}} tabIndex="-1" role="option" aria-describedby="slick-slide05">
                                        <img className="rounded-[50%]" src="/assets/images/testimonial/img-6.jpg" alt="" />
                                    </div></div></div>
                                    
                                    
                                    
                                    
                                    
                                </div>
                                    <div className="absolute left-[-35px] top-[-25%]">
                                        <img className="w-[80px] h-[80px] rounded-[50%] object-cover col:w-[60px] col:h-[60px]" src="/assets/images/testimonial/img-2.jpg" alt="" />
                                    </div>
                                    <div className="absolute left-auto top-[-18%] col:top-[-20%]  right-[-120px] col:right-[-50px]">
                                        <img className="w-[80px] h-[80px] rounded-[50%] object-cover col:w-[60px] col:h-[60px]" src="/assets/images/testimonial/img-3.jpg" alt="" />
                                    </div>
                                    <div className="absolute left-[-120px] top-auto bottom-0 col:left-[-50px] ">
                                        <img className="w-[80px] h-[80px] rounded-[50%] object-cover col:w-[60px] col:h-[60px]" src="/assets/images/testimonial/img-4.jpg" alt="" />
                                    </div>
                                    <div className="absolute left-auto top-auto bottom-0 right-[-85px] col:right-[-60px]">
                                        <img className="w-[60px] h-[60px] rounded-[50%] object-cover col:w-[40px] col:h-[40px]" src="/assets/images/testimonial/img-5.jpg" alt="" />
                                    </div>
                                    <div className="absolute top-auto bottom-[-104px] right-[1px] left-[45%] col:bottom-[-65px]">
                                        <img className="w-[60px] h-[60px] rounded-[50%] object-cover col:w-[40px] col:h-[40px]" src="/assets/images/testimonial/img-6.jpg" alt="" />
                                    </div>
                                    <div className="absolute w-[130%] h-[130%]  left-[-14%] top-[-16%] rounded-[50%] -z-10 border border-[#ffffff1f]"></div>
                                    <div className="absolute w-[160%] h-[160%]  left-[-28%] top-[-30%] rounded-[50%] -z-10 border border-[#ffffff1f]"></div>
                                    <div className="absolute w-[190%] h-[190%]  left-[-42%] top-[-45%] rounded-[50%] -z-10 border border-[#ffffff1f]"></div>
                                    <div className="absolute top-[50%] left-[30%]  transform -translate-x-1/2 -translate-y-1/2 -z-20">
                                        <svg className="fill-[#FFE600]" width="750" height="750" viewBox="0 0 750 750" fill="none">
                                            <g filter="url(#filter0_f_39_4154)">
                                                <circle r="125" transform="matrix(-1 0 0 1 375 375)" fillOpacity="0.4"></circle>
                                            </g>
                                            <defs>
                                                <filter id="filter0_f_39_4154" x="0" y="0" width="750" height="750" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                                    <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_39_4154"></feGaussianBlur>
                                                </filter>
                                            </defs>
                                        </svg>
                                    </div>
                             </div>
                        </div>
                        <div className="col:mt-[70px]">
                            <div className="slider-nav slick-initialized slick-slider slick-dotted" role="toolbar">
                                <div aria-live="polite" className="slick-list draggable"><div className="slick-track" style={{opacity: '1', width: '5232px', transform: 'translate3d(-654px, 0px, 0px)'}} role="listbox"><div className="sm:text-center slick-slide slick-cloned" data-slick-index="-1" id="" aria-hidden="true" style={{width: '654px'}} tabIndex="-1">
                                    <h2 className="font-medium text-[32px] leading-[52px]
                                     text-white font-base-font mb-[20px] sm:text-[24px] sm:leading-[35px] sm:mb-[10px]">Many desktop publishing packages and editors now use as their.</h2>
                                    <p className="font-normal text-[16px] leading-[30px] text-[#D8D8D8] ">It is a long established fact that a reader will be distracted by the
                                        readable
                                        content of page when looking at its layout point of using is that it has
                                        more-or-less
                                        normal distribution of letters, as opposed to using 'Content here,
                                        content here',
                                        making look like readable English</p>
                                    <div className="mt-[30px]">
                                        <h3 className="font-semibold text-[26px] font-base-font leading-[31px]
                                            flex items-center text-white sm:justify-center sm:text-[18px]">Cathi Falcon, 
                                            <span className="font-normal text-[14px] leading-[17px] text-[#D8D8D8] block ml-[10px] relative top-[3px]">Software Engineer</span>
                                        </h3>
                                    </div>    
                                </div>
                                <div className="sm:text-center slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: '654px'}} tabIndex="-1" role="option" aria-describedby="slick-slide10">
                                    <h2 className="font-medium text-[32px] leading-[52px]
                                     text-white font-base-font mb-[20px] sm:text-[24px] sm:leading-[35px] sm:mb-[10px]">Many desktop publishing packages and editors now use as their.</h2>
                                    <p className="font-normal text-[16px] leading-[30px] text-[#D8D8D8] ">It is a long established fact that a reader will be distracted by the
                                        readable
                                        content of page when looking at its layout point of using is that it has
                                        more-or-less
                                        normal distribution of letters, as opposed to using 'Content here,
                                        content here',
                                        making look like readable English</p>
                                    <div className="mt-[30px]">
                                        <h3 className="font-semibold text-[26px] font-base-font leading-[31px]
                                            flex items-center text-white sm:justify-center sm:text-[18px]">Cathi Falcon, 
                                            <span className="font-normal text-[14px] leading-[17px] text-[#D8D8D8] block ml-[10px] relative top-[3px]">Software Engineer</span>
                                        </h3>
                                    </div>    
                                </div></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute w-2/5 h-[110%] bg-[#262626] top-[-70px] left-0 z-1 clip-your-needful-style md:hidden"></div> 
            <div className="absolute right-0 bottom-0">
                <img src="/assets/images/testimonial/shape.png" alt="" />
            </div>
        </section>
        {/* <!-- end elito-testimonial-section --> */}

        {/* <!-- start elito-pricing-section --> */}
        <section className="section-wrap bg-[#191919] overflow-hidden z-50" id='pricing'>
            <div className="wraper">
                {/* <!-- start section title --> */}
                <div className="max-w-[640px] mx-auto text-center text-white mb-[60px] md:mb-[40px]">
                    <h2 className="heading-font font-bold text-5xl md:text-[35px] sm:text-[22px] mb-[15px]">Pricing Plan
                    </h2>
                    <p className="base-font text-lg font-normal">Must explain to you how all this mistaken idea pleasure
                        born and give you a complete account.</p>
                </div>
                {/* <!-- end section title --> */}
                <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    <div className="bg-[#262626] md:mb-[30px] sm:mx-[60px] col:mx-[0px] text-center mx-3">
                        <div className="px-5">
                            <span
                                className="inline-block pt-[3px] px-[30px] pb-[5px] bg-[#59C378] rounded-b-[10px] text-white">BASIC</span>
                            <h2
                                className="mt-7 mb-4 font-bold text-[45px] md:text-[30px] flex items-center justify-center text-white uppercase">
                                $120<span className="font-medium text-[#D8D8D8] ml-[2px] text-base inline-block "> / per
                                    month</span></h2>
                            <p className="pb-7 max-w-[282px] mx-auto text-[#D8D8D8] border-b border-[#496451]">Determine the
                                Best Pricing Strategy For Your Business.</p>
                        </div>
                        <div className="p-10 pt-9 list-none">
                            <ul>
                                <li className="text-[#D8D8D8] mb-4 text-base">Softwere Development</li>
                                <li className="text-[#D8D8D8] mb-4 text-base">Web Development</li>
                                <li className="text-[#D8D8D8] mb-4 text-base">Digital Marketing</li>
                                <li className="text-[#D8D8D8] mb-4 text-base">Graphic Design</li>
                                <li className="text-[#D8D8D8] mb-4 text-base">24/Support</li>
                            </ul>
                            <a href="pricing.html" className="theme-btn-2 mt-5">CHOOSE PLAN</a>
                        </div>
                    </div>
                    <div className="bg-[#262626] md:mb-[30px] sm:mx-[60px] col:mx-[0px] text-center mx-3">
                        <div className="px-5">
                            <span
                                className="inline-block pt-[3px] px-[30px] pb-[5px] bg-[#59C378] rounded-b-[10px] text-white">PREMIUM</span>
                            <h2
                                className="mt-7 mb-4 font-bold text-[45px] md:text-[30px] flex items-center justify-center text-white uppercase">
                                $210<span className="font-medium text-[#D8D8D8] ml-[2px] text-base inline-block "> / per
                                    month</span></h2>
                            <p className="pb-7 max-w-[282px] mx-auto text-[#D8D8D8] border-b border-[#496451]">Determine the
                                Best Pricing Strategy For Your Business.</p>
                        </div>
                        <div className="p-10 pt-9 list-none">
                            <ul>
                                <li className="text-[#D8D8D8] mb-4 text-base">Softwere Development</li>
                                <li className="text-[#D8D8D8] mb-4 text-base">Web Development</li>
                                <li className="text-[#D8D8D8] mb-4 text-base">Digital Marketing</li>
                                <li className="text-[#D8D8D8] mb-4 text-base">Graphic Design</li>
                                <li className="text-[#D8D8D8] mb-4 text-base">24/Support</li>
                            </ul>
                            <a href="pricing.html" className="theme-btn-2 mt-5">CHOOSE PLAN</a>
                        </div>
                    </div>
                    <div className="bg-[#262626]  text-center sm:mx-[60px] col:mx-[0px] mx-3">
                        <div className="px-5">
                            <span
                                className="inline-block pt-[3px] px-[30px] pb-[5px] bg-[#59C378] rounded-b-[10px] text-white">ADVANCED</span>
                            <h2
                                className="mt-7 mb-4 font-bold text-[45px] md:text-[30px] flex items-center justify-center text-white uppercase">
                                $373<span className="font-medium text-[#D8D8D8] ml-[2px] text-base inline-block "> / per
                                    month</span></h2>
                            <p className="pb-7 max-w-[282px] mx-auto text-[#D8D8D8] border-b border-[#496451]">Determine the
                                Best Pricing Strategy For Your Business.</p>
                        </div>
                        <div className="p-10 pt-9 list-none">
                            <ul>
                                <li className="text-[#D8D8D8] mb-4 text-base">Softwere Development</li>
                                <li className="text-[#D8D8D8] mb-4 text-base">Web Development</li>
                                <li className="text-[#D8D8D8] mb-4 text-base">Digital Marketing</li>
                                <li className="text-[#D8D8D8] mb-4 text-base">Graphic Design</li>
                                <li className="text-[#D8D8D8] mb-4 text-base">24/Support</li>
                            </ul>
                            <a href="pricing.html" className="theme-btn-2 mt-5">CHOOSE PLAN</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
                <svg className="fill-[#FFE500]" width="1500" height="1500" viewBox="0 0 1500 1500" fill="none">
                    <g opacity="0.45" filter="url(#filter0_f_39_4213)">
                        <circle cx="750" cy="750" r="200"></circle>
                    </g>
                    <defs>
                        <filter id="filter0_f_39_4213" x="0" y="0" width="1500" height="1500"
                            filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                            <feGaussianBlur stdDeviation="275" result="effect1_foregroundBlur_39_4212"></feGaussianBlur>
                        </filter>
                    </defs>
                </svg>
            </div>
        </section>
        {/* <!-- end elito-pricing-section --> */}

        {/* <!-- start elito-blog-section --> */}
        <section className="bg-[#262626] relative overflow-hidden z-10 pb-[360px] pt-[120px] md:py-[90px] sm:py-[80px]">
            <div className="wraper">
                {/* <!-- start section title --> */}
                <div className="max-w-[640px] mx-auto text-center text-white mb-[60px] md:mb-[40px]">
                    <h2 className="base-font font-bold text-5xl md:text-[35px] sm:text-[22px] mb-[15px]">Latest News</h2>
                    <p className="base-font text-lg font-normal px-12">Must explain to you how all this mistaken idea
                        pleasure
                        born and give you a complete account.</p>
                </div>
                {/* <!-- end section title --> */}
                <div className="wpo-blog-slide owl-carousel owl-loaded owl-drag">

                <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(-1350px, 0px, 0px)', transition: 'all 0.3s ease 0s', width: '4050px'}}><div className="owl-item cloned" style={{width: '420px', marginRight: '30px',}}><div className="blog-item">
                        <div>
                            <img className="w-full" src="assets/images/blog/img-1.jpg" alt="" />
                        </div>
                        <div className="p-7 pl-0">
                            <span className="base-font inline-block text-white px-3 py-1 bg-[#3C3C3C] text-[14px] ">January
                                02, 2022</span>
                            <h2 className="text-[25px] font-semibold leading-9 mt-4 mb-5 font-base-font xl:text-[22px] md:text-[20px]">
                                <a className=" text-white transition hover:text-[#3faf60]" href="blog-single.html">Have
                                    evolved over the years sometimes accident.</a>
                            </h2>
                            <a className="font-base-font text-white transition font-medium text-[16px] inline-block pl-[30px] leading-5 relative before:absolute before:transition before:content-['\e628'] before:font-[themify] before:left-[-5px] before:top-0 hover:text-[#FFE600] hover:before:left-0" href="blog-single.html">Post Details</a>
                        </div>
                    </div></div><div className="owl-item cloned" style={{width: '420px', marginRight: '30px',}}><div className="blog-item">
                        <div>
                            <img className="w-full" src="assets/images/blog/img-2.jpg" alt="" />
                        </div>
                        <div className="p-7 pl-0">
                            <span className="base-font inline-block text-white px-3 py-1 bg-[#3C3C3C] text-[14px] ">January
                                03, 2022</span>
                            <h2 className="text-[25px] font-semibold leading-9 mt-4 mb-5 font-base-font xl:text-[22px] md:text-[20px]">
                                <a className=" text-white transition hover:text-[#3faf60]" href="blog-single.html">The
                                    Internet tend to repeat predefined chunks.</a>
                            </h2>
                            <a className="font-base-font text-white transition font-medium text-[16px] inline-block pl-[30px] leading-5 relative before:absolute before:transition before:content-['\e628'] before:font-[themify] before:left-[-5px] before:top-0 hover:text-[#FFE600] hover:before:left-0" href="blog-single.html">Post Details</a>
                        </div>
                    </div></div><div className="owl-item cloned" style={{width: '420px', marginRight: '30px',}}><div className="blog-item">
                        <div>
                            <img className="w-full" src="assets/images/blog/img-3.jpg" alt="" />
                        </div>
                        <div className="p-7 pl-0">
                            <span className="base-font inline-block text-white px-3 py-1 bg-[#3C3C3C] text-[14px] ">January
                                04, 2022</span>
                            <h2 className="text-[25px] font-semibold leading-9 mt-4 mb-5 font-base-font xl:text-[22px] md:text-[20px]">
                                <a className=" text-white transition hover:text-[#3faf60]" href="blog-single.html">The
                                    standard chunk of used since the interested.</a>
                            </h2>
                            <a className="font-base-font text-white transition font-medium text-[16px] inline-block pl-[30px] leading-5 relative before:absolute before:transition before:content-['\e628'] before:font-[themify] before:left-[-5px] before:top-0 hover:text-[#FFE600] hover:before:left-0" href="blog-single.html">Post Details</a>
                        </div>
                    </div></div><div className="owl-item active" style={{width: '420px', marginRight: '30px',}}><div className="blog-item">
                        <div>
                            <img className="w-full" src="assets/images/blog/img-1.jpg" alt="" />
                        </div>
                        <div className="p-7 pl-0">
                            <span className="base-font inline-block text-white px-3 py-1 bg-[#3C3C3C] text-[14px] ">January
                                02, 2022</span>
                            <h2 className="text-[25px] font-semibold leading-9 mt-4 mb-5 font-base-font xl:text-[22px] md:text-[20px]">
                                <a className=" text-white transition hover:text-[#3faf60]" href="blog-single.html">Have
                                    evolved over the years sometimes accident.</a>
                            </h2>
                            <a className="font-base-font text-white transition font-medium text-[16px] inline-block pl-[30px] leading-5 relative before:absolute before:transition before:content-['\e628'] before:font-[themify] before:left-[-5px] before:top-0 hover:text-[#FFE600] hover:before:left-0" href="blog-single.html">Post Details</a>
                        </div>
                    </div></div><div className="owl-item active" style={{width: '420px', marginRight: '30px',}}><div className="blog-item">
                        <div>
                            <img className="w-full" src="assets/images/blog/img-2.jpg" alt="" />
                        </div>
                        <div className="p-7 pl-0">
                            <span className="base-font inline-block text-white px-3 py-1 bg-[#3C3C3C] text-[14px] ">January
                                03, 2022</span>
                            <h2 className="text-[25px] font-semibold leading-9 mt-4 mb-5 font-base-font xl:text-[22px] md:text-[20px]">
                                <a className=" text-white transition hover:text-[#3faf60]" href="blog-single.html">The
                                    Internet tend to repeat predefined chunks.</a>
                            </h2>
                            <a className="font-base-font text-white transition font-medium text-[16px] inline-block pl-[30px] leading-5 relative before:absolute before:transition before:content-['\e628'] before:font-[themify] before:left-[-5px] before:top-0 hover:text-[#FFE600] hover:before:left-0" href="blog-single.html">Post Details</a>
                        </div>
                    </div></div><div className="owl-item active" style={{width: '420px', marginRight: '30px',}}><div className="blog-item">
                        <div>
                            <img className="w-full" src="assets/images/blog/img-3.jpg" alt="" />
                        </div>
                        <div className="p-7 pl-0">
                            <span className="base-font inline-block text-white px-3 py-1 bg-[#3C3C3C] text-[14px] ">January
                                04, 2022</span>
                            <h2 className="text-[25px] font-semibold leading-9 mt-4 mb-5 font-base-font xl:text-[22px] md:text-[20px]">
                                <a className=" text-white transition hover:text-[#3faf60]" href="blog-single.html">The
                                    standard chunk of used since the interested.</a>
                            </h2>
                            <a className="font-base-font text-white transition font-medium text-[16px] inline-block pl-[30px] leading-5 relative before:absolute before:transition before:content-['\e628'] before:font-[themify] before:left-[-5px] before:top-0 hover:text-[#FFE600] hover:before:left-0" href="blog-single.html">Post Details</a>
                        </div>
                    </div></div><div className="owl-item cloned" style={{width: '420px', marginRight: '30px',}}><div className="blog-item">
                        <div>
                            <img className="w-full" src="assets/images/blog/img-1.jpg" alt="" />
                        </div>
                        <div className="p-7 pl-0">
                            <span className="base-font inline-block text-white px-3 py-1 bg-[#3C3C3C] text-[14px] ">January
                                02, 2022</span>
                            <h2 className="text-[25px] font-semibold leading-9 mt-4 mb-5 font-base-font xl:text-[22px] md:text-[20px]">
                                <a className=" text-white transition hover:text-[#3faf60]" href="blog-single.html">Have
                                    evolved over the years sometimes accident.</a>
                            </h2>
                            <a className="font-base-font text-white transition font-medium text-[16px] inline-block pl-[30px] leading-5 relative before:absolute before:transition before:content-['\e628'] before:font-[themify] before:left-[-5px] before:top-0 hover:text-[#FFE600] hover:before:left-0" href="blog-single.html">Post Details</a>
                        </div>
                    </div></div><div className="owl-item cloned" style={{width: '420px', marginRight: '30px',}}><div className="blog-item">
                        <div>
                            <img className="w-full" src="assets/images/blog/img-2.jpg" alt="" />
                        </div>
                        <div className="p-7 pl-0">
                            <span className="base-font inline-block text-white px-3 py-1 bg-[#3C3C3C] text-[14px] ">January
                                03, 2022</span>
                            <h2 className="text-[25px] font-semibold leading-9 mt-4 mb-5 font-base-font xl:text-[22px] md:text-[20px]">
                                <a className=" text-white transition hover:text-[#3faf60]" href="blog-single.html">The
                                    Internet tend to repeat predefined chunks.</a>
                            </h2>
                            <a className="font-base-font text-white transition font-medium text-[16px] inline-block pl-[30px] leading-5 relative before:absolute before:transition before:content-['\e628'] before:font-[themify] before:left-[-5px] before:top-0 hover:text-[#FFE600] hover:before:left-0" href="blog-single.html">Post Details</a>
                        </div>
                    </div></div><div className="owl-item cloned" style={{width: '420px', marginRight: '30px',}}><div className="blog-item">
                        <div>
                            <img className="w-full" src="assets/images/blog/img-3.jpg" alt="" />
                        </div>
                        <div className="p-7 pl-0">
                            <span className="base-font inline-block text-white px-3 py-1 bg-[#3C3C3C] text-[14px] ">January
                                04, 2022</span>
                            <h2 className="text-[25px] font-semibold leading-9 mt-4 mb-5 font-base-font xl:text-[22px] md:text-[20px]">
                                <a className=" text-white transition hover:text-[#3faf60]" href="blog-single.html">The
                                    standard chunk of used since the interested.</a>
                            </h2>
                            <a className="font-base-font text-white transition font-medium text-[16px] inline-block pl-[30px] leading-5 relative before:absolute before:transition before:content-['\e628'] before:font-[themify] before:left-[-5px] before:top-0 hover:text-[#FFE600] hover:before:left-0" href="blog-single.html">Post Details</a>
                        </div>
                    </div></div></div></div></div>
            </div>
            <div className="absolute right-0 bottom-[-75%]  -z-10">
                <svg className="fill-[#59c378]" width="1319" height="1567" viewBox="0 0 1319 1567" fill="none">
                    <g filter="url(#filter0_f_39_3832)">
                        <circle cx="803" cy="803" r="303" fill="#59C378" fillOpacity="0.5"></circle>
                    </g>
                    <defs>
                        <filter id="filter0_f_39_3832" x="0" y="0" width="1606" height="1606" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                            <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_3832"></feGaussianBlur>
                        </filter>
                    </defs>
                </svg>
            </div>
        </section>
        {/* <!-- end elito-blog-section --> */}

<Footer/>

    </div>
    {/* <!-- end of page-wrapper --> */}
    </>
  )
}

export default Home
