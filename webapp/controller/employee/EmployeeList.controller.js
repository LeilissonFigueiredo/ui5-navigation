sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController"
], function (BaseController) {
	"use strict";

	const EmployeeList = BaseController.extend("sap.ui.demo.nav.controller.employee.EmployeeList", {
        onListItemPressed(oEvent){
            const item = oEvent.getSource();

            this.getRouter().navTo('employee', {
                employeeID: item.getBindingContext("employees").getProperty("EmployeeID")
            })  
        }
    });

    return EmployeeList;
});