import {Link} from "react-router-dom";

export const Jumbo = function () {
	return (
		<div className="jumbotron text-dark m-auto min-h-50">
			<h1 className="display-4">About Page</h1>
			<p className="lead fs-4">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque veniam optio dolores!
			</p>
			<hr className="my-4" />
			<p className="fs-4">
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam quasi aliquam quia cupiditate et voluptas id eius nesciunt? Eos harum quidem ad?
			</p>
			<Link className="btn btn-primary btn-lg rounded rounded-pill" to="#" role="button">
				Discover Now ! <i className="bi bi-send"></i>
			</Link>
		</div>
	);
};
