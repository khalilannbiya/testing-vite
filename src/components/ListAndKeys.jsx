import React from "react";
import { Stack, Card, CardContent, Typography } from "@mui/material";

const ListAndKeys = ({ datasObj, handleDelete }) => {
   return (
      <div>
         <Stack direction={{ xs: "column", sm: "row" }} justifyContent="center" sx={{ flexWrap: "wrap", gap: "20px", mt: "20px" }}>
            {datasObj.map((data) => {
               {
                  return data.gender === "Male" ? (
                     <Card key={data.id} sx={{ width: 275, backgroundColor: "#ACD1AF" }} onClick={() => handleDelete(data.id)}>
                        <CardContent>
                           <Typography variant="h2" sx={{ fontSize: 18, fontWeight: 600 }} gutterBottom>
                              {data.full_name}
                           </Typography>
                           <Typography sx={{ mb: 1.5 }} color="text.secondary">
                              {data.email}
                           </Typography>
                           <Typography variant="body2">"{data.qoutes}"</Typography>
                        </CardContent>
                     </Card>
                  ) : (
                     <Card key={data.id} sx={{ width: 275, backgroundColor: "#EEEE9B" }} onClick={() => handleDelete(data.id)}>
                        <CardContent>
                           <Typography variant="h2" sx={{ fontSize: 18, fontWeight: 600 }} gutterBottom>
                              {data.full_name}
                           </Typography>
                           <Typography sx={{ mb: 1.5 }} color="text.secondary">
                              {data.email}
                           </Typography>
                           <Typography variant="body2">"{data.qoutes}"</Typography>
                        </CardContent>
                     </Card>
                  );
               }
            })}
         </Stack>
      </div>
   );
};

export default ListAndKeys;
