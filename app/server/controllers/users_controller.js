const { User } = require("../models/index")

const signUp = async (req, res) => {
  const password_hash = await User.hash_password(req.body.password)
  User.create({name: req.body.name, password: password_hash})
    .then(() => {
      res.send({message: "user created"})
    })
    .catch((error) => {
      res.send({error: error.errors[0].message})
    })
}

const login = async (req, res) => {
  User.findOne({where: {name: req.body.name}})
    .then(async (data) => {
      if(data.check_password(req.body.password) == false)
        return res.send({error: "invalid password"});
      req.session.user_id = data.id
      res.send({session_id: req.session.id})
    })
    .catch(() => {
      res.send({error: "user not found"});
    })
};

const loggedUser = async (req,res) => {
  user_id = req.session.user_id
  if(!user_id)
    return res.send({error: "you are not logged"})
  User.findByPk(req.session.user_id)
    .then((data) => {
      res.send({message: `you are logged as ${data.name} id ${data.id}`})
    })
}

module.exports = { login, loggedUser, signUp };
