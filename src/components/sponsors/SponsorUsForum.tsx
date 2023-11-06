export default function SponsorUsForum(){
    return(
        <div className= "bg-sfDarkerBlue w-auto h-auto px-4 py-4">
            <h1 className="text-white text-3xl font-bold pb-4">Reach Us:</h1>
            <div className="flex flex-col gap-3">
                <label className="text-white">Name</label>
                <input type= "text" className=" bg-gray-600 text-gray-300 p-2.5"/>
                <label className="text-white">Email</label>
                <input type= "text" className=" bg-gray-600 text-gray-300 p-2.5"/>
                <label className="text-white">Message</label>
                <input type= "text" className=" bg-gray-600 text-gray-300 p-2.5 pb-14"/>
                <button className=" bg-sfGreyBlue rounded-md text-white w-fit px-2 place-self-end "> Submit</button>
            </div>


            

        </div>
    )

    

}