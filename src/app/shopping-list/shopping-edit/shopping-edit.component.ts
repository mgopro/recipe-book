import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName') name:ElementRef;
  @ViewChild('inputAmount') amount:ElementRef;
  
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddClick(){
    const itemName:string = this.name.nativeElement.value;
    const itemAmount:number = this.amount.nativeElement.value;
    const item = new Ingredient(itemName, itemAmount);
    this.slService.addIngredient(item);
    // this.addToShoppingList.emit(item);
  }

}
