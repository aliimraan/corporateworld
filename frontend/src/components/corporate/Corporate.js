import React from 'react'
import {Row,Col} from 'react-bootstrap'
import './corporate.css'

export default function Corporate() {
    return (
        <div className="limiter">
		<div className="container-login100">
			<div className="wrap-login100">
            
				<form className="login100-form validate-form">
                
                
                    
					

					<span className="login100-form-title p-b-43">
						Login to continue
					</span>
					
                    
					
					<div className="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input className="input100" type="text" name="email" />
						<span className="focus-input100"></span>
						<span className="label-input100">Email</span>
					</div>
					
                   
					
					<div className="wrap-input100 validate-input" data-validate="Password is required">
						<input className="input100" type="password" name="pass" />
						<span className="focus-input100"></span>
						<span className="label-input100">Password</span>
					</div>

					<div className="flex-sb-m w-full p-t-3 p-b-32">
                    <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
							<label className="label-checkbox100" for="ckb1">
								Login As Admin
							</label>

					
					</div>
			

					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Login
						</button>
					</div>
					
					
					
				</form>

				</div>
			</div>
		</div>
	
    )
}
