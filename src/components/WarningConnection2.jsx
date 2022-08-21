import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import AlertConnection from "./alertConnection";

function startStateConnectionWarning() {
   if (navigator.onLine) {
      return false;
   } else {
      return true;
   }
}
const WarningConn = () => {
   const [openConnectionWarning, setOpenConnectionWarning] = useState(startStateConnectionWarning);

   useEffect(() => {
      function changeConnection() {
         setOpenConnectionWarning(!navigator.onLine);
      }
      window.addEventListener("online", changeConnection);
      window.addEventListener("offline", changeConnection);
      return () => {
         window.removeEventListener("online", changeConnection);
         window.removeEventListener("offline", changeConnection);
      };
   }, []);

   const checkInternetOneMinute = () => {
      setOpenConnectionWarning(false);
      setTimeout(() => {
         if (!navigator.onLine) {
            setOpenConnectionWarning(true);
         }
      }, 60000);
   };

   return (
      <>
         <Typography variant="h6">Cek Internet Versi 2</Typography>

         {openConnectionWarning && <AlertConnection onClose={checkInternetOneMinute} />}
      </>
   );
};

export default WarningConn;
