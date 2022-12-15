import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


/* import specific icons */
import { faUserSecret , faPenSquare, faCartShopping, faTrashCan, faRightFromBracket, faHouse, faUserPen, faPenToSquare,faClipboardCheck,faCheck, faFloppyDisk, faXmark,} from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faPenSquare, faCartShopping, faTrashCan, faRightFromBracket,faHouse,faUserPen,faPenToSquare, faClipboardCheck,faCheck,faFloppyDisk, faXmark)

import './assets/style.css';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';



const app = createApp(App);

app.use(createPinia(), VueSweetalert2);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)
.mount("#app");

