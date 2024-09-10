import { createBrowserRouter } from "react-router-dom";

// components
import { Layout } from "../App.jsx";
import { Welcom } from "../pages/welcom/welcom.jsx";
import { Home } from "../pages/home/home.jsx";
import { About } from "../pages/About/About.jsx";
import { Contact } from "../pages/contact/Contact.jsx";

// Auth Components
import { Login } from "../pages/Auth/Login/login.jsx";
import { Register } from "../pages/Auth/Register/register.jsx";

// handling Errors
// import NotFound from "../pages/error/404.jsx";

// routes Availables
export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "*", element: <Welcom /> },
			{ index: true, element: <Welcom /> },
			{ path: "home", element: <Home /> },
			{ path: "aboutUS", element: <About /> },
			{ path: "ContactUs", element: <Contact /> },
			{ path: "/login", element: <Login /> },
			{ path: "/register", element: <Register /> },
		],
	},
]);
