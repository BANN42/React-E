import { RouterProvider, Outlet } from "react-router-dom";

// components
import { NavBar } from "./components/navbar.jsx";
import { Footer } from "./components/footer.jsx";

// route File
import { router } from "./Routes/router.jsx";

// DOM layout Creator
export function Layout() {
	return (
		<div className="container-fluid ">
			<div className="container-fluid">
				<NavBar />
			</div>
			<div className="container min-vh-100   ">
				<Outlet />
			</div>
			<div className="container-fluid ">
				<Footer />
			</div>
		</div>
	);
}

// DOM layout Sender
export default function App() {
	return <RouterProvider router={router} />;
}
