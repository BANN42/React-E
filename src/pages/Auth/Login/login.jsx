import { Link } from "react-router-dom";

// import useFormik Hook
import { useFormik } from "formik";
import { validateLogin } from "../schemas/validateLogin";
export const Login = function () {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: validateLogin,
	});

	return (
		<div className="container mt-5 mb-5 pt-5 pb-5 bg-light text-dark text-center ">
			<div className="row justify-content-center align-items-center h-100 mt-5">
				<div className="col-md-6 offset-md-3 p-4 bg-light rounded mt-5 mb-5 shadow border border-secondary border-3 text-center form-container">
					<h1 className="text-center mb-4">Login</h1>
					<form onSubmit={formik.handleSubmit}>
						<div className="form-group">
							<label
								htmlFor="email"
								className="form-label mb-2 text-secondary fs-5 ">
								Email
							</label>
							<input
								type="email"
								className="form-control mb-2 border-secondary border-3 rounded-pill text-secondary "
								id="email"
								name="email"
								placeholder="Enter email"
								value={formik.values.email}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.touched.email &&
							formik.errors.email ? (
								<div className="alert alert-danger">
									{formik.errors.email}
								</div>
							) : null}
						</div>

						<div className="form-group mb-4 mt-4 ">
							<label
								htmlFor="password"
								className="form-label mb-2 text-secondary  fs-5">
								Password
							</label>
							<input
								type="password"
								className="form-control mb-2 border-secondary border-3 rounded-pill text-secondary  "
								id="password"
								name="password"
								placeholder="Enter password"
								value={formik.values.password}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
							/>
							{formik.touched.password &&
							formik.errors.password ? (
								<div className="alert alert-danger mt-2 mb-2 ">
									{formik.errors.password}
								</div>
							) : null}
						</div>

						<button
							type="submit"
							className="btn btn-primary btn-block m-2 mb-4 rounded-pill  ">
							Login
						</button>
						<Link
							to="/register"
							className="btn btn-secondary btn-block m-2 mb-4 rounded-pill ">
							Register
						</Link>
					</form>

					<div className="text-center mt-4 mb-4 text-secondary ">
						<Link to="/forgot-password">
							Forgot Password?
						</Link>
					</div>

					<div className="text-center mt-4 mb-4 text-secondary   ">
						<Link to="/reset-password">Reset Password</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
