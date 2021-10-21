import "reflect-metadata"
import {MovieModel} from "./db"
import {MovieService} from './services/MovieService'
MovieModel.find(res=>{
    console.log(res);
})
function getRandom(min:number,max:number) {
    const dec = max -min;
    return Math.floor(Math.random()* dec+min);
}
const m: any = {
    name: "流浪地球",
    timeLong: 20,
    areas: ["中国大陆", "美国"],
    types: ["灾难", "科幻"],
};
for(let i =1; i<=100;i++){
    const obj:any = {
    }
    obj.name = "电影名字"+ (i+1);
    obj.timeLong = getRandom(20,220)
    obj.areas=["中国大陆", "美国"]
    obj.types= ["灾难", "科幻"],
    MovieService.add(obj)
}
// MovieService.add(m).then(res=>{
//     console.log(res);
// })