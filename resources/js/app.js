import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import {ZiggyVue} from 'ziggy'
import '../css/app.css'
import '@fortawesome/fontawesome-free/css/all.css'

//prime vue
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/tailwind-light/theme.css'
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';
import Tooltip from 'primevue/tooltip';
import Sidebar from 'primevue/sidebar'
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import Dropdown from 'primevue/dropdown';
import InputNumber from 'primevue/inputnumber';
import Calendar from 'primevue/calendar';
import RadioButton from 'primevue/radiobutton';
import InlineMessage from 'primevue/inlinemessage';
import Image from 'primevue/image';
import Dialog from 'primevue/dialog';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row'; 
import Password from 'primevue/password';
import Textarea from 'primevue/textarea';
import FileUpload from 'primevue/fileupload';
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import Carousel from 'primevue/carousel';
import Checkbox from 'primevue/checkbox';
import ProgressSpinner from 'primevue/progressspinner';

//flowbite
// import { 
//   initAccordions, 
//   initCarousels, 
//   initCollapses, 
//   initDials, 
//   initDismisses, 
//   initDrawers, 
//   initDropdowns, 
//   initModals, 
//   initPopovers, 
//   initTabs, 
//   initTooltips } from 'flowbite'
  import { initFlowbite } from 'flowbite'


//tailwind elements
const tailElem = async () => {
  await import("tw-elements");
};






createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    return pages[`./Pages/${name}.vue`]
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin) 
      .use(ZiggyVue)
      .use(tailElem)
      .use(initFlowbite)
      .use(PrimeVue, {ripple: true})
      .use(ToastService)
      .component('Divider',Divider)
      .component('Card', Card)
      .component('FileUpload',FileUpload)
      .component('Textarea',Textarea)
      .component('Dialog',Dialog)
      .component('Column',Column)
      .component('ColumnGroup',ColumnGroup)
      .component('Row',Row)
      .component('DataTable',DataTable)
      .component('Image', Image)
      .component('InlineMessage',InlineMessage)
      .component('RadioButton', RadioButton)
      .component('InputText', InputText)
      .component('Calendar', Calendar)
      .component('InputNumber',InputNumber)
      .component('Dropdown', Dropdown)
      .component('Toast', Toast)
      .component('Avatar', Avatar)
      .component('Menu',Menu)
      .component('Sidebar', Sidebar)
      .component('Button', Button)
      .component('InputMask',InputMask)
      .component('Password',Password)
      .component('Carousel',Carousel)
      .directive('tooltip', Tooltip)
      .component('Checkbox',Checkbox)
      .component('ProgressSpinner',ProgressSpinner)
      .mount(el)
  },
  
})
