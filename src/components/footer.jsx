import { Link } from "react-router-dom";

export const Footer = function () {
	return (
		<div className="container-fluid bg-body shadow shadow-lg p-2">
			<footer className="container fs-5 ">
				<div className="col border-top  border-bottom ">
					<div className="col-12 d-flex flex-wrap flex-md-row  ">
						<div className="col-lg-6 justify-content-center align-content-center d-flex flex-column ">
							<h2 className="fs-5">Where To Find Us ?</h2>
							<div className="d-flex flex-md-row flex-wrap  gap-3">
								<Link
									target="_blank"
									title={`FaceBook`}
									to={`https://www.FaceBook.com`}
									className="text-decoration-none w-auto ">
									<i className="bi bi-facebook">
										{" Facebook "}
									</i>
								</Link>
								<Link
									target="_blank"
									title={`twitter`}
									to={`https://www.twitter.com`}
									className="text-decoration-none w-auto ">
									<i className="bi bi-twitter">
										{"Twitter"}
									</i>
								</Link>
								<Link
									target="_blank"
									title={`github`}
									to={`https://www.github.com`}
									className="text-decoration-none w-auto">
									<i className="bi bi-github">
										{" Github"}{" "}
									</i>
								</Link>
							</div>
						</div>
						<div className="col-lg-6 p-4">
							<div className="row">
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Autem, quas eius sed
								placeat quasi reprehenderit odit amet
								repellendus, esse perspiciatis
								necessitatibus magnam dignissimos.
							</div>
						</div>
					</div>
				</div>
				<div className="container bg-body text-center fs-5 p-4 ">
					{"Copyright@2024"}
				</div>
			</footer>
		</div>
	);
};
