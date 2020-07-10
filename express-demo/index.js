const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const express = require ('express');
const config = require ('config');
const debug = require('debug')('app:startup');
const courses = require('./routes/courses');
const home = require('./routes/home');

const app = express();

app.set('view engine', 'pug');
app.set('views', './views'); //default

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(helmet());

app.use('/api/courses', courses);
app.use('/', home);

//Configuration
debug('Application Name:' + config.get('name'));
debug('Mail Server:' + config.get('mail.host'));
debug('Mail Password:' + config.get('mail.password'));

console.log(`Env: ${app.get('env')}`);

if (app.get('env') === 'development') {
    app.use(morgan('tiny'));
    debug('Morgan enabled ...')
}

app.use(logger);
app.use(auth);

// PORT Enviroment Variable 
const port = process.env.PORT || 3005;

app.listen(port, () => console.log(`Listening on port ${port} ...`));