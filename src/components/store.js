const STORAGE_KET='todos-vuejs'
export default{
    fetch(){
        return JSON.parse(window.localStorage.getItem(STORAGE_KET)||'[]')
    },
    save(items){
        window.localStorage.setItem(STORAGE_KET,JSON.stringify(items))
    }
}