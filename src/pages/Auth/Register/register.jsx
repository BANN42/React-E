import { useFormik } from "formik";
import { Link } from "react-router-dom";

// schema validation rules
import { validateRegister } from "../schemas/validateRegister";

export const Register = () => {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: validateRegister,
	});
	return (
		<div className="container mt-5 ">
			<h1 className="text-center mb-5 ">Register</h1>

			<form onSubmit={formik.handleSubmit} className="form mb-5 w-50 mx-auto ">
				<div className="form-group mb-3 ">
					<label htmlFor="name" className="form-label ">Name</label>
					<input
						type="text"
						className="form-control "
						id="name"
						name="name"
						placeholder="Enter name"
						value={formik.values.name}
						onChange={formik.handleChange}
					/>
					{formik.errors.name ? (
						<div className="text-danger ">
							{formik.errors.name}
						</div>
					) : null}
				</div>

				<div className="form-group mb-3  ">
					<label htmlFor="email" className="form-label ">Email address</label>
					<input
						type="email"
						className="form-control "
						id="email"
						name="email"
						placeholder="Enter email"
						value={formik.values.email}
						onChange={formik.handleChange}
					/>
					{formik.errors.email ? (
						<div className="text-danger">
							{formik.errors.email}
						</div>
					) : null}
				</div>

				<div className="form-group mb-3 ">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						className="form-control "
						id="password"
						name="password"
						placeholder="Enter password"
						value={formik.values.password}
						onChange={formik.handleChange}
					/>
					{formik.errors.password ? (
						<div className="text-danger ">
							{formik.errors.password}
						</div>
					) : null}
				</div>

				<div className="form-group mb-3 ">
					<label htmlFor="confirmPassword" className="form-label ">
						Confirm Password
					</label>
					<input
						type="password"
						className="form-control "
						id="confirmPassword"
						name="confirmPassword"
						placeholder="Confirm password"
						value={formik.values.confirmPassword}
						onChange={formik.handleChange}
					/>
					{formik.errors.confirmPassword ? (
						<div className="text-danger">
							{formik.errors.confirmPassword}
						</div>
					) : null}
				</div>

				<button type="submit" className="btn btn-primary mb-3 ">
					Submit
				</button>

				<div className="text-center  mb-3 ">
					<p className="text-muted ">
						Already have an account?{" "}
						<Link to="/login">Login</Link>
					</p>

					<p className="text-muted ">
						Forgot your password?{" "}
						<Link to="/forgot-password">Reset Password</Link>
					</p>

					<p className="text-muted ">
						By clicking on the SUBMIT button, you agree to our{" "}
						<Link to="/terms-and-conditions">
							Terms and Conditions
						</Link>{" "}
						and{" "}
						<Link to="/privacy-policy">Privacy Policy</Link>
					</p>
				</div>
			</form>
		</div>
	);
};
