#!/bin/bash

protoc \
  --doc_out=./document \
  --doc_opt=markdown,index.md \
  ./**/*.proto
