import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTicket'
})
export class Filter implements PipeTransform {

  transform(value: any,sName:string): any {

    if(sName==="")
    {
      return value;
    }

    const listTicket:any[]=[]

    for (let i=0;i<value.length;i++)
    {
      let nomContrat:string=value[i].title;
      if(nomContrat.startsWith(sName)){
        listTicket.push(value[i]);
      }
    }
    console.log(listTicket)
    return listTicket;
  }

}
