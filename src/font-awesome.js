import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faFacebookF,
  faInstagram,
  faGithub
} from '@fortawesome/free-brands-svg-icons'

import {
  faArrowLeft,
  faCaretDown,
  faCaretUp,
  faSignOutAlt,
  faUpload,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faArrowLeft,
  faCaretDown,
  faCaretUp,
  faSignOutAlt,
  faUpload,
  faUserCircle
)
library.add(faFacebookF, faInstagram, faGithub)

export default Vue.component('FontAwesomeIcon', FontAwesomeIcon)
