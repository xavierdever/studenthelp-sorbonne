FROM openjdk:12-jdk-alpine
VOLUME /tmp
COPY build/libs/*.jar api-gateway.jar
ENTRYPOINT ["java","-jar","/api-gateway.jar"]