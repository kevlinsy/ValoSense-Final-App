import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div>
		<header>
		  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
		  <link rel="stylesheet" href="styles.css" />
		  {/*navbar*/}
		  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
					<Container>
						<Navbar.Brand href="#home"><img src="/Images/full_logo.png" alt="logo" style={{ height: "80px", width: "150px" }} /> </Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link href="#features">Home</Nav.Link>
								<Nav.Link href="#features">Match Making</Nav.Link>
								<Nav.Link href="#pricing">Tournament</Nav.Link>
								<Nav.Link href="#pricing">Leaderboard</Nav.Link>
							</Nav>
							<Nav>
								<Nav.Link href="#deets">My Stats</Nav.Link>
								<Nav.Link href="#deets">Profile</Nav.Link>
								<Nav.Link href="#deets">Login</Nav.Link>

							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
		  {/*orig*/}
		  <style dangerouslySetInnerHTML={{__html: "\n\nbody {background-image: url(images/BG_Geo-Gradient.png);background-size:cover;\ncolor:#FFFFFF ; text-align:center}\n" }} />
		</header>
		<section className="vh-100 gradient-custom  ">
		  <div className="container py-5 h-100 ">
			<div className="row justify-content-center align-items-center h-100 ">
			  <div className="col-12 col-lg-9 col-xl-7 ">
				<div className="card shadow-2-strong card-registration  " style={{borderRadius: '15px', backgroundColor: '#212529'}}>
				  <div className="card-body p-4 p-md-5">
					<h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
					<form>
					  <div className="row">
						<div className="col-md-6 mb-4">
						  {/*first name*/}
						  <div className="form-outline">
							<input type="text" id="firstName" className="form-control form-control-lg" />
							<label className="form-label" htmlFor="firstName">First Name</label>
						  </div>
						  {/* end of first name*/}
						  {/*last  name*/}
						</div>
						<div className="col-md-6 mb-4">
						  <div className="form-outline">
							<input type="text" id="lastName" className="form-control form-control-lg" />
							<label className="form-label" htmlFor="lastName">Last Name</label>
						  </div>
						</div>
					  </div>
					  {/*end of last  name*/}
					  <div className="row">
						<div className="col-md-6 mb-4 d-flex align-items-center">
						  {/*username*/}
						  <div className="form-outline datepicker w-100">
							<input type="text" className="form-control form-control-lg" id="birthdayDate" />
							<label htmlFor="birthdayDate" className="form-label">Username</label>
						  </div>
						  {/*end of username*/}
						</div>
						<div className="col-md-6 mb-4">
						  {/*gender*/}
						  <h6 className="mb-2 pb-1">Gender: </h6>
						  <div className="form-check form-check-inline">
							<input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender" defaultValue="option1" defaultChecked />
							<label className="form-check-label" htmlFor="femaleGender">Female</label>
						  </div>
						  <div className="form-check form-check-inline">
							<input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender" defaultValue="option2" />
							<label className="form-check-label" htmlFor="maleGender">Male</label>
						  </div>
						  <div className="form-check form-check-inline">
							<input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender" defaultValue="option3" />
							<label className="form-check-label" htmlFor="otherGender">Other</label>
						  </div>
						</div>
					  </div>
					  {/* end of gender*/}
					  {/* email*/}
					  <div className="row">
						<div className="col-md-6 mb-4 pb-2">
						  <div className="form-outline">
							<input type="email" id="emailAddress" className="form-control form-control-lg" />
							<label className="form-label" htmlFor="emailAddress">Email</label>
						  </div>
						  {/* end of email*/}
						</div>
						<div className="col-md-6 mb-4 pb-2">
						  {/*password*/}
						  <div className="form-outline">
							<input type="tel" id="phoneNumber" className="form-control form-control-lg" />
							<label className="form-label" htmlFor="phoneNumber">Password </label>
						  </div>
						  {/* end of password*/}
						</div>
					  </div>
					  <div className="row">
						<div className="col-12">
						</div>
					  </div>
					  {/* button to register */}
					  <div className="mt-4 pt-2">
						<a href="________">  
						<button className="btn btn-Danger btn-lg btn-block" style={{color: '#ffff'}} type="button">Register
						</button> </a>
					  </div>
					  {/* end of button to register */}
					</form>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</section>
		{/*footer*/}
		<br />
		<br />
		<br />
		<br />
		<div className="container-fluid-fixed-bottom">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <ul> <p className=" text-white nav col-md-0 justify-content footerLogos">© 2022 Valosense, Inc</p></ul>
            <a className="nav col-md-0 justify-content-center footerLogos" style={{ alignItems: 'center', justifyContent: 'center' }}>
              <img alt="valo" src="/Images/Vs_VS Logo White.png" style={{ height: 80, width: 80 }} /></a>
            <ul className="nav col-md-2 justify-content-end">
              <li className="nav-item"><a href="/" className="nav-link px-2 text-white">Terms</a></li>
              <li className="nav-item"><a href="/" className="nav-link px-2 text-white">Conditions</a></li>
              <li className="nav-item"><a href="/" className="nav-link px-2 text-white">Contact</a></li>
            </ul>
          </footer>
        </div>
		{/*orig*/}
	  </div>
	  
	);
};

export default Signup;
