#### General structure application rules ####
/src

    /components (1)
        /compA
            /images
            /infos
            /index.js
            /styles.scss
            /components
        /CompB

    /scenes (2)
        /sceneA
            /infos
            /components
            /scenes
            /services
            index.js
            index.scss
        /sceneB

    /Services (3)
        /serviceA
        /serviceB

##### Explanations #####
    *Components*
    * (1) are general and can be used everywhere
    * (1) Can contain others components
    * (1) Cannot contain scenes (2) nor services(3)

    *Scenes*
    * (2) can be thing as different screen in the app
    * (2) can contain components, others scenes and services specific for a scene
    * (2) can use (1) and (3)

    *Services*
    * (3) are relate to data and it managements
