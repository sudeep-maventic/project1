sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "demofiori/project1/controller/BaseController"
], (Controller, MessageToast, BaseController) => {
    "use strict";

    return BaseController.extend("demofiori.project1.controller.Validation", {
        onInit() {
            let oData = {
                firstName: "Rakesh",
                lastName: "Kumar",
                amount: 20000,
                DOB: new Date(2000, 5, 15)
            };

            let oModel = new sap.ui.model.json.JSONModel(oData);
            this.getView().setModel(oModel, "uiModel");

            this.demoFunction();
        },

        onSubmit: function() {
            let oModel = this.getView().getModel("uiModel");
        },
         
        onAmountChange: function(oEvent) {
            let oInput = oEvent.getSource();
            let sValue = oInput.getValue();

            let iValue = parseInt(sValue);

            if(isNaN(iValue) || iValue < 0) {
                oInput.setValueState("Error");
                oInput.setValueStateText("Please enter a valid amount");
            } else {
                oInput.setValueState("None");
            }
        },

        onNameChange: function(oEvent) {
            this.validation(oEvent.getSource(), 3, 10);
        }
    })
})