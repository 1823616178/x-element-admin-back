<template>
  <div class="container_color">
    <div>
      <navbar></navbar>
      <div class="flex-cout">
        <div class="cont_lef">
          <Siderbar></Siderbar>
        </div>
        <div class="cont_e_pp">
          <!--          <div class="cont_c_top" v-if="hasThree"></div>-->
          <div class="cont_rit">
            <AppMain></AppMain>
          </div>
        </div>
      </div>
    </div>
    <!--<div>
          <Footer></Footer>
        </div>-->
  </div>
</template>

<script>
import Siderbar from '@/layout_back/componse/Sidebar'
import AppMain from "@/layout_back/componse/AppMain";
import Navbar from "@/layout_back/componse/Navbar";
import Footer from "@/layout_back/componse/Footer";

export default {
  name: "index",
  components: {Navbar, AppMain, Siderbar, Footer},
  computed: {
    hasThree() {
      return this.$store.getters.isThree
    }
  }
}
</script>

<style lang="scss" scoped>
.container_color {
  background: #f5f6f7;
  //height: 100%;
}


.flex-cout {
  display: flex;
  align-items: flex-start;

  .cont_e_pp {
    min-height: calc(100vh - 100px);
    min-width: calc(100% - 270px);
    //margin: 15px 20px 0 25px;
    margin: 20px;

    .cont_rit {
      background: white;
      //padding: 20px 15px;
    }
  }

}

.cont_c_top {
  height: 52px;
  line-height: 52px;
}

</style>
