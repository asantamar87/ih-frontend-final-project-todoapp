import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret , faPenSquare, faCartShopping, faTrashCan, faRightFromBracket, faHouse, faUserPen, faPenToSquare,faClipboardCheck,faCheck, faFloppyDisk, faXmark} from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faPenSquare, faCartShopping, faTrashCan, faRightFromBracket,faHouse,faUserPen,faPenToSquare, faClipboardCheck,faCheck,faFloppyDisk, faXmark)

import './assets/style.css';



const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon)
.mount("#app");

