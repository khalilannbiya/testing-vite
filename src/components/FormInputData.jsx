import React from "react";
import { Stack, TextField, Box, Button } from "@mui/material";

const FormInputData = ({ addData, name, handleName, email, handleEmail, gender, handleGender, quote, handleQuote }) => {
   return (
      <>
         <Box sx={{ width: "100%", marginTop: "12px" }} component="form" onSubmit={addData}>
            <Stack spacing={2}>
               <TextField value={name} onChange={handleName} label="Nama" size="small" sx={{ width: "50%" }} required />
               <TextField value={email} onChange={handleEmail} label="Email" size="small" sx={{ width: "50%" }} required />
               <TextField
                  select
                  required
                  label="Select Gender"
                  sx={{ width: "50%" }}
                  value={gender}
                  onChange={handleGender}
                  SelectProps={{
                     native: true,
                  }}
               >
                  <option>Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
               </TextField>
               <TextField value={quote} onChange={handleQuote} sx={{ width: "50%" }} label="Quotes" multiline rows={4} />
               <Button sx={{ width: "50%" }} type="submit" variant="contained">
                  Submit
               </Button>
            </Stack>
         </Box>
      </>
   );
};

export default FormInputData;
