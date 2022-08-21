import { useState } from "react";
import { Stack, Button, Alert, Typography } from "@mui/material";
// import { AddIcon, RemoveIcon, SignalCellularOffOutlinedIcon } from "@mui/icons-material/";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SignalCellularOffOutlinedIcon from "@mui/icons-material/SignalCellularOffOutlined";

const Counter = () => {
   const [count, setCount] = useState(0);
   const [open, setOpen] = useState(false);
   const tambahCount = () => {
      if (count === 0) {
         setOpen(false);
      }
      setCount(count + 1);
   };

   const kurangCount = () => {
      if (count === 0) {
         setCount(0);
         setOpen(true);
      } else {
         setCount(count - 1);
      }
   };

   const reset = () => {
      setCount(0);
   };

   return (
      <>
         <h2>{count}</h2>
         {open && (
            <Alert
               icon={<SignalCellularOffOutlinedIcon />}
               variant="filled"
               severity="error"
               sx={{ backgroundColor: "#F47174", color: "black", fontSize: "15px" }}
               onClose={() => {
                  setOpen(false);
               }}
            >
               <Typography sx={{ color: "#303030" }}>
                  <Typography sx={{ display: "inline", fontWeight: "bold" }}>Oops!</Typography> value of counter has been 0
               </Typography>
            </Alert>
         )}
         <Stack direction="row" spacing={2} sx={{ marginTop: "6px" }}>
            <Button variant="contained" color="success" onClick={tambahCount} startIcon={<AddIcon />}>
               Tambah
            </Button>
            <Button variant="contained" color="error" onClick={kurangCount} startIcon={<RemoveIcon />}>
               Kurang
            </Button>
            <Button variant="outlined" color="error" onClick={reset}>
               Reset
            </Button>
         </Stack>
      </>
   );
};

export default Counter;
