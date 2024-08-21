import type { ActionArgs } from "@remix-run/node";

import { redirect } from "@remix-run/node";

import { destroySession, getSession } from "../services/session.server";

export const action =async ({request}: ActionArgs) => {
    const session = await getSession(request.headers.get("Cookie"));
    const logoutURL = new URL(process.env.AUTH0_LOGOUT_URL);

    
    
}