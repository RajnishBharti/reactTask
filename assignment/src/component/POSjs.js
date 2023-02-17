import { React, useEffect } from 'react';

function POS() {


    let windowsize = window.innerWidth;
    

    

    function openNav() {
        if(windowsize>768){
            document.getElementById("mySidenav").style.width = "117px";
            document.getElementById("main").style.width = "94%";
            document.getElementById("main").style.marginLeft = "117px";
        }
        else{
            document.getElementById("mySidenav").style.width = "50%";
        }
        

    }

    function closeNav() {
        if(windowsize>768){
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.width = "100%";
            document.querySelector("header input").style.marginLeft = "60px";
        }
        else{
            document.getElementById("mySidenav").style.width = "0%";  
        }
        
        
    }

    return (
        <>

            <div className="container-fluid prdPage">
                <div className="row">
                    <div className="col-lg-1">
                        <span className="stickArrow" onClick={openNav}>&#9776;</span>
                        <div id="mySidenav" className="sidenav">
                            <div className="top-logo-area">
                                <span className="closeArrow" onClick={closeNav}>&#9776;</span>

                                    <a className='sidProfile'>
                                        <img className='prflPic' src="images/profile.svg" />

                                        <img src="images/white-well.svg" className='bell' />

                                    </a>
                               
                            </div>

                            <ul className="sideDropdown">
                                

                                <li className="active">
                                    <a>
                                        <img className="left" src="images/information-icon.svg" style={{opacity:0}} />
                                    </a>
                                </li>
                                <li className="mb-1">
                                    <a>
                                        <img className="left" src="images/calculator.svg" />
                                    </a>
                                </li>
                                <li className="mb-1">
                                    <a>
                                        <img className="left" src="images/calulating.svg" />
                                    </a>
                                </li>
                                <li className="mb-1">
                                    <a>
                                        <img className="left" src="images/add.svg" />
                                    </a>
                                </li>
                                <li className="mb-1">
                                    <a>
                                        <img className="left" src="images/cancel.png" />
                                    </a>
                                </li>
                            </ul>


                            <ul className="bottomElement">
                                <li className="mb-1"><a href="#"><img className="left" src="images/settings.svg" /> </a></li>
                                <li className="mb-1"><a href="#"><img className="left" src="images/subscription.svg" /> </a></li>
                            </ul>
                            <ul className="bottomElement mt-0">
                                <li><a href="#"><img className="left" src="images/log-out.svg" /></a></li>
                            </ul>

                        </div>
                    </div>
                    <div id="main" className="col-lg-11">


                        <div className="innerPage webps">

                            
                            <div className='d-flex'>
                                <div className='col-p'>
                                    
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-6 col-md-12 col-sm-12'>
                                    <div className='card'>
                                        <div className='topElement'>
                                            <select class="form-select walkIncustomer" name="cars" id="cars">
                                                <option value="Walk in customer">Walk in customer</option>
                                                <option value="Walk in customer">Walk in customer</option>
                                                <option value="Walk in customer">Walk in customer</option>
                                                <option value="Walk in customer">Walk in customer</option>
                                            </select>
                                            <div className='topOper'>
                                                <img src='images/pencil.svg' />
                                            </div>
                                            <div className='topOper'>
                                                <img src='images/eye.svg' />
                                            </div>
                                            <div className='topOper'>
                                                <img src='images/plusView.svg' />
                                            </div>
                                        </div>
                                        <div className='topElement'>
                                            <input className='searchProduct' type="text" placeholder='Search' />
                                        </div>
                                        <div className='dataTab ps-0 pe-0 mt-0 pt-0'>
                                        <div className="table-responsive ps">
                                                    <table id="datatable1" className="table table-striped ">
                                                        <thead>
                                                            <tr className="headings">
                                                                <th className="column-title">Item</th>
                                                                <th className="column-title">Price</th>
                                                                <th className="column-title">Quntity</th>
                                                                <th className="column-title">Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            <tr>
                                                                <td data-label="Item">                                                
                                                                    <div className='productItemsName'>
                                                                        <span>71071725</span>
                                                                        <strong>APPLE - RED DELICIOUS</strong> 
                                                                        <small> APPLE - RED DELICIOUS</small>
                                                                    </div>
                                                                </td>
                                                                <td data-label="Price">
                                                                    <div className='d-flex prdqtyitem'>
                                                                    <input value="2" />
                                                                    <button>+</button>
                                                                    </div>
                                                                </td>
                                                                <td className='Quntity'>
                                                                <div className='d-flex prdqtyitem'>
                                                                    <input value="1" />
                                                                    <button>-</button>
                                                                    </div>                                                                    
                                                                    </td>
                                                                <td data-label="Total">1.500r</td>
                                                            </tr>

                                                            <tr>
                                                                <td data-label="Item">                                                
                                                                    <div className='productItemsName'>
                                                                        <strong>06464311 - POTATO</strong> 
                                                                    </div>
                                                                </td>
                                                                <td data-label="Price">
                                                                    <div className='d-flex prdqtyitem'>
                                                                    <input value="2" />
                                                                    <button>+</button>
                                                                    </div>
                                                                </td>
                                                                <td className='Quntity'>
                                                                <div className='d-flex prdqtyitem'>
                                                                    <input value="1" />
                                                                    <button>-</button>
                                                                    </div>                                                                    
                                                                    </td>
                                                                <td data-label="Total">1.500r</td>
                                                            </tr>
                                                            <tr>
                                                                <td data-label="Item">                                                
                                                                    <div className='productItemsName'>
                                                                        <strong>06464311 - POTATO</strong> 
                                                                    </div>
                                                                </td>
                                                                <td data-label="Price">
                                                                    <div className='d-flex prdqtyitem'>
                                                                    <input value="2" />
                                                                    <button>+</button>
                                                                    </div>
                                                                </td>
                                                                <td className='Quntity'>
                                                                <div className='d-flex prdqtyitem'>
                                                                    <input value="1" />
                                                                    <button>-</button>
                                                                    </div>                                                                    
                                                                    </td>
                                                                <td data-label="Total">1.500r</td>
                                                            </tr>
                                                            <tr>
                                                                <td data-label="Item">                                                
                                                                    <div className='productItemsName'>
                                                                        <strong>06464311 - POTATO</strong> 
                                                                    </div>
                                                                </td>
                                                                <td data-label="Price">
                                                                    <div className='d-flex prdqtyitem'>
                                                                    <input value="2" />
                                                                    <button>+</button>
                                                                    </div>
                                                                </td>
                                                                <td className='Quntity'>
                                                                <div className='d-flex prdqtyitem'>
                                                                    <input value="1" />
                                                                    <button>-</button>
                                                                    </div>                                                                    
                                                                    </td>
                                                                <td data-label="Total">1.500r</td>
                                                            </tr>

                                                            
                                                        </tbody>
                                                    </table>
                                                </div>
                                        </div>
                                        <div className='billingInfo'>
                                           <ul>

                                            <li>Items:</li>
                                            <li>6 (7)</li>
                                            
                                            <li>Sum:</li>
                                            <li>10.100</li>


                                            <li>Discount:</li>
                                            <li> (0.000) 0.000</li>

                                            <li>Connecting:</li>
                                            <li>0</li>

                                            <li className='total'>Total:</li>
                                            <li className='total'>13.55 OMR</li>

                                           </ul>
                                        </div>
                                        <div className='row'>
                                            <div className='col-lg-3 col-md-6 col-6'>
                                                <div className='billingActivity bgOne'>
                                                <div className='iconimgbox'>
                                                    <img src="images/cancelation.svg" />
                                                    </div>
                                                Cancelation
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-md-6 col-6'>
                                                <div className='billingActivity bgTwo'>
                                               <div className='iconimgbox'>
                                                    <img src="images/hold.svg" />
                                                </div> 
                                                Hold
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-md-6 col-6'>
                                                <div className='billingActivity bgThree'>
                                                <div className='iconimgbox'>
                                                <img src="images/call.svg" />
                                                </div>
                                                Order
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-md-6 col-6'>
                                                <div className='billingActivity bgFour'>
                                                <div className='iconimgbox'>
                                                <img src="images/receipt.svg" />
                                                </div>
                                                Receipt
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className='row'>
                                            <div className='col-lg-12'>
                                               <button className='payNow'>Pay Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-lg-6'>
                                    <div className="card dataTab mt-0">
                                    <div className='tabSearcharea'>
                                            <input type="text" placeholder="Search" name="search" autocomplete="off" class="form-control" value="" />
                                            </div>

                                        <ul className="nav nav-tabs" id="myTab">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-bs-toggle="tab" data-bs-target="#prd1">Section</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#prd2">Subsections</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#prd3">Brands</a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#prd4">Gift card salesr</a>
                                            </li>
                                        </ul>

                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="prd1">

                                                        {/* slider banner */}
                                                        <div id="crdPr1" class="carousel slide">
                                                        <div class="carousel-inner">
                                                            <div class="carousel-item active">      
                                                                <div className='row'>
                                                                    <div className='col-lg-4 col-4 mt-2'>
                                                                        <div className='bg-light itmesCol'>
                                                                            Dresses
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4 col-4 mt-2'>
                                                                        <div className='bg-dark text-light itmesCol'>
                                                                            Features
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4 col-4 mt-2'>
                                                                        <div className='bg-light itmesCol'>
                                                                            Bags
                                                                        </div>
                                                                    </div>
                                                            </div>
                                                            </div>
                                                            <div class="carousel-item">
                                                            <div className='row'>
                                                                   <div className='col-lg-4 col-4 mt-2'>
                                                                        <div className='bg-light itmesCol'>
                                                                            Dresses
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4 col-4 mt-2'>
                                                                        <div className='bg-dark itmesCol text-light'>
                                                                            Features
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4 col-4 mt-2'>
                                                                        <div className='bg-light itmesCol '>
                                                                            Bags
                                                                        </div>
                                                                    </div>
                                                            </div>
                                                            </div>  
                                                        </div>
                                                        <button class="carousel-control-prev" type="button" data-bs-target="#crdPr1" data-bs-slide="prev">
                                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                            <span class="visually-hidden">Previous</span>
                                                        </button>
                                                        <button class="carousel-control-next" type="button" data-bs-target="#crdPr1" data-bs-slide="next">
                                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                            <span class="visually-hidden">Next</span>
                                                        </button>
                                                        </div>
                                                        {/* end slider banner */}

                                                         {/* Gallery Here */}

                                                         <div className='galleryImage'>
                                                            <img src='images/gallery-1.svg'/>
                                                            <img src='images/gallery-2.svg'/>
                                                            <img src='images/gallery-3.svg'/>
                                                            <img src='images/gallery-4.svg'/>
                                                            <img src='images/gallery-5.svg'/>
                                                            <img src='images/gallery-6.svg'/>
                                                            <img src='images/gallery-7.svg'/>
                                                            <img src='images/gallery-8.svg'/>
                                                            <img src='images/gallery-9.svg'/>
                                                            <img src='images/gallery-10.svg'/>
                                                            <img src='images/gallery-11.svg'/>
                                                            <img src='images/gallery-12.svg'/>
                                                            <img src='images/gallery-13.svg'/>
                                                            <img src='images/gallery-14.svg'/>
                                                            <img src='images/gallery-15.svg'/>
                                                         </div>

                                                          {/* end Gallery */}


                                            </div>
                                            <div className="tab-pane fade" id="prd2">

                                               
                                           {/* slider banner */}
                                           <div id="crdPr2" class="carousel slide">
                                                        <div class="carousel-inner">
                                                            <div class="carousel-item active">      
                                                                <div className='row'>
                                                                    <div className='col-lg-4 col-4 mt-2'>
                                                                        <div className='bg-light itmesCol'>
                                                                            Dresses
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4 col-4 mt-2'>
                                                                        <div className='bg-dark text-light itmesCol'>
                                                                            Features
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4 col-4 mt-2'>
                                                                        <div className='bg-light itmesCol'>
                                                                            Bags
                                                                        </div>
                                                                    </div>
                                                            </div>
                                                            </div>
                                                            <div class="carousel-item">
                                                            <div className='row'>
                                                                   <div className='col-lg-4 col-4 mt-2'>
                                                                        <div className='bg-light itmesCol'>
                                                                            Dresses
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4 col-4 mt-2'>
                                                                        <div className='bg-dark itmesCol text-light'>
                                                                            Features
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4 col-4 mt-2'>
                                                                        <div className='bg-light itmesCol '>
                                                                            Bags
                                                                        </div>
                                                                    </div>
                                                            </div>
                                                            </div>  
                                                        </div>
                                                        <button class="carousel-control-prev" type="button" data-bs-target="#crdPr2" data-bs-slide="prev">
                                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                            <span class="visually-hidden">Previous</span>
                                                        </button>
                                                        <button class="carousel-control-next" type="button" data-bs-target="#crdPr2" data-bs-slide="next">
                                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                            <span class="visually-hidden">Next</span>
                                                        </button>
                                                        </div>
                                                        {/* end slider banner */}

                                                         {/* Gallery Here */}

                                                         <div className='galleryImage'>
                                                            <img src='images/gallery-1.svg'/>
                                                            <img src='images/gallery-2.svg'/>
                                                            <img src='images/gallery-3.svg'/>
                                                            <img src='images/gallery-4.svg'/>
                                                            <img src='images/gallery-5.svg'/>
                                                            <img src='images/gallery-6.svg'/>
                                                            <img src='images/gallery-7.svg'/>
                                                            <img src='images/gallery-8.svg'/>
                                                            <img src='images/gallery-9.svg'/>
                                                            <img src='images/gallery-10.svg'/>
                                                            <img src='images/gallery-11.svg'/>
                                                            <img src='images/gallery-12.svg'/>
                                                            <img src='images/gallery-13.svg'/>
                                                            <img src='images/gallery-14.svg'/>
                                                            <img src='images/gallery-15.svg'/>
                                                         </div>

                                                          {/* end Gallery */}



                                            </div>
                                            <div className="tab-pane fade" id="prd3">

                                            {/* slider banner */}
                                            <div id="crdPr3" class="carousel slide">
                                                        <div class="carousel-inner">
                                                            <div class="carousel-item active">      
                                                                <div className='row'>
                                                                    <div className='col-lg-4 col-4 mt-2'>
                                                                        <div className='bg-light itmesCol'>
                                                                            Dresses
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4 col-4 mt-2'>
                                                                        <div className='bg-dark text-light itmesCol'>
                                                                            Features
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4 col-4 mt-2'>
                                                                        <div className='bg-light itmesCol'>
                                                                            Bags
                                                                        </div>
                                                                    </div>
                                                            </div>
                                                            </div>
                                                            <div class="carousel-item">
                                                            <div className='row'>
                                                                   <div className='col-lg-4 col-4 mt-2'>
                                                                        <div className='bg-light itmesCol'>
                                                                            Dresses
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4 col-4 mt-2'>
                                                                        <div className='bg-dark itmesCol text-light'>
                                                                            Features
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4 col-4 mt-2'>
                                                                        <div className='bg-light itmesCol '>
                                                                            Bags
                                                                        </div>
                                                                    </div>
                                                            </div>
                                                            </div>  
                                                        </div>
                                                        <button class="carousel-control-prev" type="button" data-bs-target="#crdPr3" data-bs-slide="prev">
                                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                            <span class="visually-hidden">Previous</span>
                                                        </button>
                                                        <button class="carousel-control-next" type="button" data-bs-target="#crdPr3" data-bs-slide="next">
                                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                            <span class="visually-hidden">Next</span>
                                                        </button>
                                                        </div>
                                                        {/* end slider banner */}

                                                         {/* Gallery Here */}

                                                         <div className='galleryImage'>
                                                            <img src='images/gallery-1.svg'/>
                                                            <img src='images/gallery-2.svg'/>
                                                            <img src='images/gallery-3.svg'/>
                                                            <img src='images/gallery-4.svg'/>
                                                            <img src='images/gallery-5.svg'/>
                                                            <img src='images/gallery-6.svg'/>
                                                            <img src='images/gallery-7.svg'/>
                                                            <img src='images/gallery-8.svg'/>
                                                            <img src='images/gallery-9.svg'/>
                                                            <img src='images/gallery-10.svg'/>
                                                            <img src='images/gallery-11.svg'/>
                                                            <img src='images/gallery-12.svg'/>
                                                            <img src='images/gallery-13.svg'/>
                                                            <img src='images/gallery-14.svg'/>
                                                            <img src='images/gallery-15.svg'/>
                                                         </div>

                                                          {/* end Gallery */}



                                            </div>
                                            <div className="tab-pane fade" id="prd4">
                                            {/* slider banner */}
                                            <div id="crdPr4" class="carousel slide">
                                                        <div class="carousel-inner">
                                                            <div class="carousel-item active">      
                                                                <div className='row'>
                                                                    <div className='col-lg-4 col-4 mt-2'>
                                                                        <div className='bg-light itmesCol'>
                                                                            Dresses
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4 col-4 mt-2'>
                                                                        <div className='bg-dark text-light itmesCol'>
                                                                            Features
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4 col-4 mt-2'>
                                                                        <div className='bg-light itmesCol'>
                                                                            Bags
                                                                        </div>
                                                                    </div>
                                                            </div>
                                                            </div>
                                                            <div class="carousel-item">
                                                            <div className='row'>
                                                                   <div className='col-lg-4 col-4 mt-2'>
                                                                        <div className='bg-light itmesCol'>
                                                                            Dresses
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4 col-4 mt-2'>
                                                                        <div className='bg-dark itmesCol text-light'>
                                                                            Features
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-lg-4 col-4 mt-2'>
                                                                        <div className='bg-light itmesCol '>
                                                                            Bags
                                                                        </div>
                                                                    </div>
                                                            </div>
                                                            </div>  
                                                        </div>
                                                        <button class="carousel-control-prev" type="button" data-bs-target="#crdPr4" data-bs-slide="prev">
                                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                            <span class="visually-hidden">Previous</span>
                                                        </button>
                                                        <button class="carousel-control-next" type="button" data-bs-target="#crdPr4" data-bs-slide="next">
                                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                            <span class="visually-hidden">Next</span>
                                                        </button>
                                                        </div>
                                                        {/* end slider banner */}

                                                         {/* Gallery Here */}

                                                         <div className='galleryImage'>
                                                            <img src='images/gallery-1.svg'/>
                                                            <img src='images/gallery-2.svg'/>
                                                            <img src='images/gallery-3.svg'/>
                                                            <img src='images/gallery-4.svg'/>
                                                            <img src='images/gallery-5.svg'/>
                                                            <img src='images/gallery-6.svg'/>
                                                            <img src='images/gallery-7.svg'/>
                                                            <img src='images/gallery-8.svg'/>
                                                            <img src='images/gallery-9.svg'/>
                                                            <img src='images/gallery-10.svg'/>
                                                            <img src='images/gallery-11.svg'/>
                                                            <img src='images/gallery-12.svg'/>
                                                            <img src='images/gallery-13.svg'/>
                                                            <img src='images/gallery-14.svg'/>
                                                            <img src='images/gallery-15.svg'/>
                                                         </div>

                                                          {/* end Gallery */}



                                            </div>
                                           





                                        </div>


                                    </div>
                                </div>
                            </div>
                            

                       

                            

                           

                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default POS
