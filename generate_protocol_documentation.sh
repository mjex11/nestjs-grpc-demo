#!/bin/bash

protoc \
  --doc_out=./doc \
  --doc_opt=markdown,index.md \
  ./**/*.proto