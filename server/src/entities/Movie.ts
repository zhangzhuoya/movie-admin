import { plainToClass, Type } from 'class-transformer';
import { ArrayMinSize, IsArray, IsInt, IsNotEmpty, Max, Min, MinLength, validate} from 'class-validator';
import { TIMEOUT } from 'dns';
export class Movie {
    @IsNotEmpty({message: "电影名称不可以为空"})
    @Type(()=> String)
    public name: string;

    @IsNotEmpty({message: "电影类型不可以为空"})
    @ArrayMinSize(1,{message: '电影类型至少有一个'})
    @IsArray({message:"必须是数组"})
    @Type(()=> String)
    public types: string [];

    @IsNotEmpty({message: "上映地区不可以为空"})
    @ArrayMinSize(1,{message: '数组最小长度为1'})
    @Type(()=> String)
    public areas: string [];

    @IsNotEmpty({message: "时长不可以为空"})
    @IsInt({message: '时长必须是整数'})
    @Min(1,{message: "时长最少一分钟"})
    @Max(120,{message: "时长过长"})
    @Type(()=> Number)
    public timeLong: number;

    @IsNotEmpty({message: "是否热映不可以为空"})
    @Type(()=> Boolean)
    public isHot: boolean

    @IsNotEmpty({ message: "是否是经典影片不可以为空" })
    @Type(() => Boolean)
    public isClassic: boolean = false;

    @IsNotEmpty({ message: "是否即将上映不可以为空" })
    @Type(() => Boolean)
    public isComing: boolean = false;

    @IsNotEmpty({message: "描述信息不可以为空"})
    @Type(()=> Boolean)
    public desc: boolean

    @IsNotEmpty({message: "图片背景不能为空"})
    @Type(()=> String)
    public poster: string;
    /**
     * 验证当前电影对象
     */
    public async validateThis(skipMissing = false):Promise<string[]>{
        const errors = await validate(this,{
            skipMissingProperties: skipMissing
        })
        const temp = errors.map(item=>{
            return Object.values(item.constraints as any)
        })
        const res:string[] = [];
        temp.forEach(t=>{
            res.push(...t as any)
        })
        // console.log(temp);
        return res;
    }
    /**
     * 将平面对象转化为实体类对象
     */
    public static transform(plainObject:object):Movie {
        if (plainObject instanceof Movie) {
            return plainObject
        }
        return plainToClass(Movie,plainObject);
    }
}