/*global Ext:false */
Ext.application({
    launch: function () {
        var myStore = Ext.create('Ext.data.Store', {
            data: [{
                fname: 'Stratton',
                lname: 'Sclavos',
                role: 'Executive Chairman'
            }, {
                fname: 'Michael',
                lname: 'Mullany',
                role: 'CEO'
            }, {
                fname: 'Ted',
                lname: 'Driscoll',
                role: 'Vice President Worldwide Sales'
            }, {
                fname: 'Abraham',
                lname: 'Elias',
                role: 'Chief Technical Officer'
            }, {
                fname: 'Jeff',
                lname: 'Hartley',
                role: 'Vice President of Services and Training'
            }, {
                fname: 'Adam',
                lname: 'Mishcon',
                role: 'Vice President of Operations'
            }, {
                fname: 'Judy',
                lname: 'Lin',
                role: 'Vice President of Engineering'
            }], // data
            sorters: 'lname'
        }); // create()
        
        Ext.create('Ext.List', {
            fullscreen: true,
            store: myStore,
            itemTpl: '<div><strong>{[values.lname.toUpperCase()]}</strong>, {fname}</div>',
            items: [{
                xtype: 'titlebar',
                title: 'Ext.XTemplate custom function',
                docked: 'top'
            }] // items
        }); // create()
    } // launch
}); // application()
