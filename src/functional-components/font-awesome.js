import Vue from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faUserCircle, faCaretDown } from "@fortawesome/free-solid-svg-icons";

library.add(faUserCircle, faCaretDown, faFacebookF, faInstagram);

export default Vue.component("FaIcon", FontAwesomeIcon);
