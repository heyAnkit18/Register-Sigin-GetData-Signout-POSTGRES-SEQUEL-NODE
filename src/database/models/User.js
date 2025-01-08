const {DataTypes}=require('sequelize')
const sequelize=require('../connection')
const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Name cannot be empty",
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      msg: "Email already in use",
    },
    validate: {
      isEmail: {
        msg: "Please provide a valid email address",
      },
      notEmpty: {
        msg: "Email cannot be empty",
      },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "Password cannot be empty",
      },
      len: {
        args: [6, 128],
        msg: "Password should be between 6 and 128 characters",
      },
    },
  },
},{

}
)


module.exports={User}