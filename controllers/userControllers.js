import userModel from "../models/StudentSCima.js"

class userfun {

    static userControllers = async (req, res) => {
        try {
            const databaseUsers = await userModel.find()
            res.render('index', { databaseUsers })
        } catch (error) {
            console.log(error);
        }
    }

    static editController = async (req, res) => {
        try {
            const userData = await userModel.findById(req.params.id)
            res.render('edit', { userData })
        } catch (error) {
            console.log(error);
        }

    }

    static createDoc = async (req, res) => {

        try {
            const userData = new userModel({
                name: req.body.name,
                age: req.body.age,
                fees: req.body.fees
            })
            await userData.save();
            res.redirect('/')
        } catch (error) {
            console.log(error);

        }
    }

    static editDoc = async (req, res) => {
        try {
            const updateUser = await userModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { returnDocument: 'after' })
            res.redirect('/')
        } catch (error) {
            console.log(error);
        }
    }

    static deleteDoc = async (req, res) => {
        try {
            const removeUser = await userModel.findByIdAndDelete(req.params.id);
            res.redirect('/')
        } catch (error) {
            console.log(error);
        }
    }
}

export default userfun;