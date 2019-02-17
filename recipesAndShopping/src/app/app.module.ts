import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ShoppingComponent } from "./shopping/shopping.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { RecipeDetailComponent } from "./recipe/recipe-detail/recipe-detail.component";
import { RecipeListComponent } from "./recipe/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./recipe/recipe-list/recipe-item/recipe-item.component";
import { ShoppingEditComponent } from "./shopping/shopping-edit/shopping-edit.component";
import { DropdownDirective } from "./shared/dropdown.directive";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingComponent,
    RecipeComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
