using System;
using System.Net;
using System.Text.Json;
using Meet.App.Api.Errors;

namespace Meet.App.Api.Middleware
{
    public class ExceptionMiddleware
    {
        private RequestDelegate next;
        private ILogger<ExceptionMiddleware> logger;
        private IHostEnvironment env;

        public ExceptionMiddleware(RequestDelegate _next, ILogger<ExceptionMiddleware> _logger, IHostEnvironment _env)
        {
            next = _next;
            logger = _logger;
            env = _env;
        }

        public async Task InvokeAsync(HttpContext context){
            try
            {
             await next(context);   
            }
            catch (System.Exception ex)
            {
                logger.LogError(ex, ex.Message);
                context.Response.ContentType = "application/json";
                context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

                var response = env.IsDevelopment()
                ? new ApiException(context.Response.StatusCode, ex.Message, ex.StackTrace)
                : new ApiException(context.Response.StatusCode, ex.Message, "Internal server error")
              ;

                var options = new JsonSerializerOptions{
                    PropertyNamingPolicy = JsonNamingPolicy.CamelCase
                };

                var json = JsonSerializer.Serialize(response, options);
                await context.Response.WriteAsync(json);
            }
        }
    }
}
