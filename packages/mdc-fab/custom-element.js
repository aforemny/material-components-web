import { MDCRipple } from "@material/ripple/component";
import {
  installClassNameChangeHook,
  uninstallClassNameChangeHook,
} from "@material/utils/className";

class MdcFab extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    installClassNameChangeHook.call(this);
    this.ripple_ = new MDCRipple(this);
  }

  disconnectedCallback() {
    this.ripple_.destroy();
    uninstallClassNameChangeHook.call(this);
  }
};

customElements.define("mdc-fab", MdcFab);
