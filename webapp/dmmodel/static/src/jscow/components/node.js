
jsCow.res.components.node = function() { };
jsCow.res.components.node.prototype = {

	init: function() {
		
		this.addController(jsCow.res.controller.node);
		this.addModel(jsCow.res.model.node);
		this.addView(jsCow.res.view.node);
		
		return this;
	},
	
	title: function(title) {
		
		if (typeof title !== 'undefined' && typeof title === 'string') {
			this.trigger('title', {
				title: title
			});
		}
		
		return this;
	},
	
	inputs: function(params) {

		if (typeof params !== 'undefined' && typeof params === 'string') {
			this.trigger('inputs', {
				inputs: params
			});
		}
		
		return this;
	},
	
	outputs: function(params) {
		
		if (typeof params !== 'undefined' && typeof params === 'string') {
			this.trigger('inputs', {
				outputs: params
			});
		}
		
		return this;
	},
	
	addInPorts: function(ports) {
		
		if (typeof options !== 'undefined' && typeof options instanceof Array) {
			this.trigger('addInPorts', {
				ports: ports
			});
		}
		
		return this;
	}

};

jsCow.res.model.node = function() {
	
	this.data = {
		enabled: true,
		visible: true,
		title: "",
		pos: {
			left: null,
			top: null
		},
		inputs: [],
		outputs: [],
		config: {},
		preview: {}
	};
	
};
jsCow.res.model.node.prototype = {

	init: function() {
		this.trigger("model.ready", this.data);
	}
	
};

