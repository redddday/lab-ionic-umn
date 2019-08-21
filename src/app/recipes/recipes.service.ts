import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Gado-gado',
      imageUrl: 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/05/gado-gado-salad.jpg?itok=MTTSriC8',
      ingredients: ['Lontong', 'Sawi', 'Bumbu Kecap', 'Tauge']
    },

    {
      id: 'r2',
      title: 'Ketupat',
      imageUrl: 'https://cdn1-production-images-kly.akamaized.net/WvR3QWEL8sI3QC_yvaoJ9C62icQ=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2242406/original/096939400_1528361718-Kegemukan-karena-Makan-Ketupat-Kok-Bisa-By-shahreen-shutterstock.jpg',
      ingredients: ['Nasi', 'Ketupat']
    },

    {
      id: 'r3',
      title: 'Pizza Margerita',
      imageUrl: 'https://www.abeautifulplate.com/wp-content/uploads/2015/08/the-best-homemade-margherita-pizza-1-4.jpg',
      ingredients: ['Pizza', 'Sauce', 'Tomat', 'Keju']
    },
  ];

  constructor() { }

  getAllRecipes() 
  {
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
  var recipe = [...this.recipes]
  var find = recipe.find(recipe => recipe.id == recipeId);

  console.log(find);
  }

  deleteRecipe(recipeId: string){

    var neww = this.recipes.filter(function(a){
      return a.id != recipeId
    })
    this.recipes = neww;
  
  }
}
