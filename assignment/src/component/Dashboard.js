import { React, useEffect } from 'react';

function Dashboard() {


    let windowsize = window.innerWidth;
    

    

    function openNav() {
        if(windowsize>768){
            document.getElementById("mySidenav").style.width = "25%";
            document.getElementById("main").style.width = "75%";
            document.querySelector("header input").style.marginLeft = "0";
        }
        else{
            document.getElementById("mySidenav").style.width = "90%";
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

            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-5 col-12">
                        <span className="stickArrow" onClick={openNav}>&#9776;</span>
                 
                        <div id="mySidenav" className="sidenav">
                            <div className="top-logo-area">
                             
                            <span className="closeArrow" onClick={closeNav}>&#9776;</span>
                                <img src="images/logo.jpg" />
                                <div className="searcharea">
                                    <input type="" name="" className="sideSearch" placeholder="Search" />
                                </div>
                            </div>

                            <ul className="sideDropdown">

                                <li className="active">
                                    <a>
                                        <img className="left" src="images/information-icon.svg" /> Information
                                    </a>
                                </li>
                                <li className="mb-1">
                                    <a className="collapsed dropside" data-bs-toggle="collapse" data-bs-target="#product" aria-expanded="false">
                                        <img className="left" src="images/box-alt.svg" />  Products
                                    </a>
                                    <div className="collapse" id="product" >
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li><a href="#">Product sub 1</a></li>
                                            <li><a href="#">Product sub 2</a></li>
                                            <li><a href="#">Product sub 3</a></li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="mb-1">
                                    <a className="collapsed dropside" data-bs-toggle="collapse" data-bs-target="#Sales" aria-expanded="false">
                                        <img className="left" src="images/sales.svg" /> Sales
                                    </a>
                                    <div className="collapse" id="Sales" >
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li><a href="#">Product sub 1</a></li>
                                            <li><a href="#">Product sub 2</a></li>
                                            <li><a href="#">Product sub 3</a></li>
                                        </ul>
                                    </div>
                                </li>

                                <li className="mb-1">
                                    <a className="collapsed dropside" data-bs-toggle="collapse" data-bs-target="#Quatations" aria-expanded="false">
                                        <img className="left" src="images/quatations.svg" /> Quatations
                                    </a>
                                    <div className="collapse" id="Quatations" >
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li><a href="#">Product sub 1</a></li>
                                            <li><a href="#">Product sub 2</a></li>
                                            <li><a href="#">Product sub 3</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="mb-1">
                                    <a className="collapsed dropside" data-bs-toggle="collapse" data-bs-target="#Expenses" aria-expanded="false">
                                        <img className="left" src="images/purchase.svg" /> Purchases
                                    </a>
                                    <div className="collapse" id="Expenses" >
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li><a href="#">Product sub 1</a></li>
                                            <li><a href="#">Product sub 2</a></li>
                                            <li><a href="#">Product sub 3</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="mb-1">
                                    <a className="collapsed dropside" data-bs-toggle="collapse" data-bs-target="#Expenses" aria-expanded="false">
                                        <img className="left" src="images/expenses.svg" /> Expenses
                                    </a>
                                    <div className="collapse" id="Expenses" >
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li><a href="#">Product sub 1</a></li>
                                            <li><a href="#">Product sub 2</a></li>
                                            <li><a href="#">Product sub 3</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="mb-1">
                                    <a className="collapsed dropside" data-bs-toggle="collapse" data-bs-target="#Stock" aria-expanded="false">
                                        <img className="left" src="images/stock-transfer.svg" /> Stock transfer
                                    </a>
                                    <div className="collapse" id="Stock" >
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li><a href="#">Product sub 1</a></li>
                                            <li><a href="#">Product sub 2</a></li>
                                            <li><a href="#">Product sub 3</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="mb-1">
                                    <a className="collapsed dropside" data-bs-toggle="collapse" data-bs-target="#Adjustment" aria-expanded="false">
                                        <img className="left" src="images/stock-adjustment.svg" /> Stock Adjustment
                                    </a>
                                    <div className="collapse" id="Adjustment" >
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li><a href="#">Product sub 1</a></li>
                                            <li><a href="#">Product sub 2</a></li>
                                            <li><a href="#">Product sub 3</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="mb-1">
                                    <a className="collapsed dropside" data-bs-toggle="collapse" data-bs-target="#Managment" aria-expanded="false">
                                        <img className="left" src="images/user.svg" /> User Managment
                                    </a>
                                    <div className="collapse" id="Managment" >
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li><a href="#">Product sub 1</a></li>
                                            <li><a href="#">Product sub 2</a></li>
                                            <li><a href="#">Product sub 3</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="mb-1">
                                    <a className="collapsed dropside" data-bs-toggle="collapse" data-bs-target="#Calendar" aria-expanded="false">
                                        <img className="left" src="images/calender.svg" /> Calendar
                                    </a>
                                    <div className="collapse dropside" id="Calendar" >
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li><a href="#">Product sub 1</a></li>
                                            <li><a href="#">Product sub 2</a></li>
                                            <li><a href="#">Product sub 3</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="mb-1">
                                    <a className="collapsed dropside" data-bs-toggle="collapse" data-bs-target="#Contacts" aria-expanded="false">
                                        <img className="left" src="images/document.svg" /> Contacts
                                    </a>
                                    <div className="collapse" id="Contacts" >
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li><a href="#">Product sub 1</a></li>
                                            <li><a href="#">Product sub 2</a></li>
                                            <li><a href="#">Product sub 3</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="mb-1">
                                    <a className="collapsed dropside" data-bs-toggle="collapse" data-bs-target="#Reports" aria-expanded="false">
                                        <img className="left" src="images/document.svg" /> Reports
                                    </a>
                                    <div className="collapse" id="Reports" >
                                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                            <li><a href="#">Product sub 1</a></li>
                                            <li><a href="#">Product sub 2</a></li>
                                            <li><a href="#">Product sub 3</a></li>
                                        </ul>
                                    </div>
                                </li>



                            </ul>


                            <ul className="bottomElement">
                                <li className="mb-1"><a href="#"><img className="left" src="images/settings.svg" /> Settings</a></li>
                                <li className="mb-1"><a href="#"><img className="left" src="images/subscription.svg" /> Subscription</a></li>
                            </ul>
                            <ul className="bottomElement mt-0">
                                <li><a href="#"><img className="left" src="images/log-out.svg" /> Logout</a></li>
                            </ul>

                        </div>
                    </div>
                    <div id="main" className="col-lg-9 col-md-8 col-sm-7 col-12">


                        <header className="row">




                            <div className="col-lg-9 col-md-6 col-9 ms-auto">
                                <div className="d-flex flex-row">
                                    <input type="text" placeholder="Search" name="search" autocomplete="off" className="form-control" value="" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-3  d-flex align-items-center justify-content-end">
                                <div className="username">
                                    Welcome back,<br />
                                    <strong>Abdullah</strong>
                                </div>
                                <img className="bell" src="images/bell.svg" />
                                <div className="dropdown">
                                    <a className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="images/profile.svg" />
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-secondary mt-4">
                                        <li><a className="dropdown-item active" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Separated link</a></li>
                                    </ul>
                                </div>

                            </div>
                        </header>


                        <div className="innerPage">

                            <div className="row">
                                <div className="col-lg-12 pagename">
                                    <img src="images/arrow-back.png" /> Information
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-3 col-md-6 col-6">
                                    <div className="card d-flex align-items-center infobox">
                                        <div className="number firstColor">128</div>
                                        <div className="desc">Total Products</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-6">
                                    <div className="card d-flex align-items-center infobox">
                                        <div className="number secondColor">53</div>
                                        <div className="desc">Total Products</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-6">
                                    <div className="card d-flex align-items-center infobox">
                                        <div className="number thirdColor">40</div>
                                        <div className="desc">Total Products</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-6">
                                    <div className="card d-flex align-items-center infobox">
                                        <div className="number forthColor">13</div>
                                        <div className="desc">Total Products</div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card boxGraph">
                                        <img src="images/graph-image.png" width="100%" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="card dataTab">
                                    <div className='tabSearcharea'>
                                            <input type="text" placeholder="Search" name="search" autocomplete="off" class="form-control" value="" />
                                            </div>

                                        <ul className="nav nav-tabs" id="myTab">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-bs-toggle="tab" data-bs-target="#SalesPannel">Sales</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#QuotationsPanel">Quotations</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#PurchasesPannle">Purchases</a>
                                            </li>

                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#StockPannle">Stock transfer</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#CustomersPannle">Customers</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#SuppliersPannle">Suppliers</a>
                                            </li>
                                        </ul>

                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="SalesPannel">

                                                <div className="table-responsive ps">
                                                    <table id="datatable1" className="table table-striped ">
                                                        <thead>
                                                            <tr className="headings">
                                                                <th className="column-title">#</th>
                                                                <th className="column-title">Date</th>
                                                                <th className="column-title">Reference number</th>
                                                                <th className="column-title">Client</th>
                                                                <th className="column-title situationHead">Situation</th>
                                                                <th className="column-title">Sum</th>
                                                                <th className="column-title">Payment status</th>
                                                                <th className="column-title">Paid</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            <tr>
                                                                <td data-label="# :">1</td>
                                                                <td data-label="Date :">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Re.No :">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td data-label="Situ. :"><div className='situation'>Situation</div></td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td  data-label="Pay status :"><div className='worthy'>Worthy</div></td>
                                                                <td data-label="Paid :">0.000</td>
                                                            </tr>

                                                            <tr>
                                                                <td data-label="# :">2</td>
                                                                <td data-label="Date :">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Re.No :">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td data-label="Situ. :"><div className='situation'>Situation</div></td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td  data-label="Pay status :"><div className='worthy'>Worthy</div></td>
                                                                <td data-label="Paid :">0.000</td>
                                                            </tr>
                                                            <tr>
                                                                <td data-label="# :">3</td>
                                                                <td data-label="Date :">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Re.No :">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td data-label="Situ. :"><div className='situation'>Situation</div></td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td  data-label="Pay status :"><div className='worthy'>Worthy</div></td>
                                                                <td data-label="Paid :">0.000</td>
                                                            </tr>
                                                            <tr>
                                                                <td data-label="# :">4</td>
                                                                <td data-label="Date :">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Re.No :">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td data-label="Situ. :"><div className='situation'>Situation</div></td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td  data-label="Pay status :"><div className='worthy'>Worthy</div></td>
                                                                <td data-label="Paid :">0.000</td>
                                                            </tr>
                                                            <tr>
                                                                <td data-label="# :">5</td>
                                                                <td data-label="Date :">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Re.No :">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td data-label="Situ. :"><div className='situation'>Situation</div></td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td  data-label="Pay status :"><div className='worthy'>Worthy</div></td>
                                                                <td data-label="Paid :">0.000</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>
                                            <div className="tab-pane fade" id="QuotationsPanel">

                                               
                                            <div className="table-responsive ps">
                                                    <table id="datatable1" className="table table-striped ">
                                                        <thead>
                                                            <tr className="headings">
                                                                <th className="column-title">#</th>
                                                                <th className="column-title">Date</th>
                                                                <th className="column-title">Reference number</th>
                                                                <th className="column-title">Client</th>
                                                                <th className="column-title situationHead">Situation</th>
                                                                <th className="column-title">Sum</th>
                                                                <th className="column-title">Payment status</th>
                                                                <th className="column-title">Paid</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            <tr>
                                                                <td data-label="#">1</td>
                                                                <td data-label="Date">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Reference number">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td className='situation' data-label="Situation">Situation</td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td className='worthy' data-label="Payment status">Worthy</td>
                                                                <td data-label="Paid">0.000</td>
                                                            </tr>

                                                            <tr>
                                                                <td data-label="#">2</td>
                                                                <td data-label="Date">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Reference number">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td className='situation' data-label="Situation">Situation</td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td className='worthy' data-label="Payment status">Worthy</td>
                                                                <td data-label="Paid">0.000</td>
                                                            </tr>

                                                            <tr>
                                                                <td data-label="#">3</td>
                                                                <td data-label="Date">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Reference number">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td className='situation' data-label="Situation">Situation</td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td className='worthy' data-label="Payment status">Worthy</td>
                                                                <td data-label="Paid">0.000</td>
                                                            </tr>

                                                            <tr>
                                                                <td data-label="#">4</td>
                                                                <td data-label="Date">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Reference number">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td className='situation' data-label="Situation">Situation</td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td className='worthy' data-label="Payment status">Worthy</td>
                                                                <td data-label="Paid">0.000</td>
                                                            </tr>
                                                            <tr>
                                                                <td data-label="#">5</td>
                                                                <td data-label="Date">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Reference number">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td className='situation' data-label="Situation">Situation</td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td className='worthy' data-label="Payment status">Worthy</td>
                                                                <td data-label="Paid">0.000</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>
                                            <div className="tab-pane fade" id="PurchasesPannle">

                                            <div className="table-responsive ps">
                                                    <table id="datatable1" className="table table-striped ">
                                                        <thead>
                                                            <tr className="headings">
                                                                <th className="column-title">#</th>
                                                                <th className="column-title">Date</th>
                                                                <th className="column-title">Reference number</th>
                                                                <th className="column-title">Client</th>
                                                                <th className="column-title situationHead">Situation</th>
                                                                <th className="column-title">Sum</th>
                                                                <th className="column-title">Payment status</th>
                                                                <th className="column-title">Paid</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            <tr>
                                                                <td data-label="#">1</td>
                                                                <td data-label="Date">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Reference number">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td className='situation' data-label="Situation">Situation</td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td className='worthy' data-label="Payment status">Worthy</td>
                                                                <td data-label="Paid">0.000</td>
                                                            </tr>

                                                            <tr>
                                                                <td data-label="#">2</td>
                                                                <td data-label="Date">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Reference number">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td className='situation' data-label="Situation">Situation</td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td className='worthy' data-label="Payment status">Worthy</td>
                                                                <td data-label="Paid">0.000</td>
                                                            </tr>

                                                            <tr>
                                                                <td data-label="#">3</td>
                                                                <td data-label="Date">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Reference number">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td className='situation' data-label="Situation">Situation</td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td className='worthy' data-label="Payment status">Worthy</td>
                                                                <td data-label="Paid">0.000</td>
                                                            </tr>

                                                            <tr>
                                                                <td data-label="#">4</td>
                                                                <td data-label="Date">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Reference number">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td className='situation' data-label="Situation">Situation</td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td className='worthy' data-label="Payment status">Worthy</td>
                                                                <td data-label="Paid">0.000</td>
                                                            </tr>
                                                            <tr>
                                                                <td data-label="#">5</td>
                                                                <td data-label="Date">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Reference number">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td className='situation' data-label="Situation">Situation</td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td className='worthy' data-label="Payment status">Worthy</td>
                                                                <td data-label="Paid">0.000</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>
                                            <div className="tab-pane fade" id="StockPannle">
                                            <div className="table-responsive ps">
                                                    <table id="datatable1" className="table table-striped ">
                                                        <thead>
                                                            <tr className="headings">
                                                                <th className="column-title">#</th>
                                                                <th className="column-title">Date</th>
                                                                <th className="column-title">Reference number</th>
                                                                <th className="column-title">Client</th>
                                                                <th className="column-title situationHead">Situation</th>
                                                                <th className="column-title">Sum</th>
                                                                <th className="column-title">Payment status</th>
                                                                <th className="column-title">Paid</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            <tr>
                                                                <td data-label="#">1</td>
                                                                <td data-label="Date">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Reference number">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td className='situation' data-label="Situation">Situation</td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td className='worthy' data-label="Payment status">Worthy</td>
                                                                <td data-label="Paid">0.000</td>
                                                            </tr>

                                                            <tr>
                                                                <td data-label="#">2</td>
                                                                <td data-label="Date">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Reference number">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td className='situation' data-label="Situation">Situation</td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td className='worthy' data-label="Payment status">Worthy</td>
                                                                <td data-label="Paid">0.000</td>
                                                            </tr>

                                                            <tr>
                                                                <td data-label="#">3</td>
                                                                <td data-label="Date">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Reference number">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td className='situation' data-label="Situation">Situation</td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td className='worthy' data-label="Payment status">Worthy</td>
                                                                <td data-label="Paid">0.000</td>
                                                            </tr>

                                                            <tr>
                                                                <td data-label="#">4</td>
                                                                <td data-label="Date">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Reference number">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td className='situation' data-label="Situation">Situation</td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td className='worthy' data-label="Payment status">Worthy</td>
                                                                <td data-label="Paid">0.000</td>
                                                            </tr>
                                                            <tr>
                                                                <td data-label="#">5</td>
                                                                <td data-label="Date">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Reference number">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td className='situation' data-label="Situation">Situation</td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td className='worthy' data-label="Payment status">Worthy</td>
                                                                <td data-label="Paid">0.000</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>
                                            <div className="tab-pane fade" id="CustomersPannle">
                                            <div className="table-responsive ps">
                                                    <table id="datatable1" className="table table-striped ">
                                                        <thead>
                                                            <tr className="headings">
                                                                <th className="column-title">#</th>
                                                                <th className="column-title">Date</th>
                                                                <th className="column-title">Reference number</th>
                                                                <th className="column-title">Client</th>
                                                                <th className="column-title situationHead">Situation</th>
                                                                <th className="column-title">Sum</th>
                                                                <th className="column-title">Payment status</th>
                                                                <th className="column-title">Paid</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            <tr>
                                                                <td data-label="#">1</td>
                                                                <td data-label="Date">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Reference number">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td className='situation' data-label="Situation">Situation</td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td className='worthy' data-label="Payment status">Worthy</td>
                                                                <td data-label="Paid">0.000</td>
                                                            </tr>

                                                            <tr>
                                                                <td data-label="#">2</td>
                                                                <td data-label="Date">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Reference number">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td className='situation' data-label="Situation">Situation</td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td className='worthy' data-label="Payment status">Worthy</td>
                                                                <td data-label="Paid">0.000</td>
                                                            </tr>

                                                            <tr>
                                                                <td data-label="#">3</td>
                                                                <td data-label="Date">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Reference number">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td className='situation' data-label="Situation">Situation</td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td className='worthy' data-label="Payment status">Worthy</td>
                                                                <td data-label="Paid">0.000</td>
                                                            </tr>

                                                            <tr>
                                                                <td data-label="#">4</td>
                                                                <td data-label="Date">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Reference number">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td className='situation' data-label="Situation">Situation</td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td className='worthy' data-label="Payment status">Worthy</td>
                                                                <td data-label="Paid">0.000</td>
                                                            </tr>
                                                            <tr>
                                                                <td data-label="#">5</td>
                                                                <td data-label="Date">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Reference number">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td className='situation' data-label="Situation">Situation</td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td className='worthy' data-label="Payment status">Worthy</td>
                                                                <td data-label="Paid">0.000</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>
                                            <div className="tab-pane fade" id="SuppliersPannle">
                                            <div className="table-responsive ps">
                                                    <table id="datatable1" className="table table-striped ">
                                                        <thead>
                                                            <tr className="headings">
                                                                <th className="column-title">#</th>
                                                                <th className="column-title">Date</th>
                                                                <th className="column-title">Reference number</th>
                                                                <th className="column-title">Client</th>
                                                                <th className="column-title situationHead">Situation</th>
                                                                <th className="column-title">Sum</th>
                                                                <th className="column-title">Payment status</th>
                                                                <th className="column-title">Paid</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                            <tr>
                                                                <td data-label="#">1</td>
                                                                <td data-label="Date">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Reference number">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td className='situation' data-label="Situation">Situation</td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td className='worthy' data-label="Payment status">Worthy</td>
                                                                <td data-label="Paid">0.000</td>
                                                            </tr>

                                                            <tr>
                                                                <td data-label="#">2</td>
                                                                <td data-label="Date">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Reference number">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td className='situation' data-label="Situation">Situation</td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td className='worthy' data-label="Payment status">Worthy</td>
                                                                <td data-label="Paid">0.000</td>
                                                            </tr>

                                                            <tr>
                                                                <td data-label="#">3</td>
                                                                <td data-label="Date">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Reference number">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td className='situation' data-label="Situation">Situation</td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td className='worthy' data-label="Payment status">Worthy</td>
                                                                <td data-label="Paid">0.000</td>
                                                            </tr>

                                                            <tr>
                                                                <td data-label="#">4</td>
                                                                <td data-label="Date">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Reference number">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td className='situation' data-label="Situation">Situation</td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td className='worthy' data-label="Payment status">Worthy</td>
                                                                <td data-label="Paid">0.000</td>
                                                            </tr>
                                                            <tr>
                                                                <td data-label="#">5</td>
                                                                <td data-label="Date">25.05.2021 03:00</td>
                                                                <td className='refTd' data-label="Reference number">SALE/POS2021/09/0003</td>
                                                                <td data-label="Client">Walk-in Customer</td>
                                                                <td className='situation' data-label="Situation">Situation</td>
                                                                <td data-label="Sum">5.513 OMR</td>
                                                                <td className='worthy' data-label="Payment status">Worthy</td>
                                                                <td data-label="Paid">0.000</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>





                                        </div>


                                    </div>
                                </div>
                            </div>

                            <div className="row last-graph">
                                <div className="col-lg-6">
                                    <div className="card boxGraph">
                                        <img src="images/right-graph.png" width="100%" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="card boxGraph">
                                        <img src="images/left-graph.png" width="100%" />
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

export default Dashboard
