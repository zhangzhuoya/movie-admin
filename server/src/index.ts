import "reflect-metadata"
import { Movie } from "./entities/Movie";
import { validate } from "class-validator";
import { plainToClass } from 'class-transformer'
const m:object = {};
// m.types=['dd']
// 将plain Object转化为movie对象
const movie = plainToClass(Movie, m as object)
console.log(movie);

validate(movie).then(res=>{
    console.log(res);
})
// 将 plain Object转化为