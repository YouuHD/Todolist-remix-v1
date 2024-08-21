import { redirect } from "@remix-run/node"
import type { ActionArgs } from "@remix-run/node";
import { authenticator } from "~/routes/services/auth.server"

export let loader = () => redirect("/dashboard");

export let action = ({request}: ActionArgs) =>{
    return authenticator.authenticate("auth0",request);
};