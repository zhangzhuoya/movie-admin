// 数据库
import { Movie } from "./entities/Movie";
import { validate } from "class-validator";
const m = new Movie();
m.types=['dd']
validate(m).then(res=>{
    console.log(res);
})