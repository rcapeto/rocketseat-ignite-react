import express from 'express';
import swaggerUI from 'swagger-ui-express';
import cors from 'cors';

import swaggerConfig from './config/swagger.json';
import { system_config } from './config/system';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerConfig));

app.listen(
   system_config.port, 
   () => console.log(`
   ===== Server Online =====
   Access: http://localhost:${system_config.port}
   `)
);