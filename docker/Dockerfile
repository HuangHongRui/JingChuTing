FROM centos
LABEL 邢烽朔 "xingfengshuo.leo@gmail.com"
ENV BLOG /home/leo/JingChuTing
WORKDIR $BLOG
EXPOSE 80

RUN curl -sL https://rpm.nodesource.com/setup_10.x | bash - && \
    yum -y install nginx git nodejs && \
    git clone https://github.com/HuangHongRui/JingChuTing.git . && \
    npm install && npm run pro 

COPY nginx.conf /etc/nginx/

# ENTRYPOINT  nginx
CMD ["/bin/bash"]

