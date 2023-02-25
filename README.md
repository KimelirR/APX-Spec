# APX-SPEC

## Installation

* clone this project into your machine
 
* Install project dependencies

  ```php
   composer install
  ```

  ```javascript
    npm install
  ```

* Create .env file through copy
  ```
    cp .env.example .env
  ```
 
* Provide database credentials below in .env file.
  ```
     DB_DATABASE=?
     DB_USERNAME=?
     DB_PASSWORD=?
  ```

* Run migrations 
    ```php
    php artisan migrate --seed
    ```

* Generate key for laravel new application you have installed.
    ```php
    php artisan key:generate && php artisan config:cache
    ```
    
* Insert Manually into locations table for example
        ```sql
        INSERT INTO `Location_Table` (`ID`, `Timestamp`, `Postcode`, `Street_Address`, `Lat`, `Long`) VALUES
(153830321, '2021-02-24 22:48:15', 'TA165QQ', '54 BROADWAY </a><br>', '50.9081422', '-2.7966312');
        ```
    
> Congratulations you have installed laravel app successfully!

## Start Our application


* __*On terminal split into two*__

* First one || Start our laravel app

            ```php
            php artisan server
            ```
* Second One || Run vite 

            ```php
            npm run build
            ```

## On Browser
   http://127.0.0.1:8000
   Then test
   
<!--    
## Postman configuration

  * Our post api endpoint [http://127.0.0.1:8000/api/v1/postcodes]

  * Set the __headers__ as following

    ![alt text](https://github.com/KimelirR/AfricasTalking-laravel-sms/blob/master/public/images/screenshot1.png?raw=true)

  * Set the __body__ this way...Url_encoded

    ![alt text](https://github.com/KimelirR/AfricasTalking-laravel-sms/blob/master/public/images/screenshot2.png?raw=true)

> ! Lastly send messages. The end
 -->
