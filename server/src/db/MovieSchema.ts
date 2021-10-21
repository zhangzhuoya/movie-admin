import  Mongoose  from "mongoose";
import { Movie } from "../entities/Movie";
export interface IMovie extends Movie,Mongoose.Document {
}
const movieSchema = new Mongoose.Schema<IMovie>({
    name: String,
    types: [String],
    areas: [String],
    timeLong: Number,
    isHot: Boolean,
    isComing: Boolean,
    isClassic: Boolean,
    desc: String,
    poster: String
},{
    versionKey: false
});
export default Mongoose.model("Movie",movieSchema);