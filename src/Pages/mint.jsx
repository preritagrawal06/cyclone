import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import tokenList from '../Components/tokenList.json'
import {activeChainId} from '../Components/chainConfig.ts'
import Navbar from "../Components/Navbar";
import { Star, Start } from "@mui/icons-material";

export default function Mint() {
//   const { data: signer } = useSigner();
//   const getInstance = async () => {
//     try {
//       let instance = new ethers.Contract(
//         nftContractAddress,
//         nftContractABI,
//         signer
//       );
//       return instance;
//     } catch (error) {
//       console.log("No instance get");
//     }
//   };

//   const [tokenOne, setTokenOne] = useState(
//     tokenList[activeChainId.toString()][0]
//   );
//   const { address } = useAccount();

  const [isOpen, setIsOpen] = useState(false);
  const [changeToken, setChangeToken] = useState(1);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [supply, setSupply] = useState("");
  const [image, setImage] = useState(null);
  const [loader, setLoader] = useState(false);
  const hiddenFileInput = useRef(null);
  const [tokenOne, setTokenOne] = useState(
    tokenList[activeChainId.toString()][0]
  );
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imgname = event.target.files[0].name;
    const reader = new FileReader();
    setImage(file);
  };

  
  return (
  <>
    <Box
    className="mint"
    sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
    }}
    >
      <Box  sx={{width:{sm:"100vh", md:"115vh"}}}>
          <Stack gap="32px">
            <Navbar/>
            <Typography variant="h4" sx={{color:"#ffffff", fontSize:{xs: "1.25rem" ,md:"3.25rem"}}}>
              Multi-chain <br/>
              Non-custodial<br/>
              Privacy-preserving
            </Typography>
            <Typography variant="p" sx={{color:"#ffffff", fontSize:{xs: "10px" ,md:"16px"}, fontWeight:"600", width:{xs:"200px" ,md:"600px"}}}>
              Cyclone is a protocol that applies zkSNARKs to enable transactional privacy by breaking the on-chain link between depositor and recipient addresses.
            </Typography>
            <Box>
              <Typography sx={{color:"#33DCD5"}} marginBottom="10px">Launch app on</Typography>
              <Stack gap="10px" sx={{flexDirection: {xs:"column", sm:"row", md:"row"}}}>
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
            </Box>
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
            <Typography sx={{color:"#33DCD5", fontSize:"25px"}}>Token Price: $0.0000</Typography>
            <Typography variant="h3" sx={{color:"#ffffff", fontSize:"20px", fontWeight: "600"}}>EXCHANGES</Typography>
            <Box display="flex" gap="30px" sx={{flexDirection:{xs:"column", sm:"row", md:"row"}}}>
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
      </Box>
    </Box>
  </>
  );
}
