module.exports = {
  db: process.env.MONGODB|| 'mongodb://localhost:27017/test',

  sessionSecret: process.env.SESSION_SECRET || 'Your Session Secret goes here',

  mailgun: {
    login: process.env.MAILGUN_LOGIN || 'postmaster@sandboxae47da03c05a4d84bcbe75d4d4ab1c1c.mailgun.org',
    password: process.env.MAILGUN_PASSWORD || '7kfulh4yekh6'
  }
};
