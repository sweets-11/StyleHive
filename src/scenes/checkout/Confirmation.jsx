import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Footer from "../global/Footer";
import Navbar from "../global/Navbar";

const Confirmation = () => {
  return (
    <>
      <Navbar />
      <Box m="90px auto" width="80%" height="50vh">
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          You have successfully made an Order —{" "}
          <strong>Congrats on Making your Purchase</strong>
        </Alert>
      </Box>
      <Footer />
    </>
  );
};

export default Confirmation;
