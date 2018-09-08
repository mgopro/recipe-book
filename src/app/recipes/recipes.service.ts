import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipesService{
    recipeSelected = new EventEmitter<Recipe>();
    private recipies: Recipe[] = [
        new Recipe(
            'Paneer mutter butter masala', 
            'This is as yummy as it can get!!', 
            'https://c1.staticflickr.com/2/1581/24262340845_d50deb022d_b.jpg',
            [
                new Ingredient('Paneer', 1),
                new Ingredient('Mutter', 20),
                new Ingredient('Butter', 1),
                new Ingredient('Masala', 1)
            ]
        ),
        new Recipe(
            'Fish pulusu', 
            'This is more than just yummy!!', 
            'https://c1.staticflickr.com/9/8585/28906445485_ce32150295_b.jpg',
            [
                new Ingredient('Fish', 1),
                new Ingredient('Curd', 1),
                new Ingredient('Bay Leaves', 2)
            ]
        )
    ];
    constructor(private slService:ShoppingListService){}
    getRecipies(){
        return this.recipies.slice();
    }

    getRecipieById(id:number){
        return this.recipies[id];
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    // onRecipeSelected(recipe:Recipe){
    //     this.recipeSelected.emit(recipe);
    // }
}