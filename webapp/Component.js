sap.ui.define([
    "sap/ui/core/UIComponent",
    "demofiori/project1/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("demofiori.project1.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init: function () {

            UIComponent.prototype.init.apply(this, arguments);

            var oEmployeeModel = models.createEmployeeModel();
            this.setModel(oEmployeeModel, "employeeModel");

            this.getRouter().initialize();
        }
    });
});