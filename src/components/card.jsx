import { Link } from "react-router-dom";
export const Card = function ({ src, title, desc, goto = "#" }) {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img
				src={src}
				className="card-img-top rounded-1 rounded"
				alt="Something"
			/>
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{desc}</p>
				<Link to={goto} className="btn btn-primary">
					Check This
				</Link>
			</div>
		</div>
	);
};
