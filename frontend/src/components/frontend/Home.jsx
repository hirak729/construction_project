import React from 'react';
import AboutImage from '../../assets/images/about-us.jpg';
import ServiceImage from '../../assets/images/construction1.jpg';
import ConstructionImage from '../../assets/images/construction2.jpg';
import Icon1 from '../../assets/images/icon-1.svg';
import Icon2 from '../../assets/images/icon-2.svg';
import Icon3 from '../../assets/images/icon-3.svg';
import AvatarImage from '../../assets/images/author-2.jpg';
import BlogImage from '../../assets/images/construction3.jpg';
import Header from '../common/header';
import Footer from '../common/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {  Pagination } from 'swiper/modules';
import 'swiper/css/pagination';


const Home = () => {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className='section-1'>
                    <div className='hero d-flex align-items-center justify-content-center'>
                        <div className='conatiner-fluid'>
                            <div className='text-center'>
                                <span>Welcome Amazing Constructions</span>
                                <h1>Crafting dreams with <br />precision and excellence.</h1>
                                <p>We excel at transforming visions into reality through outstanding craftsmanship and precise <br />attention to detail.With years of experience and a dedication to quality.
                                </p>
                                <div className='mt-4'>
                                    <a className='btn btn-primary large'>Contact Now</a>
                                    <a className='btn btn-secondary large ms-3'>View Projects</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* About Us Section */}
                <section className='section-2 py-5'>
                    <div className='container py-5'>
                        <div className='row'>
                            <div className='col-md-6 '>
                                <img src={AboutImage} className='w-100' />
                            </div>
                            <div className='col-md-6'>
                                <span>About Us</span>
                                <h2>Crafting structure that last a lifetime</h2>
                                <p>
                                    Building enduring structures requires a comprehensive approach that combine advance materials, resilient design, routine maintenance, and sustainable practices. By drawing on historical insights and utilizing mordern technology.
                                </p>
                                <p>
                                    Designing structure that stand the test of time involves a seamless blend of cutting-edge materials, durable design, ongoing upkeep, and eco-friendly practices. By combining lessons from the past with the power of mordern technology.
                                </p>

                            </div>
                        </div>
                    </div>
                </section>
                {/* Our Services Section */}
                <section className='section-3 bg-light py-5'>
                    <div className='container-fluid py-5'>
                        <div className='section-header text-center'>
                            <span>Our Services</span>
                            <h2>Our construction services</h2>
                            <p>We offer a diverse array of construction services, spanning residensial, commercial, and industrial projects.
                            </p>
                        </div>
                        <div className='row pt-4'>
                            <div className='col-md-3 col-lg-3'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ServiceImage} className='w-100' />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>Speciality Construction</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>Speciality construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                        </div>
                                        <a href='#' className='btn btn-primary'>Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 col-lg-3'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ServiceImage} className='w-100' />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>Speciality Construction</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>Speciality construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                        </div>
                                        <a href='#' className='btn btn-primary'>Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 col-lg-3'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ServiceImage} className='w-100' />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>Speciality Construction</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>Speciality construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                        </div>
                                        <a href='#' className='btn btn-primary'>Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 col-lg-3'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ServiceImage} className='w-100' />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>Speciality Construction</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>Speciality construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                        </div>
                                        <a href='#' className='btn btn-primary'>Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* why choose us Section */}
                <section className='section-4 py-5'>
                    <div className='container py-5'>
                        <div className='section-header text-center'>
                            <span>Why Choose Us</span>
                            <h2>Discover our wide variety of projects</h2>
                            <p>Created in close partnership with our clients and collaborators, this approch merges industry experties, <br />
                                decades of experience, innovation, and flexibility to consistently deliver excellence.
                            </p>
                        </div>
                        <div className='row pt-4'>
                            <div className='col-md-4'>
                                <div className='card shadow border-0 p-4'>
                                    <div className='card-icon'>
                                        <img src={Icon1} />
                                    </div>
                                    <div className='card-title mt-3'>
                                        <h3>Cutting-Edge Solution</h3>
                                    </div>
                                    <p>
                                        Small action create big impacts. It all begins and ends with each employee committing to safer work practices daily. ensuring they return home safely.
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card shadow border-0 p-4'>
                                    <div className='card-icon'>
                                        <img src={Icon2} />
                                    </div>
                                    <div className='card-title mt-3'>
                                        <h3>Cutting-Edge Solution</h3>
                                    </div>
                                    <p>
                                        Small action create big impacts. It all begins and ends with each employee committing to safer work practices daily. ensuring they return home safely.
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card shadow border-0 p-4'>
                                    <div className='card-icon'>
                                        <img src={Icon3} />
                                    </div>
                                    <div className='card-title mt-3'>
                                        <h3>Cutting-Edge Solution</h3>
                                    </div>
                                    <p>
                                        Small action create big impacts. It all begins and ends with each employee committing to safer work practices daily. ensuring they return home safely.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Our project Section */}
                <section className='section-3 bg-light py-5'>
                    <div className='container-fluid py-5'>
                        <div className='section-header text-center'>
                            <span>Our Projects</span>
                            <h2>Discover our diverse range of projects</h2>
                            <p>We offer a diverse array of construction services, spanning residensial, commercial, and industrial projects.
                            </p>
                        </div>
                        <div className='row pt-4'>
                            <div className='col-md-3 col-lg-3'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ConstructionImage} className='w-100' />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>Kolkata Project</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>Speciality construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                        </div>
                                        <a href='#' className='btn btn-primary'>Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 col-lg-3'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ConstructionImage} className='w-100' />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>Kolkata Project</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>Speciality construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                        </div>
                                        <a href='#' className='btn btn-primary'>Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 col-lg-3'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ConstructionImage} className='w-100' />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>Kolkata Project</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>Speciality construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                        </div>
                                        <a href='#' className='btn btn-primary'>Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3 col-lg-3'>
                                <div className='item'>
                                    <div className='service-image'>
                                        <img src={ConstructionImage} className='w-100' />
                                    </div>
                                    <div className='service-body'>
                                        <div className='service-title'>
                                            <h3>Kolkata Project</h3>
                                        </div>
                                        <div className='service-content'>
                                            <p>Speciality construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, materials, and techniques.</p>
                                        </div>
                                        <a href='#' className='btn btn-primary'>Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Testimonial Section */}
                <section className='section-5 py-5'>
                    <div className='container py-5'>
                        <div className='section-header text-center'>
                            <span>Testimonials</span>
                            <h2>What people are saying about us</h2>
                            <p>We offer a diverse array of construction services, spanning residensial, commercial, and industrial projects.
                            </p>
                        </div>
                        <Swiper
                            modules={[Pagination]}
                            spaceBetween={50}
                            slidesPerView={3}
                            pagination={{ clickable: true }}
                        >
                            <SwiperSlide>
                                <div className='card shadow border-0'>
                                    <div className='card-body p-5'>
                                        <div className='rating'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                        <div className='content pt-4 pb-2'>
                                        <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                        </div>
                                        <hr/>
                                        <div className='d-flex meta'>
                                            <div>
                                                <img src={AvatarImage} width={50} />
                                            </div>
                                            <div className='ps-3'>
                                                <div className='name'>John Doe</div>
                                                <div>CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='card shadow border-0'>
                                    <div className='card-body p-5'>
                                        <div className='rating'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                        <div className='content pt-4 pb-2'>
                                        <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                        </div>
                                        <hr/>
                                        <div className='d-flex meta'>
                                            <div>
                                                <img src={AvatarImage} width={50} />
                                            </div>
                                            <div className='ps-3'>
                                                <div className='name'>John Doe</div>
                                                <div>CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='card shadow border-0'>
                                    <div className='card-body p-5'>
                                        <div className='rating'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                        <div className='content pt-4 pb-2'>
                                        <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                        </div>
                                        <hr/>
                                        <div className='d-flex meta'>
                                            <div>
                                                <img src={AvatarImage} width={50} />
                                            </div>
                                            <div className='ps-3'>
                                                <div className='name'>John Doe</div>
                                                <div>CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='card shadow border-0'>
                                    <div className='card-body p-5'>
                                        <div className='rating'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                        <div className='content pt-4 pb-2'>
                                        <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                        </div>
                                        <hr/>
                                        <div className='d-flex meta'>
                                            <div>
                                                <img src={AvatarImage} width={50} />
                                            </div>
                                            <div className='ps-3'>
                                                <div className='name'>John Doe</div>
                                                <div>CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='card shadow border-0'>
                                    <div className='card-body p-5'>
                                        <div className='rating'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                        </div>
                                        <div className='content pt-4 pb-2'>
                                        <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                        </div>
                                        <hr/>
                                        <div className='d-flex meta'>
                                            <div>
                                                <img src={AvatarImage} width={50} />
                                            </div>
                                            <div className='ps-3'>
                                                <div className='name'>John Doe</div>
                                                <div>CEO</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                {/* News & blog Section */}
                <section className='section-6 bg-light py-5'>
                    <div className='container py-5'>
                        <div className='section-header text-center'>
                            <span>Blog & News</span>
                            <h2>Article & Blog Posts</h2>
                        </div>
                        <div className='row pt-3'>
                            <div className='col-md-4'>
                                <div className='card shadow border-0'>
                                <div className='card-img-top'>
                                    <img src={BlogImage} className='w-100' />
                                </div>
                                    <div className='card-body p-4'>
                                        <div className='mb-3'>
                                            <a href='#' className='title'>Dummy Blog Tittle</a>
                                        </div>
                                        <a href='#' className='btn btn-primary small'>Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card shadow border-0'>
                                <div className='card-img-top'>
                                    <img src={BlogImage} className='w-100' />
                                </div>
                                    <div className='card-body p-4'>
                                        <div className='mb-3'>
                                            <a href='#' className='title'>Dummy Blog Tittle</a>
                                        </div>
                                        <a href='#' className='btn btn-primary small'>Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card shadow border-0'>
                                <div className='card-img-top'>
                                    <img src={BlogImage} className='w-100' />
                                </div>
                                    <div className='card-body p-4'>
                                        <div className='mb-3'>
                                            <a href='#' className='title'>Dummy Blog Tittle</a>
                                        </div>
                                        <a href='#' className='btn btn-primary small'>Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home