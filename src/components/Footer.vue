<template>
  <div class="component-footer">
    <img class="logo" src="/images/logos/logo_full.png " />
    <div class="content">
      <dl class="block">
        <dt class="header">Legal</dt>
        <dd class="item">
          <a href="javascript:;" target="_blank" rel="noopener noreferrer">Politicas de Uso</a>
        </dd>
        <dd class="item">
          <a href="javascript:;" target="_blank" rel="noopener noreferrer">Politicas de Privacidade</a>
        </dd>
        <dd class="item">
          <a href="javascript:;" target="_blank" rel="noopener noreferrer">Politicas de Cookies</a>
        </dd>
        <dd class="item">
          <a href="javascript:;" target="_blank" rel="noopener noreferrer">Copyright</a>
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
          <a href="javascript:;" target="_blank" rel="noopener noreferrer">Quem Somos</a>
        </dd>
        <dd class="item">
          <a href="javascript:;" target="_blank" rel="noopener noreferrer">FAQ</a>
        </dd>
      </dl>

      <dl class="block">
        <dt class="header">Social</dt>
        <dd class="item">
          <a class="social-brand" href="javascript:;" target="_blank" rel="noopener noreferrer">
            <fa-icon :icon="['fab', 'facebook-f']" />
          </a>
          <a class="social-brand" href="javascript:;" target="_blank" rel="noopener noreferrer">
            <fa-icon :icon="['fab', 'instagram']" />
          </a>
        </dd>
      </dl>
    </div>

    <div class="copyright">&copy; 2019 Arttu</div>
    <div class="bg-pattern"></div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style  lang="scss" >
.component-footer {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
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
    background: radial-gradient(circle at center, #999 15%, transparent 15%),
      transparent;
    background-size: 10px;
  }

  > .content {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
    width: 100%;
    max-width: 1366px;
    margin: auto auto 50px auto;

    @media only screen and (max-width: 1200px) {
      width: 360px;
    }

    > .block {
      display: inline-block;
      width: 250px;
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
          display: flex;
          flex-wrap: wrap;
          > .field,
          > .action {
            width: 100%;
            height: 30px;
            margin: 5px auto;
            padding: 5px 10px;
            font-weight: 700;
            font-size: 1rem;
            border: none;
            border-radius: 30px;
          }

          > .field {
            color: #fff;
            background-color: #999;
            &::placeholder {
              color: #fff;
            }
          }
          > .action {
            color: #000;
            background-color: $primary-color;
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
  }
}
</style>