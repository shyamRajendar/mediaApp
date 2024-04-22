import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
) {
  return { name, calories, fat, carbs, protein };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

const FileList=()=> {

  const [open, setOpen] = React.useState(false);
  const [currentFile, setCurrentFile]= React.useState({name: "", index:0})
  const mediaValue = useSelector((state) =>
  state.media.value
);

const editFileName=(currName, indexValue)=>{
  setOpen(true);
  setCurrentFile({name: currName, index: indexValue})
}


const handleClose = () => {
  setOpen(false);
};

const deleteFile=(indexValue)=>{

}

const updateName=()=>{

}

  return (
    <React.Fragment>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow  sx={{color: "white", backgroundColor:"#1976d2", fontWeight: "bold"}}>
            <TableCell sx={{color: "white", fontWeight: "bold"}}>File Name</TableCell>
            <TableCell sx={{color: "white", fontWeight: "bold"}} align="right">Type</TableCell>
            <TableCell sx={{color: "white", fontWeight: "bold"}} align="right">Size</TableCell>
            <TableCell sx={{color: "white", fontWeight: "bold"}} align="right">Options</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mediaValue.map((row, index) => (
            <TableRow
              key={row.fileDetails.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.fileDetails.name}
              </TableCell>
              <TableCell align="right">{row.fileDetails.type}</TableCell>
              <TableCell align="right">{row.fileDetails.size}</TableCell>
              <TableCell align="right">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{marginRight: "10px"}}
                  onClick={() => editFileName(row.fileDetails.name, index)}
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => deleteFile(index)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

<Dialog
open={open}
onClose={handleClose}
PaperProps={{
  component: 'form',
  onSubmit: (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const email = formJson.email;
    console.log(email);
    handleClose();
  },
}}
>
<DialogTitle>Update Name</DialogTitle>
<DialogContent>
  <DialogContentText>
    Please Change the name field
  </DialogContentText>
  <TextField
    autoFocus
    required
    margin="dense"
    id="name"
    name="Name"
    label="Name"
    type="text"
    value={currentFile?.name}
    fullWidth
    variant="standard"
  />
</DialogContent>
<DialogActions>
  <Button onClick={handleClose}>Cancel</Button>
  <Button onClick={()=>updateName()} type="submit">Update</Button>
</DialogActions>
</Dialog>
</React.Fragment>
  );
}
export default FileList;