jsCow.res.view.node = function() {
	
	this.dom = {};
	this.dom.main = $('<div/>').addClass('jsc-node clearfix');
	this.dom.content = $('<div/>').addClass('jsc-node-content clearfix').appendTo(this.dom.main);
	
	// Title with arrow
	this.dom.titlebar = $('<div/>').addClass('jsc-node-titlebar');
	this.dom.title = $('<span/>').appendTo( this.dom.titlebar );
	this.dom.remove = $('<i/>').addClass('jsc-node-remove fa fa-times').appendTo( this.dom.titlebar );
	this.dom.main.prepend( this.dom.titlebar );

	// Out
	this.dom.outputs = $('<div/>').addClass('jsc-node-outputs').appendTo(this.dom.content);
	// Preview
	this.dom.preview = $('<div/>').addClass('jsc-node-preview').appendTo(this.dom.content);
	// Config
	this.dom.config = $('<div/>').addClass('jsc-node-config').appendTo(this.dom.content);
	// In
	this.dom.inputs = $('<div/>').addClass('jsc-node-inputs').appendTo(this.dom.content);

	//
	// Configurations for drag and drop of the node component
	this.dragstart = false;
	this.mousePosX = 0;
	this.mousePosY = 0;
	this.nodePosX = 0;
	this.nodePosY = 0;
	this.newNodePosX = 0;
	this.newNodePosY = 0;

	// Ports
	this.ports = {
		inputs: [],
		outputs: []
	};
	
};
jsCow.res.view.node.prototype = {
	
	init: function(e) {

		this.dom.main.attr('id', e.data.id);

		// Set default position variables for drag & drop
		var modelConfig = this.cmp().config();
		this.newNodePosX = modelConfig.pos.left;
		this.newNodePosY = modelConfig.pos.top;
		

		//
		// Trigger to remove node

		this.dom.remove.on('click', (function(self, e) {	// Start Drag
			return function() {
				self.cmp().del();
				self.trigger('removed', {
					id: e.data.id
				});
			};
		})(this, e));


		//
		// Drag and drop for the node element
		/*
		this.dom.main.on('mousedown', (function(self, e) {	// Start Drag
			return function() {
				var offsetLeft = self.dom.main.position().left;
				var offsetTop = self.dom.main.position().top;
				self.mousePosX = document.all ? window.event.clientX : event.pageX;
				self.mousePosY = document.all ? window.event.clientY : event.pageY;
				self.nodePosX = self.mousePosX - offsetLeft;
  				self.nodePosY = self.mousePosY - offsetTop;
				self.dragstart = true;

				self.trigger("drag.start", {
					pos: {
						top: self.newNodePosY,
						left: self.newNodePosX
					}
				});

			};
		})(this, e)).on('mouseup', (function(self, e) {		// Stop Drag
			return function(ev) {
				self.dragstart = false;

				if (self.newNodePosX < 0) { self.newNodePosX = 0; }
				if (self.newNodePosY < 0) { self.newNodePosY = 0; }
				
				var pos = {
					top: self.newNodePosY,
					left: self.newNodePosX,
					right: self.newNodePosX + self.dom.main.outerWidth(true),
					bottom: self.newNodePosY + self.dom.main.outerHeight(true)
				};
				
				var currentPosition = self.cmp().config().pos;
				if (self.newNodePosX !== currentPosition.left || 
					self.newNodePosY !== currentPosition.top) {
					self.cmp().config({
						pos: pos
					});
				}
				
				self.trigger("drag.stop", self.cmp().config());

			};
		})(this, e));
		
		$(document).on('mousemove', (function(self, e) {	// Drag
			return function(event) {
				if (self.dragstart) {
					self.mousePosX = document.all ? window.event.clientX : event.pageX;
					self.mousePosY = document.all ? window.event.clientY : event.pageY;
					self.newNodePosX = self.mousePosX - self.nodePosX;
					self.newNodePosY = self.mousePosY - self.nodePosY;
					
					// Snap to grid
					var grid = self.cmp().config().grid;
					if (self.cmp().config().snapToGrid  || !event.ctrlKey) {
						self.newNodePosX = (Math.round(self.newNodePosX / grid) * grid);
						self.newNodePosY = (Math.round(self.newNodePosY / grid) * grid);
					}
					
					self.dom.main.css('left', self.newNodePosX );
					self.dom.main.css('top', self.newNodePosY );
					
					self.trigger("drag.move", {
						pos: {
							top: self.nodePosX,
							left: self.nodePosY,
							right: self.nodePosX + self.dom.main.width(),
							bottom: self.nodePosY + self.dom.main.height()
						}
					});
				}
			};
		})(this, e));
		*/
		
		this.trigger("view.update", e.data);
		
	},
	
	update: function(e) {	
		
		if (e.data.enabled) {
			
			this.dom.main.removeClass('jsc-node-disabled').addClass('jsc-node');
			
			this.dom.title.html(e.data.title);
			
			// Position
			this.dom.main.css('left', e.data.pos.left );
			this.dom.main.css('top', e.data.pos.top );

			// Show all outputs
			this.dom.outputs.find('*').remove();
			$.each(e.data.outputs, (function(that) {
				return function(i, output) {

					var port = $('<div/>').addClass('jsc-node-port jsc-node-port-out');
					$('<i/>').attr("id", that.cmp().id()+'-'+output.id).appendTo(port);
					$('<div/>').appendTo(port).append(
						$('<span/>').text(output.title)
					);
					
					that.dom.outputs.append(port);
					
				};
			})(this));
			
			// Show all inputs
			this.dom.inputs.find('*').remove();
			$.each(e.data.inputs, (function(that) {
				return function(i, input) {

					var port = $('<div/>').addClass('jsc-node-port jsc-node-port-in');
					$('<i/>').attr("id", that.cmp().id()+'-'+input.id).appendTo(port);
					$('<div/>').appendTo(port).append(
						$('<span/>').text(input.title)
					);
					
					that.dom.inputs.append(port);

				};
			})(this));
			
			if (e.data.visible) {
				this.dom.main.show();
			}else{
				this.dom.main.hide();
			}
			
		}else{
			
			this.dom.main.removeClass('jsc-node').addClass('jsc-node-disabled');
			
		}
	}
	
};

jsCow.res.controller.node = function() {};
jsCow.res.controller.node.prototype = {
	
	init: function() {
		this.on("model.ready", this.isModelReady);
		this.on("title", this.title);
		this.on("inputs", this.inputs);
		this.on("outputs", this.outputs);
		this.on("addInPorts", this.addInPorts);
	},
	
	isModelReady: function() {
		this.trigger("view.init", this.cmp().config());
	},
	
	title: function(e) {
		this.cmp().config({
			title: e.data.title
		});
	},
	
	inputs: function(e) {
		this.cmp().config({
			inputs: e.data.inputs
		});
	},
	
	outputs: function(e) {
		this.cmp().config({
			outputs: e.data.outputs
		});
	},

	addInPorts: function(e) {
		this.trigger("inputs", e.data.ports);
	}
	
};
