<template>
  <div class="card-wrapper">
    <div class="card-top">
      <div class="card-img">
        <img src="../assets/icons/heart_empty.svg" class="heart-icon" />
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
        Low Carb Thai Chicken Curry With Coconut Cauliflower Rice
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
        <span class="rating-text">200 Ratings</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PremiumRecipeCard",
  props: {
    msg: String
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
</style>
