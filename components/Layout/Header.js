import Dialog from '@mui/material/Dialog';
import LoginDialog from '../LoginDialog';
import { useEffect, useState } from 'react';
import RegisterDialog from '../RegisterDialog';
import Cookies from 'js-cookie';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
const list = [{ "tab": "Home" }, { "tab": "Find Jobs" }, { "tab": "Employers" }, { "tab": "Candidates" }, { "tab": "Blog" }, { "tab": "About Us" }]

export default function Header() {
    const [openLoginDialog, setOpenLoginDialog] = useState(false);
    const [openRegisterDialog, setOpenRegisterDialog] = useState(false);
    const [name, setName] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
       setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    useEffect(()=>{
        if(Cookies.get("token")){
            setName(Cookies.get("username"))
        }
     
    },[])
    return (
        <div className="flex justify-between px-14 py-4 items-center">
            <div>
                <strong className="text-primary text-3xl font-bold ">Learnkoods</strong>
            </div>
            <div className="flex justify-between gap-8 tab-list">
                {list?.map((val, index) => {
                    return (<div key={index}>
                        {val?.tab}
                    </div>)
                })}
            </div>
            <div className="flex justify-between gap-5 items-center">
                <div className="text-primary">Upload your CV</div>
                {name ? <button aria-describedby={id} type="button" onClick={handleClick}>
        {name}
      </button> : <button onClick={()=> setOpenLoginDialog(true)} className="btn bg-secondary text-primary">Login / Register</button>
            }
                    <div className="btn bg-primary text-white">Job Post</div>
            </div>
            <Dialog open={openLoginDialog} onClose={()=> setOpenLoginDialog(false)} >
             <LoginDialog setName={setName} setOpenLoginDialog={setOpenLoginDialog} setOpenRegisterDialog={setOpenRegisterDialog}/>
            </Dialog>

            <Dialog open={openRegisterDialog} onClose={()=> setOpenRegisterDialog(false)}>
               <RegisterDialog setOpenLoginDialog={setOpenLoginDialog}  setOpenRegisterDialog={setOpenRegisterDialog}/>
            </Dialog>
            <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
        <button onClick={()=>{
            Cookies.remove("token"),
            Cookies.remove("username"),
            setName(""),
            setAnchorEl(null)
        }}>
          Signout
        </button>
        </Box>
      </Popper>
        </div>
    )
}