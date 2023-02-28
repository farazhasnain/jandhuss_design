import { setNavbarSelection } from "@/components/functions"
import { useState, useEffect } from "react"
import About from "./about"
export default function Home() {
    useEffect(function Mount()  {
        setNavbarSelection(0)
        
    },[])
    
  return (
    <>
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="service-item rounded pt-3">
                            <div className="p-4">
                                <i className="fa fa-3x fa-user-tie text-primary mb-4"></i>
                                <h5>Master Designers</h5>
                                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="service-item rounded pt-3">
                            <div className="p-4">
                                <i className="fa fa-3x fa-tasks text-primary mb-4"></i>
                                <h5>Quality Making</h5>
                                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item rounded pt-3">
                            <div className="p-4">
                                <i className="fa fa-3x fa-cart-plus text-primary mb-4"></i>
                                <h5>Online Order</h5>
                                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="service-item rounded pt-3">
                            <div className="p-4">
                                <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                                <h5>24/7 Service</h5>
                                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>{/* Teams Start */}

<div className="container-xxl pt-5 pb-3">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Master Pieces</h5>
                    <h1 className="mb-5">J&H Exclusives</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="overflow-hidden m-4">
                                <img className="img-fluid" src="img/cartier1.webp" alt="" />
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fa fa-shopping-cart"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fa fa-external-link-alt"></i></a>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="overflow-hidden m-4">
                                <img className="img-fluid" src="img/cartier2.png" alt="" />
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fa fa-shopping-cart"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fa fa-external-link-alt"></i></a>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="overflow-hidden m-4">
                                <img className="img-fluid" src="img/cartier3.webp" alt="" />
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fa fa-shopping-cart"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fa fa-external-link-alt"></i></a>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="overflow-hidden m-4">
                                <img className="img-fluid" src="img/cartier4.jpeg" alt="" />
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fa fa-shopping-cart"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fa fa-external-link-alt"></i></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row g-4">
                    <div className="col-lg-12">
                        <center>
                            <a href="" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">View All</a>
                        </center>
                    </div>
                </div>
            </div>
        </div>
<div className="container-xxl pt-5 pb-3">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Master Pieces</h5>
                    <h1 className="mb-5">36MM ROLEX WITH DIAMONDS</h1>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="overflow-hidden m-4">
                                <img className="img-fluid" src="img/cartier1.webp" alt="" />
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fa fa-shopping-cart"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fa fa-external-link-alt"></i></a>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="overflow-hidden m-4">
                                <img className="img-fluid" src="img/cartier2.png" alt="" />
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fa fa-shopping-cart"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fa fa-external-link-alt"></i></a>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="overflow-hidden m-4">
                                <img className="img-fluid" src="img/cartier3.webp" alt="" />
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fa fa-shopping-cart"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fa fa-external-link-alt"></i></a>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                        <div className="team-item text-center rounded overflow-hidden">
                            <div className="overflow-hidden m-4">
                                <img className="img-fluid" src="img/cartier4.jpeg" alt="" />
                            </div>
                            <h5 className="mb-0">Full Name</h5>
                            <small>Designation</small>
                            <div className="d-flex justify-content-center mt-3">
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fa fa-shopping-cart"></i></a>
                                <a className="btn btn-square btn-primary mx-1" href=""><i className="fa fa-external-link-alt"></i></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row g-4">
                    <div className="col-lg-12">
                        <center>
                            <a href="" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">View All</a>
                        </center>
                    </div>
                </div>
            </div>
        </div>
{/* Teams End */}
    </>
  )
}
