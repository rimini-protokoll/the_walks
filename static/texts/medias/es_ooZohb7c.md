---
popups: []
iconUri: https://the-walks.netlify.app/icons/Supermarkt.png
id: ooZohb7c
language: es
shortTitle: B
title: Supermercado B
duration: ~ 20 minutos
listed: true
srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fapi-v1%2Fes_ooZohb7c%2Fwalk_9_Supermarkt_SP_B_.mp3?alt=media&token=af6cbdd9-9137-4fa6-8639-f878e91b4da8
userPrompt:
  - title: 'Para que este Walk funcione de manera sincronizada debes hacer dos
      ajustes. Empecemos con el más fácil: la función "No molestar". El ajuste
      "No molestar" no es el modo avión. Mantiene la conexión a internet durante
      tu Walk. Con iOS (Apple) vas a "Ajustes" → "Concentración". Ahí activas
      "No molestar". En la mayoría de los dispositivos Android (Google), esta
      función la encuentras bajo Ajustes → Sonidos → No molestar.'
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
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fapi-v1%2Fes_ooZohb7c%2Fwalk_9_Supermarkt_SP__LOOP_%2010_45min.mp3?alt=media&token=c87ed04a-4fdb-453d-95a0-582c957a4b33
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
