"use strict";

var routes = require("next-routes")();

routes.add("/campaigns/new", "/campaigns/new").add("/campaigns/:address", "/campaigns/show").add("/campaigns/:address/requests/new", "/campaigns/requests/new").add("/campaigns/:address/requests", "/campaigns/requests/index");

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNHLEFBREgsSUFDTyxBQURQLGtCQUN5QixBQUR6QixrQkFFRyxBQUZILElBRU8sQUFGUCx1QkFFOEIsQUFGOUIsbUJBR0csQUFISCxJQUdPLEFBSFAsb0NBRzJDLEFBSDNDLDJCQUlHLEFBSkgsSUFJTyxBQUpQLGdDQUl1QyxBQUp2Qzs7QUFNQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL2xlbm92by9PbmVEcml2ZS9EZXNrdG9wL3Byb2plY3RzL2NvaW5za2l0ZS9raWNrc3RhcnRlciJ9