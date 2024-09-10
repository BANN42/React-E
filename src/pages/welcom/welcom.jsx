import { Link } from "react-router-dom";
export const Welcom = function () {
	return (
		<div className="container min-vh-100  col-12 d-flex flex-column align-items-center  justify-content-center ">
			<div className="circle1"></div>
			<div className="row">
				<h2 className="text-center">Lorem ipsum dolor sit.</h2>
				<p className="text-center">
					Lorem ipsum, dolor sit amet consectetur adipisicing
					elit.
					<div className="circle4"></div>
				</p>
			</div>
			<div className="row">
				<Link to="/home" className="btn btn-success rounded-pill">
					Discover Now
				</Link>
			</div>
			<div className="circle2"></div>
		</div>
	);
};
