import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRoute from './routes/auth.route.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoute);

app.listen(8800, () => {
  console.log('Server is running on port 8800');
});