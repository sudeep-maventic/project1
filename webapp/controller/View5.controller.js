sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/m/Input",
    "sap/ui/core/Fragment"
], function(Controller, MessageToast, JSONModel, Input, Fragment) {
    "use strict";
    return  Controller.extend("demofiori.project1.controller.View5", {
        onInit: function() {
            console.log(" onInit called");

            this.getOwnerComponent().getRouter().getRoute("RouteView2").attachPatternMatched(this._onRouteMatched, this);
        },

        onRouteMatched: function(oEvent) {
            let oArgs = oEvent.getParameter("arguments");
            const empid = oArgs.empid;      
            const empname = oArgs.empname;
            const query = oArgs["?query"];
        },

        onNavBack: function() { 
            let oHistory = sap.ui.core.routing.History.getInstance();
            let sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            }
        }

    });
});