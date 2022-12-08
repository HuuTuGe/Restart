import axios from "axios";
import {UserData, MajorData, TalentData, EventData,AchievementData,LifeData,ChoiceData} from "@/api/outputInterface"
import {MajorParam,LifeParam,PicturesParam,PictureParam,AchievementsParam,UserParam,ChoicesParam} from "@/api/inputInterface"
import type {AxiosRequestConfig} from 'axios'
import { GameSource } from "@/state/stateInterface";

export function catchError(error:any) {
    console.log(error)
}

export const api = {
    baseUrl: 'https://mock.apifox.cn/m1/1984536-0-default' ,// mock连接
    remoteUrl: 'http://43.139.155.223:9090' ,// 服务器地址
    async getPictures(data:PicturesParam): Promise<Array<any>> {
        /**
         * 请求图片列表
         * @return 图片列表
         */
        let url: string = this.baseUrl + '/pictures'
        return await axios.get(url, {params: data}).then(res=> res.data)
    },
    async getPicture(data:PictureParam): Promise<Array<any>> {
        /**
         * 请求图片
         * @return 图片
         */
        let url: string = this.baseUrl + '/picture'
        return await axios.get(url, {params: data}).then(res=> res.data)
    },
    async getTalentsData(): Promise<Array<TalentData>>{
        /**
         * 请求天赋列表（3个天赋）
         * @return 符合TalentData接口的对象列表
         */
        let url: string = this.remoteUrl + '/talents'
        return await axios.get(url).then(res=> res.data)
    },
    async getMajorData(data:MajorParam): Promise<MajorData> {
        /**
         * 请求专业信息
         * @param data - 请求负载参数
         * @return  符合MajorData接口的对象
         */
        let url: string = this.remoteUrl + '/major'
        return await axios.get(url, {params: data}).then(res=> res.data)
    },
    async getEventData(data:LifeParam): Promise<LifeData> {
        /**
         * 请求事件信息
         * @param data - 请求负载参数
         * @return 符合EventData接口的对象
         */
        let url: string = this.baseUrl + '/event'
        return await axios.get(url, {params: data}).then(res=> res.data)
    },
    async postUserData(data: UserParam): Promise<UserData> {
        /**
         * 请求用户信息
         * @param data - 请求负载参数
         * @return 
         */
        let url: string = this.baseUrl + '/user'
        return await axios.get(url, {params: data}).then(res=> res.data)
    },
    async getAchievementsData(data: AchievementsParam): Promise<Array<AchievementData>> {
        /**
         * 请求天赋数据列表
         * @param data -  请求负载参数
         * @return 符合
         */
        let url: string = this.baseUrl + '/achievements'
        return await axios.get(url, {params: data}).then(res=> res.data)
    },
    async getChoicesData(data?: ChoicesParam): Promise<Array<ChoiceData>> {
        /**
         * 请求假期选项
         * @param data -  请求负载参数
         * @return 符合choiceData接口的列表数据
         */
        //  let url: string = this.baseUrl + '/choices'
         let url: string = this.remoteUrl + '/choices'
         return await axios.get(url, {params: data}).then(res=> res.data)
    },
    async getGameSourceData(): Promise<GameSource> {
        /**
         * 请求游戏资源
         * @return 符合GameSource接口的数据
         */
         let url: string = this.baseUrl + '/source'
         return await axios.get(url).then(res=> res.data)
    }
}
