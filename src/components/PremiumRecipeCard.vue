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
</style>
