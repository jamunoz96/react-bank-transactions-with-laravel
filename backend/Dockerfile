FROM php:7.3-apache

RUN apt-get update && apt-get install -y cron git-core jq unzip vim zip \
  libjpeg-dev libpng-dev libpq-dev libsqlite3-dev libwebp-dev libzip-dev && \
  docker-php-ext-configure zip --with-libzip && \
  docker-php-ext-configure gd --with-png-dir --with-jpeg-dir --with-webp-dir && \
  docker-php-ext-install exif gd mysqli opcache pdo_pgsql pdo_mysql zip

RUN { \
    echo 'log_errors=on'; \
    echo 'display_errors=on'; \
    echo 'upload_max_filesize=32M'; \
    echo 'post_max_size=32M'; \
    echo 'memory_limit=6024M'; \
  } > /usr/local/etc/php/conf.d/docker-oc-php.ini

ENV COMPOSER_ALLOW_SUPERUSER=1

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer  --version=2.0.2

WORKDIR /var/www/html

COPY . /var/www/html


RUN a2enmod rewrite && a2enmod headers
RUN composer install
RUN php artisan optimize:clear && php artisan cache:clear && php artisan key:generate
RUN chmod -R 777 ./storage

SHELL ["/bin/bash", "-l", "-euxo", "pipefail", "-c"]

EXPOSE 80 

CMD ["apache2-foreground"]
