import axios from "axios";
import * as Data from "@/api/outputInterface"
import * as Param from '@/api/inputInterface' 
import { GameSource } from "@/state/stateInterface";

export function catchError(error:any) {
    console.log(error)
}

export const api = {
    baseUrl: 'https://mock.apifox.cn/m1/1984536-0-default' ,// mock连接
    remoteUrl: 'http://43.139.155.223:9090' ,// 服务器地址
    async getPictures(data:Param.PicturesParam): Promise<Array<Data.PictureData>> {
        /**
         * 请求图片列表
         * @return 图片列表
         */
        let url: string = this.remoteUrl + '/pictures'
        return await axios.get(url, {params: data}).then(res=> res.data)
    },
    async getPicture(data:Param.PictureParam): Promise<Data.PictureData> {
        /**
         * 请求图片
         * @return 图片
         */
        let url: string = this.remoteUrl + '/picture'
        return await axios.get(url, {params: data}).then(res=> res.data)
    },
    async getTalentsData(): Promise<Array<Data.TalentData>>{
        /**
         * 请求天赋列表（3个天赋）
         * @return 符合TalentData接口的对象列表
         */
        // let url: string = this.baseUrl + '/talents'
        let url: string = this.remoteUrl + '/talents'
        return await axios.get(url).then(res=> res.data)
    },
    async getMajorData(data:Param.MajorParam): Promise<Data.MajorData> {
        /**
         * 请求专业信息
         * @param data - 请求负载参数
         * @return  符合MajorData接口的对象
         */
        // let url: string = this.baseUrl + '/major'
        let url: string = this.remoteUrl + '/major'
        return await axios.get(url, {params: data}).then(res=> res.data)
    },
    async getEventData(data:Param.LifeParam): Promise<Data.LifeData> {
        /**
         * 请求事件信息
         * @param data - 请求负载参数
         * @return 符合EventData接口的对象
         */
        let param:object = {
            props: data.props + '',
            eventList: data.eventList + '',
            achievementList: data.achievementList + '',
            academyId: data.academyId,
        }
        let url: string = this.remoteUrl + '/event'
        // let url: string = this.baseUrl + '/event'
        return await axios.get(url, {params: param}).then(res=> res.data)
    },
    async getUserData(): Promise<Data.UserData> {
        /**
         * 请求用户信息
         * @param data - 请求负载参数
         * @return 
         */
        // let url: string = this.baseUrl + '/user/data'
        let url: string = this.remoteUrl + '/user/data'

        // 从本地读取token
        let header: object
        header = {
            lifestartToken : localStorage.getItem("lifestartToken")
        }
        console.log("set token: " + localStorage.getItem("lifestartToken"))
        return axios.get(url, {headers:header}
            ).then(res=> res.data)
    },
    async getAchievementsData(data: Param.AchievementsParam): Promise<Array<Data.AchievementData>> {
        /**
         * 请求天赋数据列表
         * @param data -  请求负载参数
         * @return 符合
         */
        let param: object = {
            ids: data.ids + '',
            page: data.page,
            limit: data.limit,
            type: data.type,
        }
        let url: string = this.remoteUrl + '/achievements'
        // let url: string = this.baseUrl + '/achievements'
        return await axios.get(url, {params: param}).then(res=> res.data)
    },
    async getChoicesData(data?: Param.ChoicesParam): Promise<Array<Data.ChoiceData>> {
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
        let url: string = this.remoteUrl + '/source'
        //  let url: string = this.baseUrl + '/source'
         return await axios.get(url).then(res=> res.data)
    },
    getToken(): void{
        /**
         * 请求token
         * @return 符合TokenParam接口的数据
         */
        let url: string = this.remoteUrl + '/token'
        // let url: string = this.baseUrl + '/token'
        axios.get(url).then(res=> {
            console.log('getToken ' + res.data.token as string)
            localStorage.setItem("lifestartToken",res.data.token as string) 
        })
   }
}
