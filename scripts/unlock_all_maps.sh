#!/bin/bash
set -e

# 1. Resolve ADB binary (check PATH first, then standard Android SDK locations)
if command -v adb >/dev/null 2>&1; then
  ADB="adb"
elif [ -n "$ANDROID_HOME" ] && [ -x "$ANDROID_HOME/platform-tools/adb" ]; then
  ADB="$ANDROID_HOME/platform-tools/adb"
elif [ -n "$ANDROID_SDK_ROOT" ] && [ -x "$ANDROID_SDK_ROOT/platform-tools/adb" ]; then
  ADB="$ANDROID_SDK_ROOT/platform-tools/adb"
elif [ -x "$HOME/Library/Android/sdk/platform-tools/adb" ]; then
  ADB="$HOME/Library/Android/sdk/platform-tools/adb"
elif [ -x "$HOME/Android/Sdk/platform-tools/adb" ]; then
  ADB="$HOME/Android/Sdk/platform-tools/adb"
else
  echo "Error: 'adb' command not found."
  echo "Please install Android platform-tools or add 'adb' to your PATH."
  exit 1
fi

# 2. Auto-detect connected Android device
DEVICES=$("$ADB" devices | grep -w "device" | awk '{print $1}')
DEVICE_COUNT=$(echo "$DEVICES" | grep -v '^$' | wc -l | tr -d ' ')

if [ "$DEVICE_COUNT" -eq 0 ]; then
  echo "Error: No Android device detected."
  echo "Please connect your phone via USB and enable 'USB Debugging' in Developer Options."
  exit 1
elif [ "$DEVICE_COUNT" -eq 1 ]; then
  DEVICE_ID=$(echo "$DEVICES" | head -n 1)
  ADB_CMD=("$ADB" -s "$DEVICE_ID")
else
  # If DEVICE_ID env var is provided, use it; otherwise use the first device
  if [ -n "$DEVICE_ID" ]; then
    ADB_CMD=("$ADB" -s "$DEVICE_ID")
  else
    DEVICE_ID=$(echo "$DEVICES" | head -n 1)
    echo "Note: Multiple devices found. Target: $DEVICE_ID (set DEVICE_ID env var to override)"
    ADB_CMD=("$ADB" -s "$DEVICE_ID")
  fi
fi

TARGET="${1:-all}"

unlock_app() {
  local PKG="$1"
  local NAME="$2"
  if "${ADB_CMD[@]}" shell pm list packages | grep -q "^package:${PKG}$"; then
    echo "=== Unlocking all maps in $NAME ($PKG) on $DEVICE_ID ==="
    "${ADB_CMD[@]}" shell am start -W -a android.intent.action.VIEW -d "thewalks://unlock-maps" "$PKG/com.thewalks.MainActivity"
    echo "=== $NAME: All maps unlocked! ==="
  else
    echo "Package $PKG not installed on device."
  fi
}

if [ "$TARGET" = "pro" ]; then
  unlock_app "com.thewalkspro" "The Walks Pro"
elif [ "$TARGET" = "standard" ] || [ "$TARGET" = "not-pro" ]; then
  unlock_app "com.thewalks" "The Walks Standard"
else
  unlock_app "com.thewalks" "The Walks Standard"
  unlock_app "com.thewalkspro" "The Walks Pro"
fi
