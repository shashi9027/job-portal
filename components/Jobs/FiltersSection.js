import { useState } from "react"

export default function FiltersSection({filters, handleFilters}) {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="bg-background rounded-md" style={{ padding: "30px" }}>
            <div className="filters-heading">Search By Keywords</div>
            <div className='relative'>
                <input value={filters.keyword} onChange={(e) => handleFilters(e, "keyword", e.target.value)} onKeyDown={(e) => handleFilters(e, "keyword", e.target.value)} placeholder='Job title, keywords, or company' />
                <span className='icon'><img src="/search.svg" alt="search" /></span>
            </div>
            <div className="filters-heading mt-5">Location</div>
            <div className='relative'>
                <input placeholder='City or postcode'  />
                <span className='icon'><img src="/geo-alt.svg" alt="search" /></span>
            </div>
        </div>
    )
}