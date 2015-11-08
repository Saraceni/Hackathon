var envURL = "https://api.test.sabre.com/";

var getToken = function () 
{
    $.ajax(
    {
        contentType: "application/x-www-form-urlencoded",
        headers: 
        { 
        	"Authorization": "Basic VmpFNmJURmlZV2RtT0hGcU5IcHJlREpwZGpwRVJWWkRSVTVVUlZJNlJWaFU6ZDNsalMwUTBOMVU9" },
        	data: "grant_type=client_credentials",
        	type: "POST",
            url: envURL + "v2/auth/token",//Token vale por uma semana v2.
            success: getTokenSuccess,
            dataType: "json",
            async: true
        });
	}
}

var getTokenSuccess = function (res) {
            token = res.access_token;

            //searching for destinations
            destinationFinder();
        }