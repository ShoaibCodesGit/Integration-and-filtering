import { LightningElement, api } from "lwc";
import ACCOUNTSList from '@salesforce/apex/ConnectionBetweenOrgs.getAccountsFromOrgB';

export default class FilterOrgBRecords extends LightningElement {
        

	data;
    filterByAccountName='Name';
    filterByAccountIndustry='Industry';
	fullTableData= [];
    filteredData = [];

    connectedCallback(){

        ACCOUNTSList({}).then( (data)=>{            
            this.data=JSON.parse(JSON.stringify(data));  
            console.log('data -', data);          
            this.fullTableData =[...this.data];
            this.filteredData =[...this.data];                      
        })
    }


    // get filterByNameOption(){
    //     return [ 
    //         {label:'Name', value:'Name'}
    //      ]
    // }


    // filterByNameHandler(event){
    //     this.filterByAccountName = event.target.value;
    // }





    Namevalue='';
    searchNameKeyword(event) {
        this.Namevalue = event.target.value;

    }
    
    Industryvalue='';
    searchIndustryKeyword(event) {
        this.Industryvalue = event.target.value;

    }

   


   
    handleNameKeyword(){
                // if(this.searchNameValue!=null ){}
            
            // if(this.searchNameValue.map( (vl)=>{vl.length>2}) ){}
                // this.filteredData = this.fullTableData.filter( (eachrec) =>{                            
                    //     const val =  eachrec[Name]? eachrec[Name]:''                            
                    //     // return this.searchNameValue.includes(v);
                    //     // this.searchNameValue.includes(val);
                    //     return val.toLowerCase().includes(this.Namevalue)                            
                    // })
            
            if(this.Namevalue!=null&&this.Namevalue.length>2){ 
                   this.filteredData = this.fullTableData.filter( (eachrec) =>{ 
                    const nval = eachrec[this.filterByAccountName] ? eachrec[this.filterByAccountName]:'';
                    return nval.toLowerCase().includes(this.Namevalue);
                })

            }else{
                this.filteredData=[...this.fullTableData];
            }   
                                                                                
        }


   
        handleIndustryKeyword(){

            if(this.Industryvalue!=null){ 
                this.filteredData = this.fullTableData.filter( (eachrec) =>{ 
                    const ival = eachrec[this.filterByAccountIndustry] ? eachrec[this.filterByAccountIndustry]:'';
                    return ival.toLowerCase().includes(this.Industryvalue);
                })

            }else{
                this.filteredData=[...this.fullTableData];
            }
        }


    MoreOptions= false;

    MoreOptionsHandler(event){
        this.MoreOptions= true;
    }










    

















}
















