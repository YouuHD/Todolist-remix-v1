import type { LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { authenticator } from "./services/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
    const User = await authenticator.isAuthenticated(request);
    console.log("Antes ",User);
    if(User){
        console.log("Si entra jsjs")
        return redirect("/dashboard");
        
    }else{
        console.log("no entra")
    }
    console.log("Despues ",User);
    return authenticator.authenticate("auth0", request);
};