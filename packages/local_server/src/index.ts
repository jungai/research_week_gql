import 'dotenv/config';
import { app } from 'core_app';

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`server start on port ${port}`);
});
