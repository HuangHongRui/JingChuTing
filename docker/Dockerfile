FROM centos
LABEL 邢烽朔 "xingfengshuo.leo@gmail.com"
ENV BLOG /home/leo/JingChuTing
WORKDIR $BLOG
EXPOSE 80

RUN curl -sL https://rpm.nodesource.com/setup_10.x | bash - && \
    yum -y install nginx git nodejs && \
    git clone https://github.com/HuangHongRui/JingChuTing.git . && \
    npm install

COPY nginx.conf /etc/nginx/nginx.conf
ENTRYPOINT  nginx && npm run dev
CMD ["/bin/bash"]

