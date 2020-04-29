#!/bin/bash

docker ps | grep 'jenniferlai43/watchwithme' | awk '{ print $1 }' | 