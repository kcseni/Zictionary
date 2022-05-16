import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { LanguagecodeService } from 'src/app/services/languagecode.service';
import { SynonymService } from 'src/app/services/synonym.service';

@Component({
  selector: 'app-synonym',
  templateUrl: './synonym.component.html',
  styleUrls: ['./synonym.component.css']
})
export class SynonymComponent implements OnInit {

  @Input() word: string;
  @Input() selectedLanguageto: string;
  @Input() ready:boolean;

  /**It is called when at least one of the Input variable changes. It sets the show and error booleans false.
   * 
   * @param changes 
   */
  ngOnChanges(changes: SimpleChanges) {
    this.show=false;
    this.error=false;
  }

  synonym: string[];
  errorMsg: string;
  error=false;
  show=false;
  


  constructor(private synservice: SynonymService, private langservice: LanguagecodeService) { }

  ngOnInit(): void {
    
  }

  /**Calls the SynonymService's 'getSyn' method. If the response was empty, sets the boolean variables, if it was not empty,
   * sets the synonym variable and booleans accordingly. In case of http error, sets the errorMsg variable.
   * 
   */
  getSynonym(){
    this.synservice.getSyn(this.word, this.langservice.getSynonymCode(this.selectedLanguageto))
    .subscribe(syn => {
                        if(syn.response.length===0){
                          this.error=true; this.show=false;
                        }
                        else{
                          var syno=syn.response[0].list.synonyms.split("|");
                          this.synonym=syno; this.error=false; this.show=true;
                        }},

               (error) => {this.errorMsg=error; this.error=true; this.show=false;}
      );

  }

  /**Checks if the synonym-API supports the language the component got from its parent component (the language chosen by the user)
   * Checks if the word input (which is the translation itself) is not empty
   * Returns true if there is a chance to find the synonym of the translation.  
   * 
   * @returns 
   */
  checkIfSynExist():boolean{
   
    if(this.langservice.getSynonymCode(this.selectedLanguageto)=='' || this.word=='' || this.ready==false){
      return false;
    }
    return true;

  }

  

}
