import Title from "./Title";
import Background from "./Background";
import Container from "./container";
import Label from "./label";
import Button from "./Button";
import ImgContainer from "./img_container";


const Card_1 = ({ title, route , id} : {title : string , route : string , id : string})=>{
    return (
        //<Background style="bg-zinc-100 h-screen flex flex-columns justify-center items-center">
            <Container style="w-auto flex flex-col justify-center items-center h-auto">
                <div style={{ color: "dark gray"}} className="bg-zinc-50 flex flex-col justify-center items-center rounded-sm shadow-gray-500 shadow-sm my-5 mx-5 w-3/4 h-5/6">
                    <ImgContainer route={route} description="Imagen del usuario"/> 
                </div>
                <p>{id}</p>
                <Button label={title} style ="bg-violet-950 text-white rounded-md shadow-gray-500 shadow-sm  w-3/4 py-1.5 px-1.5 my-px my-2 mx-1.5 transition ease-in-out delay-150 hover:bg-green-500 duration-300 ..." type="button" onClick={() => console.log("ver usuario")}/> 

            </Container>
        //</Background>
    )
}

export default Card_1