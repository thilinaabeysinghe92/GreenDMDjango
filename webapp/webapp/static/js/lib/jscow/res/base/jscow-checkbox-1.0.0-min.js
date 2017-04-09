/* jscow - Javascript Component Framework - jscow-checkbox-1.0.0 - Mario Linz - http://www.jscow.de */jsCow.res.components.checkbox=function(){};jsCow.res.components.checkbox.prototype={init:function(){return this},setDefaultMVC:function(){this.setModel(jsCow.res.model.checkbox);this.setView(jsCow.res.view.checkbox);this.setController(jsCow.res.controller.checkbox);return this},click:function(){this.globalEvents.trigger("click",{},this);return this},checked:function(){this.globalEvents.trigger("click",{},this);return this},setValue:function(a){this.globalEvents.trigger("setValue",{value:a},this);return this},getValue:function(){return this.getModel().getConfig("value")},setLabel:function(a){this.globalEvents.trigger("setLabel",{label:a},this);return this}};jsCow.res.model.checkbox=function(){this.type="jsCow.res.model.checkbox";this.config={enabled:true,checked:false,checkboxGroup:false,value:false,label:false}};jsCow.res.model.checkbox.prototype={init:function(){this.globalEvents.trigger("viewInit",this.getConfig(),this.getCmp())},click:function(){if(this.isEnabled()){if(this.getConfig("checked")){this.setConfig({checked:false})}else{this.setConfig({checked:true})}this.globalEvents.trigger("viewUpdate",this.getConfig(),this.getCmp())}return this},checked:function(){this.setConfig({checked:false});this.click();return this},setValue:function(a){this.setConfig({value:a.data.value});return this},setLabel:function(a){this.setConfig({label:a.data.label});this.globalEvents.trigger("viewUpdate",this.getConfig(),this.getCmp());return this}};jsCow.res.view.checkbox=function(){this.execInit=false;this.type="jsCow.res.view.checkbox";this.dom={};this.dom.main=$("<div/>").addClass("jscow-form-checkbox jscow-float-left jscow-cursor");this.dom.box=$("<div/>").addClass("jscow-form-checkbox-box jscow-float-left").appendTo(this.dom.main);this.dom.check=$("<div/>").addClass("jscow-form-checkbox-check").appendTo(this.dom.box);this.dom.label=$("<div/>").addClass("jscow-form-checkbox-label jscow-float-left")};jsCow.res.view.checkbox.prototype={init:function(a){this.dom.main.click((function(b){return function(){b.click()}})(this));this.update(a)},update:function(a){var a=a.data;if(a){if(!a.enabled||a.globalDisabled){this.dom.main.addClass("jscow-form-checkbox-disabled").removeClass("jscow-form-checkbox jscow-cursor")}else{this.dom.main.addClass("jscow-form-checkbox jscow-cursor").removeClass("jscow-form-checkbox-disabled");if(a.checked){this.dom.check.css({display:"block"})}else{this.dom.check.css({display:"none"})}if(a.label){this.dom.label.html(a.label).css({display:"block"});this.dom.box.after(this.dom.label)}else{this.dom.label.html(a.label).css({display:"none"})}if(a.hide){this.dom.main.addClass("jscow-hide")}else{this.dom.main.removeClass("jscow-hide")}}}return this},click:function(){this.globalEvents.trigger("click",{},this.getCmp());return this},setFocus:function(a){this.dom.main.addClass("jscow-focus")}};jsCow.res.controller.checkbox=function(){this.type="jsCow.res.controller.checkbox"};jsCow.res.controller.checkbox.prototype={init:function(){},handleClick:function(a){if(this.isMethodExists(this.getModel().click)){this.getModel().click(a)}return this},handleChecked:function(a){if(this.isMethodExists(this.getModel().checked)){this.getModel().checked(a)}return this},handleSetValue:function(a){if(this.isMethodExists(this.getModel().setValue)){this.getModel().setValue(a)}return this},handleSetLabel:function(a){if(this.isMethodExists(this.getModel().setLabel)){this.getModel().setLabel(a)}return this}};