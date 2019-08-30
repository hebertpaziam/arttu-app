<template>
  <div class="component-footer">
    <img class="logo" src="/images/logos/logo_full.png " />
    <div class="content">
      <dl class="block">
        <dt class="header">Legal</dt>
        <dd class="item">
          <a
            href="https://arttu.co/politicas"
            target="_blank"
            rel="noopener noreferrer"
          >Politicas de Uso</a>
        </dd>
        <dd class="item">
          <a
            href="https://arttu.co/privacidade"
            target="_blank"
            rel="noopener noreferrer"
          >Politicas de Privacidade</a>
        </dd>
        <dd class="item">
          <a
            href="https://arttu.co/politicas"
            target="_blank"
            rel="noopener noreferrer"
          >Politicas de Cookies</a>
        </dd>
        <dd class="item">
          <a href="https://arttu.co/copy" target="_blank" rel="noopener noreferrer">Copyright</a>
        </dd>
      </dl>

      <dl class="block -small">
        <dt class="header">Contato</dt>
        <dd class="item">
          <a href="mailto:hello@arttu.co" target="_blank" rel="noopener noreferrer">hello@arttu.co</a>
        </dd>
      </dl>

      <dl class="block">
        <dt class="header">
          Fique ligado nas novidades,
          <br />promoções e mais!
        </dt>
        <dd class="item">
          <form>
            <input type="email" class="field" placeholder="Email" />
            <button type="button" class="action">QUERO RECEBER EMAILS!</button>
          </form>
        </dd>
      </dl>

      <dl class="block -small">
        <dt class="header">Arttu</dt>
        <dd class="item">
          <a href="https://arttu.co/sobre" target="_blank" rel="noopener noreferrer">Quem Somos</a>
        </dd>
        <dd class="item">
          <a href="javascript:;" target="_blank" rel="noopener noreferrer">FAQ</a>
        </dd>
      </dl>

      <dl class="block">
        <dt class="header">Social</dt>
        <dd class="item">
          <a
            class="social-brand"
            href="https://facebook.com/therealarttu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon :icon="['fab', 'facebook-f']" />
          </a>
          <a
            class="social-brand"
            href="https://www.instagram.com/therealarttu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon :icon="['fab', 'instagram']" />
          </a>
        </dd>
      </dl>
    </div>

    <div class="copyright">&copy; 2019 Arttu</div>
    <div class="bg-pattern" />
  </div>
</template>

<script>
import FontAwesomeIcon from '@/font-awesome'
export default {
  name: 'Footer',
  components: {
    FontAwesomeIcon
  }
}
</script>

<style  lang="scss" >
.component-footer {
  @include display-flex(nowrap, column, center, center);
  color: #fff;
  background-color: #000;

  > .logo {
    width: 120px;
    height: auto;
    margin: 50px auto;
  }

  > .copyright {
    font-size: 1rem;
    margin: auto auto 0px auto;
  }

  > .bg-pattern {
    width: 95%;
    height: 20px;
    margin: 40px auto 20px auto;
    @include bg-pattern(#999, 15%, 15%, 10px);
  }

  > .content {
    @include display-flex(wrap, row, flex-start, space-between);
    width: 100%;
    max-width: 1366px;
    margin: auto auto 50px auto;

    > .block {
      display: inline-block;
      width: auto;
      max-width: 250px;
      min-width: 173px;
      font-size: 1.3rem;
      margin: 20px;
      &.-small {
        width: 100px;
      }
      > .header {
        font-weight: 700;
        margin-bottom: 20px;
      }
      > .item {
        margin: auto;
        color: #999;
        font-size: 1.1rem;
        margin: 7.5px auto;
        > a {
          color: inherit;
          text-decoration: none;
        }

        form {
          @include display-flex(wrap, row, flex-start, flex-start);

          > .field,
          > .action {
            width: 100%;
            height: 30px;
            line-height: 21px;
            margin: 5px auto;
            border: none;
            border-radius: 30px;
            transition: all 150ms ease-in-out;
          }

          > .field {
            padding: 0px 10px;
            color: #fff;
            font-size: 1rem;
            background-color: #999;
            &::placeholder {
              color: #fff;
            }
          }
          > .action {
            @include btn-config($primary-color);
          }
        }

        > .social-brand {
          display: inline-block;
          width: 30px;
          height: 30px;
          line-height: 31px;
          padding-left: 1px;
          margin: auto 5px;
          text-align: center;
          color: #000;
          font-size: 1.6rem;
          border-radius: 50%;
          background-color: #ddd;
        }
      }
    }

    @media only screen and (max-width: 1200px) {
      width: 360px;
      justify-content: center;
      > .block {
        text-align: center;
        width: 100%;
      }
    }
  }
}
</style>
