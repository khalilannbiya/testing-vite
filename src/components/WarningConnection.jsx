import { Typography, Alert } from "@mui/material";
import { Offline } from "react-detect-offline";
import { useState, useEffect } from "react";
import SignalCellularOffOutlinedIcon from "@mui/icons-material/SignalCellularOffOutlined";
import AlertConnection from "./alertConnection";

function ConnectionUp() {
   return (
      <Alert icon={<SignalCellularOffOutlinedIcon />} variant="filled" severity="success" sx={{ width: "50%", fontSize: "15px" }}>
         <Typography sx={{ color: "#303030" }}>
            <Typography sx={{ display: "inline", fontWeight: "bold" }}>Yeyyy!</Typography> Internet found here.
         </Typography>
      </Alert>
   );
}

const WarningConnection = () => {
   const [openConnectionWarning, setOpenConnectionWarning] = useState(true);

   useEffect(() => {
      setInterval(() => {
         const koneksi = navigator.onLine;
         if (koneksi) {
            setOpenConnectionWarning(true);
         }
      }, 1000);
   });

   const cekInternetOneMinute = () => {
      setOpenConnectionWarning(false);
      setTimeout(() => {
         const koneksi = navigator.onLine;
         if (!koneksi) {
            setOpenConnectionWarning(true);
         }
      }, 60000);
   };

   const polling = {
      interval: 10000,
   };

   return (
      <>
         <Typography variant="h6">Cek Internet</Typography>
         {/* <Online>
            <ConnectionUp />
         </Online> */}
         {openConnectionWarning && (
            <Offline polling={polling}>
               <AlertConnection onClose={cekInternetOneMinute} />
            </Offline>
         )}
      </>
   );
};

export default WarningConnection;
