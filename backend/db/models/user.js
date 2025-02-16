'use strict';
const bcrypt = require('bcryptjs');
const { Model, Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    toSafeObject() {
      const { user_id, username, first_name, last_name, email } = this;
      return { user_id, username, first_name, last_name, email };
    }

    validatePassword(password) {
      return bcrypt.compareSync(password, this.hashed_password.toString())
    }

    static getCurrentUserById(user_id) {
      return User.scope("currentUser").findByPk(user_id);
    }

    static async login({ credential, password }) {
      const { Op } = require('sequelize');
      const user = await User.scope('loginUser').findOne({
        where: {
          [Op.or]: {
            username: credential,
            email: credential
          }
        }
      });
      if (user && user.validatePassword(password)) {
        return await User.scope('currentUser').findByPk(user.user_id);
      }
    }

    static async signup({ username, first_name, last_name, email, password }) {
      const hashed_password = bcrypt.hashSync(password);
      const user = await User.create({
        username,
        first_name,
        last_name,
        email,
        hashed_password
      });
      return await User.scope('currentUser').findByPk(user.user_id);
    }

    static associate(models) {
    }
  };
  
  User.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 60],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error("Cannot be an email.")
          }
        }
      }
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error("Cannot be an email.");
          }
        }
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error("Cannot be an email.");
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256],
        isEmail(value) {
          if (!Validator.isEmail(value)) {
            throw new Error("Must use a valid email");
          }
        }
      }
    },
    hashed_password: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      }
    }
  },
    {
      sequelize,
      modelName: "User",
      defaultScope: {
        attributes: {
          exclude: ["hashed_password", "email", "createdAt", "updatedAt"]
        }
      },
      scopes: {
        currentUser: {
          attributes: { exclude: ["hashed_password"] }
        },
        loginUser: {
          attributes: {}
        }
      }
    }
  );

  return User;
};