
# Documentation du Fichier `getScript.js`

## Description Globale

Le fichier `getScript.js` est un script de chargement pour Syracuse, créé par Christophe Leonardi le 02/03/2023. Il définit une fonction `loadScripts` qui est utilisée pour charger dynamiquement des scripts JavaScript et des feuilles de style CSS sur une page web, en fonction de la présence d'un élément HTML spécifique identifié par son ID.

### Fonction `loadScripts`

```javascript
const loadScripts = (objInfos) => {
    // ... (le contenu de la fonction)
};
```

#### Description
La fonction `loadScripts` charge conditionnellement des scripts et des feuilles de style sur une page web. Elle prend un objet `objInfos` comme paramètre, qui contient les URLs des scripts et des feuilles de style à charger, ainsi que l'ID d'un élément HTML qui déclenche le chargement lorsque cet élément est présent sur la page.

#### Installation
Inclure fichier `getScript.js` dans le fichier `portal-master-front.xslt`

#### Paramètre `objInfos`

- **Type** : Objet
- **Propriétés** :
    - `lib_url`: Un tableau de chaînes de caractères, contenant les URLs des scripts JavaScript à charger.
    - `css_url`: Un tableau de chaînes de caractères, contenant les URLs des feuilles de style CSS à charger.
    - `tagId`: Une chaîne de caractères représentant l'ID de l'élément HTML qui, lorsqu'il est présent sur la page, déclenche le chargement des scripts et des CSS.

### Exemple d'utilisation

```javascript
const examplePlugin = {
    lib_url: [
        "https://example.com/script1.js",
        "https://example.com/script2.js"
    ],
    css_url: [
        "https://example.com/style1.css",
        "https://example.com/style2.css"
    ],
    tagId: "#exampleId"
};

loadScripts(examplePlugin);
```

Dans cet exemple, `lib_url` et `css_url` contiennent les URLs des scripts et des feuilles de style à charger respectivement. La propriété `tagId` contient l'ID de l'élément HTML qui, s'il est trouvé sur la page, déclenchera le chargement des ressources spécifiées.
