// React & React router
import { useState } from "react";
import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
// CSS
import css from "./Login.module.css";
// API
import { loginUser } from "../api";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathName = new URL(request.url).searchParams.get("redirectTo") || "/host";

  try {
    console.log(email, password)
    const data = await loginUser({ email, password });
    localStorage.setItem("loggedin", true);
    return redirect(pathName)
  } catch (error) {
    return error.message;
  }
};

export default function Login() {
  // login error
  const err = useActionData();

  // hook return "idle" or "submitting" string that control disable login button
  const { state } = useNavigation();

  // This message is shown when redirected to the login page from a protected route("You must log in first").
  const [searchParams, setSearchParams] = useSearchParams();
  const message = searchParams?.get("message");


  return (
    <article className={css.container}>
      {message && <h3>{message}</h3>}
      <h1>Sign in to your account</h1>
      <Form method="post" replace>
        <input type="email" name="email" placeholder="Email address" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="new-password"
          required
        />
        {err && (
          <h3 style={{ textAlign: "center", marginTop: "32px" }}>{err}</h3>
        )}

        <button disabled={state === "submitting"}>
          {state === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </Form>
      <p>
        Don't have an account? <Link to="/">Create one now</Link>
      </p>
    </article>
  );
}
