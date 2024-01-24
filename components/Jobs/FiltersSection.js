import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';


export default function FiltersSection(){
    return(
        <div className="bg-background rounded-md" style={{padding: "30px 30px 10px"}}>
            <div className="filters-heading">Search By Keywords</div>
            <div className='relative'>
             <input placeholder='Job title, keywords, or company'/>
             <span className='icon'><img src="/search.svg" alt="search" /></span>
            </div>
            <div className="filters-heading mt-5">Location</div>
            <div className='relative'>
             <input placeholder='City or postcode'/>
             <span className='icon'><img src="/geo-alt.svg" alt="search" /></span>
            </div>
        </div>
    )
}