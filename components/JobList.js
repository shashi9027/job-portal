import FiltersSection from "./Jobs/FiltersSection";
import JobsSection from "./Jobs/JobsSection";
import { useEffect, useState } from "react";
import Pagination from '@mui/material/Pagination';

export default function JobList({ jobs, getJobs }) {

    const [jobsList, setJobsList] = useState();
    const [clear, setClear] = useState(false);
    const [pages, setPages] = useState(1)
    const [filters, setFilters] = useState({
        sort_by: "",
        keyword: ""
    })
    const clearFilters=()=>{
        setFilters({
            ...filters, ["sort_by"]:"", ["keyword"]: ""
        })
        setClear(false);
        getJobs(pages)
    }
    const handleChange = (e, page) => {
        getJobs(page);
        setPages(page)
    }
    
    const handleFilters = (e, filtername, value) => {
        const filter={keyword:"", sort_by:""}
        if (filtername == "sort_by") {
            filter.sort_by = value
            if (value == "newest") {
                const sortedByNewest = jobsList.slice().sort((a, b) => {
                    return new Date(b.timestamp) - new Date(a.timestamp);
                });
                
                setJobsList(sortedByNewest)
                setFilters({ ...filters, [filtername]: value })
                
            }
            else if (value == "oldest") {
                const sortedByOldest = jobsList.slice().sort((a, b) => {
                    return new Date(a.timestamp) - new Date(b.timestamp);
                });
                setJobsList(sortedByOldest)
                setFilters({ ...filters, [filtername]: value })
                
            }
            else{
                getJobs(pages)
                setFilters({ ...filters, [filtername]: value })
            }
        }

        if (filtername == "keyword") {
            if (e.keyCode == 13) {
                filter.keyword = value; 
                const keywords = value.toLowerCase().split(',');
                const filteredJobs =  jobsList.filter(job => {
                    const searchFields = [
                        job.job_title,
                        job.skills_req.map(skill => skill.data).join(','),
                        job.company,
                        job.location
                    ].join(' ').toLowerCase();
                    return keywords.some(keyword => searchFields.includes(keyword));
                });
                setJobsList(filteredJobs)
                
            }
            else {
                setFilters({ ...filters, [filtername]: value })
            }
        }

        if(filter.keyword == ""&& filter.sort_by==""){
            setClear(false)
        }
        else{
            setClear(true)
        }
        
    }
    useEffect(() => {
        setJobsList(jobs?.results);
        setFilters({...filters, ["sort_by"]: "", ["keyword"]: ""});
    }, [jobs])

    return (
        <div>
            <div className="bg-background page-title text-center">
                <div className="font-medium  text-3xl ">
                    Find Jobs
                </div>
                <div className="mt-2" style={{ fontSize: "15px" }}>Home / Jobs</div>
            </div>

            <div className="flex mt-12 px-8 gap-7">
                <div className="w-1/3">
                    <FiltersSection filters={filters} handleFilters={handleFilters} />
                    <div className="call-to-action mt-5">
                         <div className="font-medium text-lg">Recruiting?</div>
                         <p>Advertise your jobs to millions of monthly users and search 15.8 million CVs in our database.</p>
                         <div className="login">Start Recruiting Now</div>
                         <div className="image">
                           
                         </div>
                    </div>
                </div>
                <div className="w-full">
                    {jobsList ? <JobsSection clear={clear} clearFilters={clearFilters} jobsList={jobsList} filters={filters} handleFilters={handleFilters} /> : <div className="text-center">Loading...</div>}

                    <div className="flex justify-center">
                        <Pagination className="mb-5" count={Math.ceil(jobs?.count / 5)} onChange={handleChange} color="primary" />
                    </div>
                </div>
            </div>

        </div>
    )
}