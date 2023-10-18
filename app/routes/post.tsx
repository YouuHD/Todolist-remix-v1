import { json, type ActionFunction, type V2_MetaFunction } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import Title from "./components/Title";
import Background from "./components/Background";
import Container from "./components/container";
import Label from "./components/label";
import LinkToPost from "./components/LinkToPost";
import { Link } from "@remix-run/react";
import { addTodo, getTodos } from "./services/todoService";
import Button from "./components/Button";
import LinkDesign from "./components/linksDesign";

import {AiTwotoneEdit , AiFillDelete } from "react-icons/ai"
import {IoChevronBackCircleSharp} from "react-icons/io5"
import { PrismaClient } from "@prisma/client"
import Card_1 from "./components/card";


export const meta: V2_MetaFunction = () => {
    return [
      { title: "Info" },
      { name: "description", content: "Welcome to Remix!" },
    ];
  };
  
  // export const loader = async () => {
  //   const todos = getTodos();
  
  //   return todos.map((todo) => ({
  //     name: todo.name,
  //     lastName: todo.lastName,
  //     phoneNumber: todo.phoneNumber,
  //     email: todo.email,
  //     password: todo.password,
  //   }))
  // }

  export const loader =async () => {
    const client = new PrismaClient()

    const dataForm = await client.firstData.findMany()
    return {
      dataForm
    }
  }
  
  // Este codigo se ejecuta en el servidor, no en el navegador, por lo que no se vera en la consola del navegador.
 


const Post = ()=>{

    //const loaderData = useLoaderData();
    const {dataForm} = useLoaderData<typeof loader>()
  
    return (
        
        <Background style="bg-slate-200 h-auto">
          <div className="flex justify-between items-stretch bg-violet-950 shadow-gray-500 shadow-sm mb-10">
            <div className="mx-5 my-2 ">
              <Link to="../" className="text-white text-4xl ">
                <IoChevronBackCircleSharp></IoChevronBackCircleSharp>
              </Link>
            </div>

            <div style={{ color: "dark gray"}} className="bg-violet-950 text-white flex flex-col justify-center items-center rounded-sm shadow-gray-500 shadow-sm w-3/4">
                        <Title text="Data"/> 
            </div>
          </div>
            
        <div className="w-full mx-10">
          
          <div className="justify-center items-center snap-x ...">
            <ul>
              <div className="grid grid-rows-3 grid-flow-col gap-3 mb-10 snap-start ... ">
            
                {/* Invocar componente */}
                {/*Es esa wea*/}
                {/* {JSON.stringify(loaderData, null, 2)} */}
                {dataForm.map((todo , index) => (
                  <li key={index} className="">
                    {/* {todo.name} */}
                    <Card_1 title={todo.name} route="./img/SuperBien.jpeg" id={todo.lastname}></Card_1>
                    {/* <Container style="w-4/5 scroll-ml-6 snap-start ...">
                      "Daniel"
                      <div className="flex flex-colums justify-start">
                          <div style={{ color: "dark gray"}} className="bg-zinc-50 flex flex-col justify-center items-center rounded-sm shadow-gray-500 shadow-sm my-10 mx-5 w-1/4 h-auto">
                              <Title text="Image"/> 
                          </div>

                          <Container style="w-5/6">
                              <p>Name: {todo.name}</p>
                              <p>Last name: {todo.lastname}</p>
                              <p>Phone: {todo.phoneNumber}</p>
                              <p >E-mail: {todo.email}</p>
                          </Container>

                      </div>
                      
                    </Container>  */}

                  </li>

                ))}
              </div>
            </ul>

          </div>
         
          </div>



        </Background>
    )
}

export default Post