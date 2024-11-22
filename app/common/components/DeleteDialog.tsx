'use client';
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import React from 'react';

interface IProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  subtitle: string;
}

const DeleteDialog = (props: IProps) => {
  const { open, onClose, onConfirm, title, subtitle } = props;
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };
  return (
    <Dialog fullWidth open={open} onClose={() => onClose()}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Alert severity="error">{subtitle}</Alert>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={() => onClose()}>
          Cancel
        </Button>
        <Button variant="contained" onClick={handleConfirm}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
