import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

const TimedDialog = ({ open, onClose }) => (
    <Dialog
        open={open}
        onClose={onClose}
        PaperProps={{
            sx: {
                position: 'fixed',
                bottom: 16,
                right: 16,
                margin: 0,
                width: 'auto',
            },
        }}
    >
        <DialogTitle>{"Time's Up!"}</DialogTitle>
        <DialogContent>
            <DialogContentText>
                This is a timed dialog. It appears every 30 seconds.
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose} color="primary">
                Close
            </Button>
        </DialogActions>
    </Dialog>
);

export default TimedDialog;