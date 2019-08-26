<template>
  <div class="component-menu">
    <button v-if="isAuthenticated" type="button" class="authenticated">
      <div class="avatar">
        <FaIcon icon="user-circle" class="icon" />
        <span class="picture" :style="{ backgroundImage: `url(${user.avatar_url})` }"></span>
      </div>

      <div class="greetings">
        <span class="username">Olá, {{ getUserFirstName }}</span>
        <FaIcon icon="caret-down" />
      </div>
    </button>
    <button v-else type="button" class="not-authenticated" @click="requestAuthorization">Entre</button>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import FaIcon from "@/functional-components/font-awesome";

export default {
  name: "Menu",
  components: {
    FaIcon
  },
  computed: {
    ...mapState("AuthModule", ["user"]),
    ...mapGetters("AuthModule", ["isAuthenticated", "getUserFirstName"])
  },
  methods: {
    ...mapActions("AuthModule", ["requestAuthorization"])
  }
};
</script>

<style lang="scss">
.component-menu {
  > .authenticated {
    display: flex;
    align-items: center;
    justify-content: center;

    background: none;
    border: none;

    > .avatar {
      position: relative;
      width: 30px;
      height: 30px;
      font-size: 30px;

      > .icon {
        vertical-align: top;
      }

      > .picture {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
    > .greetings {
      display: flex;
      max-width: 200px;
      margin-left: 10px;
      font-weight: 700;
      > .username {
        overflow: hidden;
        text-overflow: ellipsis;
        text-transform: uppercase;
        white-space: nowrap;
        margin-right: 5px;
      }
    }
  }
  > .not-authenticated {
    width: 150px;
    line-height: 21px;
    margin: 5px auto;
    padding: 4px 20.8px;
    color: #000;
    background-color: $primary-color;
    font-weight: 700;
    font-size: 1.1rem;
    text-transform: uppercase;
    border: none;
    border-radius: 30px;
    transition: all 150ms ease-in-out;

    &:hover {
      background-color: $primary-color-lighten;
    }
  }
}
</style>
