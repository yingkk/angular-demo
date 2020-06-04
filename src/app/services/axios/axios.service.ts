import { Injectable } from '@angular/core';

import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() { }

  get(api) {
    return new Promise((resolve, reject) => {
      axios.get(api)
        .then((response) => {
          resolve(response);
          console.log(response);
          }).catch((error) => {
            reject(error);
          });
        });
     }
}
