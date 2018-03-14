$(document).ready( function() {
    app.initialized()
        .then(function(_client) {
          var client = _client;
          
          client.events.on('app.activated',
            function() {
                var options= { headers: {"Authorization": "Basic cHJrbGh3a2RPOUkxZGxWR3l1Zw==",
                                    "content-type": "application/json"}
                        };
        var url= 'https://ducky.freshdesk.com/api/v2/contacts/36005037939'
        console.log('contacturl:', url);
                client.request.get(url, options)
                .then(function(contactdata){
                var contactdataparse= JSON.parse(contactdata.response)
                console.log('contactdataparse', contactdataparse);
                $('#apptext').text('contact phone number is:'+ contactdataparse.phone);
                },

                    (function(contactdataerr){
                        console.log('error', contactdataerr)
                    }))
                    })
                    .catch(function(e) {
                        console.log('Exception - ', e);
                    });
        });
    });
