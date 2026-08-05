import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Formik, Form } from "formik";
import { FaSignInAlt, FaEnvelope } from "react-icons/fa";
import AuthLayout from "../Components/AuthLayout.jsx";
import InputField from "../Components/InputField.jsx";
import PasswordInput from "../Components/PasswordInput.jsx";
import GoogleButton from "../Components/GoogleButton.jsx";
import PrimaryButton from "../Components/PrimaryButton.jsx";
import Divider from "../Components/Divider.jsx";
import { loginSchema } from "../validation/authSchemas.js";
import { signInWithEmail, signInWithGoogle, getAuthErrorMessage } from "../services/authService.js";
import { usersApi } from "../services/api.js";
import { ROUTES } from "../utils/constants.js";

/**
 * Pick the right landing page for an authenticated user based on their role.
 * Returns null for regular job seekers (falls through to /jobs).
 */
function getDashboardFor(me) {
  const role = me?.data?.role;
  if (role === "admin") return ROUTES.ADMIN;
  if (role === "recruiter") return ROUTES.RECRUITER_DASHBOARD;
  // Users who registered with a company are employers — send them to the
  // recruiter dashboard even if their role flag is stale (role registration
  // can be skipped if the registerFirebase call failed during signup).
  if (role === "user" && me.data.company_name) {
    return ROUTES.RECRUITER_DASHBOARD;
  }
  return null;
}

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formError, setFormError] = useState("");
  const [googleLoading, setGoogleLoading] = useState(false);

  const redirectTo = location.state?.from?.pathname;

  async function handleSubmit(values, { setSubmitting }) {
    setFormError("");
    try {
      await signInWithEmail(values);
      // Redirect based on role
      try {
        const me = await usersApi.getMe();
        const dest = getDashboardFor(me);
        if (dest) {
          navigate(dest, { replace: true });
          return;
        }
      } catch {}
      navigate(redirectTo || ROUTES.JOBS, { replace: true });
    } catch (error) {
      setFormError(getAuthErrorMessage(error));
    } finally {
      setSubmitting(false);
    }
  }

  async function handleGoogleSignIn() {
    setFormError("");
    setGoogleLoading(true);
    try {
      await signInWithGoogle();
      try {
        const me = await usersApi.getMe();
        const dest = getDashboardFor(me);
        if (dest) {
          navigate(dest, { replace: true });
          return;
        }
      } catch {}
      navigate(redirectTo || ROUTES.JOBS, { replace: true });
    } catch (error) {
      setFormError(getAuthErrorMessage(error));
    } finally {
      setGoogleLoading(false);
    }
  }

  return (
    <AuthLayout
      icon={<FaSignInAlt />}
      title="Welcome back"
      subtitle="Log in to your VerifyHire account"
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link to={ROUTES.SIGNUP} className="font-semibold text-brand-600 hover:text-brand-700">
            Sign up
          </Link>
        </>
      }
    >
      <GoogleButton onClick={handleGoogleSignIn} loading={googleLoading} />
      <Divider />

      {formError && (
        <div
          role="alert"
          className="mb-4 rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-sm text-red-600 animate-shake"
        >
          {formError}
        </div>
      )}

      <Formik
        initialValues={{ email: "", password: "", rememberMe: false }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, handleChange }) => (
          <Form noValidate>
            <InputField
              name="email"
              type="email"
              label="Email address"
              placeholder="you@example.com"
              icon={<FaEnvelope size={14} />}
              autoComplete="email"
            />
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="text-sm font-medium text-gray-800">
                  Password
                </label>
                <Link
                  to="#"
                  className="text-xs font-medium text-brand-600 hover:text-brand-700"
                >
                  Forgot password?
                </Link>
              </div>
              <PasswordInput name="password" autoComplete="current-password" />
            </div>

            <label className="flex items-center gap-2 mb-5 select-none cursor-pointer">
              <input
                type="checkbox"
                name="rememberMe"
                checked={values.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-brand-500 focus-ring"
              />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>

            <PrimaryButton loading={isSubmitting}>Log in</PrimaryButton>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
}

export default Login;
