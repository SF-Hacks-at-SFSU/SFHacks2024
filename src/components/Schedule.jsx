const Schedule = () => {
    return(
        <>
            <div className="schedule-container relative w-full h-32 md:h-40 lg:h-50">
                <header className='schedule-header-container max-w-[45%] bg-[#132330] text-center overflow-hidden mx-auto my-8 px-0 py-5 rounded-[20px] text-5xl'>
                    <h2 className='schedule-header-text text-[#FFF5D9] font-light text-[2.5rem] lg:text-[2.5rem] md:text-[2rem] xs:text-[0.4rem]'>
                        Event Schedule
                    </h2>
                </header>
                <section className="schedule-time-table">
                    <div className="schedule-Container bg-[#132330] mx-auto rounded-[30px] lg:max-w-[67%] xs:max-w-[90%]">
                            <header className="time-table-categories flex flex-row justify-center pt-[1.5rem] pb-[1rem] border-b-2 lg:text-xl md:text-[0.85rem] xs:text-[0.6rem]">
                                <span className="lg:mr-[4rem] md:pr-[5rem] xs:mx-[0.8rem]">Times</span>
                                <span className="lg:mr-[8rem] md:mr-[4rem] xs:mr-[0.4rem]">General</span>
                                <span className="lg:mr-[8rem] md:mr-[4rem] xs:mr-[0.4rem]">Workshop 1</span>
                                <span className="lg:mr-[8rem] md:mr-[4rem] xs:mr-[0.4rem]">Workshop 2</span>
                                <span className="lg:mr-[8rem] md:mr-[4rem] xs:mr-[0.4rem]">Sponsors</span>
                                <span className="">Events</span>
                            </header>
                        <section className="time-table-schedule flex overflow-scroll md:h-[40rem] xs:h-[15rem]">
                            <div className="time-table-times flex flex-col flex-row text-right pl-5 lg:text-xl md:text-[0.85rem] xs:text-[0.65rem]">
                                <span className="pb-2">12:00 am</span>
                                <span className="pb-2">12:30 am</span>
                                <span className="pb-2">1:00 am</span>
                                <span className="pb-2">1:30 am</span>
                                <span className="pb-2">2:00 am</span>
                                <span className="pb-2">2:30 am</span>
                                <span className="pb-2">3:00 am</span>
                                <span className="pb-2">3:30 am</span>
                                <span className="pb-2">4:00 am</span>
                                <span className="pb-2">4:30 am</span>
                                <span className="pb-2">5:00 am</span>
                                <span className="pb-2">5:30 am</span>
                                <span className="pb-2">6:30 am</span>
                                <span className="pb-2">7:00 am</span>
                                <span className="pb-2">7:30 am</span>
                                <span className="pb-2">8:00 am</span>
                                <span className="pb-2">8:30 am</span>
                                <span className="pb-2">9:00 am</span>
                                <span className="pb-2">9:30 am</span>
                                <span className="pb-2">10:00 am</span>
                                <span className="pb-2">10:30 am</span>
                                <span className="pb-2">11:00 am</span>
                                <span className="pb-2">11:30 am</span>
                                <span className="pb-2">12:00 pm</span>
                                <span className="pb-2">12:30 pm</span>
                                <span className="pb-2">1:00 pm</span>
                                <span className="pb-2">1:30 pm</span>
                                <span className="pb-2">2:00 pm</span>
                                <span className="pb-2">2:30 pm</span>
                                <span className="pb-2">3:00 pm</span>
                                <span className="pb-2">3:30 pm</span>
                                <span className="pb-2">4:00 pm</span>
                                <span className="pb-2">4:30 pm</span>
                                <span className="pb-2">5:00 pm</span>
                                <span className="pb-2">5:30 pm</span>
                                <span className="pb-2">6:30 pm</span>
                                <span className="pb-2">7:00 pm</span>
                                <span className="pb-2">7:30 pm</span>
                                <span className="pb-2">8:00 pm</span>
                                <span className="pb-2">8:30 pm</span>
                                <span className="pb-2">9:00 pm</span>
                                <span className="pb-2">9:30 pm</span>
                                <span className="pb-2">10:00 pm</span>
                                <span className="pb-2">10:30 pm</span>
                                <span className="pb-2">11:00 pm</span>
                                <span className="pb-2">11:30 pm</span>
                            </div>
                            <div className="time-table-events flex flex-row justify-evenly">
                                
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Schedule