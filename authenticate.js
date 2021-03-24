var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models/User');
var Client = require('./models/Client');

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new LocalStrategy(Client.authenticate()));
passport.serializeUser(Client.serializeUser());
passport.deserializeUser(Client.deserializeUser());