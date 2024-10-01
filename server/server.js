import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import 'dotenv/config';


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(json());

// MongoDB connection
connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Routes
import membersRoutes from './routes/members.js';
app.use('/api/members', membersRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
