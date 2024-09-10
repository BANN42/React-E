export const AboutEvent = function ({ imgDesc }) {
	return (
		<div className=" container-fluid  d-flex flex-wrap">
			<div className="col-md-12 col-lg-6 ">
				<img
					src={imgDesc}
					alt="IMG"
					className="img-fluid rounded rounded-bottom"
				/>
			</div>

			<div className="col-md-12 col-lg-6 p-2 d-flex align-items-start  flex-column align-content-center justify-content-center ">
				<h2 className="fs-3">Check The Event On 23rd October.</h2>
				<ul className="list-unstyled fs-4">
					<li>
						{" "}
						<i className="bi bi-sun "></i> Join Us{" "}
					</li>
					<li>
						{" "}
						<i className="bi bi-sun"></i> Record Videos For Us
					</li>
					<li>
						<i className="bi bi-sun"></i> Share Your Ideas
					</li>
					<li>
						{" "}
						<i className="bi bi-sun"></i> Meet The Community
					</li>
				</ul>
			</div>
		</div>
	);
};
