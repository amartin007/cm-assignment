import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number, object} from "@storybook/addon-knobs";

import PremiumRecipeCard from "../src/components/PremiumRecipeCard.vue";

export default {
  title: "PremiumRecipeCard",
  component: PremiumRecipeCard,
  decorators: [withKnobs]
};

export const Default = () => ({
  components: { PremiumRecipeCard },
  props: {
    recipe: {
      default: object('recipe', { 
        title: "Low Carb Thai Chicken Curry With Coconut Cauliflower Rice",
        favorite: true,
        ratings: "200 Ratings",
        starRating: 3.5,
        minutes: 63,
        calories: 489,
        energyUnit: "kilojoules",
        carbs: "20g",
        protein: "16g",
        fats: "6g"
      })
    }
  },
  template: '<PremiumRecipeCard @recipeClicked="action" :recipe="recipe" />',
  methods: { action: action("clicked") }
});
