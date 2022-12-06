import axios from "axios";
import {UserData, MajorData, TalentData, EventData} from "@/api/outputInterface"
import {MajorParam,EventParam,PicturesParam,PictureParam,AchievementsParam} from "@/api/inputInterface"
import type {AxiosRequestConfig} from 'axios'

export function catchError(error:any) {
    console.log(error)
}

export const api = {
    baseUrl: 'https://mock.apifox.cn/m1/1984536-0-default',
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
    async getTalentData(): Promise<Array<TalentData>>{
        /**
         * 请求天赋信息
         * @return 符合TalentData接口的对象列表
         */
        let url: string = this.baseUrl + '/talents'
        return await axios.get(url).then(res=> res.data)
    },
    async getMajorData(data:MajorParam): Promise<MajorData> {
        /**
         * 请求专业信息
         * @param url - 请求api
         * @param data - 请求负载参数
         * @return  符合MajorData接口的对象
         */
        let url: string = this.baseUrl + '/major'
        return await axios.get(url, data as AxiosRequestConfig<MajorParam>).then(res=> res.data)
    },
    async getEventData(data:EventParam): Promise<EventData> {
        /**
         * 请求事件信息
         * @param url - 请求api
         * @param data - 请求负载参数
         * @return 符合EventData接口的对象
         */
        let url: string = this.baseUrl + '/event'
        return await axios.get(url, data as AxiosRequestConfig<EventParam>).then(res=> res.data)
    },
    async postUserData(data: object): Promise<UserData> {
        /**
         * 请求用户信息
         * @param url - 请求api
         * @param data - 请求负载参数
         * @return 
         */
         let url: string = this.baseUrl + '/user'
         return await axios.get(url, data as AxiosRequestConfig<any>).then(res=> res.data)
    }
}
