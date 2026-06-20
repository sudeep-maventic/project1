sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("demofiori.project1.controller.BaseController", {
        onInit() {

        },

        demoFunction: function() {
            sap.m.MessageToast.show("This is a demo function from BaseController");
        }, 

        validation: function(oInput, iMinimum, iMaximum) {
            let sValue = oInput.getValue();

            if(sValue.trim() === "") {
                oInput.setValueState("Error");
                oInput.setValueStateText("Name cannot be empty");
            }
            else if(sValue.length < iMinimum) {
                oInput.setValueState("Error");
                oInput.setValueStateText(`Name must be at least ${iMinimum} characters long`);
            }
            else if(sValue.length > iMaximum) {
                oInput.setValueState("Error");
                oInput.setValueStateText(`Name cannot be longer than ${iMaximum} characters`);
            }
            else {
                oInput.setValueState("Success");
            }
        }
    });
});