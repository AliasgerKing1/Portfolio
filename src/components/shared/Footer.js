import React from 'react'

const Footer = () => {
  return (
    <>
                {/* <!-- start wpo-site-footer --> */}
                <footer className="relative bg-[#191919] z-10">
            <div className="absolute w-full top-[-280px] z-10 md:hidden">
                <div className="wraper">
                    <div className="relative py-[80px] px-[165px] pl-[0] bg-[#FF4155] z-10 
                        before:absolute before:left-0 before:top-0 before:w-full before:h-full
                        before:content-[''] before:bg-[url('../images/blog/shape.png')] 
                        before:bg-no-repeat before:bg-center before:bg-cover before:-z-0">
                        <div className="grid grid-cols-2 gap-3 items-center relative z-20">
                            <h2 className="font-base-font font-bold text-[50px] leading-[60px] text-white xl:text-[45px] lg:text-[35px] lg:leading-[50px]">Send me a message and make something together.</h2>
                            <div className="text-right">
                                <a className="relative bg-[#202020] text-white inline-block font-semibold 
                                py-[15px] px-[35px] pr-[65px] rounded-[5px] capitalize text-[16px]
                                before:absolute  before:content-['\f10d'] before:font-[Flaticon] before:right-[30px]
                                 before:top-[50%] before:text-[14px] before:-translate-y-1/2" href="contact.html">Contact Us  </a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="absolute top-0 left:[-40%] w-[40%] h-[100%] bg-[#FF4155] -z-10 
                    before:absolute before:left-0 before:top-0 before:w-full before:h-full
                    before:content-[''] before:bg-[url('../images/blog/shape.png')]
                    before:bg-no-repeat before:bg-center before:bg-cover before:z-0">
                </div>
            </div>
            <div className="pt-[170px] pb-[90px] md:py-[90px] md:pb-[20px] overflow-hidden relative -z-10">
                <div className="wraper">
                    <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
                        <div className="w-[420px] xl:w-[355px] lg:w-[297px] pr-[75px] md:mb-[40px] lg:pr-0 relative text-left after:absolute after:content[''] after:bg-[#ffffff0d] after:w-[1px] after:h-full after:right-[30px] after:top-0 after:lg:hidden">
                          <div className="mb-7">
                            <a className="text-[45px] font-bold flex items-center text-white" href="index-2.html">
                                <img className=" rounded-[50%] mr-[10px] " src="/assets/images/logo.png" alt="" />Aliasger.</a>
                          </div>
                          <p className="text-white text-[16px] mb-[10px]">Welcome and open yourself to your truest love this year with us! With the Release
                            Process</p>
                            <ul className="overflow-hidden pt-[15px]">
                               <li className="text-white float-left group "><a className="text-white transition-all group-hover:text-[#FFE600]" href="#"><i className="ti-facebook"></i></a></li>
                               <li className="text-white float-left group ml-[15px]"><a className="text-white transition-all group-hover:text-[#FFE600]" href="#"><i className="ti-twitter-alt"></i></a></li>
                               <li className="text-white float-left group ml-[15px]"><a className="text-white transition-all group-hover:text-[#FFE600]" href="#"><i className="ti-linkedin"></i></a></li>
                               <li className="text-white float-left group ml-[15px]"><a className="text-white transition-all group-hover:text-[#FFE600]" href="#"><i className="ti-pinterest"></i></a></li>
                               <li className="text-white float-left group ml-[15px]"><a className="text-white transition-all group-hover:text-[#FFE600]" href="#"><i className="ti-vimeo-alt"></i></a></li>
                            </ul>
                        </div>

                        <div className="w-[200px] md:w-full ml-auto md:mb-[40px] lg:pr-0 relative text-left ">
                            <div className="mb-7">
                                <h3 className="text-[24px] font-bold font-base-font text-white capitalize">Navigation</h3>
                            </div>
                            <ul> 
                                <li className="relative mb-[8px] block"><a className=" pl-[15px] before:absolute before:bg-white before:transition-all before:hover:bg-[#59C378] before:w-[5px] before:h-[1px] before:left-0 before:top-[10px] before:content-[''] text-white hover:text-[#59C378] transition-all" href="#about">About us</a></li>
                                <li className="relative mb-[8px] block"><a className=" pl-[15px] before:absolute before:bg-white before:transition-all before:hover:bg-[#59C378] before:w-[5px] before:h-[1px] before:left-0 before:top-[10px] before:content-[''] text-white hover:text-[#59C378] transition-all" href="#services">All Services</a></li>
                                <li className="relative mb-[8px] block"><a className=" pl-[15px] before:absolute before:bg-white before:transition-all before:hover:bg-[#59C378] before:w-[5px] before:h-[1px] before:left-0 before:top-[10px] before:content-[''] text-white hover:text-[#59C378] transition-all" href="#work">Recent Work</a></li>
                                <li className="relative mb-[8px] block"><a className=" pl-[15px] before:absolute before:bg-white before:transition-all before:hover:bg-[#59C378] before:w-[5px] before:h-[1px] before:left-0 before:top-[10px] before:content-[''] text-white hover:text-[#59C378] transition-all" href="#expirience">Work Experiences</a></li>
                                <li className="relative mb-[8px] block"><a className=" pl-[15px] before:absolute before:bg-white before:transition-all before:hover:bg-[#59C378] before:w-[5px] before:h-[1px] before:left-0 before:top-[10px] before:content-[''] text-white hover:text-[#59C378] transition-all" href="#pricing">Pricing Plan</a></li>
                                
                            </ul>      
                        </div>
                        <div className="pl-[15px] md:pl-[0px] md:mb-[40px] lg:pr-0 relative text-left ">
                            <div className="mb-7">
                                <h3 className="text-[24px] font-bold font-base-font text-white capitalize">All Services</h3>
                            </div>
                            <ul> 
                                <li className="relative mb-[8px] block"><a className=" pl-[15px] before:absolute before:bg-white before:transition-all before:hover:bg-[#59C378] before:w-[5px] before:h-[1px] before:left-0 before:top-[10px] before:content-[''] text-white hover:text-[#59C378] transition-all" href="service-single.html">Web Design</a></li>
                                <li className="relative mb-[8px] block"><a className=" pl-[15px] before:absolute before:bg-white before:transition-all before:hover:bg-[#59C378] before:w-[5px] before:h-[1px] before:left-0 before:top-[10px] before:content-[''] text-white hover:text-[#59C378] transition-all" href="service-single.html">Web Development</a></li>
                                <li className="relative mb-[8px] block"><a className=" pl-[15px] before:absolute before:bg-white before:transition-all before:hover:bg-[#59C378] before:w-[5px] before:h-[1px] before:left-0 before:top-[10px] before:content-[''] text-white hover:text-[#59C378] transition-all" href="service-single.html">Python Development</a></li>
                                <li className="relative mb-[8px] block"><a className=" pl-[15px] before:absolute before:bg-white before:transition-all before:hover:bg-[#59C378] before:w-[5px] before:h-[1px] before:left-0 before:top-[10px] before:content-[''] text-white hover:text-[#59C378] transition-all" href="service-single.html">Product Designing</a></li>
                                <li className="relative mb-[8px] block"><a className=" pl-[15px] before:absolute before:bg-white before:transition-all before:hover:bg-[#59C378] before:w-[5px] before:h-[1px] before:left-0 before:top-[10px] before:content-[''] text-white hover:text-[#59C378] transition-all" href="service-single.html">Graphic Design</a></li>
                            </ul>      
                        </div>
                        <div className=" md:mb-[40px] lg:pr-0 relative text-left ">
                            <div className="mb-7">
                                <h3 className="text-[24px] font-bold font-base-font text-white capitalize">Newsletter</h3>
                            </div>
                            <p className="text-white text-[16px] mb-[10px]">Must explain to you how all this mistaken idea pleasure born and give you a complete account.</p>
                            <form className=" mt-[25px] relative">
                                <div className="input-1">
                                    <input type="email" className="focus:outline-0 w-full bg-[#232925] h-[50px]  text-white py-[6px] px-[15px] border border-[#222623]" placeholder="Email Address *" required />
                                   
                                </div>
                                <div className="absolute right-[20px] top-[50%]  -translate-y-1/2">
                                    <button className=" text-white text-[20px]" type="submit"><i className="ti-email"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

               <div className="absolute top-[-140%] right-[0] -z-10">
                    <svg className="fill-[#59C378]" width="1319" height="1567" viewBox="0 0 1319 1567" fill="none">
                        <g filter="url(#filter0_f_39_3833)">
                            <circle cx="803" cy="803" r="303" fillOpacity="0.5" />
                        </g>
                        <defs>
                            <filter id="filter0_f_39_3833" x="0" y="0" width="1606" height="1606"
                                filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="250" result="effect1_foregroundBlur_39_3832" />
                            </filter>
                        </defs>
                    </svg>
                </div> 
            </div>
            <div className="wraper">
                <div className=" border-t-1 border-[#ffffff0d] relative">
                    <div className="h-[1px] absolute left-[15px] top-0 bg-[#ffffff0d] w-[calc(100%+30px)]"></div>
                    <p className="text-center text-white text-[14px] py-[20px]">Copyright &copy; 2022-2023 Aliasger Barood. All rights reserved.</p>
                </div>
            </div>
        </footer>
        {/* <!-- end wpo-site-footer --> */}
    </>
  )
}

export default Footer