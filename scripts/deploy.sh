#!/usr/bin/env bash

rm -Rf public &&
mkdir public &&
cp -a assets index.html public/ &&
firebase deploy
