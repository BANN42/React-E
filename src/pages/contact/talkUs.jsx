export const TalkUs = function () {
	return (
		<div className="container-lg  d-flex flex-wrap    mt-2 rounded rounded-2 ">
			<div className="col-12 col-md-12 col-lg-6    p-2 border border-1 rounded rounded-bottom">
				<div className="">
					<label
						htmlFor="exampleFormControlInput1"
						className="form-label">
						Email address
					</label>
					<input
						type="email"
						className="form-control"
						id="exampleFormControlInput1"
						placeholder="name@example.com"
					/>
				</div>
				<div className="">
					<label
						htmlFor="exampleFormControlTextarea1"
						className="form-label">
						Example textarea
					</label>
					<textarea
						className="form-control"
						id="exampleFormControlTextarea1"
						rows="3"></textarea>
				</div>
				<div className="">
					<button className="btn btn-primary">
						Send <i className="bi bi-send"></i>
					</button>
				</div>
			</div>
			<div className="col-12 col-md-12  col-lg-6 p-2  ">
				<h2>Text Us</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Maxime at porro eveniet illo numquam, officia
					architecto. Quisquam pariatur velit ea in aliquam,
					placeat ut autem quibusdam, eaque perspiciatis nihil
					veniam quas aperiam soluta!
				</p>
			</div>
		</div>
	);
};
