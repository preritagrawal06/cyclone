import {Typography, Button, IconButton, Divider, AppBar,Box ,SwipeableDrawer, List, ListItem,Stack} from "@mui/material";
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";


export default function Navbar(){
    const [open, setOpen] = useState(false);
    return(
        <>
   <AppBar elevation={0} color="transparent" sx={{
    position:"relative",
    top:"0",left:"0",
        padding:"30px 0px",
        flexDirection:"row",justifyContent:"space-around",
        
   }}>
    <Box sx={{display:{md:"flex"},flexDirection:"row",gap:"70px",alignItems:"center"}}>
        <Stack direction="row" alignItems="center" gap="10px">
        <img src="./cyclone.png" alt="logo" width={150} />
        </Stack>
       <Typography variant="nav" sx={{display:{xs:"none", md:"flex"}}}>
          <a href="#">COMMUNITY</a>
       </Typography>
       <Typography variant="nav" sx={{display:{xs:"none", md:"flex"}}}>
          <a href="#">GITHUB</a>
       </Typography>
       <Typography variant="nav" sx={{display:{xs:"none", md:"flex"}}}>
          <a href="#">DOCS</a>
       </Typography>
       <Typography variant="nav" sx={{display:{xs:"none", md:"flex"}}}>
          <a href="#">DAO</a>
       </Typography>
       <Typography variant="nav" sx={{display:{xs:"none", md:"flex"}}}>
          <a href="#">STATS</a>
       </Typography>
       <Typography variant="nav" sx={{display:{xs:"none", md:"flex"}}}>
          <a href="#">FORUM</a>
       </Typography>
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
          <a href="#" onClick={()=>setOpen(false)} >COMMUNITY</a>
       </Typography>
            </ListItem>
            <ListItem>
            <Typography variant="nav" >
          <a href="#" onClick={()=>setOpen(false)} >GITHUB</a>
       </Typography>
            </ListItem>
            <ListItem>
            <Typography variant="nav" >
          <a href="#" onClick={()=>setOpen(false)} >DOCS</a>
       </Typography>
            </ListItem>
            <ListItem>
            <Typography variant="nav" >
          <a href="#" onClick={()=>setOpen(false)} >DAO</a>
       </Typography>
            </ListItem>
            <ListItem>
            <Typography variant="nav" >
          <a href="#" onClick={()=>setOpen(false)} >STATS</a>
       </Typography>
            </ListItem>
            <ListItem>
            <Typography variant="nav" >
            <a href="#" onClick={()=>setOpen(false)} >FORUM</a>
            </Typography>
            </ListItem>
          </List>
    </SwipeableDrawer>
   </AppBar>
        </>
    )
}