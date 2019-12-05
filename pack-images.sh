#!/bin/bash

echo "Performing a clean Maven build"
./mvnw clean package -DskipTests=true

echo "Setting the default builder for pack"
pack set-default-builder cloudfoundry/cnb:bionic

echo "Packing the Blog Service"
cd blog-service
pack build spring-setup-blog-service --env "BP_JAVA_VERSION=11.*"
cd ..

echo "Packing the Eureka Discovery Server"
cd eureka-server
pack build spring-setup-eureka-server --env "BP_JAVA_VERSION=11.*"
cd ..

echo "Packing the Spring Cloud Gateway"
cd gateway-server
pack build spring-setup-gateway-server --env "BP_JAVA_VERSION=11.*"
cd ..
