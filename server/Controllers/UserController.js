import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt"

// get a user
export const getUser = async(req, res)=> {
    const id = req.params.id

    try {

         const user = await UserModel.findById(id)

         if(user) 
         {
            const {password, ...otherDetails} = user._doc
            res.status(200).json(otherDetails)
         }
         else {
            res.status(404).json("No such User exists")
         }
    } catch (error) {
        res.status(500).json(error)
    }
};

//Update a user 
export const updateUser = async(req, res) => {
    const id = req.params.id
    const {currentUserId, currentUserAdminStatus, password} = req.body

    if (id===currentUserId || currentUserAdminStatus)
    {
        try {

            if(password)
            {
                const salt = await bcrypt.getSalt(10);
                req.body.password = await bcrypt.hash(password, salt)
            }

            const user = await UserModel.findByIdAndUpdate(id, req.body, {name: true})
            res.status(200).json(user)

        } catch (error) {
            res.status(500).json(error)
        }
    }
    else {
        res.status(403).json("Access denied! you can only update your profile.")
    };
}

//delete user
export const deleteUser = async (req, res) => {
    const id = req.params.id

    const {currentUserId, currentUserAdminStatus} = req.body

    if(currentUserId === id || currentUserAdminStatus)
    {
        try {
            await UserModel.findByIdAndDelete(id)
            req.status(200).json("User deleted succesfully")
        } catch (error) {
            res.status(500).json(error)
        }
    }
    else{
        res.status(403).json("Access denied! you can only delete your profile.")
    }
}

//Follow a User

export const followUser = async (req, res) => {
    const id = req.params.id

    const {currentUserId} = req.body

    if(currentUserId === id)
    {
        res.status(403).json("Action forbidden")
    }
    else{
        try {
            const followUser = UserModel.findById(followUser)
            const followingUser = UserModel.findById(currentUserId)

            if(followUser.followers.includes(currentUserId))
            {
                await followUser.updateOne({$push : {followers: currentUserId}})
                await followingUser.updateOne({$push : {following: id}})
                res.status(200).json("User followed")
            }
            else{
                res.status(403).json("User is Already followed by you")
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
}