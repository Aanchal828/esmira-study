FROM jodlidev/esmira:latest

# Create necessary directories
RUN mkdir -p /var/www/html/esmira_data
RUN mkdir -p /var/www/html/backend/config

# Set permissions
RUN chown -R www-data:www-data /var/www/html

EXPOSE 80 443

CMD ["apache2-foreground"]
