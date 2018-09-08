import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() selectedRecipe:Recipe;
  selectedRecipe:Recipe;
  constructor(private slService:ShoppingListService, private recipesService:RecipesService, private route:ActivatedRoute) { }

  ngOnInit() {
    
    this.route.params.subscribe(
      (params:Params) => {
        this.selectedRecipe = this.recipesService.getRecipieById(+params['id']);
      }
    );
  }

  onAddToShoppingList(){
    // this.slService.getIngredients();
    // this.slService.addIngredients(this.selectedRecipe.ingredients);
    this.recipesService.addIngredientsToShoppingList(this.selectedRecipe.ingredients);

    // this.selectedRecipe.ingredients.forEach(function(ingredient){
    // });
    
  }

}
