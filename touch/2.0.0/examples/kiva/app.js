/*global Ext:false */
Ext.ClassManager.setAlias('Ext.data.proxy.Kiva', 'proxy.kiva');

Ext.application({
    name: 'Kiva',

    requires: ['Ext.data.proxy.Kiva'],

    icon: 'resources/icons/icon.png',
    phoneStartupScreen: 'resources/loading/Homescreen.jpg',
    tabletStartupScreen: 'resources/loading/Homescreen~ipad.jpg',

    views : ['Main', 'Detail', 'LoanFilter'],
    controllers: ['Loans'],
    models: ['Loan'],
    stores: ['Loans'],

    launch: function() {
        Ext.create('Kiva.view.Main');
    }
});
