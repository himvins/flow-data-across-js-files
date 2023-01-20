using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using System.IO;
using System.Text;

public class FormattingMiddleware
{
    private readonly RequestDelegate _next;

    public FormattingMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        // Get the response object
        var response = context.Response;
        // Get the response body stream
        var originalBody = response.Body;
        // Create a new memory stream
        using (var newBody = new MemoryStream())
        {
            // Set the response body stream to the new memory stream
            response.Body = newBody;

            // Pass control to the next component in the pipeline
            await _next(context);

            // Reset the position of the new memory stream
            newBody.Position = 0;
            // Get the response data as a string
            string responseString = await new StreamReader(newBody).ReadToEndAsync();
            // Perform any formatting or rounding logic here
            responseString = FormatData(responseString);
            // Convert the modified response data back to a byte array
            byte[] responseBytes = Encoding.UTF8.GetBytes(responseString);
            // Reset the position of the new memory stream
            newBody.Position = 0;
            // Write the modified response data to the new memory stream
            await newBody.WriteAsync(responseBytes, 0, responseBytes.Length);
        }
        // Reset the response body stream to the original stream
        response.Body = originalBody;
    }

    private string FormatData(string data)
    {
        // Perform your own mapping and formatting logic here
        // You can use the data parameter as the response data
        // This method should return the modified data

        // Example: Rounding the data
        data = data.Replace(".", ",");

        return data;
    }
}
