import type { LoaderArgs } from "@remix-run/node";

import { authenticator } from "~/routes/services/auth.server";

export let loader = ({request}: LoaderArgs) => {
    return authenticator.authenticate("auth0",request,{
        successRedirect: "/dashboard",
        failureRedirect: "/login"
    });
};