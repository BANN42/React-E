

// Demo Route Indeed More Dynamic (FOR APIs)
import { AboutEvent } from "./AboutEvent";
import { Jumbo } from "./jumbo";
import { DescUs } from "./descUs";
import imgDe from "../../media/saveEarth1.jpg";



export const About = function () {
	return (
		<div className="fs-2">
			<div className="circle-blue"></div>
			<div className="container min-h-50 p-2 shadow shadow-sm mt-2 rounded rounded-2  d-flex align-content-center justify-content-center">
				<Jumbo />
			</div>

			<hr className="my-5 shadow shadow-lg border border-black border-0 " />

			<div className="container-fluid m-2 shadow shadow-lg min-h-50 p-5 ">
				<AboutEvent imgDesc={imgDe} />
			</div>
			<hr className="my-5 shadow shadow-lg border border-black border-0 " />
			<div className="square-black "></div>
			<div className="container-fluid m-2 shadow shadow-lg min-h-50 p-5 align-items-center justify-content-center">
				<DescUs />
			</div>
			<hr className="my-5 shadow shadow-lg border border-black border-0 " />
		</div>
	);
};
