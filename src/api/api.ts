import axios from "axios";
import {UserData, MajorData, TalentData} from "@/api/outputInterface"
import {MajorIpunt} from "@/api/inputInterface"
import type {AxiosRequestConfig} from 'axios'

export function catchError(error:any) {
    console.log(error)
}

function postUserData(url: string, data: object): void|UserData {
    /**
     * 请求用户信息
     * @param url - 请求api
     * @param data - 请求负载参数
     * @return 
     */
    axios
    .post(url, data)
    .then()
    .catch(catchError)

}

function getMajorData(data?:MajorIpunt): Promise<MajorData> {
    /**
     * 请求专业信息
     * @param url - 请求api
     * @param data - 请求负载参数
     * @return  符合MajorData接口的对象
     */
    let url: string = 'https://mock.apifox.cn/m1/1984536-0-default/talent'
    return axios.get(url, data as AxiosRequestConfig<MajorData>).then(res=> res.data)
}

async function getTalentData(data?:object): Promise<Array<TalentData>>{
    /**
     * 请求天赋信息
     * @param data - 请求负载参数
     * @return 符合TalentData接口的对象列表
     */
    let url: string = 'https://mock.apifox.cn/m1/1984536-0-default/talent'
    return axios.get(url, data).then(res=> res.data)
}

function getEventData(url: string, data:object): void {
    /**
     * 请求事件信息
     * @param url - 请求api
     * @param data - 请求负载参数
     * @return 符合TalentData接口的对象列表
     */
    axios
    .get(url, data)
    .then(response => {
        let talentDataList: Array<TalentData> = response.data
        return talentDataList 
    })
     .catch(catchError)
}

export {getEventData, getMajorData, getTalentData, postUserData}

export const api = {
    baseUrl: 'https://mock.apifox.cn/m1/1984536-0-default',
    getPicture(data:object): Promise<TalentData> {
        let url: string = 'https://mock.apifox.cn/m1/1984536-0-default/talent'
        return axios.get(url, data).then(res=> res.data)
    },
    async getTalentData(): Promise<Array<TalentData>>{
        /**
         * 请求天赋信息
         * @return 符合TalentData接口的对象列表
         */
        let url: string = this.baseUrl + '/talents'
        return await axios.get(url).then(res=> res.data)
    },
    async getMajorData(data:MajorIpunt): Promise<MajorData> {
        /**
         * 请求专业信息
         * @param url - 请求api
         * @param data - 请求负载参数
         * @return  符合MajorData接口的对象
         */
        let url: string = this.baseUrl + '/major'
        // return axios.get(url, data as AxiosRequestConfig<MajorData>).then(res=> res.data)
        return await axios.get(url, data as AxiosRequestConfig<MajorData>).then(res=> res.data)

    }
}
