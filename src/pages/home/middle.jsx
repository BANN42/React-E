import {Link} from "react-router-dom";


// UD components
import { Card } from "../../components/card";
import FirstImg from "../../media/saveEarth1.jpg";
import SecondImg from "../../media/saveEarth3.jpg";
import ThirdImg from "../../media/saveEarth2.jpg";

// card Components
export const Middle = function () {
	return (
		<div className=" container  min-h-75 shadow shadow-lg d-flex flex-column p-2 rounded rounded-3 ">
			<div className="col">
				<h1 className="text-center fs-3 p-1">Our Activities</h1>
			</div>

			<div className="container-fluid d-flex flex-wrap flex-column flex-sm-row align-items-center justify-content-center gap-4 p-1">
				<Card
					src={FirstImg}
					title=" Lorem ipsum dolor sit"
					desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Obcaecati amet, quod illum magnam autem quo nisi! Sunt"
				/>
				<Card
					src={SecondImg}
					title=" Lorem ipsum dolor sit"
					desc="Lorem ipsum dolor sit amet consectetur adipisicing elit.
			Obcaecati amet, quod illum ."
				/>
				<Card
					src={ThirdImg}
					title=" Lorem ipsum dolor sit "
					desc="Lorem ipsum dolor sit amet consectetur adipisicing 
			Obcaecati  quod illum magnam autem quo Sunt "
				/>
				<div className="col-12 d-flex align-content-center justify-content-center">
					<div
						className="btn-group"
						role="group"
						aria-label="Basic example">
						<Link
							type="button"
							className="btn btn-secondary">
							Left
						</Link>
						<Link
							type="button"
							className="btn btn-secondary">
							Middle
						</Link>
						<Link
							type="button"
							className="btn btn-secondary">
							Right
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
