import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { v4 as uuidv4 } from 'uuid';

export default function ModalAdd({open, setOpen, handleSubmit}) {
  const [name, setName] = useState('')
  const [instansi, setInstansi] = useState('')

  const handleClose = () => {
    setOpen(false);
  };
  
  const onSubmit = () => {
    handleSubmit([{
        id: uuidv4(),
        documentName: name,
        instansi,
        status: 'active'
    }])
    handleClose()
  }

  return (
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Add Document</DialogTitle>
        <DialogContent>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name Document"
                type="text"
                fullWidth
                variant="standard"
                value={name}
                onChange={(e) => setName(e?.target?.value)}
            />
            <TextField
                margin="dense"
                id="name"
                label="Instansi"
                type="text"
                fullWidth
                variant="standard"
                value={instansi}
                onChange={(e) => setInstansi(e?.target?.value)}
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant='contained' onClick={onSubmit} disabled={!(name || instansi)}>Submit</Button>
        </DialogActions>
    </Dialog>
  );
}
