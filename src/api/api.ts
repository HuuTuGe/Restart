import axios from "axios";
import {UserData, MajorData, TalentData} from "@/api/outputInterface"
import {MajorIpunt} from "@/api/inputInterface"

function catchError(error:any) {
    console.log(error)
}

function postUserData(url: string, data: object) {
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

function getMajorData(url: string, data:object): MajorData|void {
    /**
     * 请求专业信息
     * @param url - 请求api
     * @param data - 请求负载参数
     * @return  符合MajorData接口的对象
     */
    
    axios
    .get(url, data)
    .then(response => {
        let majorData:MajorData = response.data
        return majorData
    })
    .catch(catchError)
}

function getTalentData(url: string, data:object): Array<TalentData>|void {
    /**
     * 请求天赋信息
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

function getPicture(url: string, data:object): void {
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

