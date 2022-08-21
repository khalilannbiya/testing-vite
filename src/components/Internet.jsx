import { Detector } from "react-detect-offline";
const Internet = (props) => {
   return (
      <>
         <Detector
            render={({ online }) =>
               online ? (
                  props.children
               ) : (
                  <div style={{ paddingTop: "10px", textAlign: "center" }}>
                     <h1 style={{ marginBottom: "5px" }}>No Connection</h1>
                     <h4 style={{ margin: "0" }}>Please Check yout internet!</h4>
                  </div>
               )
            }
         />
      </>
   );
};

export default Internet;
