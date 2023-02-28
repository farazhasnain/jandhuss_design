
import Link from "next/link"
import { Router, useRouter } from "next/router"
import { useState, useEffect } from "react"
import HomeHeader from '../components/HomeHeader'
import OthersHeader from '../components/OthersHeader'
function Header() {
    const [scroll,setScroll] = useState(0)
    const router = useRouter()
    useEffect(function Mount()  {
        function handleScroll() {
            setScroll( window.scrollY)
            setNavbar()
        }
        window.addEventListener('scroll', handleScroll)
        return function unMount() {
            window.removeEventListener("scroll", handleScroll);
          };
    },[])
    function setNavbar() {
            var nav = document.getElementById('nav')
            console.log(window.innerWidth)
            if(window.innerWidth > 750) {
                if(window.scrollY > 100 ) {
                    nav.style = 'position: fixed; background: var(--dark) !important;'
                }
                else {
                    nav.style = 'position: absolute; background: transparent !important;'

                }
            }
            else {
                nav.style = 'position: fixed; background: var(--dark) !important; width:100%; z-index:1;'
            }
    }
    function ToggleNavbar() {
        if(window.innerWidth < 750) {
            $('#navbarCollapse').removeClass('show')
        }
    }
    return <>
        
      <div className="container-xxl position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0" id="nav">
                <Link href="/" className="navbar-brand p-0">
                    <h1 className="text-primary m-0">
                    <img src="img/logo.png" style={{marginRight:'-7px'}} />
                        J&H Designs</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4" onClick={ToggleNavbar}>
                        <Link href='/' className="nav-item nav-link active">Home</Link>
                        <Link href='about' className="nav-item nav-link">About</Link>
                        <Link href='about' className="nav-item nav-link">Services</Link>
                        <Link href='about' className="nav-item nav-link">Menu</Link>
                        <Link href='about' className="nav-item nav-link">Contact</Link>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">More</a>
                            <div className="dropdown-menu m-0">
                                <a href="booking.html" className="dropdown-item">Booking</a>
                                <a href="team.html" className="dropdown-item">Our Team</a>
                                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            </div>
                        </div>
                    </div>
                    {/* <a href="" className="btn btn-primary py-2 px-4">Book an appointment</a> */}
                    <div className="last-icons">
                        <center>
                            <a href="#">
                                <i className="fa fa-search" ></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-shopping-bag" ></i>
                            </a>
                            <a href="#">
                                <i className="fa fa-user" ></i>
                            </a>
                        </center>
                    </div>
                </div>
            </nav>
            {
                router.asPath == '/' ?  <HomeHeader /> : <></>
            }
            {router.asPath !== '/' ?  <OthersHeader /> : <></>}
        </div>
       
    </>
}
// export  function getHtml() {
//     return <div style={{position: fixed}}>
//         My Header
//     </div>
// }
export default Header

