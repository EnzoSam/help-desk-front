
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class Utils {

  constructor()
  {

  }  

 getDuration(fechaInicial: Date, fechaFinal?: Date): { hours: number, minutes: number } {
    if(!fechaFinal)
      fechaFinal = new Date();

      const milisegundosPorMinuto = 60 * 1000; // Número de milisegundos en un minuto

      // Restar las fechas y obtener la diferencia en milisegundos
      const diferenciaMilisegundos = new Date(fechaFinal).getTime() - 
      new Date(fechaInicial).getTime();
    
      // Calcular la diferencia en horas
      const hours = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60));
    
      // Calcular la diferencia en minutos
      const minutes = Math.floor((diferenciaMilisegundos % (1000 * 60 * 60)) / milisegundosPorMinuto);
    
      return { hours, minutes };
  }
  

  
  
}
