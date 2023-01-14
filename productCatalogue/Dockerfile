FROM python:3-slim-buster

ENV PYTHONBUFFERED=1

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

# FROM python:3-alpine

# ENV PYTHONUNBUFFERED 1

# WORKDIR /app

# ADD . /app



# COPY ./requirements.txt /app/requirements.txt
# RUN pip install -r requirements.txt
# COPY . /app 


# FROM python:3-alpine

# ENV PYTHONUNBUFFERED 1

# WORKDIR /app

# COPY . .

# RUN pip install -r requirements.txt

# EXPOSE 8000

# CMD ["python", "manage.py", "runserver"]

# FROM python:3.8-slim-buster

# WORKDIR /app

# # COPY requirements.txt requirements.txt



# COPY . .

# RUN pip install -r requirements.txt

# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]