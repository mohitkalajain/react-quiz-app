const data = [
  {
    question: "What is ASP.NET Core?",
    incorrectAnswers: [
      "A client-side framework",
      "A type of database",
      "A front-end development tool",
    ],
    correctAnswer: "A cross-platform, high-performance framework for building modern cloud-based applications",
  },
  {
    question: "Which method in ASP.NET Core is used to configure the HTTP request pipeline?",
    incorrectAnswers: [
      "ConfigurePipeline",
      "ConfigureServices",
      "Main",
    ],
    correctAnswer: "Configure",
  },
  {
    question: "Which method is used to add services to the dependency injection container in ASP.NET Core?",
    incorrectAnswers: [
      "AddServices",
      "Configure",
      "UseServices",
    ],
    correctAnswer: "ConfigureServices",
  },
  {
    question: "How do you add middleware in ASP.NET Core?",
    incorrectAnswers: [
      "app.InvokeMiddleware(MiddlewareClass)",
      "app.InitializeMiddleware(MiddlewareClass)",
      "app.UseMiddleware(typeof(MiddlewareClass))",
    ],
    correctAnswer: "app.UseMiddleware<MiddlewareClass>()",
  },
  {
    question: "Where do you typically register middleware components in ASP.NET Core?",
    incorrectAnswers: [
      "In the Program.cs file",
      "In the AppSettings.json file",
      "In the Main() method",
    ],
    correctAnswer: "In the Configure method of Startup.cs",
  },
  {
    question: "Which method is used to map a controller to an HTTP request in ASP.NET Core?",
    incorrectAnswers: [
      "MapHttp",
      "AddController",
      "UseEndpoint",
    ],
    correctAnswer: "MapControllers",
  },
  {
    question: "What attribute is used to require authentication in a controller action?",
    incorrectAnswers: [
      "[Authorize(Roles = 'Admin')]",
      "[Authenticate]",
      "[LoginRequired]",
    ],
    correctAnswer: "[Authorize]",
  },
  {
    question: "How do you implement a custom middleware in ASP.NET Core?",
    incorrectAnswers: [
      "By inheriting Middleware class",
      "By calling app.AddMiddleware",
      "By writing a function in the Main method",
    ],
    correctAnswer: "By implementing the InvokeAsync or Invoke method in a class",
  },
  {
    question: "How do you specify that a controller action should only respond to HTTP POST requests?",
    incorrectAnswers: [
      "[HttpGet]",
      "[HttpPut]",
      "[HttpDelete]",
    ],
    correctAnswer: "[HttpPost]",
  },
  {
    question: "Which of the following is used to configure services for an ASP.NET Core app?",
    incorrectAnswers: [
      "Configure",
      "Main",
      "AddService",
    ],
    correctAnswer: "ConfigureServices",
  },
  {
    question: "How can you run background tasks in an ASP.NET Core application?",
    incorrectAnswers: [
      "Using a BackgroundWorker",
      "Using a HostedWorker",
      "Using a StartupTask",
    ],
    correctAnswer: "Using IHostedService",
  },
  {
    question: "How do you enable session state in an ASP.NET Core application?",
    incorrectAnswers: [
      "app.UseState()",
      "app.AddSession()",
      "app.StartSession()",
    ],
    correctAnswer: "app.UseSession()",
  },
  {
    question: "What method is used to configure routing in ASP.NET Core?",
    incorrectAnswers: [
      "app.UseMvc()",
      "app.UseRequestPipeline()",
      "app.AddRouting()",
    ],
    correctAnswer: "app.UseRouting()",
  },
  {
    question: "Which attribute specifies that a controller action should respond to HTTP GET requests?",
    incorrectAnswers: [
      "[HttpPost]",
      "[HttpPut]",
      "[HttpDelete]",
    ],
    correctAnswer: "[HttpGet]",
  },
  {
    question: "How can you inject dependencies into an ASP.NET Core controller?",
    incorrectAnswers: [
      "Through a constructor",
      "By using static methods",
      "By using fields",
    ],
    correctAnswer: "Through constructor injection",
  },
  {
    question: "What method is used to handle exceptions globally in an ASP.NET Core app?",
    incorrectAnswers: [
      "app.UseErrorHandler()",
      "app.HandleError()",
      "app.UseErrorHandling()",
    ],
    correctAnswer: "app.UseExceptionHandler()",
  },
  {
    question: "What is the purpose of `appsettings.json` in an ASP.NET Core application?",
    incorrectAnswers: [
      "To store HTML templates",
      "To store middleware components",
      "To store NuGet package configurations",
    ],
    correctAnswer: "To store configuration settings",
  },
  {
    question: "Which class in ASP.NET Core is responsible for handling HTTP requests and generating responses?",
    incorrectAnswers: [
      "ServiceProvider",
      "RequestHandler",
      "ResponseFactory",
    ],
    correctAnswer: "HttpContext",
  },
  {
    question: "Which method is used to explicitly terminate middleware in ASP.NET Core?",
    incorrectAnswers: [
      "app.UseNext()",
      "app.InvokeNext()",
      "app.EndPipeline()",
    ],
    correctAnswer: "app.Run()",
  },
  {
    question: "Which method is used to map Razor pages in an ASP.NET Core app?",
    incorrectAnswers: [
      "app.UseMvc()",
      "app.UsePages()",
      "app.AddRazorPages()",
    ],
    correctAnswer: "app.MapRazorPages()",
  },
  {
    question: "What does `IApplicationBuilder` interface provide in ASP.NET Core?",
    incorrectAnswers: [
      "An interface for session state management",
      "An interface for dependency injection",
      "An interface for database management",
    ],
    correctAnswer: "An interface to configure the request pipeline",
  },
  {
    question: "How do you serve files like CSS and JavaScript in an ASP.NET Core app?",
    incorrectAnswers: [
      "app.AddStaticResources()",
      "app.UseStatic()",
      "app.ServeStatic()",
    ],
    correctAnswer: "app.UseStaticFiles()",
  },
  {
    question: "Which configuration file is commonly used for logging settings in ASP.NET Core?",
    incorrectAnswers: [
      "logging.json",
      "log4net.config",
      "logfile.config",
    ],
    correctAnswer: "appsettings.json",
  },
  {
    question: "Which ASP.NET Core feature allows an application to listen for specific URLs?",
    incorrectAnswers: [
      "Routing",
      "EndPoint",
      "AppHost",
    ],
    correctAnswer: "Kestrel Web Server",
  },
  {
    question: "What method is used to redirect HTTP requests to HTTPS in ASP.NET Core?",
    incorrectAnswers: [
      "app.UseHttpToHttpsRedirect()",
      "app.UseHttps()",
      "app.AddHttpsRedirection()",
    ],
    correctAnswer: "app.UseHttpsRedirection()",
  },
];

export default data;
