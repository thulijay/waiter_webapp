let express =require('express');
let app = express();
const pg = require('pg');
const bodyParser = require('express-flash');
const flash = require(express-flash);
const session = require('express-session');
const exphbs = require('express-handlebars');

const Pool = pg.Pool
const connectionString = process.env.DATABASE_URL || 'postgres://melissa:pg123@localhost:5432/'
const pool = new Pool({
    connectionString
});

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
    secret: "<add a secret string here>",
    resave: false,
    saveUninitialized: true
  }));

  app.get('/', async function (req,res){
      
  })