sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("demofiori.project1.controller.View1", {
        onInit() {

            let oData = {
                name: "Sudeep",
                Employee : [
                    {
                        name: "Sudeep",
                        role: "Developer",
                        type: "Active"
                    },
                    {
                        name: "Ruturaj",
                        role: "Developer",
                        type: "InActive"
                    }
                ]
            };

            let oModel = new sap.ui.model.json.JSONModel(oData);
            this.getView().setModel(oModel, "employeeModel");

            const oCompanyModel = this.getOwnerComponent().getModel("companyModel");
            const oCompanyData = this.getOwnerComponent().getModel("companydata");

            oCompanyData.setData(oData);  

        },  

        onTextChange(oEvent) {
            let oInput = oEvent.getSource();
            let sValue = oInput.getValue();

            let oBtn = this.getView().byId("idClrBtn");
            
            if (sValue) {
                oBtn.setEnabled(true);
            } else {
                oBtn.setEnabled(false);
            }
        },

        onPress: function() {
            let  oInput = this.getView().byId("inpName");
            oInput.setValue("");
            MessageToast.show("Input cleared!");

            let oBtn = this.getView().byId("idClrBtn");
            oBtn.setEnabled(false);
        },

        onEmployeePress: function(oEvent) {
            let oEmployee = oEvent.getSource();
            let sEmployeeName = oEmployee.getTitle();
            console.log(sEmployeeName);
        },

        onSavePress: function() {

            let oModel = this.getView().getModel("employeeModel");
            const oList = this.getView().byId("EmpList");
            const aSelectedItems = oList.getSelectedItems();
            let sSelectedEmployees = "";
            aSelectedItems.forEach(function(oItem) {
                sSelectedEmployees += oItem.getTitle() + " ";
            })

            sSelectedEmployees = sSelectedEmployees.slice(0, -1);
            MessageToast.show("Selected Employees: " + sSelectedEmployees);
        }
    });
});