# React Native core
-keep,allowobfuscation @interface com.facebook.proguard.annotations.DoNotStrip
-keep,allowobfuscation @interface com.facebook.proguard.annotations.KeepGettersAndSetters
-keep,allowobfuscation @interface com.facebook.common.internal.DoNotStrip

-keep @com.facebook.proguard.annotations.DoNotStrip class *
-keep @com.facebook.common.internal.DoNotStrip class *

-keepclassmembers class * {
    @com.facebook.proguard.annotations.DoNotStrip *;
    @com.facebook.common.internal.DoNotStrip *;
}

-keepclassmembers @com.facebook.proguard.annotations.KeepGettersAndSetters class * {
    void set*(***);
    *** get*();
}

-keep class com.facebook.react.bridge.JavaScriptModule { *; }
-keep class com.facebook.react.bridge.NativeModule { *; }
-keepclassmembers class * extends com.facebook.react.bridge.NativeModule {
    @com.facebook.react.bridge.ReactMethod *;
}
-keep class com.facebook.react.uimanager.ViewManager { *; }
-keep class * extends com.facebook.react.uimanager.ViewManager { *; }
-keepclassmembers class * extends com.facebook.react.uimanager.ViewManager {
    @com.facebook.react.uimanager.annotations.ReactProp *;
    @com.facebook.react.uimanager.annotations.ReactPropGroup *;
}

-keep class com.facebook.react.turbomodule.** { *; }

# React Native Reanimated & Screens & Gesture Handler
-keep class com.swmansion.reanimated.** { *; }
-keep class com.swmansion.rnscreens.** { *; }
-keep class com.swmansion.gesturehandler.** { *; }

# React Native Track Player & Media
-keep class com.doublesymmetry.trackplayer.** { *; }
-keep class com.google.android.exoplayer2.** { *; }
-keep class androidx.media3.** { *; }

# React Native Maps
-keep class com.airbnb.android.react.maps.** { *; }
-keep class com.rnmaps.maps.** { *; }
-keepclassmembers class com.rnmaps.maps.** { *; }
-keep class com.google.android.gms.maps.** { *; }

# React Native SVG
-keep class com.horcrux.svg.** { *; }
-keepclassmembers class com.horcrux.svg.** { *; }
-dontwarn com.horcrux.svg.**

# Firebase
-dontwarn com.google.firebase.**
-keep class com.google.firebase.** { *; }

# AsyncStorage
-keep class com.reactnativecommunity.asyncstorage.** { *; }

# Vector Icons
-keep class com.oblador.vectoricons.** { *; }

# Native Modules
-keep class com.learnium.RNDeviceInfo.** { *; }
-keep class com.zoontek.rnlocalize.** { *; }
-keep class com.zoontek.rnpermissions.** { *; }
-keep class com.rnfs.** { *; }
-keep class com.agontuk.RNFusedLocation.** { *; }
-keep class com.reactnativecommunity.netinfo.** { *; }
-keep class com.reactnativecommunity.picker.** { *; }
-keep class com.imagepicker.** { *; }
-keep class org.reactnative.maskedview.** { *; }
