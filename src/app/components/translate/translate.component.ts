import { Component, OnInit } from '@angular/core';
import { LanguagecodeService } from 'src/app/services/languagecode.service';
import { TranslateService } from 'src/app/services/translate.service';


@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {

  /**constructor 
   * 
   * @param service 
   * @param langservice 
   */
  constructor(private service: TranslateService, private langservice: LanguagecodeService) { }

  languages: Array<String>;
  searchTerm: string;

  word:string = '';
  pos: string ='';

  ready=false;

  map = new Map<string, Array<string>>();
 
  selectedLanguagefrom:string="English";
  selectedLanguageto:string="German";

  separatedlangs: Array<Array<string>>=[];
  differentlangscode: Array<string>=[];
  differentlangsname: Array<string>=[];
  selectablelangsname: Array<string>=[];


  ngDropdownfrom = "en";
  ngDropdownto = "de";

  
  
  error=false;
  errorMsg: string | null;

  /**Calls the TranslateService's getLanguages method and set variables connected to languages accordingly to the response.
   * 
   */
  ngOnInit(): void {
    
    this.service.getLanguages() //get languages in unique arrays
        .subscribe(langs => { 
          for (let l of langs) {
            this.separatedlangs.push(l.split('-'))};
          this.separatedlangs=[... new Set(this.separatedlangs)];
          this.uniqueLangsCode();
          this.getLangsNamebyCode();
          this.makemap();
          this.selectablelangsname=this.map.get(this.selectedLanguagefrom)!;
        });


    this.separatedlangs=[...new Set(this.separatedlangs)];
    
    
  }

  /**Checks if the search input is empty or not. If it is not empty, calls the TranslateService's getTranslation method.
   * If the response was empty, sets error boolean variable true, if it was not empty,
   * sets the word, pos variables and booleans accordingly. In case of http error, sets the errorMsg variable.
   * 
   */
  getTranslation(){

    this.errorMsg=null;
    if(this.searchTerm!=""){
      this.service.getTranslation(this.searchTerm, this.langservice.getCode(this.selectedLanguagefrom), this.langservice.getCode(this.selectedLanguageto))
        .subscribe(trans => {if(trans.def.length===0){
                              this.error=true;
                              this.ready=false;
                            }
                             else{
                               this.word = trans.def[0].tr[0].text;
                               this.pos = trans.def[0].pos;
                               this.ready=true;
                               this.error=false;
                            }},
                   (error) => {this.errorMsg=error; this.error=true; this.ready=false}
          );
    }
  }
     

  
/**This method is called when the user select a new source language from the selection list.
 * It refreshes the language options of the goal language's selection list according to the language map 
 * and sets the selected goal language if the previous selected is not valid.
 * 
 */
  onLanguageChangefrom(){
    var s = this.map.get(this.selectedLanguagefrom)!;
    var temp=this.selectedLanguageto;
    if(s.includes(this.selectedLanguageto)){
      this.selectablelangsname=s;
      this.selectedLanguageto=temp;
    }else{
      this.selectablelangsname=s;
      this.selectedLanguageto=this.selectablelangsname[0];
    }
  }

  /**It converts the array of language code-pairs' array into a language code array,
   * then modify it to contain a code only once. (contain unique elements without repetition)
   * 
   */
  uniqueLangsCode(){
    for(let s of this.separatedlangs){
      this.differentlangscode=[...this.differentlangscode, ...s];
    };
    this.differentlangscode=[...new Set(this.differentlangscode)];
  }

  /**It iterates through the language codes' array and adds the language names to the language names' array 
   * with the help of the LanguageCodeService's getName function.
   * 
   */
  getLangsNamebyCode(){
    for(let d of this.differentlangscode){
      this.differentlangsname.push(this.langservice.getName(d));
    }
  }

  /**It iterates through the elements of the language codes' array and the "language code-pairs" array.
   * If it finds a code pair whose member 1 is the same as the current language code,
   * it adds its second member to a temporary array (the 'value' array) that it use to set the language map at the end of the internal loop.
   * 
   */
  makemap(){
    for(let d of this.differentlangscode){
    var temp= new Array<string>();
      for(let s of this.separatedlangs){
        if(s.indexOf(d)==0){
          temp.push(this.langservice.getName(s[1]));
        }
      };
      this.map.set(this.langservice.getName(d), temp);
      temp=[];
    }
  } 



  /**This method is called when the user clicks on the switch button. It swaps the value of the source and target language,
   * sets the boolean variales and makes the search input empty.
   * 
   */
  switchLanguages(){
    var temp = this.selectedLanguagefrom;
    this.selectedLanguagefrom=this.selectedLanguageto;
    this.selectedLanguageto=temp;
    this.onLanguageChangefrom();
    this.ready=false;
    this.error=false;
    this.searchTerm='';
  }

  


}



