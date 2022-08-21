import { Typography, Alert } from "@mui/material";
import SignalCellularOffOutlinedIcon from "@mui/icons-material/SignalCellularOffOutlined";

const AlertConnection = ({ onClose }) => {
   return (
      <Alert icon={<SignalCellularOffOutlinedIcon />} variant="filled" severity="error" sx={{ width: "50%", backgroundColor: "rgba(187, 0, 0, 0.25)", color: "#303030" }} onClose={onClose}>
         <Typography sx={{ color: "#303030", fontSize: "14px" }}>
            <Typography sx={{ display: "inline", fontWeight: "bold", fontSize: "14px" }}>Oops!</Typography> No internet connection found. Check your internet or Try again
         </Typography>
      </Alert>
   );
};

export default AlertConnection;
