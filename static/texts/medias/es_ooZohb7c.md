---
popups: []
id: ooZohb7c
listed: true
language: es
shortTitle: B
title: Supermercado B
duration: ~ 20 minutos
srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fv0%2Fit_uma9ooK4%2Fit_ooZohb7c.mp3?alt=media&token=bd390725-da4b-4ad4-bf37-7ad2101d3cf4
iconUri: https://the-walks.netlify.app/icons/Supermarkt.png
userPrompt:
  - title: >-
      Affinché questa passeggiata funzioni sincronicamente, è necessario configurare alcune impostazioni. Cominciamo con la più semplice: la funzione "Non disturbare".
      L'impostazione "Non disturbare" non è come la "modalità aereo". Durante la passeggiata si rimane connessi a internet. Con iOS (Apple), vai su "Impostazioni". Attiva "Non disturbare". Con la maggior parte dei dispositivi Android (Google), troverete questa funzione su "Impostazioni" → "Suoni" → "Non disturbare".
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Ok, avanti.
        action: continue
  - title: >-
      Ora veniamo alla seconda impostazione: il permesso di accedere alla tua fotocamera. Non preoccuparti, non vogliamo prendere il controllo del tuo dispositivo. Si tratta solo di scattare una foto con la tua fotocamera durante la passeggiata e caricarla sull'app. Abbiamo bisogno del tuo permesso per farlo.
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: D'accordo
        action: camera
      - title: Nessuna foto
        action: continue
  - title: >-
      Per poter assegnare geograficamente la tua foto sulla mappa mondiale di The Walks, abbiamo bisogno delle tue coordinate GPS. Questo sarà salvato nel file della foto.
      Sei d'accordo?

    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Sì
        action: geoLocation
      - title: No
        action: continue
  - title: >-
      Grazie per la tua fiducia. Questo è tutto. Ora andiamo. Premete entrambi nello stesso momento il pulsante.

      Contate insieme: 3. 2. 1.
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Inizio
        action: continue
  - title: Tomar una foto y continuar o continuar sin foto.
    triggerTime: 645
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fv0%2Fit_uma9ooK4%2Fit_uma9ooK4_loop_1.mp3?alt=media&token=045432f2-4c91-430f-a57e-5383544af85c
    actions:
      - title: Tomar foto
        action: picture
        postAction: continue
      - title: Sin foto
        action: continue
  - title: Continuar a galería
    triggerTime: 1328
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Galería
        action: map
      - title: No
        action: continue
---