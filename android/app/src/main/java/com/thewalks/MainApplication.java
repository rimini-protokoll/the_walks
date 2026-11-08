package com.thewalks;

import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.soloader.OpenSourceMergedSoMapping;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());
          return packages;
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    try {
      Class<?> firebaseAppClass = Class.forName("com.google.firebase.FirebaseApp");
      java.lang.reflect.Method getAppsMethod = firebaseAppClass.getMethod("getApps", Context.class);
      java.util.List<?> apps = (java.util.List<?>) getAppsMethod.invoke(null, this);
      if (apps == null || apps.isEmpty()) {
        Class<?> optionsBuilderClass = Class.forName("com.google.firebase.FirebaseOptions$Builder");
        Object builder = optionsBuilderClass.getDeclaredConstructor().newInstance();
        optionsBuilderClass.getMethod("setApplicationId", String.class).invoke(builder, "1:123456789012:android:0123456789abcdef012345");
        optionsBuilderClass.getMethod("setProjectId", String.class).invoke(builder, "the-walks");
        optionsBuilderClass.getMethod("setApiKey", String.class).invoke(builder, "AIzaSyD0123456789abcdefghijklmnopqrstu");
        Object options = optionsBuilderClass.getMethod("build").invoke(builder);
        Class<?> firebaseOptionsClass = Class.forName("com.google.firebase.FirebaseOptions");
        firebaseAppClass.getMethod("initializeApp", Context.class, firebaseOptionsClass).invoke(null, this, options);
      }
    } catch (Exception e) {
      e.printStackTrace();
    }
    try {
      SoLoader.init(this, OpenSourceMergedSoMapping.INSTANCE);
    } catch (java.io.IOException e) {
      throw new RuntimeException(e);
    }
    initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
  }

  /**
   * Loads Flipper in React Native templates. Call this in the onCreate method with something like
   * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
   *
   * @param context
   * @param reactInstanceManager
   */
  private static void initializeFlipper(
      Context context, ReactInstanceManager reactInstanceManager) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("com.the_walks.ReactNativeFlipper");
        aClass
            .getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)
            .invoke(null, context, reactInstanceManager);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }
}
