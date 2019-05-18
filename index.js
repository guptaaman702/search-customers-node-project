import app from './config/express';
import config from './config/env';

app.listen(config.default.port, () => {
  console.log(`API Server started and listening on port ${config.default.port} (${config.default.env})`);
});

export default app;