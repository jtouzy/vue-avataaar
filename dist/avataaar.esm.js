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
    eyebrowType: String,
    eyeType: String,
    facialHairColor: String,
    facialHairType: String,
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
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    // For security concerns, we use only base name in production mode.
    component.__file = "/source-cache/github/vue-avataaar/src/Avataaar.vue";

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    return component
  }
  /* style inject */
  
  /* style inject SSR */
  

  
  var Avataaar = __vue_normalize__(
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
