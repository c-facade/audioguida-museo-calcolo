#!/usr/bin/bash

sqlite3 -header -csv dev.db "select *, datetime(createdAt/1000, 'unixepoch') as createdAt from Visit;" > visit.csv
