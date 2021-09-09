import 'dotenv/config';
import { app } from 'core_app';

const __PORT__ = process.env.PORT;

app.listen(__PORT__, () => {
    console.log(`server start on port ${__PORT__}`);
});
