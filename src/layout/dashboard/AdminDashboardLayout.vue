<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/admin/dashboard" :name="$t('sidebar.dashboard')" />
        <sidebar-link to="/admin/listApproval" :name="$t('list approvals')"/>
         <sidebar-link to="/admin/dropship" :name="$t('dropships history')"/>
        <!-- <sidebar-link to="/history" :name="$t('history')" /> -->
        <!-- <sidebar-link to="/notifications" :name="$t('sidebar.notifications')"/> -->
        <sidebar-link to="/admin/profile" :name="$t('Profile')" />
        <!-- <sidebar-link to="/typography" :name="$t('sidebar.typography')"/> -->
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
