#!/bin/sh

mkdir -p dist
cp -r src/* dist

zip -r -j dist/tag src/*
npm run build
