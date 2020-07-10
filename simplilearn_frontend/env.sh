#!/bin/bash

FILE=$1

echo "window.__ENV__ = {" > $FILE

env | grep "REACT_APP_" | while read line
do
  key=$(printf '%s\n' "$line" | sed -e 's/=.*//')
  value=$(printf '%s\n' "$line" | sed -e 's/^[^=]*=//')
  echo "  $key: \"$value\"," >> $FILE
done

echo "};" >> $FILE
