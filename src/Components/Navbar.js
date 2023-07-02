import {Typography, Button, IconButton, Divider, AppBar,Box ,SwipeableDrawer, List, ListItem,Stack} from "@mui/material";
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";


export default function Navbar(){
    const [open, setOpen] = useState(false);
    return(
        <>
   <AppBar elevation={0}  sx={{
    position:"relative",
    top:"0",left:"0",
        padding:"10px 0",
        flexDirection:"row",justifyContent:"space-between",   
        background:"none" 
   }}>
    <Stack direction="row" alignItems="center" gap="10px">
      <a href="/"><img src="cyclone.png" alt="logo" width={140} /></a>
    </Stack>
    <Box sx={{display:{xs:"none",md:"flex"},flexDirection:"row",gap:"30px",alignItems:"center"}}>
       <Typography variant="nav" >
          <a href="#">Community</a>
       </Typography>
       <Typography variant="nav" >
          <a href="#">Github</a>
       </Typography>
       <Typography variant="nav" >
          <a href="#">Docs</a>
       </Typography>
       <Typography variant="nav" >
          <a href="#">Dao</a>
       </Typography>
       <Typography variant="nav" >
          <a href="#">Stats</a>
       </Typography>
       <Typography variant="nav" >
          <a href="#">Forum</a>
       </Typography>
        <Button style={{
            padding:"10px",
            color:"white",
            border:"2px solid white",
            fontSize:"16px"
        }}>
          <a href="/mint">ENTER MINT</a>
        </Button>
    </Box>
    <IconButton sx={{ display: { md: "none" } }}>
          <FormatAlignLeftIcon onClick={() => setOpen(true)} sx={{color:"white"}}  />
    </IconButton>
    <SwipeableDrawer
     PaperProps={{
        sx: {
          background: "transparent",
          backdropFilter:'blur(10px)',
          width: "200px",
          display:open? "flex":"none"
        },
      }}
      open={open}
      anchor="right"
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}>
        <div>
            <IconButton>
              <ChevronRightIcon onClick={() => setOpen(false)} sx={{color:"white"}} />
            </IconButton>
          </div>
          <Divider sx={{backgroundColor:"white"}} />
          <List>
            <ListItem>
            <Typography variant="nav" >
          <a href="#" onClick={()=>setOpen(false)} >Community</a>
       </Typography>
            </ListItem>
            <ListItem>
            <Typography variant="nav" >
          <a href="#" onClick={()=>setOpen(false)} >Github</a>
       </Typography>
            </ListItem>
            <ListItem>
            <Typography variant="nav" >
          <a href="#" onClick={()=>setOpen(false)} >Docs</a>
       </Typography>
            </ListItem>
            <ListItem>
            <Typography variant="nav" >
          <a href="#" onClick={()=>setOpen(false)} >Dao</a>
       </Typography>
            </ListItem>
            <ListItem>
            <Typography variant="nav" >
          <a href="#" onClick={()=>setOpen(false)} >Stats</a>
       </Typography>
            </ListItem>
            <ListItem>
            <Typography variant="nav" >
          <a href="#" onClick={()=>setOpen(false)} >Forum</a>
       </Typography>
            </ListItem>
           <ListItem>
           <Button style={{
            padding:"10px 16px",
            color:"white",
            border:"2px solid white",
            fontSize:"16px"
        }}>
          <a href="/mint">ENTER MINT</a>
        </Button>
           </ListItem>
          </List>
    </SwipeableDrawer>
   </AppBar>
        </>
    )
}