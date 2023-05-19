import { defineStore } from 'pinia';

export const useMainStore = defineStore({
    id : 'mainStore', //(aynı id den 2 tane olamaz) storein kendine as idsi olmalı
    state() { // bu fonksiyon her zaman obje dönmeli
        //veya state:()=>({...})
        //veya state:()=>{return{...}}
        return {
            isim : 'onur'
        }
    },
    getters: {
        name2Base64(state:any){
            return window.btoa(state.isim)
        }, // 2. kullanım şekli
        base642name(): string{
            return window.atob(this.name2Base64)
        },
    },
    actions: {
        changeName(newName:string){
            // this.isim = newName;
            this.$patch({
                isim: newName
            })
        }
    }
});