import {Recipe} from './recipe.model';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppinglistService} from '../shopping-list/shoppinglist.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe', 'A recipe used for a test',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
      [new Ingredient('Tomato', 10), new Ingredient('Pepper', 20)]
      ),
    new Recipe(
      'A next recipe', 'A next recipe used for a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi6FchG40O-8a5LBJxh1cFzODNONo6HjnW7vVS3V4bRyjV46WJ',
      [new Ingredient('Tomato', 10), new Ingredient('Pepper', 20), new Ingredient('Beef', 1)]
    )
  ];

  constructor(private shoppinglistService: ShoppinglistService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppinglistService.addIngredients(ingredients);
  }

}
