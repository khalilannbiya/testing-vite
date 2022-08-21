import React from "react";
import { Stack, Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const ListAndKeys = ({ datasObj, handleDelete }) => {
   return (
      <div>
         <Stack direction={{ xs: "column", sm: "row" }} justifyContent="center" sx={{ flexWrap: "wrap", gap: "20px", mt: "20px" }}>
            {datasObj.map((data) => {
               {
                  return data.gender === "Male" ? (
                     <Card key={data.id} sx={{ width: 275, backgroundColor: "#ACD1AF" }}>
                        <CardContent>
                           <Typography variant="h2" sx={{ fontSize: 18, fontWeight: 600 }} gutterBottom>
                              {data.full_name}
                           </Typography>
                           <Typography sx={{ mb: 1.5 }} color="text.secondary">
                              {data.email}
                           </Typography>
                           <Typography variant="body2">"{data.qoutes}"</Typography>
                        </CardContent>
                        <CardActions>
                           <Button onClick={() => handleDelete(data.id)} size="small" color="error" startIcon={<DeleteIcon />}>
                              Delete
                           </Button>
                        </CardActions>
                     </Card>
                  ) : (
                     <Card key={data.id} sx={{ width: 275, backgroundColor: "#EEEE9B" }}>
                        <CardContent>
                           <Typography variant="h2" sx={{ fontSize: 18, fontWeight: 600 }} gutterBottom>
                              {data.full_name}
                           </Typography>
                           <Typography sx={{ mb: 1.5 }} color="text.secondary">
                              {data.email}
                           </Typography>
                           <Typography variant="body2">"{data.qoutes}"</Typography>
                        </CardContent>
                        <CardActions>
                           <Button onClick={() => handleDelete(data.id)} size="small" color="error" startIcon={<DeleteIcon />}>
                              Delete
                           </Button>
                        </CardActions>
                     </Card>
                  );
               }
            })}
         </Stack>
      </div>
   );
};

export default ListAndKeys;
