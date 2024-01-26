import Image from "next/image"

export default function JobsCard({val}){
    const calculateHours = (time)=>{
        const currentTime = new Date();
        const specificTime = new Date(time);
        const timeDifferenceMs = currentTime.getTime() - specificTime.getTime()
        const timeDifferenceHours = timeDifferenceMs / (1000 * 60 * 60*60);

        return parseInt(timeDifferenceHours)
    }
    return(
        <div className="job-card">
             <div className="flex gap-5">
                <Image style={{maxHeight: "50px"}} src="/comapny-logo.webp" width={50} height={30}/>
                <div className="w-full">
                    <div>
                        <h4 className="font-medium">{val?.job_title}</h4>
                    </div>
                    <div className="flex mt-3 gap-5 job-info">
                        <div className="flex  gap-2">
                            <Image  src="/briefcase.png" width={20} height={20} alt="briefcase" />
                            <span>{val?.category ? val?.category : "Segment"}</span>
                        </div>
                        <div className="flex gap-2">
                            <Image  src="/geo-alt.svg" width={20} height={20} alt="briefcase" />
                            <span>{val?.location ? val?.location : "Random"}</span>
                        </div>
                        <div className="flex gap-2">
                            <Image  src="/clock.png" width={20} height={20} alt="briefcase" />
                            <span>{val?.timestamp ? calculateHours(val?.timestamp) : "1"} hours ago</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image  src="/salary.png" width={20} height={20} alt="briefcase" />
                            <div>${val?.min_salary}k - ${val?.max_salary}k</div>
                        </div>
                    </div>
                    <div className="flex job-other-info mt-4">
                          <div className="bg-secondary text-primary">{val?.job_type ? val?.job_type: "Full Time"}</div>
                          <div className="bg-background-green text-green">Private</div>
                          <div className="bg-background-orange text-orange">Urgent</div>
                    </div>
                </div>
                <Image style={{maxHeight: "30px"}} src="/bookmark-variant.png" width={30} height={30}/>
             </div>
        </div>
    )
}