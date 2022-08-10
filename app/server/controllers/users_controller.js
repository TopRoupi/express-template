const { User } = require("../models/index")

const signUp = async (req, res) => {
  const password_hash = await User.hash_password(req.body.password)
  User.create({name: req.body.name, password: password_hash})
    .then(() => {
      res.send({message: "user created"})
    })
    .catch((error) => {
      res.send({error: error})
    })
}

const login = async (req, res) => {
  User.findOne({where: {name: req.body.name}})
    .then(async (data) => {
      if(await data.check_password(req.body.password) == false)
        return res.send({error: "invalid password"});
      // TODO move setting current_user to its own controller helper
      req.session.user_id = data.id
      res.send({message: `logged in as user ${data.name}`})
    })
    .catch(() => {
      res.send({error: "user not found"});
    })
};

const loggedUser = async (req,res) => {
  user_id = req.session.user_id
  if(!user_id)
    return res.send({error: "you are not logged"})
  // TODO move this check to a controller helper like current_user()
  User.findByPk(req.session.user_id)
    .then((data) => {
      // TODO move this filter to its own model helper
      res.send({user: {...data.toJSON(), password: "[FILTERED]"}})
    })
}

module.exports = { login, loggedUser, signUp };
