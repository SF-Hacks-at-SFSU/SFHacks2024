import './AboutUs.css';

export default function AboutUs(){

    return (

        <>
            <body> {/*Banner and title of about us*/}
            <h1 className='text-center font-mono font-bold text-6xl'>
                <div className='usTitle'>
                    About <span className='sf'>SF</span>HACKS
                </div>
            </h1>



            <div className='font-mono description flex flex-wrap '>
                    <div className='text-justify content'>
                        <p>Our organization’s purpose is to plan and host California’s most talented collegiate hackers, designers, and developers to a 3 days hackathon</p>
                        <br></br>
                        <p>We work towards giving students an environment for maximum innovation, collaboration, and education</p>
                    </div>

                    


                    <iframe width="600" height="345" src="https://www.youtube.com/watch?v=n7ObLbRQ798&t=3s" className='video'></iframe>
                
            </div>
            </body>

        </>
    
    
    )

}




