import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'search'
})

export class SearchPipe implements PipeTransform {
    transform(listOrders: Object[], searchInput: string): any[]{
        if(!searchInput) {
            return  listOrders;
        }
        return listOrders.filter(
            it=>{
              const any=it as any;
              if(any.order_id!=null){
                return (any.order_id.toLowerCase().includes(searchInput)) as Object;
              }else{
               return (any.order.id.toLowerCase().includes(searchInput) )as Object;
              }
            }
        )
    }
}