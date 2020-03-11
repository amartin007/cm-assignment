import { mount, shallowMount } from '@vue/test-utils';
import PremiumRecipeCard from '../../src/components/PremiumRecipeCard.vue';

describe("PremiumRecipeCard.vue", () => {

  const wrapper = shallowMount(PremiumRecipeCard, {
    propsData: {
      recipe: {
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
      }
    }
  });

  it('Should calculate the time correctly if over an hour', () => {
    expect(wrapper.vm.timeCalc(65)).toEqual("1 hr 5 min");
  });

  it('Should calculate the time correctly if under an hour', () => {
    expect(wrapper.vm.timeCalc(45)).toEqual("45 min");
  });

  it('Should convert to kilojoules when the energy unit is kilojoules', () => {
    expect(wrapper.vm.energyCalc(489)).toEqual("2045.976 Kj");
  });

  it('Should display calories when the energy unit is calories', () => {
    wrapper.vm.recipe.energyUnit = "calories";
    expect(wrapper.vm.energyCalc(489)).toEqual("489 Calories");
  });

  it('Should display calories as the default when no energy unit is supplied', () => {
    wrapper.vm.recipe.energyUnit = "";
    expect(wrapper.vm.energyCalc(489)).toEqual("489 Calories");
  });
});
