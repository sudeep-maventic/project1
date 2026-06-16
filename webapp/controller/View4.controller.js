sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/m/Input",
    "sap/ui/core/Fragment"
], function(Controller, MessageToast, JSONModel, Input, Fragment) {
    "use strict";
    return  Controller.extend("demofiori.project1.controller.View4", {
        onInit: function() {
            console.log(" onInit called");
        },

        // Without parameter
        // onPressNavigate: function() {
        //     let oRouter = this.getOwnerComponent().getRouter();
        //     oRouter.navTo("RouteView2");
        // },

        // mandatory parameter
        // onPressNavigate: function() {
        //     let oRouter = this.getOwnerComponent().getRouter();
        //     oRouter.navTo("RouteView2", {
        //         empid: 1001,
        //         empname: "John Doe"
        //     });
        // },

        // optional parameter
        // onPressNavigate: function() {
        //     let oRouter = this.getOwnerComponent().getRouter();
        //     oRouter.navTo("RouteView2", {
        //         empid: 1001
        //     });
        // },

        // query parameter
        onPressNavigate: function() {
            let oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteView2", {
                empid: 1001,
                query: {
                    address: "kolkata",
                    country: "India",
                    pincode: "700001"
                }
            });
        }
    });
});