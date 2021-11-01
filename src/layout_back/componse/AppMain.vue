<template>
  <div>
    <router-view :key="key" v-slot="{Component}">
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="Component"/>
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {computed} from "vue";
import {useRoute} from 'vue-router'

export default {
  setup() {
    name = "AppMain"
    const store = useStore()
    const route = useRoute()
    const cachedViews = computed(() => {
      return store.getters.cachedViews
    })
    const key = computed(() => {
      return route.fullPath
    })
    return {
      cachedViews, key
    }
  },
}
</script>

<style scoped lang="scss">
</style>
