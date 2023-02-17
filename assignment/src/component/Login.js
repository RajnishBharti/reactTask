import React from 'react'

function Login() {
    return (
        <>
        <section className='login'>
            <div className="container-fluid">

                <div className="row">

                    <div className="col-lg-6 ms-auto me-0 p-0">

                        <div className="w-100 d-flex loginMainBox align-items-center justify-content-center">
                            <div className="loginForm w-100">
                                <h1>Log In to Your Account</h1>

                                <form>
                                    <div className="form-outline">
                                        <label className="form-label" for="businessId">Business ID</label>
                                        <input placeholder="customer-business ID" type="text" id="businessId" className="form-control user border-0 border-bottom rounded-0 ps-0" />
                                    </div>

                                    <div className="form-outline">
                                        <label className="form-label" for="user">User</label>
                                        <input placeholder="customer-user" type="text" id="user" className="form-control  border-0 border-bottom user  rounded-0 ps-0" />
                                    </div>

                                    <div className="form-outline">
                                        <label className="form-label" for="Password">User</label>
                                        <input placeholder="........." type="Password" id="pas" className="form-control  border-0 border-bottom pas rounded-0 ps-0" />
                                    </div>
                                    <div className="row pt-47">
                                        <div className="col d-flex">
                                            <div className="form-check ms-0">
                                                <input className="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                                <label className="form-check-label remember" for="remember"> Remember me </label>
                                            </div>
                                        </div>

                                        <div className="col me-0 ms-auto forgot text-end">

                                            <a href="#!">Forgot password?</a>
                                        </div>
                                    </div>
                                    <button className="w-100">Login</button>
                                    <div className="buttomText">Try Poslix Free</div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Login
