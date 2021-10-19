---
popups: []
iconUri: https://the-walks.netlify.app/icons/Supermarkt.png
id: thie3IVu
language: es
shortTitle: A
title: Supermercado A
duration: ~ 20 minutos
listed: false
srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fapi-v1%2Fes_thie3IVu%2Fwalk_9_Supermarkt_SP_A_.mp3?alt=media&token=316347dd-e87e-4d47-8b44-f47993941cae
userPrompt:
  - title: 'Para que este Walk funcione de manera sincronizada debes hacer dos
      ajustes. Empecemos con el más fácil: la función "No molestar". El ajuste
      "No molestar" no es el modo avión. Mantiene la conexión a internet durante
      tu Walk. Con iOS (Apple) vas a "Ajustes". Ahí activas "No molestar". En la
      mayoría de los dispositivos Android (Google), esta función la encuentras
      bajo Ajustes → Sonidos → No molestar.'
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Okey, continuar.
        action: continue
  - title: "Ahora viene el segundo ajuste: permitir el acceso a tu cámara. No te
      preocupes, no queremos asumir el control de tu dispositivo. De lo único
      que se trata es que durante el Walk tomes una foto con tu cámara y la
      cargues en la aplicación. Para ello necesitamos tu consentimiento."
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Aceptar
        action: camera
      - title: Sin foto
        action: continue
  - title: >-
      Para poder posicionar geográficamente tu foto en el mapa mundial de The
      Walks, necesitamos tus coordenadas GPS. Las coordenadas se guardan en el
      archivo de foto.

      ¿Estás de acuerdo?
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Sí
        action: geoLocation
      - title: No
        action: continue
  - title: "Gracias por tu confianza. Eso fue todo. Ahora podemos empezar. Opriman
      simultáneamente el botón. Cuenten juntos: 3. 2. 1."
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Inicio
        action: continue
  - title: Tomar una foto y continuar o continuar sin foto.
    triggerTime: 645
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fapi-v1%2Fes_thie3IVu%2Fwalk_9_Supermarkt_SP__LOOP_%2010_45min.mp3?alt=media&token=783891ce-3a77-4f6f-b557-be28bf40bb18
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
