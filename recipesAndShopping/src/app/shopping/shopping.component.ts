import { Component, OnInit } from "@angular/core";

import { Ingredient } from "../shared/ingredient.module";

@Component({
  selector: "app-shopping",
  templateUrl: "./shopping.component.html",
  styleUrls: ["./shopping.component.scss"]
})
export class ShoppingComponent implements OnInit {
  ingredients = [new Ingredient("Apples", 5), new Ingredient("Onions", 5)];
  constructor() {}

  ngOnInit() {}

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
