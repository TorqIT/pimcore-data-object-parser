pimcore.registerNS("pimcore.plugin.TorqITDataObjectParserBundle");

pimcore.plugin.TorqITDataObjectParserBundle = Class.create(pimcore.plugin.admin, {
    getClassName: function () {
        return "pimcore.plugin.TorqITDataObjectParserBundle";
    },

    initialize: function () {
        pimcore.plugin.broker.registerPlugin(this);
    },

    pimcoreReady: function (params, broker) {
        // alert("TorqITDataObjectParserBundle ready!");
    }
});

var TorqITDataObjectParserBundlePlugin = new pimcore.plugin.TorqITDataObjectParserBundle();
