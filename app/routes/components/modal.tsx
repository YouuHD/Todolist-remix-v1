import Title from "./Title";
import Background from "./Background";
import Container from "./container";
import Button from "./Button";
import {AiTwotoneEdit , AiFillDelete} from "react-icons/ai"
import { Link } from "@remix-run/react";

const Modal_1 = ({ title, name , lastName , phoneNumber ,email} : {title : string , name : string , lastName : string , phoneNumber : string , email : string})=>{
    return (
        <Background style="bg-[E1E1E1] h-full flex flex-columns justify-center items-center">
            <Container style="w-1/2 ">
                <div style={{ color: "dark gray"}} className="bg-violet-950 text-white flex flex-col justify-center items-center rounded-sm shadow-gray-500 shadow-sm">
                    <Title text={title}/> 
                    
                </div>
                <div className="flex flex-colums justify-around">
                    <div style={{ color: "dark gray"}} className="bg-zinc-50 flex flex-col justify-center items-center rounded-sm shadow-gray-500 shadow-sm my-3  w-1/4 h-auto">
                        <Title text="Image"/> 
                    </div>
                    <div className="mt-5 h-auto">
                        <p>Name: {name}</p>
                        <p>Last name: {lastName}</p>
                        <p>Phone: {phoneNumber}</p>
                        <p >E-mail: {email}</p>
                    </div>
                    <div className="shadow-white-500 mt-5 flex flex-col justify-items-center">
                        <div className="mx-5 my-2 ">
                            <div className="bg-violet-950 text-white rounded-md shadow-gray-500 shadow-sm py-1.5 px-1.5 my-2 mx-1.5 w-3/4 transition ease-in-out delay-150 hover:bg-indigo-500 duration-300 ...">
                                <Link to="../" className="text-white text-3xl transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-indigo-500 duration-300 ... cursor-pointer">
                                    <AiTwotoneEdit></AiTwotoneEdit>
                                </Link>
                            </div>
                            <div className="bg-violet-950 text-white rounded-md shadow-gray-500 shadow-sm py-1.5 px-1.5 my-3 mx-1.5 w-3/4 transition ease-in-out delay-150 hover:bg-red-500 duration-300 ...">
                                <Link to="../" className="text-white text-3xl transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 hover:bg-indigo-500 duration-300 ... cursor-pointer">
                                    <AiFillDelete></AiFillDelete>
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>
                
            </Container>
        </Background>
    )
}

export default Modal_1