import { MovieModel } from "../db";
import { IMovie } from "../db/MovieSchema";
import { Movie } from "../entities/Movie";

export class MovieService {
    // 1. 转换类型
    public static async add(movie:Movie): Promise<IMovie| string[]>{
        movie = Movie.transform(movie)
        const errors =await movie.validateThis(true)
        // console.log(errors);
        if (errors.length>0) {
            return errors
        }
        return await MovieModel.create(movie)
    }
    // 2. 数据验证
    public static async edit(id: string,movie: Movie): Promise<IMovie| string[]> {
        const movieObj = Movie.transform(movie);
        const errors = await movieObj.validateThis(true);
        if (errors.length>0) {
            return errors
        }
        await MovieModel.updateOne({_id:id},movie)
        return errors
    }
    public static async delete(id: string): Promise<void> {
        await MovieModel.deleteOne({_id:id})
    }
    public static async find(id: string): Promise<IMovie|null> {
       return await MovieModel.findById(id)
    }
}