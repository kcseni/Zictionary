import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Root } from '../models/syn.model';

@Injectable({
  providedIn: 'root'
})
export class SynonymService {

  synoUrl="http://thesaurus.altervista.org/thesaurus/v1?word=";
  key="&key=wKuzbFbnlec6Xw4QBMKQ&output=json";

  constructor(private http: HttpClient) { }

  /**Sends a http get request to the thesaurus API to get the synonym of the word parameter according to the language parameter.
   * It returns an observable Root. It also catches http error.
   * 
   * @param word 
   * @param language 
   * @returns 
   */
  getSyn(word: String, language:string) : Observable<Root> {
    return this.http.get<Root>(this.synoUrl + word + "&language=" +language + this.key)
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
