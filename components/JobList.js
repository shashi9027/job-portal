import FiltersSection from "./Jobs/FiltersSection";
import JobsSection from "./Jobs/JobsSection";
import Header from "./Layout/Header";

export default function JobList() {
    return (
        <div>
            <div className="bg-background page-title text-center">
                <div className="font-medium  text-3xl ">
                    Find Jobs
                </div>
                <div  className ="mt-2"style={{fontSize: "15px"}}>Home / Jobs</div>
            </div>

            <div className="flex mt-12 px-8 gap-7">
                <div className="w-1/3">
                 <FiltersSection/>
                 </div>
                 <div>
                    <JobsSection/>
                 </div>
            </div>

        </div>
    )
}