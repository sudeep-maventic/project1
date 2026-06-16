sap.ui.define([ 
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/m/Input",
    "sap/ui/core/Fragment"
], function(Controller, MessageToast, JSONModel, Input, Fragment) {
    "use strict";       
    return Controller.extend("demofiori.project1.controller.View3", {
        onInit: function() {
            let oData = {
                name: "s",
                lastName: "d",

                amount: 5000    
            };

            // Create a JSONModel with the employee data and set it to the view
            let oModel = new JSONModel(oData);
            this.getView().setModel(oModel, "uiModel");

            console.log(" onInit called");

            // Fragment.load({
            //     name: "demofiori.project1.fragment.form",
            //     controller: this
            // }).then(function (oFragment) {

            //     this.getView().addDependent(oFragment);
            //     this.byId("formcontainer").addItem(oFragment);

            // }.bind(this));
        },

        // Life Cycle Hooks
        onBeforeRendering: function() { 
            console.log(" onBeforeRendering called");
        },

        onAfterRendering: function() { 
            console.log(" onAfterRendering called");
        },

        onExit: function() { 
            console.log(" onExit called");
        },

        onSubmit: function() {
            MessageToast.show("Submit button clicked!");
        },

        // openDialog: async function() {
        //     if (!this._oDialog) {
        //         this._oDialog = await Fragment.load({
        //             name: "demofiori.project1.fragment.form",
        //             controller: this
        //         });
        //         this.getView().addDependent(this._oDialog);
        //     }
        //     this._oDialog.open();
        // },

        onClose: function() {
            if (this._oDialog) {
                this._oDialog.close();
            }
        },

        openPop: async function(oEvent) {
            if (!this._oPopover) {
                this._oPopover = await Fragment.load({
                    name: "demofiori.project1.fragment.popover",
                    controller: this
                });
                this.getView().addDependent(this._oPopover);
            }
            this._oPopover.open(oEvent.getSource());
        }
    
    });
});