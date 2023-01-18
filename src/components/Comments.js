import { Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState , useEffect } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMENTS } from "./Mutiton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Valid } from "./Valid";
import { red } from '@mui/material/colors';

const Comments = ({ slug }) => {
  const { name, setName } = useState("");
  const { emile, setEmile } = useState("");
  const { text, setText } = useState("");
  const {errors , setErrors} = useState("")
  const [SendComments, { loading, data }] = useMutation(ADD_COMENTS, {
    variables: { slug, name, emile, text },
  });
  console.log(data);

useEffect(() => {
  setErrors(() => {Valid(name,emile,text)})
},[name,emile,text])

const errorred =  red[500]


  const sendhandeler = () => {
    if (name && emile && text) {
      SendComments();
      toast.success("کامنت با موفقیت ارسال شد");
     
    } else {
      toast.warn("تمام فیلد ها پر نشده هست");
    }

  
  };



  return (
    <div>
      <Grid
        container
        sx={{
          boxShadow: "rgba(0 , 0 , 0 , 0.1) 0px 4px 12px",
          borderRadius: 4,
          py: 1,
          mt: 4,
        }}
      >
        <Grid item xs={12}>
          <Typography
            color="primary"
            fontWeight={700}
            mt={4}
            component="h3"
            variant="h5"
          >
            فرم ارسال کامنت{" "}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            sx={{ width: "100%" }}
            label="نام کاربری"
            variant="outlined"
          />
          {errors.name && <Typography  color={errorred}
            fontWeight={200}
            mt={4}
            component="h3"
            variant="h5">{errors.name}</Typography>}
          <TextField
            value={emile}
            onChange={(event) => setEmile(event.target.value)}
            sx={{ width: "100%" }}
            label=" ایمیل"
            variant="outlined"
          />
          {errors.emile && <Typography  color={errorred}
            fontWeight={200}
            mt={4}
            component="h3"
            variant="h5">{errors.emile}</Typography>}
          <TextField
            value={text}
            onChange={(event) => setText(event.target.value)}
            sx={{ width: "100%" }}
            label="متن "
            variant="outlined"
            multiline
            minRows={4}
          />
          {errors.text && <Typography  color={errorred}
            fontWeight={200}
            mt={4}
            component="h3"
            variant="h5">{errors.text}</Typography>}
        </Grid>
        <Grid item xs={12}>
          {loading ? (
            <Button variant="contained" disabled>در حال ارسال</Button>
          ) : (
            <Button onClick={sendhandeler} variant="contained">
              ارسال
            </Button>
          )}
        </Grid>
        <ToastContainer />
      </Grid>
    </div>
  );
};

export default Comments;
