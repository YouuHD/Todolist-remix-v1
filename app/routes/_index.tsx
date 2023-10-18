// import type { V2_MetaFunction } from "@remix-run/node";
import { json, type ActionFunction, type V2_MetaFunction } from "@remix-run/node";
import Title from "./components/Title";
import Button from "./components/Button";
import Input from "./components/input";
import Label from "./components/label";
import Background from "./components/Background";
// import { Form } from "@remix-run/react";
import Card from "./components/card";
import LinkToPost from "./components/LinkToPost";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { addTodo, getTodos } from "./services/todoService";
import Container from "./components/container";
import Modal_1 from "./components/modal";
import Card_1 from "./components/card";
import {Link} from "@remix-run/react"
import LinkDesign from "./components/linksDesign";

import {AiTwotoneEdit , AiFillDelete } from "react-icons/ai"
import {IoChevronBackCircleSharp} from "react-icons/io5"
import { PrismaClient } from "@prisma/client"
import {useAuth0} from '@auth0/auth0-react';


export const meta: V2_MetaFunction = () => {
  return [
    { title: "To do list" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// Este codigo se ejecuta en el servidor, no en el navegador, por lo que no se vera en la consola del navegador.
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  // const id = formData.get("id")?.toString()
  const name = formData.get("name")
  const lastName = formData.get("lastName")
  const email = formData.get("email")
  const phoneNumber = formData.get("phoneNumber")
  const password = formData.get("password")
  console.log("Show the information in terminal server")
  // console.log({ id })
  console.log({ name })
  console.log({ lastName })
  console.log({ email })
  console.log({ phoneNumber })
  console.log({ password })

  // if(Number(id) === 0) {
  //   return {
  //     error: "Invalid"
  //   }
  // }

  // const responseData = {
  //   // id: id,
  //   name: name,
  //   lastName: lastName,
  //   email: email,
  //   phoneNumber: phoneNumber,
  //   password: password
  // }

  //addTodo(responseData)

  // Este codigo si se ejecuta en la consola del navegador
  //return json({ data: responseData });
  //Validación por si no llega nada
  if(!name || !lastName || !email || !phoneNumber || !password) throw new Error("Entry data")

  //Constante del cliente de prisma
  const client = new PrismaClient();
  //creación de datos
  const firstFormData = await client.firstData.create(
    {
    data: {
        name: name as string,
        lastname: lastName as string,
        email: email as string,
        phoneNumber: phoneNumber as string,
        password: password as string,
      },
    }
  )
  return firstFormData
}

export default function Index() {

  // const loaderData = useLoaderData();
  // const formData = useActionData<typeof action>();
  // console.log(formData)
  // console.log(typeof formData)
  
  return (


    <Background style="bg-zinc-100 h-full">
      {/* PRUEBAS */}
      <div style={{ color: "dark gray"}} className="bg-zinc-50 flex flex-col justify-center items-center rounded-full shadow-gray-500 shadow-sm">
        <Title text="To Do List"/>  
        <Title text="PROBANDO"/> 
      </div>


      <div className="bg-slate-200 flex flex-col justify-center items-center">
        <Button label="Prueba de boton" onClick={() => console.log("Presionado")} style ="bg-violet-950 text-white rounded-md shadow-sm py-1.5 px-1.5 my-px " type="button"/>
      </div> 
      <div className="flex flex-col justify-center items-center bg-slate-500 my-px shadow-gray-500 shadow-sm">
        <Input name="prueba" type="text" placeHolder="Introduce el texto" style="shadow-sm shadow-gray-500 rounded-md my-1.5 mx-1.5 justify-stretch text-center w-3/4 " />
      </div>
      

      <div className="flex flex-colums justify-around w-full">
        <div className="ml-5">
          
          <Form method="post" className="bg-slate-50 rounded-md shadow-md shadow-gray-500 py-2.5 px-2.5 mt-10 w-auto flex flex-col justify-center items-center mr-5 h-5/6">
            <Title text="To Do List"/> 

            <Input name="name" type="text" placeHolder="Name" style="shadow-sm shadow-gray-500 rounded-md my-1.5 mx-1.5 py-1.5 justify-stretch text-center w-3/4 h-8"/>

            <Input name="lastName" type="text" placeHolder="Last Name" style="shadow-sm shadow-gray-500 rounded-md my-1.5 mx-1.5 py-1.5 justify-stretch text-center w-3/4 h-8"/>

            <Input name="phoneNumber" type="text" placeHolder="Phone" style="shadow-sm shadow-gray-500 rounded-md my-1.5 mx-1.5 py-1.5 justify-stretch text-center w-3/4 h-8"/>

            <Input name="email" type="text" placeHolder="E-mail" style="shadow-sm shadow-gray-500 rounded-md my-1.5 mx-1.5 py-1.5 justify-stretch text-center w-3/4 h-8"/>

            <Input name="password" type="password" placeHolder="Password" style ="rounded-md shadow-gray-500 shadow-sm py-1.5 px-1.5 my-2.5 mx-1.5 w-3/4 h-8 justify-stretch text-center"/>

            <Input name="file" type="file" placeHolder="" style ="bg-violet-950 text-white rounded-md shadow-gray-500 shadow-sm py-3 px-1.5 my-px my-2.5 mx-1.5 w-3/4 "/>

            <Button label="Suscribe now" onClick={() => console.log("Information sended!")} style ="bg-violet-950 text-white rounded-md shadow-gray-500 shadow-sm py-1.5 px-1.5 my-px my-3.5 mt-5 mb-5 mx-1.5 w-3/4 transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-indigo-500 duration-300 ... cursor-pointer" type="submit"/>

            <LinkToPost text="Terms and conditions" link="/post"/>

            <LinkDesign text="Check your info" link="/post" style="bg-violet-950 text-white rounded-md shadow-gray-500 shadow-sm py-1.5 px-1.5 my-3.5 mt-5 mb-5 mx-1.5 w-3/4 h-20 transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-indigo-500 duration-300 ... cursor-pointer flex flex-col justify-center items-center"/>

          </Form>

        </div>

      </div>

      
      <Modal_1 title="User" name="daniel" lastName="payan" phoneNumber="6188239428" email="dany.sasket@gmail.com"/>

    </Background>
    
    
    

      
    );
    
}
