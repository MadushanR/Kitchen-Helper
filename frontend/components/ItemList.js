import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import API from '../services/api';

export default function ItemList({ items, onDelete }) {
  const today = new Date();

  const handleDelete = async (id) => {
    await API.delete(`/items/${id}/`);
    onDelete(id);
  };

  return items.length === 0 ? (
    <Typography>No items in your inventory.</Typography>
  ) : (
    <List disablePadding>
      {items.map((item) => {
        const expDate = new Date(item.expiry_date);
        const daysLeft = Math.ceil((expDate - today) / (1000 * 60 * 60 * 24));
        let bg = 'background.paper';
        if (daysLeft < 0) bg = 'error.light';
        else if (daysLeft <= 3) bg = 'warning.light';

        return (
          <Paper
            key={item.id}
            sx={{ mb: 1, p: 1, bgcolor: bg }}
            component={ListItem}
            secondaryAction={
              <IconButton edge="end" onClick={() => handleDelete(item.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={item.name}
              secondary={`Qty: ${item.quantity} • Expires: ${expDate.toLocaleDateString()}`}
            />
          </Paper>
        );
      })}
    </List>
  );
}
