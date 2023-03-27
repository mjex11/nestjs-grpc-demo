#!/bin/bash

grpcurl --import-path ~/lab/nestjs-grpc-demo/src \
-proto=proto/user.proto \
-plaintext -d '{"id": "2"}' \
localhost:5000 user.UserService/GetUser
