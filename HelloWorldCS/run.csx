using System.Net;
using System.Threading.Tasks;

public static async Task<HttpResponseMessage> Run(HttpRequestMessage req, string name, TraceWriter log)
{
    log.Info($"C# HTTP trigger function processed a request. RequestUri={req.RequestUri}");

    return req.CreateResponse(HttpStatusCode.OK, $"Hello {name}! Welcome to DogFoodCon.");
}

// https://itaf.azurewebsites.net/api/helloworldcs/Tim?code=aysJF4aGWBBe75jKBzmFAFp4PQFrRJKgfRQDR1jeYG//wIS/q4xeuA==
