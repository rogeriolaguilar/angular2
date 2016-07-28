import { Injectable } from '@angular/core';
import { RACES } from './mocks'

@Injectable()
export class RacesService{
    getRaces(){
        return RACES;
    }
}