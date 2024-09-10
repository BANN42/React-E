import myImage from "../../media/sac3.png";
import AnotherImg  from "../../media/reduceSave1.avif";
import { Middle } from "./middle";
import { Top } from "./top";
import { SubTop } from "./subTop";
export const Home = function () {
	return (
		<div className="container-fluid align-content-center d-flex flex-column justify-content-center m-4">
			<Top img={myImage} />
			<hr className="my-4 border-top border border-none shadow shadow-lg " />
               <SubTop src={AnotherImg} />
			<hr className="my-4 border-top border border-none shadow shadow-lg " />
			<Middle />
		</div>
	);
};
