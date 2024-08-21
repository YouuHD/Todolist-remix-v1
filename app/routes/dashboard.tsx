import type { V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getAuthenticatedUser } from "./services/auth.server";
import { LoaderArgs } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
	return [
	  { title: "PlanEs" },
	  { name: "description", content: "Welcome to Remix!" },
	];
  };

export const loader = async ({request}: LoaderArgs) => {

	const user = await getAuthenticatedUser(request);
	const {email, name} = user;
	console.log(user)
	return {email, name};
};

export default function Dashboard() {	
//ReactDOM.render(
	//const {loginWithRedirect} = useAuth0();
	const {email , name} = useLoaderData<typeof loader>();

	return (
	<div>

		<h1>Dashboard</h1>
		<h1>PlaES</h1>

		<div>
			<h1>{name}</h1>
			<h1>{email}</h1>
		</div>
		
	</div>
	
	);
}
//);
