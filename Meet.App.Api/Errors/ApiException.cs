using System;

namespace Meet.App.Api.Errors
{
    public class ApiException
    {
        public ApiException(int statusCode, string message, string? detail)
        {
            StatusCode = statusCode;
            Message = message;
            Detail = detail;
        }

        public int StatusCode { get; private set; }
        public string Message { get; private set; }
        public string? Detail { get; private set; }
    }
}
