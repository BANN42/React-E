export const Top = function ({ img }) {
	return (
		<div className="  container-fluid d-flex align-content-center justify-content-center p-1 ">
			<div className=" col d-flex flex-column align-items-center justify-content-center">
				<h2 className="text-center fs-1 ">
					Lorem ipsum dolor sit .
				</h2>
				<p className="text-center">
					Lorem ipsum dolor, sit amet consectetur adipisicing.
					<div className="circle6 content"></div>
				</p>
			</div>
			<div className=" col d-none  d-md-block d-lg-block">
				<div className="h-50 w-auto">
					<img src={img} alt="myImage" className="img-fluid" />
				</div>
			</div>
		</div>
	);
};
