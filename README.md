# Product Catalouge  Application
## Md Kamrul Hasan

# Links of all Repository 
- https://drive.google.com/file/d/1pPQkGnWx8nExRGeF7AG55O_AOIuxX8kz/view?usp=sharing


# Combained Repository 
- link https://github.com/HasanMdKamrul/Sasol-product-catalouge


# Front-End Repository 
- link https://github.com/HasanMdKamrul/product-catalouge-fe

# Back-End Repository 
- link https://github.com/HasanMdKamrul/Products-catalogue-server-python

# Running Instructions using docker-compose.yaml file

- Clone this repo - https://github.com/HasanMdKamrul/Sasol-product-catalouge.git  (full structured repo different)
- Go to the root of the project, you will find a docker-compose.yaml file 
- Running Command - docker-compose up (in the terminal)
- Ports are specified like this - Frontend - http://localhost:3000/   | Backend - http://localhost:8000/
- To run this you have to specify the ports (Fe and Be) and SECRET_KEY='django-insecure-)#8o@31==8tyb$6_21)g8p_df#v@m!nevzji5_gi!b)$un7$dl' 
- Use the secret key as the environment var.

# Running Instructions using dockerhub images created by me (Individual Image)

- docker pull hasanmdkamrul/product-api
- docker run --name containername -p 8000:8000 hasanmdkamrul/product-api:latest

- docker pull hasanmdkamrul/product-fe
- docker run --name containername -p 3000:3000 hasanmdkamrul/product-fe:latest 
## Features

- go to the frontend site , which can perform curd operation adding and manipulating data,searching by name(no need to exact match included).
- In the backend I have configured the time specific temporary price of the products
- keep the ui as clean as possible
- Home page has a slider , they are clickable and redirect to specific product with details.
- Beside this allproducts route has all the products
- If you run my images from the dockerhub you don't need to put the SECRET_KEY for this api
- Both the images should be running in order to see the results 


## Links of the apis 
- all products -http://localhost:8000/api/products/
- product detail -http://localhost:8000/api/products/1/
- update -http://localhost:8000/api/products/1/update/
- add -http://localhost:8000/api/products/add/
