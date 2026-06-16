sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
], 
function (JSONModel, Device) {
    "use strict";

     return {
        createEmployeeModel: function () {
            var oModel = new JSONModel();
            oModel.loadData(sap.ui.require.toUrl("demofiori/project1/model/EmpModel.json"));
            return oModel;
        }
    };

});