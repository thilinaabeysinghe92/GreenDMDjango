/* jscow - Javascript Component Framework - jscow-fieldset-1.0.0 - Mario Linz - http://www.jscow.de */jsCow.res.components.fieldset=function(){};jsCow.res.components.fieldset.prototype={init:function(){return this},setDefaultMVC:function(){this.setModel(jsCow.res.model.fieldset);this.setView(jsCow.res.view.fieldset);this.setController(jsCow.res.controller.fieldset);return this},setTitle:function(a){this.globalEvents.trigger("setTitle",{legend:a},this);return this},disabled:function(){this.globalEvents.trigger("disabled",{},this);return this},enabled:function(){this.globalEvents.trigger("enabled",{},this);return this}};jsCow.res.model.fieldset=function(){this.type="jsCow.res.model.fieldset";this.config={globalDisabled:false,enabled:true,lastLegend:"",legend:""}};jsCow.res.model.fieldset.prototype={init:function(){this.globalEvents.trigger("viewInit",this.getConfig(),this.getCmp())},setTitle:function(a){if(this.isEnabled()){this.setConfig({lastLegend:this.getConfig("legend"),legend:a.data.legend});this.globalEvents.trigger("viewUpdate",this.getConfig(),this.getCmp())}return this}};jsCow.res.view.fieldset=function(){this.execInit=false;this.type="jsCow.res.view.fieldset";this.dom={};this.dom.main=$("<fieldset/>").addClass("jscow-fieldset");this.dom.legend=$("<legend/>").addClass("jscow-fieldset-legend").appendTo(this.dom.main);this.dom.content=$("<div/>").addClass("jscow-fieldset-content clearfix").appendTo(this.dom.main)};jsCow.res.view.fieldset.prototype={init:function(b){var a=b.data;this.dom.legend.html(a.legend);this.update(b)},update:function(a){var a=a.data;if(a){if(!a.enabled||a.globalDisabled){this.dom.main.addClass("jscow-fieldset-disabled").removeClass("jscow-fieldset")}else{this.dom.main.addClass("jscow-fieldset").removeClass("jscow-fieldset-disabled");this.dom.legend.html(a.legend);if(a.hide){this.dom.main.addClass("jscow-hide")}else{this.dom.main.removeClass("jscow-hide")}}}return this}};jsCow.res.controller.fieldset=function(){this.type="jsCow.res.controller.fieldset"};jsCow.res.controller.fieldset.prototype={init:function(){},handleSetTitle:function(a){if(this.isMethodExists(this.getModel().setTitle)){this.getModel().setTitle(a)}return this}};