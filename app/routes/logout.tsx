import { ActionFunction, LoaderArgs, redirect } from "@remix-run/node";
import {
  destroySession,
  getSession,
} from "./services/auth.server";

import { authenticator } from "./services/auth.server";

export const loader = async ({ request }: LoaderArgs) => {
  // Obtenemos las variables de entorno necesarias para la autenticación de Auth0.
  const { AUTH0_DOMAIN, AUTH0_CLIENT_ID, AUTH0_LOGOUT_RETURN_TO_URL } =
    process.env;

  // Utilizamos la función 'logout' del autenticador para realizar la desconexión.
  return authenticator.logout(request, {
    redirectTo: `https://${AUTH0_DOMAIN}/v2/logout?client_id=${AUTH0_CLIENT_ID}&returnTo=${AUTH0_LOGOUT_RETURN_TO_URL}`,
  });
};

// Definimos la función 'action' que se ejecuta al procesar la acción de cierre de sesión.
export const action: ActionFunction = async ({ request }) => {
  // Obtenemos las variables de entorno necesarias para la autenticación de Auth0.
  const { AUTH0_LOGOUT_URL, AUTH0_CLIENT_ID, AUTH0_RETURN_TO_URL } =
    process.env as Record<string, string>;

  // Obtenemos la sesión del usuario a partir de las cookies en la solicitud.
  const session = await getSession(request.headers.get("Cookie"));

  // Creamos una URL de cierre de sesión para Auth0 y configuramos los parámetros necesarios.
  const logoutURL = new URL(AUTH0_LOGOUT_URL);
  logoutURL.searchParams.set("client_id", AUTH0_CLIENT_ID);
  logoutURL.searchParams.set("returnTo", AUTH0_RETURN_TO_URL);

  // Redirigimos al usuario a la URL de cierre de sesión y eliminamos la sesión.
  return redirect(logoutURL.toString(), {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
};
