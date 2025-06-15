import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import API from '../services/api';
import AddItemForm from '../components/AddItemForm';
import ItemList from '../components/ItemList';

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    API.get('/items/').then((res) => setItems(res.data));
  }, []);

  const addItem = (item) => setItems((prev) => [item, ...prev]);
  const deleteItem = (id) => setItems((prev) => prev.filter((i) => i.id !== id));

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Kitchen Inventory Tracker
      </Typography>
      <AddItemForm onAdd={addItem} />
      <ItemList items={items} onDelete={deleteItem} />
    </Container>
  );
}
