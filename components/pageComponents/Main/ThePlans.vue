<template>
  <div class="row mt-4">
    <div class="stepper-wrapper mt-4 w-100">
  <div class="stepper-item completed">
    <div class="step-counter">1</div>
    <div class="step-name">Subscription plan</div>
  </div>
  <div class="stepper-item completed">
    <div class="step-counter " style="background-color:var(--white); color:var(--black)">2</div>
    <div class="step-name">Subscription duration</div>
  </div>
 
</div>
    <div class="col-md-12 col-sm-12">
      <priceCard
        v-for="card in cards"
        :key="card.title"
        :title="card.title"
        :price="card.price"
        :feature_one="card.feature_one"
        :feature_two="card.feature_two"
        :feature_three="card.feature_three"
        :feature_four="card.feature_four"
        :feature_five="card.feature_five"
        :feature_six="card.feature_six"
        :border-top=card.boderTop
        :link="card.link"
      />
    </div>
  </div>
</template>

<script>

import priceCard from "../../UI/Cards/priceCard.vue";
export default {
  name: "TheHome",
  components: {
    priceCard,
  },
  data() {
    return {
      cards: [
        {
          title: "Basic Trial",
          price: "$2.00 / day",
          feature_one: "Access to Full One Day",
          feature_two: "Cancel Anytime",
          feature_three: "Unlimited movies and TV shows",
          feature_four: "Resoulution Access HD (720)",
          feature_five: "",
          boderTop:false,
          link:'basicPlan'
        },
        {
          title: "Permium",
          price: "$5.00 / month",
          feature_one: "Access to Full One Day",
          feature_two: "Cancel Anytime",
          feature_three: "Unlimited movies and TV shows",
          feature_four: "Resoulution Access HD (720)",
          feature_five: "No AD",
          feature_six:"",
          boderTop:true,
          link:'permiumPlan'
        },
        {
          title: "Business",
          price: "$99.00 / month",
          feature_one: "Access to Full One Day",
          feature_two: "Cancel Anytime",
          feature_three: "Unlimited movies and TV shows",
          feature_four: "Resoulution Access HD (4k+HDR)",
          feature_five: "No AD",
          feature_six:"Priority Support in 24H",
          boderTop:false,
          link:'businessPlan'
        },
      ],
    };
  },
};
</script>

<style scoped>
.image-container {
  width: 100%;
  padding: 48px;
  border-radius: 16px;
  background-size: 100% 80%;
  background-repeat: no-repeat;
  height: 30rem;
}
.image-container h1 {
  color: var(--green);
}
.stepper-wrapper {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.stepper-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 12px;
  }
}

.stepper-item::before {
  position: absolute;
  content: "";
  border-bottom: 2px solid #ccc;
  width: 100%;
  top: 20px;
  left: -50%;
  z-index: 2;
}

.stepper-item::after {
  position: absolute;
  content: "";
  border-bottom: 2px solid #ccc;
  width: 100%;
  top: 20px;
  left: 50%;
  z-index: 2;
}

.stepper-item .step-counter {
  position: relative;
  z-index: 5;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffffff;
  margin-bottom: 6px;
}

.stepper-item.active {
  font-weight: bold;
}

.stepper-item.completed .step-counter {
  background-color: var(--black);
  color: var(--white);
}

.stepper-item.completed::after {
  position: absolute;
  content: "";
  border-bottom: 2px solid #b6b6b6;
  width: 100%;
  top: 20px;
  left: 50%;
  z-index: 3;
}

.stepper-item:first-child::before {
  content: none;
}
.step-name {
  color:var(--white)
}
.stepper-item:last-child::after {
  content: none;
}
</style>
