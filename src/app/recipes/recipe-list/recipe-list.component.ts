import { Component, OnInit } from '@angular/core';
import{Recipe} from '../recipe.model'
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipies: Recipe[];
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipies = this.recipesService.getRecipies();
  }

  // onRecipeSelected(selectedRecipe:Recipe){
  //   this.selectedRecipe.emit(selectedRecipe);
  // }

}
