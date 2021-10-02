---
popups: []
id: thie3IVu
listed: false
language: en
shortTitle: A
title: Supermarket A
duration: ~ 20 Min
srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fv0%2Fen_uma9ooK4%2Fen_thie3IVu.mp3?alt=media&token=3c4a01f2-5866-4334-bb58-16f1ba380ee2
iconUri: https://the-walks.netlify.app/icons/Supermarkt.png
userPrompt:
  - title: >-
      For this walk to work synchronously, you should make a few settings. Let's start with the easiest one: the "Do not disturb" function.
      The "Do not disturb" setting is not the flight mode. It maintains your internet connection during your Walk. Now, with iOS (Apple), go to "Settings." Activate "Do not disturb" there. With most Android devices (Google), you can find this feature under Settings → Sounds → Do Not Disturb.
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Okay, continue.
        action: continue
  - title: >-
      Now we come to the second setting: permission to access your camera. Don't worry, we're not trying to take control of your device. It's just about taking a photo with your camera during the Walk and uploading it to the app. We need your permission to do that.
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Agree
        action: camera
      - title: No Photo
        action: continue
  - title: >-
      In order to be able to locate your photo geographically on the world map of The Walks, we need your GPS coordinate. It will be saved in the photo file.

      Do you agree with this?
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Yes
        action: geoLocation
      - title: No
        action: continue
  - title: >-
      Thank you for your trust. That's it. Here we go.
      Press the button at the same time.

      Count together: 3. 2. 1.
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Start
        action: continue
  - title: Take a photo and continue or continue without photo.
    triggerTime: 645
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fv0%2Fen_uma9ooK4%2Fen_uma9ooK4_loop_1.mp3?alt=media&token=249a9d82-13f6-492f-98da-7c73533a2de9
    actions:
      - title: Take photo
        action: picture
        postAction: continue
      - title: No photo
        action: continue
  - title: Continue to the gallery
    triggerTime: 1328
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Gallery
        action: map
      - title: No
        action: continue
---
