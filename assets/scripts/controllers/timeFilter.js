/**
 * Created by ibrahimergun on 18/08/2017.
 */
'use strict';

app.filter('UTCToNow', ['moment', function (moment) {
        return function (input, format) {
            if (input === null) {
                return "Cevap Bekleniyor";
            }
            else {
                if (format) {
                    return moment.utc(input).local().format('DD-MM-YY HH:mm'); //format('dddd, MMMM Do YYYY, h:mm:ss a');
                }
                else {
                    return moment.utc(input).local();
                }
            };
        }
    }]
);