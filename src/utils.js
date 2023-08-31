import { redirect } from "react-router-dom";

export async function requireAuth(request) {
  const pathName = new URL(request.url).pathname
  const isLoggedIn = true;
  // const isLoggedIn = localStorage.getItem("loggedin");

  if (!isLoggedIn) {
    throw redirect(`/login?message=You must log in first.&redirectTo=${pathName}`)
    // const response = redirect("/login");
    // response.body = true; // It's silly, but it works
    // return response;
  }
  return null;
}
