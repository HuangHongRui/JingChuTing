[TOC]

## 开发环境

```
  >>> npm run dev
  >>> https://localhost:9000
```

## Docker 环境访问

```
  >>> cd docker
  >>> docker build -f ./docker/Dockerfile -t BLOG:1 .
  >>> docker run -d -p 80:80 BLOG:1
  Chrome >>> http://localhost
```
