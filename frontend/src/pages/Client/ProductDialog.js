import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ProductDialog({
    open,
    setOpen,
    setData,
    AddProd
}) {
//   const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle>Enter Product Details</DialogTitle>
        <DialogContent>
        <TextField
            label="Add the ProductID"
            placeholder="Add the ProductID"
            variant="outlined"
            
            onChange={(event) => setData(prevState => ({
                ...prevState,
                ['PID']: event.target.value
            }))}
          />
          <TextField
            label="Add the Product Name"
            placeholder="Add the Product Name"
            variant="outlined"
            onChange={(event) => setData(prevState => ({
                ...prevState,
                ['PName']: event.target.value
            }))}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={AddProd}>Add to List</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
