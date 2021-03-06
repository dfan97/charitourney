var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    contribution: { type: Sequelize.FLOAT, allowNull: false, defaultValue: 0},
    battles_done: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false},

    facebook: Sequelize.STRING,
    twitter: Sequelize.STRING,
    google: Sequelize.STRING,
    github: Sequelize.STRING,
    instagram: Sequelize.STRING,
    linkedin: Sequelize.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Choice);
      }
    }
  });
  return User;
};
/*
var userSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,

  facebook: String,
  twitter: String,
  google: String,
  github: String,
  instagram: String,
  linkedin: String,
  tokens: Array,

  profile: {
    name: { type: String, default: '' },
    gender: { type: String, default: '' },
    location: { type: String, default: '' },
    website: { type: String, default: '' },
    picture: { type: String, default: '' }
  },

  resetPasswordToken: String,
  resetPasswordExpires: Date
});


userSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});


userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.gravatar = function(size) {
  if (!size) size = 200;
  if (!this.email) return 'https://gravatar.com/avatar/?s=' + size + '&d=retro';
  var md5 = crypto.createHash('md5').update(this.email).digest('hex');
  return 'https://gravatar.com/avatar/' + md5 + '?s=' + size + '&d=retro';
};



module.exports = mongoose.model('User', userSchema);

*/