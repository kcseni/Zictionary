import { Injectable } from '@angular/core';
import { LanguageCode } from '../models/language.model';

@Injectable({
  providedIn: 'root'
})
export class LanguagecodeService {

  constructor() { }

  languageMap: LanguageCode[]=[
    {name: "Belarusian", code: "be"},
    {name: "Russian", code: "ru"},
    {name: "Bulgarian", code: "bg"},
    {name: "Czech", code: "cs"},
    {name: "English", code: "en"},
    {name: "Danish", code: "da"},
    {name: "German", code: "de"},
    {name: "Turkish", code: "tr"},
    {name: "Greek", code: "el"},
    {name: "Spanish", code: "es"},
    {name: "Estonian", code: "et"},
    {name: "Finnish", code: "fi"},
    {name: "French", code: "fr"},
    {name: "Italian", code: "it"},
    {name: "Lithuanian", code: "lt"},
    {name: "Latvian", code: "lv"},
    {name: "Dutch", code: "nl"},
    {name: "Norwegian", code: "no"},
    {name: "Portuguese", code: "pt"},
    {name: "Slovak", code: "sk"},
    {name: "Swedish", code: "sv"},
    {name: "Ukrainian", code: "uk"},
    {name: "Hungarian", code: "hu"},
    {name: "Eastern Mari", code: "mhr"},
    {name: "Western Mari", code: "mrj"},
    {name: "Polish", code: "pl"},
    {name: "Tatar", code: "tt"},
    {name: "Chinese", code: "zh"},

  ]

  synonymMap : LanguageCode[]= [
    {name: "Czech", code: "cs_CZ"},
    {name: "Danish", code: "da_DK"},
    {name: "German", code: "de_DE"},
    {name: "English", code: "en_US"},
    {name: "Greek", code: "el_GR"},
    {name: "Spanish", code: "es_ES"},
    {name: "French", code: "fr_FR"},
    {name: "Hungarian", code: "hu_HU"},
    {name: "Italian", code: "it_IT"},
    {name: "Norwegian", code: "no_NO"},
    {name: "Polish", code: "pl_PL"},
    {name: "Portuguese", code: "pt_PT"},
    {name: "Russian", code: "ru_RU"},
    {name: "Slovak", code: "sk_SK"},

  ]

  /**Returns the code of the language parameter if it exists in the languageMap. If it is not, returns an empty string.
   * 
   * @param languageName 
   * @returns 
   */
  getCode(languageName: String): string {
    const language: LanguageCode | undefined = this.languageMap.find((l: LanguageCode) => l.name === languageName);
    if (!language) {
        return '';
    }

    return language.code;
  }

  /**Returns the name corresponding to the languageCode parameter if it exists in the languageMap. If it is not, returns an empty string.
   * 
   * @param languageCode 
   * @returns 
   */
  getName(languageCode: String): string {
    const language: LanguageCode | undefined = this.languageMap.find((l: LanguageCode) => l.code === languageCode);
    if (!language) {
        return '';
    }

    return language.name;
  }

  /**Returns the code corresponding to the languageName parameter if it exists in the synonymMap. If it is not, returns an empty string.
   * 
   * @param languageName 
   * @returns 
   */
  getSynonymCode(languageName: String): string {
    const language: LanguageCode | undefined = this.synonymMap.find((l: LanguageCode) => l.name === languageName);
    if (!language) {
        return '';
    }

    return language.code;
  }

  
}
