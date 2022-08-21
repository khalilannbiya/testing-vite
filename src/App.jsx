import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import WarningConnection from "./components/WarningConnection";
import WarningConn from "./components/WarningConnection2";
import Divider from "@mui/material/Divider";
import ListAndKeys from "./components/ListAndKeys";
import FormInputData from "./components/FormInputData";

export default function App() {
   const [datasObj, setDatasObj] = useState([]);
   const [open, setOpen] = useState(false);
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [gender, setGender] = useState("");
   const [quote, setQuote] = useState("");
   // https://api.spaceflightnewsapi.net/v3/blogs

   useEffect(() => {
      const checkDataLocalStorage = localStorage.getItem("datas");
      if (checkDataLocalStorage === null) {
         const addedData = JSON.stringify([]);
         localStorage.setItem("datas", addedData);
      } else {
         const datas = JSON.parse(localStorage.getItem("datas"));
         setDatasObj(datas);
      }
   }, []);

   // Ambil data dari API menggunakan then dan catch

   // useEffect(() => {
   //    const req = fetch("https://api.spaceflightnewsapi.net/v3/blogs")
   //       .then((res) => {
   //          return res.json();
   //       })
   //       .then((res) => console.log(res))
   //       .catch((err) => console.log(err));
   //    console.log(req);
   // }, []);

   // Ambil data dari API menggunakan asyns await
   // useEffect(() => {
   //    async function getData() {
   //       const req = await fetch("https://api.spaceflightnewsapi.net/v3/blogs");
   //       const res = await req.json();
   //       console.log(res);
   //    }
   //    getData();
   // }, []);

   const addData = (e) => {
      e.preventDefault();
      const newData = [
         {
            id: +new Date(),
            full_name: name,
            email: email,
            gender: gender,
            qoutes: quote,
         },
      ];

      const addedData = JSON.stringify([...datasObj, ...newData]);
      localStorage.setItem("datas", addedData);
      setDatasObj([...datasObj, ...newData]);
      setName("");
      setEmail("");
      setGender("");
      setQuote("");
   };

   const handleName = (e) => {
      setName(e.target.value);
   };

   const handleEmail = (e) => {
      setEmail(e.target.value);
   };

   const handleQuote = (e) => {
      setQuote(e.target.value);
   };
   const handleGender = (e) => {
      setGender(e.target.value);
   };

   const openForm = () => {
      setOpen(!open);
   };

   const handleDelete = (id) => {
      const newDatas = [...datasObj];

      const index = newDatas.findIndex((object) => {
         return object.id === id;
      });

      newDatas.splice(index, 1);
      const deleteData = JSON.stringify([...newDatas]);
      localStorage.setItem("datas", deleteData);
      setDatasObj(newDatas);
   };

   return (
      <>
         <Welcome />
         <Divider />
         <Counter />
         <Divider sx={{ marginTop: "20px" }} />
         <WarningConnection />
         <Divider sx={{ marginTop: "20px" }} />
         <WarningConn />
         <Divider sx={{ marginTop: "20px" }} />
         <Stack spacing={2} sx={{ marginTop: "20px" }} direction="row" justifyContent="center">
            <Button onClick={openForm} variant="contained">
               {open ? "Close Form" : "Open Form"}
            </Button>
         </Stack>
         {open && <FormInputData addData={addData} name={name} handleName={handleName} email={email} handleEmail={handleEmail} gender={gender} handleGender={handleGender} quote={quote} handleQuote={handleQuote} />}
         {datasObj.length > 0 ? <ListAndKeys datasObj={datasObj} handleDelete={handleDelete} /> : "Tidak ada data"}
      </>
   );
}
