---
iconUri: https://the-walks.netlify.app/icons/Park.png
id: eeJee2ke
language: en
shortTitle: A
title: Park A
twoPerson: true
popups: []
duration: ~ 20 Min
listed: false
srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fv0%2Fen_ahvo7Cee%2Fen_eeJee2ke.mp3?alt=media&token=819857ae-b8dc-407d-85c9-536f81324f5c
userPrompt:
  - title: "For this walk to work synchronously, you should make a few settings.
      Let's start with the easiest one: the \"Do not disturb\" function. The
      \"Do not disturb\" setting is not the flight mode. It maintains your
      internet connection during your Walk. Now, with iOS (Apple), go to
      \"Settings\" → \"Focus\". Activate \"Do not disturb\" there. With most
      Android devices (Google), you can find this feature under Settings →
      Sounds → Do Not Disturb."
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Okay, continue.
        action: continue
  - title: "Now we come to the second setting: permission to access your camera.
      Don't worry, we're not trying to take control of your device. It's just
      about taking a photo with your camera during the Walk and uploading it to
      the app. We need your permission to do that."
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Agree
        action: camera
      - title: No Photo
        action: continue
  - title: >-
      In order to be able to locate your photo geographically on the world map
      of The Walks, we need your GPS coordinate. It will be saved in the photo
      file.

      Do you agree with this?
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Yes
        action: geoLocation
      - title: No
        action: continue
  - title: >-
      Thank you for your trust. That's it. Here we go. Press the button at the
      same time.

      Count together: 3. 2. 1.
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Start
        action: continue
  - title: Take a photo and continue or continue without photo.
    triggerTime: 786
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fv0%2Fen_ahvo7Cee%2Fen_ahvo7Cee_loop_1.mp3?alt=media&token=e76eba89-d8cf-47fe-be22-ea09e8ff7869
    actions:
      - title: Take photo
        action: picture
        postAction: continue
      - title: No photo
        action: continue
  - actions:
      - title: CONTINUE
        action: continue
    triggerTime: 786
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fapi-v1%2Fen_eeJee2ke%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=7d7daa93-ead8-4372-85bb-dca6a400bd8b
    title: Ready to move on? Then both press CONTINUE at the same time.
  - title: Take a photo and continue or continue without photo.
    triggerTime: 960
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fv0%2Fen_ahvo7Cee%2Fen_ahvo7Cee_loop_2.mp3?alt=media&token=1a3a9ece-6dc2-458d-b815-df2fd2f47c64
    actions:
      - title: Take photo
        action: picture
        postAction: continue
      - title: No photo
        action: continue
  - title: Continue to the gallery
    triggerTime: 1028
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Gallery
        action: map
      - title: No
        action: continue
---
