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
  DEVICE_ID="${DEVICE_ID:-$(echo "$DEVICES" | head -n 1)}"
  echo "Note: Multiple devices found. Using target: $DEVICE_ID"
  ADB_CMD=("$ADB" -s "$DEVICE_ID")
fi

# Usage:
#   ./scripts/toggle_player_controls.sh [target: pro|standard|all] [action: toggle|on|off]
# Examples:
#   ./scripts/toggle_player_controls.sh
#   ./scripts/toggle_player_controls.sh pro on
#   ./scripts/toggle_player_controls.sh standard off
TARGET="${1:-all}"
ACTION="${2:-toggle}"

case "$ACTION" in
  on|enable|true)
    DEEP_LINK="thewalks://toggle-controls?mode=on"
    LABEL="enabled"
    ;;
  off|disable|false)
    DEEP_LINK="thewalks://toggle-controls?mode=off"
    LABEL="disabled"
    ;;
  *)
    DEEP_LINK="thewalks://toggle-controls"
    LABEL="toggled"
    ;;
esac

toggle_app() {
  local PKG="$1"
  local NAME="$2"
  if "${ADB_CMD[@]}" shell pm list packages | grep -q "^package:${PKG}$"; then
    echo "=== Setting advanced player controls ($LABEL) in $NAME ($PKG) ==="
    "${ADB_CMD[@]}" shell am start -W -a android.intent.action.VIEW -d "$DEEP_LINK" "$PKG/com.thewalks.MainActivity"
    echo "=== $NAME: Advanced controls $LABEL! (Seek +/- buttons & time elapsed) ==="
  else
    echo "Package $PKG not installed on device."
  fi
}

if [ "$TARGET" = "pro" ]; then
  toggle_app "com.thewalkspro" "The Walks Pro"
elif [ "$TARGET" = "standard" ] || [ "$TARGET" = "not-pro" ]; then
  toggle_app "com.thewalks" "The Walks Standard"
else
  toggle_app "com.thewalks" "The Walks Standard"
  toggle_app "com.thewalkspro" "The Walks Pro"
fi
