#!/bin/bash

protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_out=src/user \
  --ts_proto_opt=nestJs=true \
  --ts_proto_opt=outputClientImple=false \
  --ts_proto_opt=addGrpcMetadata=true \
  -Isrc/proto \
  src/proto/user.proto
