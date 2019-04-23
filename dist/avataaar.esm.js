var AvataaarMetadata = {
  "avatarStyle": {
    "properties": [
      "Circle", "Transparent"
    ]
  },
  "accessoriesType": {
    "properties": [
      "Blank", "Kurt", "Prescription01", "Prescription02", "Round",
      "Sunglasses", "Wayfarers"
    ]
  },
  "clotheType": {
    "properties": [
      "BlazerShirt", "BlazerSweater", "CollarSweater", "GraphicShirt", "Hoodie",
      "Overall", "ShirtCrewNeck", "ShirtScoopNeck", "ShirtVNeck"
    ]
  },
  "clotheColor": {
    "properties": [
      "Black", "Blue01", "Blue02", "Blue03", "Gray01", "Gray02", "Heather", "PastelBlue", 
      "PastelGreen", "PastelOrange", "PastelRed", "PastelYellow", "Pink", "Red", "White"
    ]
  },
  "eyebrowType": {
    "properties": [
      "Angry", "AngryNatural", "Default", "DefaultNatural", "FlatNatural",
      "RaisedExcited", "RaisedExcitedNatural", "SadConcerned",
      "SadConcernedNatural", "UnibrowNatural", "UpDown", "UpDownNatural"
    ]
  },
  "eyeType": {
    "properties": [
      "Close", "Cry", "Default", "Dizzy", "EyeRoll", "Happy", "Hearts", "Side",
      "Squint", "Surprised", "Wink", "WinkWacky"
    ]
  },
  "facialHairColor": {
    "properties": [
      "Auburn", "Black", "Blonde", "BlondeGolden", "Brown", "BrownDark",
      "Platinum", "Red"
    ]
  },
  "facialHairType": {
    "properties": [
      "Blank", "BeardMedium", "BeardLight", "BeardMagestic", "MoustacheFancy",
      "MoustacheMagnum"
    ]
  },
  "graphicType": {
    "properties": [
      "Bat", "Cumbia", "Deer", "Diamond", "Hola", "Pizza", "Resist", "Selena", 
      "Bear", "SkullOutline", "Skull"
    ]
  },
  "hairColor": {
    "properties": [
      "Auburn", "Black", "Blonde", "BlondeGolden", "Brown", "BrownDark",
      "PastelPink", "Platinum", "Red", "SilverGray"
    ]
  },
  "mouthType": {
    "properties": [
      "Concerned", "Default", "Disbelief", "Eating", "Grimace", "Sad",
      "ScreamOpen", "Serious", "Smile", "Tongue", "Twinkle", "Vomit"
    ]
  },
  "skinColor": {
    "properties": [
      "Tanned", "Yellow", "Pale", "Light", "Brown", "DarkBrown", "Black"
    ]
  },
  "topType": {
    "properties": [
      "NoHair", "Eyepatch", "Hat", "Hijab", "Turban", "WinterHat1",
      "WinterHat2", "WinterHat3", "WinterHat4", "LongHairBigHair",
      "LongHairBob", "LongHairBun", "LongHairCurly", "LongHairCurvy",
      "LongHairDreads", "LongHairFrida", "LongHairFro", "LongHairFroBand",
      "LongHairNotTooLong", "LongHairShavedSides", "LongHairMiaWallace",
      "LongHairStraight", "LongHairStraight2", "LongHairStraightStrand",
      "ShortHairDreads01", "ShortHairDreads02", "ShortHairFrizzle",
      "ShortHairShaggyMullet", "ShortHairShortCurly", "ShortHairShortFlat",
      "ShortHairShortRound", "ShortHairShortWaved", "ShortHairSides",
      "ShortHairTheCaesar", "ShortHairTheCaesarSidePart"
    ]
  }
};

//

var script = {
  props: {
    avatarStyle: String,
    accessoriesType: String,
    clotheType: String,
    clotheColor: String,
    eyebrowType: String,
    eyeType: String,
    facialHairColor: String,
    facialHairType: String,
    graphicType: String,
    hairColor: String,
    mouthType: String,
    skinColor: String,
    topType: String
  },
  computed: {
    queryString: function queryString() {
      var this$1 = this;

      var queryString =
        Object.keys(AvataaarMetadata)
          .filter(function (prop) { return this$1[prop]; })
          .map(function (prop) { return (prop + "=" + (this$1[prop])); })
          .join('&');
      if (queryString.length) {
        queryString = "?" + queryString;
      }
      return queryString
    },
    avatarURL: function avatarURL() {
      return ("https://avataaars.io" + (this.queryString))
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("img", { attrs: { src: _vm.avatarURL } })
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var Avataaar = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

// Declare install function executed by Vue.use()
function install(Vue) {
	if (install.installed) { return }
	install.installed = true;
	Vue.component('Avataaar', Avataaar);
}

// Create module definition for Vue.use()
var plugin = {
	install: install
};

// Auto-install when vue is found (eg. in browser via <script> tag)
var GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

export default Avataaar;
export { install };
