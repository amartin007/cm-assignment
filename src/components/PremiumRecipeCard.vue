<template>
  <div class="card-wrapper">
    <div class="card-top">
      <div class="card-img">
        <img
          v-if="recipe.favorite"
          src="../assets/icons/heart_filled.svg"
          class="heart-icon"
        />
        <img v-else src="../assets/icons/heart_empty.svg" class="heart-icon" />
        <div class="premium premium-bg"></div>
        <div class="premium premium-content">
          <img src="../assets/icons/trophy.svg" class="trophy-icon" />
          <span> Premium Recipe</span>
        </div>
        <img src="../assets/overlay.png" />
      </div>
    </div>
    <div class="card-content">
      <h3 class="card-content-heading">
        {{ recipe.title }}
      </h3>
      <div class="rating">
        <img src="../assets/icons/star_full.svg" />
        <img src="../assets/icons/star_full.svg" />
        <img src="../assets/icons/star_half.svg" class="rating-stacked-top" />
        <div class="rating-stacked-bottom">
          <img src="../assets/icons/star_empty.svg" />
          <img src="../assets/icons/star_empty.svg" />
          <img src="../assets/icons/star_empty.svg" />
        </div>
        <span class="rating-text">{{ recipe.ratings }}</span>
      </div>
      <div class="card-content-bottom">
        <span>
          <img src="../assets/icons/clock.svg" class="icon-align" />
          <span> {{ timeConvert(recipe.duration) }}</span>
        </span>
        <span>
          <img src="../assets/icons/flame.svg" class="icon-align" />
          <span> {{ recipe.calories }}</span>
        </span>
        <div class="macros">
          <span class="dot red-dot"></span> {{ recipe.carbs }}
          <span class="dot blue-dot"></span> {{ recipe.protein }}
          <span class="dot gold-dot"></span> {{ recipe.fats }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PremiumRecipeCard",
  props: {
    recipe: Object
  },
  methods: {
    timeConvert(time) {
      let hours = Math.floor(time / 60);
      let minutes = time % 60;
      return hours > 0 ? `${hours} hr ${minutes} min` : `${minutes} min`;
    }
  }
};
</script>

<style scoped>
.card-wrapper {
  width: 343px;
  margin: auto;
  font-size: 14px;
  border-radius: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
}
.card-wrapper:hover {
  cursor: pointer;
}
.card-wrapper:hover > .card-top {
  opacity: 0.8;
}
.card-top {
  position: relative;
  height: 200px;
  background: url("../assets/food.png");
  border-radius: 12px 12px 0 0;
}
.heart-icon {
  position: absolute;
  top: 15px;
  right: 15px;
}
.trophy-icon {
  height: 14px;
}
.premium {
  position: absolute;
  bottom: 10px;
  left: 10px;
  width: 152px;
}
.premium-bg {
  background-color: #eee;
  opacity: 0.4;
  height: 25px;
  border-radius: 25px;
  bottom: 9px;
}
.premium-content {
  color: #fff;
  font-weight: bold;
}
.card-content {
  background-color: #fff;
  border-radius: 0 0 12px 12px;
  padding: 15px;
  text-align: left;
}
.card-content-heading {
  text-align: left;
  padding-bottom: 15px;
  margin: 0;
}
.rating {
  padding-bottom: 5px;
}
.rating img {
  height: 13px;
}
.rating-stacked-bottom {
  display: inline-block;
  transform: translate(-6px);
}
.rating-text {
  color: #3ab188;
}
.card-content-bottom {
  font-size: 14px;
}
.card-content-bottom > span {
  padding-right: 5px;
}
.icon-align {
  vertical-align: sub;
  padding-right: 2px;
}
.macros {
  float: right;
}
.dot {
  height: 8px;
  width: 8px;
  border-radius: 50%;
  display: inline-block;
  margin-left: 5px;
}
.red-dot {
  background-color: #f84742;
}
.blue-dot {
  background-color: #3076bb;
}
.gold-dot {
  background-color: #fea120;
}
</style>
