import React from 'react'
import {NavLink} from "react-router-dom"
const Header = () => {
  return (
    <>
        {/* <!-- start elito-header-section --> */}
        <section className="bg-transparent  absolute left-0 top-0 w-full z-50 md:py-[20px]">
                <h1 className="hidden">section heading hidden</h1>
                <div className="wraper">
                     <div className="flex items-center justify-between">
                         {/* <!-- mobile-menu --> */}
                         <div id="dl-menu" className="dl-menuwrapper">
                            <button className="dl-trigger">Open Menu</button>
                            <ul className="dl-menu">
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="about.html">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/services">Services</NavLink>
                                </li>
                                <li>
                                    <NavLink to="#">Portfolio</NavLink>
                                    <ul className="dl-submenu">
                                        <li><NavLink to="portfolio-grid.html">Portfolio Grid</NavLink></li>
                                        <li><NavLink to="portfolio-masonary.html">Portfolio Masonary</NavLink></li>
                                        <li><NavLink to="portfolio.html">Portfolio Slide</NavLink></li>
                                        <li><NavLink to="portfolio-single.html">Portfolio Single</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink to="#">Pages</NavLink>
                                    <ul className="dl-submenu">
                                        <li><NavLink to="about.html">About</NavLink></li>
                                        <li><NavLink to="pricing.html">Pricing</NavLink></li>
                                        <li><NavLink to="404.html">Error 404</NavLink></li>
                                    </ul>
                                </li>
                                <li>
                                    <NavLink to="#">Blog</NavLink>
                                    <ul className="dl-submenu">
                                        <li><NavLink to="blog.html">Blog right sidebar</NavLink></li>
                                        <li><NavLink to="blog-left-sidebar.html">Blog left sidebar</NavLink></li>
                                        <li><NavLink to="blog-fullwidth.html">Blog fullwidth</NavLink></li>
                                        <li>
                                            <NavLink to="#">Blog details</NavLink>
                                            <ul className="dl-submenu">
                                                <li>
                                                    <NavLink to="blog-single.html">Blog details right sidebar</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="blog-single-left-sidebar.html">Blog details left sidebar</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="blog-single-fullwidth.html">Blog details fullwidth</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <NavLink to="contact.html">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="w-[195px] md:w-[280px] sm:w-[200px] col:w-[50px]">
                            <NavLink className="text-[45px] col:text-[25px] font-bold flex items-center text-white" to="index-2.html">
                            <img className=" rounded-[50%] mr-[10px] " style={{maxWidth : '70px'}} src="/assets/images/logo.png" alt="" />Aliasger.</NavLink>
                        </div>
                        <ul className="md:hidden">
                            <li className="relative inline-block group">
                                <NavLink to="/" className="relative text-[16px] lg:text-[14px] py-[35px] xl:py-[30px] px-[20px] xl:px-[6px] text-white block capitalize font-base-font font-medium
                                before:absolute before:left-0 before:bottom-0 before:w-full before:h-[4px] before:bg-[#59C378] before:content 
                                before:opacity-1 before:visible before:transition-all before:rounded-[3px]
                                ">Home</NavLink>
                            </li>
                            <li className="relative inline-block">
                                <NavLink to="about.html" className="relative group text-[16px] lg:text-[14px] py-[35px] xl:py-[30px] px-[20px] xl:px-[6px] text-white block capitalize font-base-font font-medium
                                before:absolute before:left-0 before:bottom-0 before:w-full before:h-[4px] before:bg-[#59C378] before:content 
                                before:opacity-0 before:invisible before:transition-all before:rounded-[3px]
                                 hover:before:opacity-100 hover:before:visible
                                ">About</NavLink>
                            </li>
                            <li className="relative inline-block group">
                                <NavLink to="/services" className="relative group text-[16px] lg:text-[14px] py-[35px] xl:py-[30px] px-[20px] xl:px-[6px] text-white block capitalize font-base-font font-medium
                                before:absolute before:left-0 before:bottom-0 before:w-full before:h-[4px] before:bg-[#59C378] before:content 
                                before:opacity-0 before:invisible before:transition-all before:rounded-[3px]
                                 hover:before:opacity-100 hover:before:visible
                                ">Services</NavLink>
                            </li>
                            <li className="relative inline-block group">
                                <NavLink to="#" className="relative group text-[16px] lg:text-[14px] py-[35px] xl:py-[30px] px-[20px] xl:px-[6px] text-white block capitalize font-base-font font-medium
                                before:absolute before:left-0 before:bottom-0 before:w-full before:h-[4px] before:bg-[#59C378] before:content 
                                before:opacity-0 before:invisible before:transition-all before:rounded-[3px]
                                 hover:before:opacity-100 hover:before:visible
                                ">Portfolio</NavLink>
                                <ul className="absolute w-[240px]  left-0 top-[110%] p-[20px] z-[111]  bg-[#fff] shadow-[#3e419f17]  transition-all  opacity-0 invisible group-hover:opacity-100  group-hover:top-full group-hover:visible">
                                    <li>
                                        <NavLink to="portfolio-grid.html" className="text-[16px] lg:text-[14px] inline-block py-[5px] capitalize text-[#202020] group relative overflow-hidden font-medium transition-all 
                                        after:absolute after:left-0 after:bottom-[5px] after:w-0 after:h-[1px] after:content after:bg-[#59C378]  after:transition-all 
                                        hover:after:w-full">Portfolio Grid</NavLink>
                                    </li>
                                        
                                    <li>
                                        <NavLink to="portfolio-masonary.html" className="text-[16px] lg:text-[14px] inline-block py-[5px] capitalize text-[#202020] group relative overflow-hidden font-medium transition-all 
                                        after:absolute after:left-0 after:bottom-[5px] after:w-0 after:h-[1px] after:content after:bg-[#59C378]  after:transition-all 
                                        hover:after:w-full">Portfolio Masonary</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="portfolio.html" className="text-[16px] lg:text-[14px] inline-block py-[5px] capitalize text-[#202020] group relative overflow-hidden font-medium transition-all 
                                        after:absolute after:left-0 after:bottom-[5px] after:w-0 after:h-[1px] after:content after:bg-[#59C378]  after:transition-all 
                                        hover:after:w-full">Portfolio Slide</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="portfolio-single.html" className="text-[16px] lg:text-[14px] inline-block py-[5px] capitalize text-[#202020] group relative overflow-hidden font-medium transition-all 
                                        after:absolute after:left-0 after:bottom-[5px] after:w-0 after:h-[1px] after:content after:bg-[#59C378]  after:transition-all 
                                        hover:after:w-full">Portfolio Single</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative inline-block group">
                                <NavLink to="about.html" className="relative group text-[16px] lg:text-[14px] py-[35px] xl:py-[30px] px-[20px] xl:px-[6px] text-white block capitalize font-base-font font-medium
                                before:absolute before:left-0 before:bottom-0 before:w-full before:h-[4px] before:bg-[#59C378] before:content 
                                before:opacity-0 before:invisible before:transition-all before:rounded-[3px]
                                 hover:before:opacity-100 hover:before:visible
                                ">Blog</NavLink>
                                <ul className="absolute w-[240px]  left-0 top-[110%] p-[20px] z-[111]  bg-[#fff] shadow-[#3e419f17]  transition-all  opacity-0 invisible group-hover:opacity-100  group-hover:top-full group-hover:visible">
                                    <li>
                                        <NavLink to="blog.html" className="text-[16px] lg:text-[14px] capitalize inline-block py-[5px] text-[#202020] group relative overflow-hidden font-medium transition-all 
                                        after:absolute after:left-0 after:bottom-[5px] after:w-0 after:h-[1px] after:content after:bg-[#59C378]  after:transition-all 
                                        hover:after:w-full">Blog right sidebar</NavLink>
                                    </li>
                                        
                                    <li>
                                        <NavLink to="blog-left-sidebar.html" className="text-[16px] lg:text-[14px] inline-block py-[5px] capitalize text-[#202020] group relative overflow-hidden font-medium transition-all 
                                        after:absolute after:left-0 after:bottom-[5px] after:w-0 after:h-[1px] after:content after:bg-[#59C378]  after:transition-all 
                                        hover:after:w-full">Blog left sidebar</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="blog-fullwidth.html" className="text-[16px] lg:text-[14px] inline-block py-[5px] capitalize text-[#202020] group relative overflow-hidden font-medium transition-all 
                                        after:absolute after:left-0 after:bottom-[5px] after:w-0 after:h-[1px] after:content after:bg-[#59C378]  after:transition-all 
                                        hover:after:w-full">Blog fullwidth</NavLink>
                                    </li>
                                    
                                    <li className="relative group/group-2">
                                        <NavLink to="#" className="text-[16px] lg:text-[14px] inline-block py-[5px] capitalize text-[#202020] group relative overflow-hidden font-medium transition-all 
                                        after:absolute after:left-0 after:bottom-[5px] after:w-0 after:h-[1px] after:content after:bg-[#59C378]  after:transition-all 
                                        hover:after:w-full">Blog details</NavLink>
                                        <ul className="absolute w-[240px]  left-[120%] top-0 p-[20px] z-[111]  bg-[#fff] shadow-[#3e419f17] opacity-0 invisible  transition-all group-hover/group-2:opacity-100  group-hover/group-2:left-[110%] group-hover/group-2:visible">
                                            <li>
                                                <NavLink to="blog-single.html" className="text-[16px] lg:text-[14px] inline-block py-[5px] capitalize text-[#202020] group relative overflow-hidden font-medium transition-all 
                                                after:absolute after:left-0 after:bottom-[5px] after:w-0 after:h-[1px] after:content after:bg-[#59C378]  after:transition-all 
                                                hover:after:w-full">Blog details right sidebar</NavLink>
                                            </li>
                                                
                                            <li>
                                                <NavLink to="blog-single-left-sidebar.html" className="text-[16px] lg:text-[14px] inline-block py-[5px] capitalize text-[#202020] group relative overflow-hidden font-medium transition-all 
                                                after:absolute after:left-0 after:bottom-[5px] after:w-0 after:h-[1px] after:content after:bg-[#59C378]  after:transition-all 
                                                hover:after:w-full">Blog details left sidebar</NavLink>
                                            </li>
        
                                            <li>
                                                <NavLink to="blog-single-fullwidth.html" className="text-[16px] lg:text-[14px] inline-block py-[5px] capitalize text-[#202020] group relative overflow-hidden font-medium transition-all 
                                                after:absolute after:left-0 after:bottom-[5px] after:w-0 after:h-[1px] after:content after:bg-[#59C378]  after:transition-all 
                                                hover:after:w-full">Blog details fullwidth</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative inline-block">
                                <NavLink to="contact.html" className="relative group text-[16px] lg:text-[14px] py-[35px] xl:py-[30px] px-[20px] xl:px-[6px] text-white block capitalize font-base-font font-medium
                                before:absolute before:left-0 before:bottom-0 before:w-full before:h-[4px] before:bg-[#59C378] before:content 
                                before:opacity-0 before:invisible before:transition-all before:rounded-[3px]
                                 hover:before:opacity-100 hover:before:visible
                                ">Contact</NavLink>
                            </li>
                        </ul>
                        <NavLink className="theme-btn col:w-50px" download="My Cv" to="/assets/images/cv.jpg">
                            <img className="hidden overflow-hidden opacity-0" alt="ImageName" src="/assets/images/cv.jpg" />
                            Resume
                        </NavLink>
                       
                     </div>  
                </div>
        </section>
        {/* <!-- end elito-header-section --> */}
    </>
  )
}

export default Header