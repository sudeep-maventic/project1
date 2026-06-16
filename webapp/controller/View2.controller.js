sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("demofiori.project1.controller.View2", {
        onInit() {
            // var oData = {
            //     employees: [
            //         {
            //             empId: "E001",
            //             empName: "Sudeep",
            //             dept: "IT",
            //             salary: "50000"
            //         }
            //     ]
            // };

            // // Create a JSONModel with the employee data and set it to the view
            // var oModel = new sap.ui.model.json.JSONModel(oData);
            // this.getView().setModel(oModel, "employeeModel");

        },

        onSubmit: function () {
            var oView = this.getView();

            let sEmpId = oView.byId("empId").getValue();
            let sEmpName = oView.byId("empName").getValue();
            let sDept = oView.byId("dept").getValue();
            let sSalary = oView.byId("salary").getValue();

            if (!sEmpId || !sEmpName || !sDept || !sSalary) {
                MessageToast.show("Please fill all the fields!");
                return;
            };

            // const oModel = oView.getModel("employeeModel");
            // const oModel = this.getOwnerComponent().getModel("employeeModel");
            const oModel = this.getOwnerComponent().getModel("employeeModel");
            const aEmployees = oModel.getProperty("/employees");

            aEmployees.push({
                empId: sEmpId,
                empName: sEmpName,
                dept: sDept,
                salary: sSalary
            });

            oModel.setProperty("/employees", aEmployees);
            oModel.refresh(true);

            oView.byId("empId").setValue("");
            oView.byId("empName").setValue("");
            oView.byId("dept").setValue("");
            oView.byId("salary").setValue("");

            MessageToast.show("Employee added successfully!");
        }
    });
});