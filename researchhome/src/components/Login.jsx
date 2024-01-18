import React from 'react';
import '../styles/Sign.css'

var email;
var password;

function Login() {

    const handleLogin = async (e) => {
      e.preventDefault();

      console.log(email)
      console.log(password);

      // Assuming your backend is running on localhost:3000
      const backendUrl = 'http://localhost:5000';
      
      // Data to be sent to the backend
      const data = {
        email,
        password,
      };

      try {
        const response = await fetch(`${backendUrl}/validate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });

        if (response.ok) {
          // Successfully authenticated, handle the response accordingly
          console.log('Authentication successful');
        } else {
          // Handle authentication error
          console.error('Authentication failed');
        }
      } catch (error) {
        console.error('Error during authentication:', error);
      }
    };

    return (
      <section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">
              <div class="card" style={{borderRadius: '1rm'}}>
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form" class="img-fluid" style={{borderRadius: '1rem 0 0 1rem'}} />
                  </div>
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">

                      <form onSubmit={handleLogin}>

                        <div class="d-flex align-items-center mb-3 pb-1">
                          <i class="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}}></i>
                          <span class="h1 fw-bold mb-0">Logo</span>
                        </div>

                        <h5 class="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                        <div class="form-outline mb-4">
                          <input type="email" id="form2Example17" class="form-control form-control-lg" value={email} />
                          <label class="form-label" for="form2Example17">Email address</label>
                        </div>

                        <div class="form-outline mb-4">
                          <input type="password" id="form2Example27" class="form-control form-control-lg" value={password} />
                          <label class="form-label" for="form2Example27">Password</label>
                        </div>

                        <div class="pt-1 mb-4">
                          <button class="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                        </div>

                        <a class="small text-muted" href="#!">Forgot password?</a>
                        <p class="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!"
                            style={{color: '#393f81'}}>Register here</a></p>
                        <a href="#!" class="small text-muted">Terms of use.</a>
                        <a href="#!" class="small text-muted">Privacy policy</a>
                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Login;
