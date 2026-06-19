sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("demofiori.project1.controller.Validation", {
        onInit() {
            let oData = {
                firstName: "Rakesh",
                lastName: "Kumar",
                amount: 20000,
                DOB: new Date(2000, 5, 15)
            };

            let oModel = new sap.ui.model.json.JSONModel(oData);
            this.getView().setModel(oModel, "uiModel");
        },

        onSubmit: function() {
            let oModel = this.getView().getModel("uiModel");
        }
    })
})