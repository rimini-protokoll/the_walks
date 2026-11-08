#!/bin/bash
set -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

# Auto-detect JAVA_HOME if not already exported
if [ -z "$JAVA_HOME" ]; then
  if command -v /usr/libexec/java_home >/dev/null 2>&1; then
    export JAVA_HOME="$(/usr/libexec/java_home -v 17 2>/dev/null || /usr/libexec/java_home 2>/dev/null)"
  elif [ -d "/opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home" ]; then
    export JAVA_HOME="/opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home"
  elif [ -d "/Library/Java/JavaVirtualMachines/openjdk-17.jdk/Contents/Home" ]; then
    export JAVA_HOME="/Library/Java/JavaVirtualMachines/openjdk-17.jdk/Contents/Home"
  fi
fi

# Auto-detect ANDROID_HOME if not already exported
if [ -z "$ANDROID_HOME" ]; then
  if [ -d "$HOME/Library/Android/sdk" ]; then
    export ANDROID_HOME="$HOME/Library/Android/sdk"
  elif [ -d "$HOME/Android/Sdk" ]; then
    export ANDROID_HOME="$HOME/Android/Sdk"
  fi
fi

# Dynamically extract version info from build.gradle (or accept explicit override as $1)
GRADLE_VERSION_NAME="$(awk -F'"' '/versionName/ {print $2; exit}' "$DIR/android/app/build.gradle")"
GRADLE_VERSION_CODE="$(awk '/versionCode/ {print $2; exit}' "$DIR/android/app/build.gradle")"

VERSION_NAME="${1:-$GRADLE_VERSION_NAME}"
VERSION_CODE="${2:-$GRADLE_VERSION_CODE}"

echo "=== Building Standard & Pro Release AABs (Version: $VERSION_NAME, Code: $VERSION_CODE) ==="
cd "$DIR/android"
./gradlew bundleStandardRelease bundleProRelease

mkdir -p "$DIR/builds"

STD_SRC="$DIR/android/app/build/outputs/bundle/standardRelease/app-standard-release.aab"
PRO_SRC="$DIR/android/app/build/outputs/bundle/proRelease/app-pro-release.aab"

STD_DEST="$DIR/builds/TheWalks-Standard-v${VERSION_NAME}.aab"
PRO_DEST="$DIR/builds/TheWalks-Pro-v${VERSION_NAME}.aab"

if [ -f "$STD_SRC" ]; then
  cp "$STD_SRC" "$STD_DEST"
fi

if [ -f "$PRO_SRC" ]; then
  cp "$PRO_SRC" "$PRO_DEST"
fi

echo "=== Done ==="
ls -lh "$DIR/builds"/*.aab
