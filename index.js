function schemas(){
    
    var markup = [];

    $.when( 
        $.getJSON( "schemas/ac.basic.json", function( data ) {
            markup.push(data);
        })),

        $.getJSON( "schemas/alarm.basic.json", function( data ) {
           markup.push(data);
        }),

        $.getJSON( "schemas/alarm.config.json", function( data ) {
           markup.push(data);
        }),

        $.getJSON( "schemas/audio.basic.json", function( data ) {
           markup.push(data);
        }),

        $.getJSON( "schemas/cid.basic.json", function( data ) {
           markup.push(data);
        }),

        $.getJSON( "schemas/cid.shomes.json", function( data ) {
           markup.push(data);
        }),
             
        $.getJSON( "schemas/input.basic.json", function( data ) {
           markup.push(data);
        }),
                
        $.getJSON( "schemas/output.basic.json", function( data ) {
           markup.push(data);
        }),
                
        $.getJSON( "schemas/control.basic.json", function( data ) {
           markup.push(data);
        }),

        $.getJSON( "schemas/datetime.basic.json", function( data ) {
           markup.push(data);
        }),

        $.getJSON( "schemas/dawndusk.basic.json", function( data ) {
           markup.push(data);
        }),

        $.getJSON( "schemas/domogeek.basic.json", function( data ) {
           markup.push(data);
        }),

        $.getJSON( "schemas/domogeek.config.json", function( data ) {
           markup.push(data);
        }),

        $.getJSON( "schemas/email.basic.json", function( data ) {
           markup.push(data);
        }),

        $.getJSON( "schemas/email.config.json", function( data ) {
           markup.push(data);
        }),

        $.getJSON( "schemas/homeeasy.basic.json", function( data ) {
           markup.push(data);
        }),

        $.getJSON( "schemas/hue.basic.json", function( data ) {
           markup.push(data);
        }),

        $.getJSON( "schemas/ipx800.basic.json", function( data ) {
           markup.push(data);
        }),

        $.getJSON( "schemas/ipx800.config.json", function( data ) {
           markup.push(data);
        }),
        
        $.getJSON( "schemas/osd.basic.json", function( data ) {
           markup.push(data);
        }),

        $.getJSON( "schemas/prowl.basic.json", function( data ) {
           markup.push(data);
        }),

        $.getJSON( "schemas/prowl.config.json", function( data ) {
           markup.push(data);
        }),

        $.getJSON( "schemas/remote.basic.json", function( data ) {
           markup.push(data);
        }),

        $.getJSON( "schemas/sensor.basic.json", function( data ) {
           markup.push(data);
        }),
                
        $.getJSON( "schemas/shell.basic.json", function( data ) {
           markup.push(data);
        }),

        $.getJSON( "schemas/shell.config.json", function( data ) {
           markup.push(data);
        }),

        $.getJSON( "schemas/snmp.basic.json", function( data ) {
           markup.push(data);
        }),

        $.getJSON( "schemas/suncalc.basic.json", function( data ) {
           markup.push(data);
        }),

        $.getJSON( "schemas/suncalc.config.json", function( data ) {
           markup.push(data);
        }),

        $.getJSON( "schemas/sysinfo.basic.json", function( data ) {
           markup.push(data);
        }),

        /*$.getJSON( "schemas/teleinfo.basic.json", function( data ) {
           markup.push(data);
        }),*/
        
        $.getJSON( "schemas/teleinfo2.basic.json", function( data ) {
           markup.push(data);
        }),

        $.getJSON( "schemas/x10.basic.json", function( data ) {
           markup.push(data);
        }),

        $.getJSON( "schemas/x10.security.json", function( data ) {
           markup.push(data);
        })
                
        .done(function(){
            window.localStorage.setItem("schemas", JSON.stringify(markup));
        });
        
}
