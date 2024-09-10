import { Link } from "react-router-dom";
export const NavBar = function () {
	return (
		<div className="container-fluid bg-light">
			<div className="navbar-expand-lg  navbar">
				<div className="container">
					<Link to="/" className="navbar-brand">
						Icone
					</Link>
					<button
						className="navbar-toggler"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse "
						id="navbarSupportedContent">
						<ul className="navbar-nav me-auto w-50 m-auto   justify-content-center ">
							<li className="nav-item">
								<Link
									to="home"
									className="nav-link fs-5">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="aboutUS"
									className="nav-link fs-5">
									About Us
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="ContactUS"
									className="nav-link fs-5">
									Contact Us
								</Link>
							</li>
						</ul>
						<div className="action d-flex justify-content-end gap-1">
							<Link
								to="/login"
								className="btn btn-outline-primary">
								Log In{" "}
								<i className="bi bi-box-arrow-right"></i>
							</Link>
							<Link
								to="/register"
								className="btn btn-outline-success">
								Register{" "}
								<i className="bi bi-box-arrow-right"></i>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
