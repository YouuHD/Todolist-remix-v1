import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { authenticator } from "../services/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
    const User = await authenticator.isAuthenticated(request);

    if(User){
        return redirect("/dashboard");
    }

    return authenticator.authenticate("auth0", request);
};