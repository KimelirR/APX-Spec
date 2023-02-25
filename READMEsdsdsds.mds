# Installation

## Requirements

* PHP 8.1
* Composer Installed
* A running Laravel app

### Install Via

  ```php
    composer require darkaonline/l5-swagger 
  ```
  
* Once its installed you need to publish in your application
  
  ```php
    php artisan vendor:publish --provider "L5Swagger\L5SwaggerServiceProvider"
  ```
  
### Since we need to perform Tests and perform our documentaion live we need to edit out .env file to be able to view documentation server on laravel on localhost

   ```php
   L5_SWAGGER_CONST_HOST="http://localhost:8000"
   ```

### Lets understand the basics on this Swagger terms first

* Info – add information about a whole project;
* Tag – create a tag for separating endpoints by sections;
* Get – describe GET request;
* Post – describe POST request;
* Delete – describe DELETE request;
* Post – describe POST request;
* Put – describe PUT request;
* Response – describe a response;
* Schema – describe JSON properties or property parameters, which can be reused in other schemas;
* Property – describe a field;
* Items – describe elements of the array;

## How can we use Swagger on our Laravel project

1. Add Project Info - This will describe our goal on project.

Before generating your first documentation, you should add project info in the @Info annotation.In app/Http/Controllers/Controller.php class to do this. For example:

```php
    /**
    @OA\Info(
        description="This is an example API",
        version="1.0.0",
        title="Example API"
    )
    */
    
    class Controller extends BaseController
    {
        //.....
    }
```

['https://haait.net/how-to-use-swagger-in-laravel/']

['https://swagger.io/specification/']
[('https://blog.quickadminpanel.com/laravel-api-documentation-with-openapiswagger/')]




