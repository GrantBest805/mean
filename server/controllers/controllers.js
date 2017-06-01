var mongoose = require('mongoose');
mongoose.Promise = Promise;
var User = mongoose.model("User")
var Poll = mongoose.model("Poll")

module.exports = {
    loginReg: (req,res) => {
        User.findOne({name:req.body.name}, (err, user) => {
            if(user == null){
                let newUser = new User(req.body);
                newUser.save( (err, savedUser) => {
                    if(err){
                        console.log(err);
                        return res.sendStatus(500);
                    }else{
                        req.session.user = savedUser;
                        return res.json(savedUser);
                    }
                })
            }else{
                req.session.user = user;
                return res.json(user)
            }
        })
    },
    getCurrentUser: (req,res) => {
        if(!req.session.user){
            return res.status(401).send("Nice Try")
        }else{
            return res.json(req.session.user)
        }
    },
    logout: (req,res) => {
        req.session.destroy();
        res.redirect('/')
    },
    createPoll: (req, res) => {
        if(!req.session.user){
            return res.sendStatus(401);
        }
        User.findOne({_id:req.session.user._id}, (err, user)=>{
            if(err){
                console.log(err)
                return res.sendStatus(500);
            }else{
                let poll = new Poll()
                poll.question = req.body.question
                poll._user = req.session.user._id;
                poll.options.push(req.body.option1)
                poll.options.push(req.body.option2)
                poll.options.push(req.body.option3)
                poll.options.push(req.body.option4)
                poll.save( (err, savedPoll) =>{
                    if(err){
                        console.log(err)
                        return;
                    }else{
                        console.log("poll was saved",savedPoll)
                        return res.json(savedPoll);
                    }
                })
            }
        })
    },
    getPolls: (req,res) => {
        Poll.find({}).populate('_user').exec( (err, polls) => {
            if (err){
                console.log(err);
                return res.sendStatus(500);
            }else{
                return res.json(polls);
            }
        })
    },
    getPoll: (req,res) => {
        if(!req.session.user){
            return res.sendStatus(401);
        }else{
            Poll.findOne({_id:req.params.id}).populate('_user').populate('_like').exec( (err, poll)=>{
                if(err){
                    console.log(err)
                    return res.sendStatus(500);
                }else{
                    return res.json(poll)
                }
            })
        }
    },
    delete: (req, res) => {
        Poll.findOne({_id:req.params.id}, (err, poll) =>{
            if(err){
                console.log(err)
                return;
            }else{
                if(!req.session.user === poll._user){
                    console.log("Nive try!")
                    return;
                }else{
                    Poll.deleteOne({_id: req.params.id}, (err, data) => {
                        if(err){
                            console.log(err)
                            return;
                        }else{
                            return res.json(data)
                        }
                    }) 

                }
            }
        })
    },
    // likes: (req, res) => {
    //     console.log("&*(&*&*^*^*^*^*")
    //     Poll.findOne({_id: req.params.id}, (err, poll) => { 
    //         if (err) {
    //             res.json (err);
    //             return;
    //         }else{
    //             let like = new Like()
    //             like = req.params.id
    //             like.save( (err, savedLike)=>{
    //                 if(err){
    //                     console.log(err)
    //                     return res.sendStatus(500)
    //                 }else{
    //                     poll._like.push(savedLike)
    //                     poll.save( (err, savedPoll)=>{
    //                         if(err){
    //                             console.log(err)
    //                             return;
    //                         }else{
    //                             return res.json(savedPoll)
    //                         }
    //                     })
    //                 }
    //             })
    //         }

    //     })
    // },
}
// Poll.deleteOne({_id: req.params.id}, (err, data) => {
//             if (err) {
//                 res.json (err);
//                 return;
//             }
//             return res.json(data)
//         })
//     },