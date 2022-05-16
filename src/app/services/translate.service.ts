import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable , throwError} from 'rxjs';
import { Word } from '../models/word.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  languageUrl = "https://dictionary.yandex.net/api/v1/dicservice.json/getLangs?key=dict.1.1.20220501T151605Z.c7bebb09dd15a858.6783e779070dbbcfb6f04b2654c3d2ce05a2810e";
  translateUrl= "https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20220501T151605Z.c7bebb09dd15a858.6783e779070dbbcfb6f04b2654c3d2ce05a2810e&lang=";
  
  constructor(private http: HttpClient) { 
    
  }

  /**Sends a http get request to yandex API to get the supported languages. Returns an observable string array of the langugae-pairs.
   * 
   * @returns 
   */
  getLanguages() : Observable<String[]> {
    return this.http.get<String[]>(this.languageUrl);
    }

  
    /**Sends a http get request to yandex API to get the translation of the word parameter according to the source and target language parameters.
     * Returns an observable Word. It also catches http error.
     * 
     * @param word 
     * @param selectedLanguagefrom 
     * @param selectedLanguageto 
     * @returns 
     */
  getTranslation(word: string, selectedLanguagefrom: String, selectedLanguageto: String): Observable<Word>{
    return this.http.get<Word>(this.translateUrl + selectedLanguagefrom + "-" + selectedLanguageto + "&text=" + word)
    .pipe(catchError(this.errorHandler));;
  }


  /**Handles the error: if exists, returns the http error message, if it does not, return an alternative string.
   * 
   * @param error 
   * @returns 
   */
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Http error.');
  }


  
}
