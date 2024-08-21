import { Authenticator } from "remix-auth";
//import { sessionStrorage } from "./session.server";
import { Auth0Strategy } from "remix-auth-auth0";
import { createCookieSessionStorage } from "@remix-run/node";

const env = process.env;

export type User = any;
//     id: string;
//     email: string;
//     name: string;
// }
async function Login(user: User) {
    return(user);
}

const users: any = [];

if(!env.AUTH0_DOMAIN || !env.AUTH0_CLIENT_ID || !env.AUTH0_CLIENT_SECRET ){
    throw new Error("Missing Auth0 Configuration");
}

export let sessionStrorage = createCookieSessionStorage({
    cookie:{
        name: "_session",
        sameSite: "lax",
        path: "/",
        httpOnly: true,
        secrets: [env.AUTH0_CLIENT_SECRET],
        secure: process.env.NODE_ENV === "production",
    },
});


//export let authenticator = new Authenticator<User>(sessionStrorage);
export const authenticator = new Authenticator(sessionStrorage);


export const isAuthenticated =async (request:Request) => {
    return authenticator.isAuthenticated(request, {
        failureRedirect:"/login",
    })
};

export const getAuthenticatedUser =async (request:Request) => {
    return (await(isAuthenticated(request) as unknown)) as User;
}

let auth0Strategy = new Auth0Strategy({
    callbackURL: env.AUTH0_CALLBACK_URL,
    clientID: env.AUTH0_CLIENT_ID,
    clientSecret: env.AUTH0_CLIENT_SECRET,
    domain: env.AUTH0_DOMAIN,
    //audience: `https://${env.AUTH0_DOMAIN}`,
    },
    async({accessToken, refreshToken, extraParams, profile}) => {
        //return User.findOrCreate({email: profile.emails[0].value})
        //return user.push(profile.name,profile.emails);       
        // const user = users.find((u:any) => u.email === profile.emails);
        // //console.log("usuario nuevooo")
        // console.log(profile)
        // if(!user){
        //     console.log("nuevo usuario")
        //     const newUser = {
        //         id: users.length+1,
        //         email: profile.emails,
        //         name:profile.displayName,
        //     }
        //     console.log(newUser)
        //     users.push(newUser);
        //     return(newUser)
        // }
        // console.log("usuario normal")
        // return(user)
        const user = {
            email: profile._json?.email,
            name: profile._json?.nickname,
        }
        //return profile
        console.log(user)
        return Login(user)
    }
    
);
//console.log(auth0Strategy);
//console.log(authenticator)
authenticator.use(auth0Strategy);

//export let {getSession, commitSession, destroySession} = sessionStrorage;
export let {getSession, commitSession, destroySession} = sessionStrorage;