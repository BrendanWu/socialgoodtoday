import React from 'react'
import useScript from '../../utils/useScript';
{/* <script src="js/jquery.min.js"></script>
<script src="js/jquery-migrate-3.0.1.min.js"></script>
<script src="js/popper.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.easing.1.3.js"></script>
<script src="js/jquery.waypoints.min.js"></script>
<script src="js/jquery.stellar.min.js"></script>
<script src="js/owl.carousel.min.js"></script>
<script src="js/jquery.magnific-popup.min.js"></script>
<script src="js/bootstrap-datepicker.js"></script>

<script src="js/aos.js"></script>
<script src="js/jquery.animateNumber.min.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
<script src="js/google-map.js"></script>
<script src="js/main.js"></script> */}

const Test = () => {
    useScript("https://code.jquery.com/jquery-3.4.1.slim.min.js")
    useScript("https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js")
    useScript("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js")
  
      return (
        <div>
          <title>Givig - Non-profit Free Bootstrap 4 Template by Colorlib</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500|Gaegu:700" rel="stylesheet" />
  
          <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
              <a className="navbar-brand" href="index.html">Socialgoodtoday</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="oi oi-menu" /> Menu
              </button>
              <div className="collapse navbar-collapse" id="ftco-nav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
                  <li className="nav-item"><a href="donate.html" className="nav-link">Donate</a></li>
                  <li className="nav-item"><a href="gallery.html" className="nav-link">Gallery</a></li>
                  <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
                  <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                  <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                </ul>
              </div>
            </div>
          </nav>
          {/* END nav */}
    
          <div className="block-31" style={{position: 'relative'}}>
           
              <div className="block-30" style={{backgroundImage: 'url("https://www.etonline.com/sites/default/files/styles/video_1920x1080/public/images/2020-06/eto_george_floyd_silence_060420.jpg?h=1564cafd&itok=Sq_o-OwN")'}}>
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-7">
                      <h2 className="heading">Please Help African Children Give Them A Better Life.</h2>
                    </div>
                
                </div>
              </div>
            </div>
          </div>
          <div className="site-section">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="media block-6">
                    <div className="icon"><span className="flaticon-first-aid-kit" /></div>
                    <div className="media-body">
                      <h3 className="heading">Medical Mission</h3>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                      <p><a href="#">Learn More</a></p>
                    </div>
                  </div>     
                </div>
                <div className="col-md-4">
                  <div className="media block-6">
                    <div className="icon"><span className="flaticon-donate" /></div>
                    <div className="media-body">
                      <h3 className="heading">Make Donation Now</h3>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                      <p><a href="#">Learn More</a></p>
                    </div>
                  </div>  
                </div>
                <div className="col-md-4">
                  <div className="media block-6">
                    <div className="icon"><span className="flaticon-people" /></div>
                    <div className="media-body">
                      <h3 className="heading">We Need Volunteers</h3>
                      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                      <p><a href="#">Learn More</a></p>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div> {/* .site-section */}
          <div className="featured-donate overlay-color" style={{backgroundImage: 'url("images/bg_2.jpg")'}}>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 order-lg-2 mb-3 mb-lg-0">
                  <img src="images/bg_2.jpg" alt="Image placeholder" className="img-fluid" />
                </div>
                <div className="col-lg-4 pr-lg-5">
                  <span className="featured-text mb-3 d-block">Featured</span>
                  <h2>School in Africa Need Renovations</h2>
                  <p className="mb-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <span className="donation-time mb-3">Last donation 1w ago</span>
                  <div className="progress custom-progress">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                  <span className="fund-raised d-block mb-5">$8,100 raised of $30,000</span>
                  <p><a href="#" className="btn btn-primary btn-hover-white py-3 px-5">Donate Now</a></p>
                </div>
              </div>
            </div>
          </div> {/* .featured-donate */}
          <div className="site-section fund-raisers">
            <div className="container">
              <div className="row mb-5">
                <div className="col-md-12">
                  <h2>Top Fundraisers</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 block-11">
                  <div className="nonloop-block-11 owl-carousel">
                    <div className="card fundraise-item">
                      <a href="#"><img className="card-img-top" src="images/img_1.jpg" alt="Image placeholder" /></a>
                      <div className="card-body">
                        <h3 className="card-title"><a href="#">Children Needs Food</a></h3>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <span className="donation-time mb-3 d-block">Last donation 1w ago</span>
                        <div className="progress custom-progress-success">
                          <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span className="fund-raised d-block">$8,100 raised of $30,000</span>
                      </div>
                    </div>
                    <div className="card fundraise-item">
                      <a href="#"><img className="card-img-top" src="images/img_2.jpg" alt="Image placeholder" /></a>
                      <div className="card-body">
                        <h3 className="card-title"><a href="#">Children Needs Food</a></h3>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <span className="donation-time mb-3 d-block">Last donation 1w ago</span>
                        <div className="progress custom-progress-success">
                          <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span className="fund-raised d-block">$8,100 raised of $30,000</span>
                      </div>
                    </div>
                    <div className="card fundraise-item">
                      <a href="#"><img className="card-img-top" src="images/img_3.jpg" alt="Image placeholder" /></a>
                      <div className="card-body">
                        <h3 className="card-title"><a href="#">Children Needs Food</a></h3>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <span className="donation-time mb-3 d-block">Last donation 1w ago</span>
                        <div className="progress custom-progress-success">
                          <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span className="fund-raised d-block">$8,100 raised of $30,000</span>
                      </div>
                    </div>
                    <div className="card fundraise-item">
                      <a href="#"><img className="card-img-top" src="images/img_1.jpg" alt="Image placeholder" /></a>
                      <div className="card-body">
                        <h3 className="card-title"><a href="#">Children Needs Food</a></h3>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <span className="donation-time mb-3 d-block">Last donation 1w ago</span>
                        <div className="progress custom-progress-success">
                          <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span className="fund-raised d-block">$8,100 raised of $30,000</span>
                      </div>
                    </div>
                    <div className="card fundraise-item">
                      <a href="#"><img className="card-img-top" src="images/img_2.jpg" alt="Image placeholder" /></a>
                      <div className="card-body">
                        <h3 className="card-title"><a href="#">Children Needs Food</a></h3>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <span className="donation-time mb-3 d-block">Last donation 1w ago</span>
                        <div className="progress custom-progress-success">
                          <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span className="fund-raised d-block">$8,100 raised of $30,000</span>
                      </div>
                    </div>
                    <div className="card fundraise-item">
                      <a href="#"><img className="card-img-top" src="images/img_3.jpg" alt="Image placeholder" /></a>
                      <div className="card-body">
                        <h3 className="card-title"><a href="#">Children Needs Food</a></h3>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <span className="donation-time mb-3 d-block">Last donation 1w ago</span>
                        <div className="progress custom-progress-success">
                          <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span className="fund-raised d-block">$8,100 raised of $30,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> {/* .section */}
          <div className="site-section fund-raisers">
            <div className="container">
              <div className="row mb-5">
                <div className="col-md-12 text-center">
                  <h2>Latest Donations</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-3 mb-5">
                  <div className="person-donate text-center bg-light pt-4">
                    <img src="images/person_1.jpg" alt="Image placeholder" className="img-fluid" />
                    <div className="donate-info">
                      <h2>Jean Smith</h2>
                      <span className="time d-block mb-3">Donated 3 hours ago</span>
                      <div className="donate-amount d-flex">
                        <div className="label">Donated</div>
                        <div className="amount">$1,150</div>
                      </div>
                    </div>
                  </div>    
                </div>
                <div className="col-md-6 col-lg-3 mb-5">
                  <div className="person-donate text-center bg-light pt-4">
                    <img src="images/person_2.jpg" alt="Image placeholder" className="img-fluid" />
                    <div className="donate-info">
                      <h2>Christine Charles</h2>
                      <span className="time d-block mb-3">Donated 3 hours ago</span>
                      <div className="donate-amount d-flex">
                        <div className="label">Donated</div>
                        <div className="amount">$150</div>
                      </div>
                    </div>
                  </div>    
                </div>
                <div className="col-md-6 col-lg-3 mb-5">
                  <div className="person-donate text-center bg-light pt-4">
                    <img src="images/person_3.jpg" alt="Image placeholder" className="img-fluid" />
                    <div className="donate-info">
                      <h2>Albert Sluyter</h2>
                      <span className="time d-block mb-3">Donated 3 hours ago</span>
                      <div className="donate-amount d-flex">
                        <div className="label">Donated</div>
                        <div className="amount">$534</div>
                      </div>
                    </div>
                  </div>    
                </div>
                <div className="col-md-6 col-lg-3 mb-5">
                  <div className="person-donate text-center bg-light pt-4">
                    <img src="images/person_4.jpg" alt="Image placeholder" className="img-fluid" />
                    <div className="donate-info">
                      <h2>Andrew Holloway</h2>
                      <span className="time d-block mb-3">Donated 3 hours ago</span>
                      <div className="donate-amount d-flex">
                        <div className="label">Donated</div>
                        <div className="amount">$2,500</div>
                      </div>
                    </div>
                  </div>    
                </div>
              </div>
            </div>
          </div> {/* .section */}
          <div className="featured-section overlay-color-2" style={{backgroundImage: 'url("images/bg_3.jpg")'}}>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img src="images/bg_3.jpg" alt="Image placeholder" className="img-fluid" />
                </div>
                <div className="col-md-6 pl-md-5">
                  <span className="featured-text d-block mb-3">Success Stories</span>
                  <h2>School in Africa Need Renovations. Thanks To All Donors</h2>
                  <p className="mb-3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                  <span className="fund-raised d-block mb-5">We have raised $30,000</span>
                  <p><a href="#" className="btn btn-success btn-hover-white py-3 px-5">Read The Full Story</a></p>
                </div>
              </div>
            </div>
          </div> {/* .featured-donate */}
          <div className="site-section bg-light">
            <div className="container">
              <div className="row mb-5">
                <div className="col-md-12">
                  <h2>Latest News</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
                  <div className="post-entry">
                    <a href="#" className="mb-3 img-wrap">
                      <img src="images/img_4.jpg" alt="Image placeholder" className="img-fluid" />
                      <span className="date">July 26, 2018</span>
                    </a>
                    <h3><a href="#">Be A Volunteer Today</a></h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    <p><a href="#">Read More</a></p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
                  <div className="post-entry">
                    <a href="#" className="mb-3 img-wrap">
                      <img src="images/img_5.jpg" alt="Image placeholder" className="img-fluid" />
                      <span className="date">July 26, 2018</span>
                    </a>
                    <h3><a href="#">You May Save The Life of A Child</a></h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    <p><a href="#">Read More</a></p>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
                  <div className="post-entry">
                    <a href="#" className="mb-3 img-wrap">
                      <img src="images/img_6.jpg" alt="Image placeholder" className="img-fluid" />
                      <span className="date">July 26, 2018</span>
                    </a>
                    <h3><a href="#">Children That Needs Care</a></h3>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                    <p><a href="#">Read More</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div> {/* .section */}
          <footer className="footer">
            <div className="container">
              <div className="row mb-5">
                <div className="col-md-6 col-lg-4">
                  <h3 className="heading-section">About Us</h3>
                  <p className="mb-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                  <p><a href="#" className="btn btn-primary px-4 py-3">Join Volunteer</a></p>
                </div>
                <div className="col-md-6 col-lg-4">
                  <h3 className="heading-section">Blog</h3>
                  <div className="block-21 d-flex mb-4">
                    <figure className="mr-3">
                      <img src="images/img_1.jpg" alt="" className="img-fluid" />
                    </figure>
                    <div className="text">
                      <h3 className="heading"><a href="#">Give Meal A Day</a></h3>
                      <div className="meta">
                        <div><a href="#"><span className="icon-calendar" /> July 29, 2018</a></div>
                        <div><a href="#"><span className="icon-person" /> Admin</a></div>
                        <div><a href="#"><span className="icon-chat" /> 19</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="block-21 d-flex mb-4">
                    <figure className="mr-3">
                      <img src="images/img_2.jpg" alt="" className="img-fluid" />
                    </figure>
                    <div className="text">
                      <h3 className="heading"><a href="#">Free Education For African Children</a></h3>
                      <div className="meta">
                        <div><a href="#"><span className="icon-calendar" /> July 29, 2018</a></div>
                        <div><a href="#"><span className="icon-person" /> Admin</a></div>
                        <div><a href="#"><span className="icon-chat" /> 19</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="block-21 d-flex mb-4">
                    <figure className="mr-3">
                      <img src="images/img_4.jpg" alt="" className="img-fluid" />
                    </figure>
                    <div className="text">
                      <h3 className="heading"><a href="#">Join As A Volunteers</a></h3>
                      <div className="meta">
                        <div><a href="#"><span className="icon-calendar" /> July 29, 2018</a></div>
                        <div><a href="#"><span className="icon-person" /> Admin</a></div>
                        <div><a href="#"><span className="icon-chat" /> 19</a></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="block-23">
                    <h3 className="heading-section">Contact Info</h3>
                    <ul>
                      <li><span className="icon icon-map-marker" /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                      <li><a href="#"><span className="icon icon-phone" /><span className="text">+2 392 3929 210</span></a></li>
                      <li><a href="#"><span className="icon icon-envelope" /><span className="text">info@yourdomain.com</span></a></li>
                      <li><span className="icon icon-clock-o" /><span className="text">Monday — Friday 8:00am - 5:00pm</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row pt-5">
                <div className="col-md-12 text-center">
                  <p>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank" className="text-primary">Colorlib</a>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  </p>
                </div>
              </div>
            </div>
          </footer>
          {/* loader */}
        </div>
      );
    };

    export default Test