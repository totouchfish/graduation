// 按需引入
import {
  Button,
  ButtonGroup,
  Table,
  Card,
  Menu,
  Row,
  Col,
  Icon,
  Tree,
  Input,
  Select,
  Option,
  Form,
  FormItem,
  Modal,
  MenuItem,
  MenuGroup,
  Submenu,
  Tabs,
  TabPane,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Breadcrumb,
  BreadcrumbItem,
  DatePicker,
  TimePicker,
  Slider,
  Poptip,
  Message,
  Page,
  Upload,
  InputNumber,
  Notice,
  Layout,
  Sider
  // Switch
} from "iview";

const components = {
  Button,
  ButtonGroup,
  Table,
  Card,
  Menu,
  Row,
  Col,
  Icon,
  Input,
  Select,
  Option,
  Form,
  FormItem,
  Modal,
  MenuItem,
  MenuGroup,
  Submenu,
  Tabs,
  TabPane,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Breadcrumb,
  BreadcrumbItem,
  Layout,
  Sider,
  // Switch,
  DatePicker,
  TimePicker,
  Slider,
  Poptip,
  Page,
  Upload,
  InputNumber,
  Tree
};
const install = function (Vue, config = {}) {
  if (install.installed) return;

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });
  // Vue.component('Button', Button);
  // Vue.component('Table', Table);
  Vue.prototype.$Message = Message;
  Vue.prototype.$Poptip = Poptip;
  Vue.prototype.$Notice = Notice;
  Vue.prototype.$Modal = Modal;
};

// auto install
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

const iview = {
  install,
  Button,
  Table
};
export default iview;
