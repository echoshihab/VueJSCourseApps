<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedcomponent('active-goals')">Active Goals</button>
    <button @click="setSelectedcomponent('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->

    <keep-alive>
    <component v-bind:is="selectedComponent"></component>
   </keep-alive>
   
  </div>
</template>

<script>
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
import TheHeader from './components/TheHeader.vue';
// import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components: {
    'the-header': TheHeader,
    // BadgeList, //this can be translated as badge-list or BadgeList
    // UserInfo,
    // CourseGoals,
    ActiveGoals,
    ManageGoals
    },
  data() {
  return {
      selectedComponent: 'active-goals',
      
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedcomponent(cmp) {
      this.selectedComponent = cmp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>