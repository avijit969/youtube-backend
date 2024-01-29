import mongoose,{Schema} from "mongoose"

const subscripitonShema =new Schema({
    subscriber:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    channel:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
},{timestamps:true})

export const Subscription = mongoose.model("Subscription",subscripitonShema)