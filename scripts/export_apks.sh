#!/bin/bash
set -e

if [ -z "$JAVA_HOME" ]; then
  if command -v /usr/libexec/java_home >/dev/null 2>&1; then
    export JAVA_HOME="$(/usr/libexec/java_home -v 17 2>/dev/null || /usr/libexec/java_home 2>/dev/null)"
  elif [ -d "/opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home" ]; then
    export JAVA_HOME="/opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home"
  elif [ -d "/Library/Java/JavaVirtualMachines/openjdk-17.jdk/Contents/Home" ]; then
    export JAVA_HOME="/Library/Java/JavaVirtualMachines/openjdk-17.jdk/Contents/Home"
  fi
fi

if [ -z "$ANDROID_HOME" ]; then
  if [ -d "$HOME/Library/Android/sdk" ]; then
    export ANDROID_HOME="$HOME/Library/Android/sdk"
  elif [ -d "$HOME/Android/Sdk" ]; then
    export ANDROID_HOME="$HOME/Android/Sdk"
  fi
fi

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BUILDS_DIR="$DIR/builds"

# Default to ARM devices (armeabi-v7a,arm64-v8a) matching the previous ~45MB release size,
# or pass "arm64-v8a" for ultra-slim ~26MB APKs, or "universal" for 4-ABI emulator+phone APKs.
ARCH_MODE="${1:-armeabi-v7a,arm64-v8a}"
if [ "$ARCH_MODE" = "universal" ] || [ "$ARCH_MODE" = "all" ]; then
  ARCH_FLAG="-PreactNativeArchitectures=armeabi-v7a,arm64-v8a,x86,x86_64"
  echo "=== Building Universal (4-ABI) Standard & Pro Release APKs ==="
else
  ARCH_FLAG="-PreactNativeArchitectures=$ARCH_MODE"
  echo "=== Building Slim ($ARCH_MODE) Standard & Pro Release APKs ==="
fi

cd "$DIR/android"
./gradlew assembleProRelease assembleStandardRelease "$ARCH_FLAG"

mkdir -p "$BUILDS_DIR"

PRO_SRC="$DIR/android/app/build/outputs/apk/pro/release/app-pro-release.apk"
STD_SRC="$DIR/android/app/build/outputs/apk/standard/release/app-standard-release.apk"

# Dynamically extract version info from build.gradle
GRADLE_VERSION_NAME="$(awk -F'"' '/versionName/ {print $2; exit}' "$DIR/android/app/build.gradle")"
VERSION_NAME="${VERSION_NAME:-$GRADLE_VERSION_NAME}"

PRO_DEST="$BUILDS_DIR/TheWalks-Pro-v${VERSION_NAME}.apk"
STD_DEST="$BUILDS_DIR/TheWalks-Standard-v${VERSION_NAME}.apk"

cp "$PRO_SRC" "$PRO_DEST"
cp "$STD_SRC" "$STD_DEST"

echo ""
echo "=== Ready-to-Share Tester APKs Created ==="
ls -lh "$BUILDS_DIR"
echo ""
echo "=== SHA-256 Checksums ==="
shasum -a 256 "$PRO_DEST" "$STD_DEST"
echo ""
echo "=== Quick Sharing Guide ==="
echo "• TheWalks-Pro-v${VERSION_NAME}.apk: ALL walks unlocked out-of-the-box. Best for friends & testers!"
echo "• TheWalks-Standard-v${VERSION_NAME}.apk: Standard store version (walks locked behind activation code)."
echo "• To send to a friend: send via AirDrop, Google Drive, Telegram, or WhatsApp."
echo "• To install on connected device: adb install -r \"$PRO_DEST\""
