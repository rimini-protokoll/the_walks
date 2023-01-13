---
iconUri: https://the-walks.netlify.app/icons/Park.png
id: eeJee2ke
language: fr
shortTitle: A
title: Parc A
twoPerson: true
popups: []
duration: ~ 20 Min
listed: false
srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fv0%2Ffr_ahvo7Cee%2Ffr_eeJee2ke.mp3?alt=media&token=38c1e4fd-4164-48bf-a7a6-b9af6741cff5
userPrompt:
  - actions:
      - title: OK, continuez.
        action: continue
    title: >-
      Pour que cette promenade fonctionne de manière synchrone, vous devez
      effectuer quelques réglages. Commençons par le plus simple : L’option
      “Ne pas déranger”.

      Le paramètre “Ne pas déranger” n'est pas le mode Avion. Au contraire elle maintient la connexion internet pendant votre promenade. Sur iOS (Apple), vous vous dirigez dans « Paramètres ». Ensuite activez "Ne pas déranger". Sur la plupart des appareils Android (Google), vous pouvez trouver cette fonction sous Paramètres → Sons → Ne pas déranger.
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fapi-v1%2Ffr_eeJee2ke%2Fmulti_Zeubeel8_loop%20(1).mp3?alt=media&token=941c4a41-1184-4710-a36c-9e6d53db760a
  - actions:
      - title: Autoriser
        action: camera
      - title: Pas de photo
        action: continue
    title: "Venons maintenant au deuxième paramètre : l'autorisation d'accéder à
      la caméra. Ne vous inquiétez pas, nous souhaitons pas prendre le
      contrôle de votre appareil. Il s'agit uniquement de prendre une photo
      avec votre appareil photo pendant la promenade et de la télécharger sur
      l'application. Pour cela nous avons besoin de votre consentement."
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fapi-v1%2Ffr_eeJee2ke%2Fmulti_Zeubeel8_loop%20(1).mp3?alt=media&token=ce8c892b-dc4e-4716-afa9-04f0e2829763
  - actions:
      - title: Oui
        action: geoLocation
      - title: Non
        action: continue
    title: Afin de pouvoir situer votre photo sur la carte du monde The Walks, nous
      avons besoin de vos coordonnées GPS. Les coordonnées sont enregistrées
      dans le fichier photo. Êtes-vous d'accord avec cela?
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fapi-v1%2Ffr_eeJee2ke%2Fmulti_Zeubeel8_loop%20(1).mp3?alt=media&token=6e7284aa-6b32-49d3-9f5a-d0b33b308926
  - actions:
      - title: Démarrer
        action: continue
    title: "Merci pour votre confiance. Vous êtes prêt à partir. Appuyez le
      bouton en même temps. Commencer à compter ensemble : 3. 2. 1."
    triggerTime: 0
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fapi-v1%2Ffr_eeJee2ke%2Fmulti_Zeubeel8_loop%20(1).mp3?alt=media&token=12c155c1-4b68-4533-8097-217d7d4bff42
  - title: Prendre une photo et continuer ou continuer sans photo.
    triggerTime: 786
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fv0%2Ffr_ahvo7Cee%2Ffr_ahvo7Cee_loop_1.mp3?alt=media&token=94ac9d9f-3869-461e-a664-f07295cc2086
    actions:
      - title: Prendre une photo
        action: picture
        postAction: continue
      - title: Pas de photo
        action: continue
  - actions:
      - title: SUIVANT
        action: continue
    triggerTime: 786
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fapi-v1%2Ffr_eeJee2ke%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=ead1ff00-3b9e-4937-82fe-5c4a3dda7ad5
    title: Prêt pour la suite? Appuyez en même temps SUIVANT.
  - title: Prendre une photo et continuer ou continuer sans photo.
    triggerTime: 992
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/mp3%2Fv0%2Ffr_ahvo7Cee%2Ffr_ahvo7Cee_loop_2.mp3?alt=media&token=4f95fb6d-d519-4510-8bf3-41a851543b2d
    actions:
      - title: Prendre une photo
        action: picture
        postAction: continue
      - title: Pas de photo
        action: continue
  - title: Continuer vers la galerie de photos
    triggerTime: 1028
    srcUri: https://firebasestorage.googleapis.com/v0/b/thewalks-8f658.appspot.com/o/static%2Fmedias%2Fmulti_Zeubeel8_loop.mp3?alt=media&token=88349085-3303-48b9-bdc6-fd7b09519a26
    actions:
      - title: Galerie
        action: map
      - title: Non
        action: continue
---