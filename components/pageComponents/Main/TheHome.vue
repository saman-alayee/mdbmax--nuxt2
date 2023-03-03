<template>
  <div>
    <div
      class="image-container"
      :style="{
        'background-image': `url(${require('@/assets/images/BackgroundImage.jpg')})`,
      }"
    >
      <div class="text-container">
        <h1>
          grab up to 50% off on <br />
          selected headphone
        </h1>
        <baseButton class="mt-4" text="Buy Now" color="var(--white)" />
      </div>
    </div>
    <div class="container">
      <baseChip
        text="Filter Product"
        first-item="Time"
        third-item="Price"
        second-item="Popular"
      />
      <h2>New Product</h2>
      <div class="row">
        <div class="col-lg-3 mt-4" v-for="card in cards" :key="card.title">
          <productCard
            :title="card.title"
            :describe="card.describe"
            :image="card.image"
            :price="card.price"
          />
          <productButton text="Add to Cart" />
          <baseButton text="More" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import baseButton from "../../UI/Button/baseButton.vue";
import productButton from "../../UI/Button/productButton.vue";
import baseChip from "../../UI/Chips/baseChip.vue";
import productCard from "../../UI/Cards/productCard.vue";
export default {
  name: "TheHome",
  components: {
    baseButton,
    productCard,
    productButton,
    baseChip,
  },
  data() {
    return {
      cards: [
        {
          title: "Lorem ipsum dolor sit",
          price: "250$",
          describe: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
          image:
            "https://www.cnet.com/a/img/resize/290a500ee159b4bbfea874249f3dd7dc7ec1b640/hub/2022/08/19/ff5be1ca-b102-485c-8eb9-4ad229bd3dea/sennheiser-momentum-4-wireless-yellow-background.png?auto=webp&fit=crop&height=528&width=940",
        },
        {
          title: "Lorem ipsum dolor sit",
          price: "250$",
          describe: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
          image:
            "https://www.cnet.com/a/img/resize/290a500ee159b4bbfea874249f3dd7dc7ec1b640/hub/2022/08/19/ff5be1ca-b102-485c-8eb9-4ad229bd3dea/sennheiser-momentum-4-wireless-yellow-background.png?auto=webp&fit=crop&height=528&width=940",
        },
        {
          title: "Lorem ipsum dolor sit",
          price: "250$",
          describe: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
          image:
            "https://www.cnet.com/a/img/resize/290a500ee159b4bbfea874249f3dd7dc7ec1b640/hub/2022/08/19/ff5be1ca-b102-485c-8eb9-4ad229bd3dea/sennheiser-momentum-4-wireless-yellow-background.png?auto=webp&fit=crop&height=528&width=940",
        },
        {
          title: "Lorem ipsum dolor sit",
          price: "250$",
          describe: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
          image:
            "https://www.cnet.com/a/img/resize/290a500ee159b4bbfea874249f3dd7dc7ec1b640/hub/2022/08/19/ff5be1ca-b102-485c-8eb9-4ad229bd3dea/sennheiser-momentum-4-wireless-yellow-background.png?auto=webp&fit=crop&height=528&width=940",
        },
        {
          title: "Lorem ipsum dolor sit",
          price: "250$",
          describe: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
          image:
            "https://www.cnet.com/a/img/resize/290a500ee159b4bbfea874249f3dd7dc7ec1b640/hub/2022/08/19/ff5be1ca-b102-485c-8eb9-4ad229bd3dea/sennheiser-momentum-4-wireless-yellow-background.png?auto=webp&fit=crop&height=528&width=940",
        },
        {
          title: "Lorem ipsum dolor sit",
          price: "250$",
          describe: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
          image:
            "https://www.cnet.com/a/img/resize/290a500ee159b4bbfea874249f3dd7dc7ec1b640/hub/2022/08/19/ff5be1ca-b102-485c-8eb9-4ad229bd3dea/sennheiser-momentum-4-wireless-yellow-background.png?auto=webp&fit=crop&height=528&width=940",
        },
        {
          title: "Lorem ipsum dolor sit",
          price: "250$",
          describe: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
          image:
            "https://cryptopotato.com/wp-content/uploads/2021/04/xrpusd-apr5.png",
        },
        {
          title: "Lorem ipsum dolor sit",
          price: "250$",
          describe: "Lorem ipsum dolor sit Lorem ipsum dolor sit",
          image:
            "https://v2.cimg.co/news/99306/246426/responsive-images/impt-2___media_library_original_1827_877.jpg",
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
</style>
