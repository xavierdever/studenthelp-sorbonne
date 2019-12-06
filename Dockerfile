# build stage
FROM maven:latest AS build-env
ADD . /src
RUN cd /src/eureka-server && mvn install

# final stage
FROM openjdk:13-jdk-alpine
WORKDIR /app
COPY --from=build-env /src/eureka-server/target /app/
EXPOSE 8761:80
CMD java -jar eureka-server-0.0.1-snapshot.jar