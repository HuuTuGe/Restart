import axios from "axios";
import {UserData, MajorData, TalentData, EventData,AchievementData,LifeData,ChoiceData} from "@/api/outputInterface"
import {MajorParam,EventParam,PicturesParam,PictureParam,AchievementsParam,UserParam,ChoicesParam} from "@/api/inputInterface"
import type {AxiosRequestConfig} from 'axios'

export function catchError(error:any) {
    console.log(error)
}

export const api = {
    baseUrl: 'https://mock.apifox.cn/m1/1984536-0-default' ,// mock连接
    remoteUrl: '' ,// 服务器地址
    async getPictures(data:PicturesParam): Promise<Array<any>> {
        /**
         * 请求图片列表
         * @return 图片列表
         */
        let url: string = this.baseUrl + '/pictures'
        return await axios.get(url, data as AxiosRequestConfig<PicturesParam>).then(res=> res.data)
    },
    async getPicture(data:PictureParam): Promise<Array<any>> {
        /**
         * 请求图片
         * @return 图片
         */
        let url: string = this.baseUrl + '/picture'
        return await axios.get(url, data as AxiosRequestConfig<PictureParam>).then(res=> res.data)
    },
    async getTalentsData(): Promise<Array<TalentData>>{
        /**
         * 请求天赋列表（3个天赋）
         * @return 符合TalentData接口的对象列表
         */
        let url: string = this.baseUrl + '/talents'
        return await axios.get(url).then(res=> res.data)
    },
    async getMajorData(data:MajorParam): Promise<MajorData> {
        /**
         * 请求专业信息
         * @param data - 请求负载参数
         * @return  符合MajorData接口的对象
         */
        let url: string = this.baseUrl + '/major'
        return await axios.get(url, data as AxiosRequestConfig<MajorParam>).then(res=> res.data)
    },
    async getEventData(data:EventParam): Promise<LifeData> {
        /**
         * 请求事件信息
         * @param data - 请求负载参数
         * @return 符合EventData接口的对象
         */
        let url: string = this.baseUrl + '/event'
        return await axios.get(url, data as AxiosRequestConfig<EventParam>).then(res=> res.data)
    },
    async postUserData(data: UserParam): Promise<UserData> {
        /**
         * 请求用户信息
         * @param data - 请求负载参数
         * @return 
         */
        let url: string = this.baseUrl + '/user'
        return await axios.get(url, data as AxiosRequestConfig<UserParam>).then(res=> res.data)
    },
    async getAchievementsData(data: AchievementsParam): Promise<Array<AchievementData>> {
        /**
         * 请求天赋数据列表
         * @param data -  请求负载参数
         * @return 符合
         */
        let url: string = this.baseUrl + '/achievements'
        return await axios.get(url, data as AxiosRequestConfig<AchievementsParam>).then(res=> res.data)
    },
    async getChoicesData(data?: ChoicesParam): Promise<Array<ChoiceData>> {
        /**
         * 请求假期选项
         * @param data -  请求负载参数
         * @return 符合choiceData接口的列表数据
         */
         let url: string = this.baseUrl + '/achievements'
         return await axios.get(url, data as AxiosRequestConfig<ChoicesParam>).then(res=> res.data)
    }
}
