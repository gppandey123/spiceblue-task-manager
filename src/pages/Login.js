import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { login, getUserId } from "./store/user/index";
import { useDispatch } from "react-redux";
import { setUserDetails, setUserLogin } from "./store/user/actions";
import { useHistory } from "react-router-dom";

const initialValues = {
  email: "good@test3.com",
  password: "12345678",
};
const validationSchema = Yup.object({
  email: Yup.string().email().required("Email is required."),
  password: Yup.string().required("Password is required."),
});
function Login() {
  const [error, setError] = React.useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        let {
          data: { results },
        } = await login(values);
        dispatch(setUserLogin(results));
        localStorage.setItem("token", JSON.stringify(results.token));
        let { data } = await getUserId(results);
        localStorage.setItem("profile", JSON.stringify(data.results));
        dispatch(setUserDetails(data.results));
        history.push("/");
      } catch (error) {
        setError(error.message);
      }
    },
  });
  return (
    <>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <div className=" h-100 w-100 d-flex justify-content-center align-items-center">
        <div className="card" style={{ width: "30rem" }}>
          <div className="card-header">
            <h3>Login</h3>
          </div>
          <div className="card-body">
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  id="email"
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <small className="text-danger">{formik.errors.email}</small>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="pass">Password:</label>
                <input
                  id="pass"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password && (
                  <small className="text-danger">
                    {formik.errors.password}
                  </small>
                )}
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
