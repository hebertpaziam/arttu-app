<template>
  <div class="component-menu">
    <button v-if="!isSignedIn" type="button" class="sign-in" @click="signInWithGithub">
      <FontAwesomeIcon class="icon" :icon="['fab', 'github']" />Entre
    </button>

    <div v-else class="authenticated" :class="{'-menu-opened': menuOpened === true}">
      <button type="button" class="menu-trigger" @click="toggleMenu">
        <div class="avatar">
          <FontAwesomeIcon icon="user-circle" class="icon" />
          <span class="picture" :style="{backgroundImage: `url(${getUserAvatar})`}" />
        </div>

        <div class="greetings">
          <span class="username" :title="getUserFirstName">Olá, {{ getUserFirstName }}</span>
          <FontAwesomeIcon v-if="menuOpened" class="icon" icon="caret-up" />
          <FontAwesomeIcon v-else class="icon" icon="caret-down" />
        </div>
      </button>
      <div class="content" @click.capture="toggleMenu">
        <router-link to="/upload" class="action -upload">
          <FontAwesomeIcon icon="upload" class="icon" />Upload
        </router-link>
        <button type="button" class="action -sign-out" @click="signOut">
          <FontAwesomeIcon icon="sign-out-alt" class="icon" />Sair
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import FontAwesomeIcon from '@/font-awesome'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Menu',
  components: {
    FontAwesomeIcon
  },
  data: () => ({
    menuOpened: false
  }),
  computed: {
    ...mapGetters('AuthModule', [
      'isSignedIn',
      'getUserFirstName',
      'getUserAvatar'
    ])
  },
  methods: {
    toggleMenu() {
      this.menuOpened = !this.menuOpened
    },
    ...mapActions('AuthModule', ['signInWithGithub', 'signOut'])
  }
}
</script>

  <style lang="scss">
.component-menu {
  > .sign-in {
    width: 150px;
    @include btn-config($primary-color);

    > .icon {
      margin-right: 5px;
    }
  }
  > .authenticated {
    @include display-flex(wrap, column, center, center);
    background-color: transparent;
    border-radius: 4px;
    border: transparent 1px solid;
    transition: all 100ms linear;

    > .menu-trigger {
      height: 50px;
      background: none;
      border: none;
      border-bottom: inherit;

      > .avatar {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        width: 30px;
        height: 30px;
        font-size: 30px;

        > .picture {
          @include absolute-fulled-up;
          @include bg-cover-center;
          border-radius: 50%;
        }
      }
      > .greetings {
        display: inline-block;
        vertical-align: middle;
        margin-left: 10px;
        font-weight: 700;
        > .username {
          display: inline-block;
          max-width: 200px;
          margin-right: 5px;
          @include whitespace-nowrap;
        }
      }
    }
    > .content {
      max-height: 0px;
      overflow: hidden;
      opacity: 0;
      border: none;
      transition: all 100ms linear;

      > .action {
        width: 100%;
        display: flex;
        text-decoration: none;
        @include btn-config(transparent);
        > .icon {
          margin-right: 5px;
        }
      }
    }
    &.-menu-opened {
      background-color: #ffffff;
      border: #999 1px solid;
      > .content {
        max-height: 100px;
        opacity: 1;
      }
    }
  }
}
</style>
