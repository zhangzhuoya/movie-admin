import { ArrayMinSize, IsInt, IsNotEmpty, Max, Min, MinLength } from 'class-validator';

export class Movie {
    @IsNotEmpty({message: "电影名称不可以为空"})
    public name: string;

    @IsNotEmpty({message: "电影类型不可以为空"})
    @MinLength(1,{message: "电影类型至少有一个"})
    @ArrayMinSize(1,{message: '数组最小长度为1'})
    public types: string [];

    @IsNotEmpty({message: "上映地区不可以为空"})
    @MinLength(1,{message: "上映地区至少有一个"})
    @ArrayMinSize(1,{message: '数组最小长度为1'})
    public areas: string [];

    @IsNotEmpty({message: "时长不可以为空"})
    @IsInt({message: '时长必须是整数'})
    @Min(1,{message: "时长最少一分钟"})
    @Max(1,{message: "时长过长"})
    public timeLong: number;

    @IsNotEmpty({message: "是否热映不可以为空"})
    public isHot: boolean

    @IsNotEmpty({message: "是否为经典影片不可以为空"})
    public isClasic: boolean

    public desc: boolean

    public poster: string;
}