import { redirect } from "next/navigation";
export default function notFound(){
    redirect("/");
    return (
        <>
            <div className="w-full h-screen  flex justify-center items-center">
            <h1 className="text-[#81da65] text-2xl">Redirecting To Home...</h1>
            </div>
        </>
    )
}