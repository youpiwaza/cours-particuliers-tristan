# Taf

Le dossier où l'on effectue le boulot :)

## Liens utiles

- [La base du html](https://html5boilerplate.com/)
- Validateur w3C > installer plugin pour éditeur de texte !!
- [Css: homogénéiser les différents navigateurs / normalize.css](https://necolas.github.io/normalize.css/)
- [JS / Compatibilité](https://modernizr.com/)
- [Git](https://www.gitkraken.com/)
- [favicon](http://favicon.htmlkit.com/)
- [validation w3c](https://validator.w3.org/) > Validate by file upload (envoi du fichier html)
- [fontawesome pour les icones](https://fontawesome.com/)

## Les trucs a regarder pour la culture

- [og](https://fr.wikipedia.org/wiki/Open_Graph_Protocol)
- [site.webmanifest](https://developer.mozilla.org/fr/docs/Web/Manifest)
- images optimisées
  - [PNG > A l'ancienne](https://tinypng.com/)
  - Jpg > compression 60 + progressif
  - webp mais [attention](https://caniuse.com/?search=webp)
  - [xnview logiciel images](https://www.xnview.com/fr/)
- Icone devant lire plus > [css ::before](https://developer.mozilla.org/fr/docs/Web/CSS/::before)
- accessibilité : [aria label & roles](https://developer.mozilla.org/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute)

## Un exemple de veille/apprentissage/questions d'entretien d'embauche

La question était [ici](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/main/src/questions/general-questions.md).

La question : Explain what ARIA and screenreaders are, and how to make a website accessible.

La trad : Expliquez ce que sont **ARIA** et les **lecteurs d'écran**, et comment rendre un site **Web accessible**.

>> On sort les mots clés, on les recherche

## Accessibilité du web

Liens :

- [wiki](https://fr.wikipedia.org/wiki/Accessibilit%C3%A9_du_web)
- [mdn accessibilité](https://developer.mozilla.org/fr/docs/Web/Accessibility)
- [mdn > HTML : une bonne base pour l'accessibilité](https://developer.mozilla.org/fr/docs/Learn/Accessibility/HTML)

## Lecteur écran

Liens :

- [wiki Lecteur d'écran](https://fr.wikipedia.org/wiki/Lecteur_d%27%C3%A9cran)

## ARIA

Liens :

- [MDN aria](https://developer.mozilla.org/fr/docs/Web/Accessibility/ARIA)
- fouiller + concret [ARIA attribut role](https://www.anysurfer.be/fr/documentation/articles/detail/aria-lattribut-role#:~:text=Certains%20r%C3%B4les%20correspondent%20s%C3%A9mantiquement%20%C3%A0,exemple%20role%3D%22tablist%20%22.)
- [ARIA label](https://developer.mozilla.org/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute)

## Ce que j'ai retenu :

Le web pour les personnes handicapées : aveugles, sourds, dyslexiques.

Adapter les sites > html : bien choisir les balises, bien diversifier, etc: ca aide le lecteur et la navigation. Attention élément intéractifs (boutons, clics etc.)

Outils : lecteurs d'écrans > Le logiciel "lit" le site et le transmet "[en parlant](https://www.youtube.com/watch?v=cCHGZLmJJgQ)" ou [en braille](https://www.youtube.com/watch?v=pio--HoSa7Q)

Aria = Accessible Rich Internet Applications (ARIA) : Un attribut (HMTL) attribut > complète HTML sur éléments interactifs

2 trucs qui resortent : 

- [attribut role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role)
- attribut aria-label

## A FAIRE EN VRAI

1. Connaitre le sujet : de quoi ca parle
2. S'y intérrésser pour vrai > bien lire, reportages, etc.
3. Foutre les mains dedans : faire du code
   1. Voir index.html cours-particuliers-tristan\210827 Cours 01\taf\index.html
   2. Par exemple précédent suivant sur boutons sliders
