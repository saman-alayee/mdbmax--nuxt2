<template>
  <div>
    <div class="stepper-wrapper mt-4 w-100">
      <div class="stepper-item completed">
        <nuxt-link to="/pricing"><div class="step-counter">1</div></nuxt-link>
        <div class="step-name">Subscription plan</div>
      </div>
      <div class="stepper-item completed">
        <div class="step-counter">2</div>
        <div class="step-name">Subscription duration</div>
      </div>
    </div>
    <BaseCard>
      <template slot="content">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi facere expedita eaque ratione. Id dolorem cupiditate
              </p>
            </div>
            <div class="d-flex flex-column justify-content-center">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                  checked
                />
                <label class="form-check-label" for="exampleRadios1">
                  1 month subscription:$5.00/day
                </label>
              </div>
              <div class="form-check mt-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="option2"
                />
                <label class="form-check-label" for="exampleRadios2">
                  3 month subscription:$5.00/day
                </label>
              </div>
              <div class="form-check mt-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios3"
                  value="option3"
                />
                <label class="form-check-label" for="exampleRadios3">
                  6 month subscription:$5.00/day
                </label>
              </div>
              <div class="form-check mt-2">
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios4"
                  value="option4"
                />
                <label class="form-check-label" for="exampleRadios3">
                  12 month subscription:$5.00/day
                </label>
              </div>
            </div>
            <div class="btn-end">
              <nuxt-link to="/pricing">
                <base-button
                  class=""
                  backgroundColor="var(--dark--green)"
                  textColor="var(--white)"
                  text="Back"
              /></nuxt-link>
              <base-button
                class=""
                backgroundColor="var(--yellow)"
                textColor="var(--white)"
                outline="true"
                text="Continue"
              />
            </div>
          </div>
          <div class="col-md-1 verticalLine"></div>

          <div class="col-md-5 col-sm-12 mobile-size">
            <div class="d-flex">
              <div class="p-2">
                <img
                  src="https://filecache.mediaroom.com/mr5mr_paypal/181664/PayPal_Thumbnail.jpg"
                  width="60px"
                  alt=""
                />
              </div>
              <div class="p-2">
                <img
                  src="https://logos-world.net/wp-content/uploads/2020/04/Visa-Emblem.jpg"
                  width="70px"
                  alt=""
                />
              </div>
              <div class="p-2">
                <img
                  src="https://1000logos.net/wp-content/uploads/2017/03/MasterCard-Logo-1979.png"
                  width="70px"
                  alt=""
                />
              </div>
              <div class="p-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png"
                  width="70px"
                  height="40px"
                  alt=""
                />
              </div>
            </div>
            <hr class="bg-light" />
            <div>
              <p>&#10003; Access to Full One Day</p>
              <p>&#10003; Cancel Anytime</p>
              <p>&#10003; Unlimited movies and TV shows</p>
              <p>&#10003; Resoulution Access HD (720)</p>
            </div>
            <hr class="bg-light" />
            <div class="d-flex protect-card">
              <div>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/009/664/637/non_2x/shield-icon-transparent-free-png.png"
                  width="70px"
                  alt=""
                />
              </div>
              <div>
                <h6>SSL SECURE PAYMENT</h6>
                <p>Your information is protected by 256-bit SSL encryption</p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </BaseCard>
  </div>
</template>

<script>
import BaseCard from "../../UI/Cards/baseCard.vue";
import BaseButton from "../../UI/Button/baseButton.vue";

export default {
  components: { BaseCard, BaseButton },
};
</script>

<style scoped>
input[type="radio"] {
  accent-color: var(--yellow);
}
.verticalLine {
  border-left: 1px solid #9c9c9c;
}
.protect-card {
  border: 1px solid gray;
  border-radius: 8px;
  padding: 16px;
}
.btn-end {
  display: flex;
  flex-direction: row;
  align-items: end;
  margin-top: 15rem;
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
}
  @media (max-width: 768px) {
    .mobile-size {
      display: none;
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
  color: var(--white);
}
.stepper-item:last-child::after {
  content: none;
}
label{
    font-size: 16px;
}
</style>
