const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/crud_demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const itemSchema = new mongoose.Schema({
    name: String
});
const Item = mongoose.model('Item', itemSchema);

// Create
app.post('/items', async (req, res) => {
    const item = new Item({ name: req.body.name });
    await item.save();
    res.send(item);
});

// Read
app.get('/items', async (req, res) => {
    const items = await Item.find();
    res.send(items);
});

// Update
app.put('/items/:id', async (req, res) => {
    const item = await Item.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });
    res.send(item);
});

// Delete
app.delete('/items/:id', async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.send({ message: 'Deleted successfully' });
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [editingId, setEditingId] = useState(null);

    const fetchItems = async () => {
        const res = await axios.get('http://localhost:5000/items');
        setItems(res.data);
    };

    const addItem = async () => {
        if (editingId) {
            await axios.put(`http://localhost:5000/items/${editingId}`, { name });
            setEditingId(null);
        } else {
            await axios.post('http://localhost:5000/items', { name });
        }
        setName('');
        fetchItems();
    };

    const deleteItem = async (id) => {
        await axios.delete(`http://localhost:5000/items/${id}`);
        fetchItems();
    };

    const editItem = (item) => {
        setName(item.name);
        setEditingId(item._id);
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h2>CRUD Example</h2>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
            />
            <button onClick={addItem}>{editingId ? 'Update' : 'Add'}</button>

            <ul>
                {items.map(item => (
                    <li key={item._id}>
                        {item.name}
                        <button onClick={() => editItem(item)}>Edit</button>
                        <button onClick={() => deleteItem(item._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
