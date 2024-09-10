import { Headering } from "./Headering";
import { TalkUs } from "./talkUs";

export const Contact = function () {
	return (
		<div className="fs-2">
			<div
				className="container-fluid bg-body p-3 min-h-50 d-flex align-items-center
			                justify-content-center bg-smooth mt-2">
				<Headering />
			</div>
			<hr  className="my-5 border-0 shadow shadow-sm" />
			<div className="container-fluid w-100  bg-light rounded rounded-end-2 p-2">
				<TalkUs />
			</div>
			<hr  className="my-5 border-0 shadow shadow-sm" />
		</div>
	);
};
