import { useState, useEffect } from "react";
import { Stack, Box } from "@mui/material";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import WarningConnection from "./components/WarningConnection";
import WarningConn from "./components/WarningConnection2";
import Divider from "@mui/material/Divider";
import ListAndKeys from "./components/ListAndKeys";
import FormInputData from "./components/FormInputData";

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: "50vw",
   bgcolor: "background.paper",
   border: "2px solid #000",
   boxShadow: 24,
   p: 4,
};

const styleDetail = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: "50vw",
   bgcolor: "background.paper",
   border: "2px solid #000",
   boxShadow: 24,
   p: 4,
   height: "200px",
   overflow: "scroll",
};

function Loading() {
   return (
      <div>
         <p>Loading.....</p>
      </div>
   );
}

export default function App() {
   const [datasObj, setDatasObj] = useState([]);
   const [open, setOpen] = useState(false);
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [gender, setGender] = useState("");
   const [quote, setQuote] = useState("");
   const [loading, setLoading] = useState(false);
   const [loadingDetail, setLoadingDetail] = useState(false);
   const [surah, setSurah] = useState([]);
   const [ayah, setAyah] = useState([]);
   const [openDetailSurah, setOpenDetailSurah] = useState(false);
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
   useEffect(() => {
      async function getData() {
         setLoading(true);
         const req = await fetch("https://api.quran.gading.dev/surah");
         try {
            const res = await req.json();
            setSurah(res.data);
            setLoading(false);
         } catch (error) {
            setLoading(false);
            throw new Error("Error dude", error);
         }
      }
      getData();
   }, []);

   async function getDetail(id) {
      setLoadingDetail(true);
      const req = await fetch(`https://api.quran.gading.dev/surah/${id}`);
      try {
         const res = await req.json();
         setAyah(res.data.verses);
         setLoadingDetail(false);
      } catch (error) {
         setLoadingDetail(false);
         throw new Error("Error dude", error);
      }
   }

   const handleDetail = (id) => {
      getDetail(id);
      setOpenDetailSurah(true);
   };

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
      setOpen(false);
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

   const closeDetailSurah = () => {
      setOpenDetailSurah(!openDetailSurah);
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
         <Modal open={open} onClose={openForm} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
               <FormInputData addData={addData} name={name} handleName={handleName} email={email} handleEmail={handleEmail} gender={gender} handleGender={handleGender} quote={quote} handleQuote={handleQuote} />
            </Box>
         </Modal>
         {datasObj.length > 0 ? <ListAndKeys datasObj={datasObj} handleDelete={handleDelete} /> : "Tidak ada data"}

         <Divider sx={{ marginTop: "20px" }} />
         {loading && <Loading />}
         <ul>
            {surah?.map((sura, index) => {
               return (
                  <li key={index} onClick={() => handleDetail(sura.number)}>
                     {sura.name.transliteration.en}
                  </li>
               );
            })}
         </ul>
         <Modal open={openDetailSurah} onClose={closeDetailSurah} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={styleDetail}>
               {loadingDetail && <Loading />}
               <ul>
                  {ayah.map((ayat, index) => {
                     return <li key={index}>{ayat.text.arab}</li>;
                  })}
               </ul>
            </Box>
         </Modal>
      </>
   );
}
