#!/bin/bash

SESSION=pet-dev-server

# TODO: Attach instead if session already exists
tmux new-session -s "$SESSION" './node_modules/.bin/rollup --watch --config rollup.config.js' \; \
    split-window './node_modules/.bin/http-server'
