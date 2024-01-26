import JobsCard from "./JobsCard";


export default function JobsSection({clear, clearFilters,jobsList, filters, handleFilters}) {

    return (
        <div className="w-full">
        
            <div className="flex justify-between gap-4">
                <div className="text self-end">Show <strong>5</strong> jobs</div>
                <div className="flex">
                {clear && <button className="login clear-btn" onClick={()=> clearFilters()}>Clear All</button> }
                
                <select value={filters.sort_by} className="selector" onChange={(e)=> handleFilters(e,"sort_by", e.target.value)}>
                    <option value="">Sort by (default)</option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>
                <select className="selector">
                    <option value="option1">All</option>
                    <option value="option2">10 per page</option>
                    <option value="option3">20 per page </option>
                    <option value="option3">30 per page </option>
                </select>
                </div>
            </div>
            <div className="mt-8">
                {jobsList?.map((val,index)=>{
                    return(
                        <JobsCard key={index} val={val}/>
                    )
                })}
            </div>
        </div>
    )
}