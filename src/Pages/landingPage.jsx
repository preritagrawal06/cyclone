import { Stack, Typography,Box } from "@mui/material";
import Navbar from "../Components/Navbar";


export default function LandingPage(){
    return <div className="mint">
     <Stack sx={{padding:{lg:"1vmax 14vmax",md:"1vmax 2vmax",xs:"1vmax 4vmax"},alignItems:"flex-start",color:"white",gap:"32px"}}>
        <Navbar/>
     <Stack 
     sx={{
       maxWidth:{md:"800px",sm:"650px",xs:"80vw"},
       gap:"28px"
    }}>
        <Typography sx={{fontSize:{md:"52px",sm:"40px",xs:"32px"},fontWeight:"500"}}>Multi-chain <br/> Non-custodial<br/>  Privacy-preserving</Typography>
        <Typography sx={{fontSize:{sm:"20px",xs:"18px"}}}>Cyclone is a protocol that applies zkSNARKs to enable transactional privacy by breaking the on-chain link between depositor and recipient addresses.</Typography>
        <Stack sx={{gap:"16px"}}>
            <Typography variant="body1" sx={{color:"#38DCD5"}}> Launch App On</Typography>
            <Stack sx={{display:"grid",gridTemplateColumns:"repeat( auto-fit, minmax(150px, 1fr))",rowGap:"8px"}}>
            <Box component="span" className="coin">
                  <img src="https://cyclone.xyz/images/home/token_eth.png" alt="etherium" width="25px" height="25px"/>
                  <Typography variant="h6" className="coinname">ETH</Typography> 
                </Box>
                <Box component="span" className="coin">
                  <img src="https://cyclone.xyz/images/home/token_bnb.png" alt="etherium" width="25px" height="25px"/>
                  <Typography variant="h6" className="coinname">BSC</Typography> 
                </Box>
                <Box component="span" className="coin">
                  <img src="https://cyclone.xyz/images/home/token_iotx.png" alt="etherium" width="25px" height="25px"/>
                  <Typography variant="h6" className="coinname">IoTeX</Typography> 
                </Box>
                <Box component="span" className="coin">
                  <img src="https://cyclone.xyz/images/home/matic_s.svg" alt="etherium" width="25px" height="25px"/>
                  <Typography variant="h6" className="coinname">Polygon</Typography> 
                </Box> 
            </Stack>
            <Box component="span" className="links">
              <a href="#">
                <img src="https://cyclone.xyz/images/home/analysis.png" alt="analysis" width="20px" height="20px"/>
              </a>
              <a href="#">
                <img src="https://cyclone.xyz/images/home/twitter.png" alt="twitter" width="20px" height="20px"/>
              </a>
              <a href="#">
                <img src="https://cyclone.xyz/images/home/tele.png" alt="telegram" width="20px" height="20px"/>
              </a>
              <a href="#">
                <img src="https://cyclone.xyz/images/home/medium.png" alt="medium" width="20px" height="20px"/>
              </a>
              <a href="#">
                <img src="https://cyclone.xyz/images/defi.png" alt="defi" width="20px" height="20px"/>
              </a>
              <div className="line"></div>
              <a className="lang">
                <img src="https://cyclone.xyz/images/EN.png" alt="defi" width="20px" height="20px"/>
              </a>
            </Box>
        </Stack>
        <Stack sx={{gap:"16px"}}>
        <Typography sx={{color:"#33DCD5", fontSize:"25px"}}>Token Price: $0.0000</Typography>
            <Typography variant="h3" sx={{color:"#ffffff", fontSize:"20px", fontWeight: "600"}}>EXCHANGES</Typography>
        </Stack>
        <Box sx={{display:"grid",gridTemplateColumns:"repeat( auto-fit, minmax(150px, 1fr))",rowGap:"8px"}}>
              <a href="#">
                <img src="https://cyclone.xyz/images/home/uiniswap.png" alt="uniswap" width="130px" height="30px"/>
              </a>
              <a href="#">
                <img src="https://cyclone.xyz/images/home/pancakeswap_t.png" alt="pancakeswap" width="130px" height="30px"/>
              </a>
              <a href="#">
                <img src="https://cyclone.xyz/images/home/mimo.png" alt="mimo" width="130px" height="30px"/>
              </a>
              <a href="#">
                <img src="https://cyclone.xyz/images/home/quickswap_t.png" alt="quickswap" width="130px" height="30px"/>
              </a>
            </Box>
     </Stack>
     </Stack>
    </div>
}