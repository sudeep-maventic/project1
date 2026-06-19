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
            let oInput = oEvent.getSource();
            let sValue = oInput.getValue();

            if(sValue.trim() === "") {
                oInput.setValueState("Error");
                oInput.setValueStateText("Name cannot be empty");
            }
            else if(sValue.length < 3) {
                oInput.setValueState("Error");
                oInput.setValueStateText("Name must be at least 3 characters long");
            }
            else if(sValue.length > 10) {
                oInput.setValueState("Error");
                oInput.setValueStateText("Name cannot be longer than 10 characters");
            }
            else {
                oInput.setValueState("Success");
            }
        }
    })
})