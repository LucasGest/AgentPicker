// script.js

const agents = [
  {
    name: "Jett",
    image: "../img/jett.webp",
    info: [
      {
        description:
          "Représentante de sa patrie, la Corée du Sud, Jett dispose d'un style de combat basé sur l'agilité et l'esquive, qui lui permet de prendre des risques qu'elle seule peut se permettre de prendre. Elle tourne autour des affrontements et découpe ses ennemis avant même qu'ils ne s'en rendent compte.",
      },
    ],
    abilities: [
      {
        img: "../img/abilities/updraft.png",
        aname: "Courant Ascendant",
        description: "Vous vous propulsez INSTANTANÉMENT dans les airs.",
      },
      {
        img: "../img/abilities/dashJett.png",
        aname: "Vent arrière",
        description:
          "ACTIVEZ pour préparer une rafale de vent pendant une durée limitée. RÉUTILISEZ la compétence pour vous propulser dans la direction vers laquelle vous vous dirigez. Si vous êtes immobile, vous vous propulsez vers l'avant. Vous regagnez une charge de Vent arrière toutes les deux éliminations.",
      },
      {
        img: "../img/abilities/smokeJett.png",
        aname: "Averse",
        description:
          "Lancez INSTANTANÉMENT un projectile. Lorsqu'il touche une surface, il libère un nuage qui bloque la vision pendant un court instant. MAINTENEZ la touche de la compétence pour courber la fumée dans la direction de votre réticule.",
      },
      {
        img: "../img/abilities/ultJett.png",
        aname: "Tempêtes de lames",
        description:
          "ÉQUIPEZ-vous d'un ensemble de couteaux de lancer extrêmement précis. TIREZ pour lancer un seul couteau (se recharge en cas d'élimination). Utilisez le TIR SECONDAIRE pour lancer tous les couteaux restants (ne se recharge pas).",
      },
    ],
  },
  {
    name: "Brimstone",
    image: "../img/brimstone.webp",
    info: [
      {
        description:
          "Tout droit venu des États-Unis d'Amérique, Brimstone possède un arsenal orbital qui permet à son escouade de toujours avoir l'avantage. La précision et la fiabilité de ses compétences utilitaires font de lui un commandant sans égal sur le terrain.",
      },
    ],
    abilities: [
      {
        img: "../img/abilities/moly.png",
        aname: "Bombe Incendiaire",
        description:
          "ÉQUIPEZ-vous d'un lance-grenades incendiaires. TIREZ pour lancer une grenade qui explose lorsqu'elle s'arrête au sol, créant une zone enflammée persistante qui blesse les joueurs.",
      },
      {
        img: "../img/abilities/smokeBrim.png",
        aname: "Frappe Fumigène",
        description:
          "ÉQUIPEZ-vous d'une carte tactique. TIREZ pour définir les endroits où les nuages de fumée de Brimstone atterriront. Utilisez le TIR SECONDAIRE pour confirmer, ce qui lance des nuages de fumée durables qui bloquent la vision dans la zone sélectionnée.",
      },
      {
        img: "../img/abilities/balise.png",
        aname: "Balise Stimulante",
        description:
          "ÉQUIPEZ-vous d'une balise stimulante. TIREZ pour lancer la balise devant Brimstone. Lorsqu'elle touche le sol, la balise crée un champ qui confère Tir rapide aux joueurs.",
      },
      {
        img: "../img/abilities/ultBrim.png",
        aname: "Rayon Orbital",
        description:
          "ÉQUIPEZ-vous d'une carte tactique. TIREZ pour ordonner une frappe orbitale persistante à l'endroit sélectionné, ce qui inflige d'importants dégâts sur la durée aux joueurs pris dans la zone.",
      },
    ],
  },
  {
    name: "Phoenix",
    image: "../img/phoenix.webp",
    info: [
      {
        description:
          "En provenance du Royaume-Uni, Phoenix illumine le champ de bataille avec ses pouvoirs astraux et son style de combat flamboyant. Peu importe que les renforts arrivent ou non, il fonce au combat quand il le décide.",
      },
    ],
    abilities: [
      {
        img: "../img/abilities/flashP.png",
        aname: "Balles Courbes",
        description:
          "ÉQUIPEZ-vous d'un orbe flamboyant qui explose peu après avoir été lancé, aveuglant tous les joueurs qui le regardent. TIREZ pour courber la trajectoire de l'orbe vers la gauche. Utilisez le TIR SECONDAIRE pour courber la trajectoire de l'orbe vers la droite.",
      },
      {
        img: "../img/abilities/molyP.png",
        aname: "Mains Brulantes",
        description:
          "ÉQUIPEZ-vous d'une boule de feu. TIREZ pour lancer une boule de feu qui explose après un certain temps ou en touchant le sol, créant une zone enflammée persistante qui blesse les ennemis.",
      },
      {
        img: "../img/abilities/wallP.png",
        aname: "Brasier",
        description:
          "ÉQUIPEZ-vous d'un mur de feu. TIREZ pour créer une ligne de feu qui se déplace vers l'avant, créant un mur de feu qui bloque la vision et blesse les joueurs qui le traversent. MAINTENEZ LE TIR pour courber le mur dans la direction de votre réticule.",
      },
      {
        img: "../img/abilities/ultP.png",
        aname: "Revanche",
        description:
          "Placez INSTANTANÉMENT un marqueur sur votre position. Tant que cette compétence est active, mourir vous renvoie à cette position avec tous vos PV (même chose si la compétence expire",
      },
    ],
  },
  {
    name: "Sage",
    image: "../img/sage.webp",
    info: [
      {
        description:
          "Véritable pilier originaire de Chine, Sage assure sa sécurité et celle de son équipe où qu'elle aille. Elle peut réanimer ses alliés tombés au combat et repousser les assauts ennemis pour offrir des oasis de tranquillité sur un champ de bataille infernal.",
      },
    ],
    abilities: [
      {
        img: "../img/abilities/slowS.png",
        aname: "Orbes de Lenteur",
        description:
          "ÉQUIPEZ-vous d'un orbe ralentissant. TIREZ pour lancer l'orbe devant vous. Lorsqu'il touche le sol, l'orbe explose et crée un champ persistant qui ralentit les joueurs qui s'y trouvent.",
      },
      {
        img: "../img/abilities/heal.png",
        aname: "Orbe de soin",
        description:
          "ÉQUIPEZ-vous d'un orbe de soin. TIREZ en visant un allié blessé pour lui rendre des PV sur la durée. Si vous avez subi des dégâts, utilisez le TIR SECONDAIRE pour récupérer des PV sur la durée.",
      },
      {
        img: "../img/abilities/wall.png",
        aname: "Orbe Barrière",
        description:
          "ÉQUIPEZ-vous d'un orbe barrière. TIRER permet de placer un mur solide. Le TIR SECONDAIRE fait pivoter le cibleur.",
      },
      {
        img: "../img/abilities/rez.png",
        aname: "Résurrection",
        description:
          "ÉQUIPEZ-vous d'une compétence de résurrection. TIREZ en visant un allié mort pour le ramener à la vie. Après une courte canalisation, votre allié est ramené à la vie avec tous ses PV.",
      },
    ],
  },
  {
    name: "Reyna",
    image: "../img/reyna.webp",
    info: [
      {
        description:
          "Originaire du cœur du Mexique, Reyna est une experte des combats singuliers qui se renforce à chaque élimination qu'elle réussit. Son efficacité n'est limitée que par son habileté, ce qui la rend très dépendante de ses propres performances.",
      },
    ],
    abilities: [
      {
        img: "../img/abilities/healR.png",
        aname: "Dévoration",
        description:
          "Les ennemis tués par Reyna laissent des orbes d'âme qui durent 3 sec. Vous consommez INSTANTANÉMENT un orbe d'âme proche pour rapidement regagner des PV pendant un court instant. Au-delà de 100 PV, les PV ainsi gagnés sont perdus progressivement. Si IMPÉRATRICE est active, cette compétence se lancera automatiquement et ne consommera pas d'orbe.",
      },
      {
        img: "../img/abilities/dismissR.png",
        aname: "Rebuffade",
        description:
          "Vous consommez INSTANTANÉMENT un orbe d'âme proche et devenez intangible pendant un court instant. Si IMPÉRATRICE est active, vous devenez également invisible.",
      },
      {
        img: "../img/abilities/flashR.png",
        aname: "Oeillade",
        description:
          "ÉQUIPEZ-vous d'un œil éthéré destructible. ACTIVEZ pour lancer l'œil vers l'avant sur une courte distance. L'œil rend myopes tous les ennemis qui le regardent.",
      },
      {
        img: "../img/abilities/ultRey.png",
        aname: "Impératrice",
        description:
          "Entrez INSTANTANÉMENT en furie, ce qui augmente considérablement vos vitesses de tir, de changement d'arme et de rechargement. Réussir une élimination réinitialise la durée.",
      },
    ],
  },
  {
    name: "Raze",
    image: "../img/raze.webp",
    info: [
      {
        description:
          "Armée de sa personnalité et de sa grosse artillerie, Raze fait une entrée explosive depuis le Brésil. Grâce à sa force brute, elle excelle à débusquer les ennemis retranchés et à faire le ménage dans les espaces étroits, le tout avec une bonne dose de BOUM.",
      },
    ],
    abilities: [
      {
        img: "../img/abilities/satchel.png",
        aname: "Packs Explosifs",
        description:
          "Lancez INSTANTANÉMENT un pack explosif qui se colle aux surfaces. RÉUTILISEZ la compétence pour déclencher l'explosion, ce qui blesse et déplace tous ceux pris dans le souffle. Raze n'est pas blessée par cette compétence, mais elle subit des dégâts de chute si elle tombe d'assez haut.",
      },
      {
        img: "../img/abilities/grenade.png",
        aname: "Grenade Cigogne",
        description:
          "ÉQUIPEZ-vous d'une grenade à sous-munitions. TIREZ pour lancer la grenade. Elle inflige des dégâts et crée des sous-munitions qui blessent tous ceux qui sont à leur portée. Utilisez le TIR SECONDAIRE pour la lancer en cloche. Vous regagnez une charge de Grenade gigogne toutes les deux éliminations.",
      },
      {
        img: "../img/abilities/boombot.png",
        aname: "Boom Bot",
        description:
          "ÉQUIPEZ-vous d'un Boum Bot. TIREZ pour déployer le bot, ce qui le propulse en ligne droite sur le sol. Il rebondit contre les murs. Les Boum Bots se verrouillent sur les ennemis situés dans un cône face à eux et les chassent, explosant quand ils les atteignent en infligeant de lourds dégâts.",
      },
      {
        img: "../img/abilities/ultRa.png",
        aname: "Bouquet Final",
        description:
          "ÉQUIPEZ-vous d'un lance-roquettes. TIREZ pour lancer une roquette qui inflige de lourds dégâts de zone au premier contact.",
      },
    ],
  },
  {
    name: "Omen",
    image: "../img/omen.webp",
    info: [
      {
        description:
          "Véritable fantôme d'un souvenir, Omen chasse dans les ténèbres. Il aveugle les ennemis, se téléporte d'un bout à l'autre du champ de bataille et laisse la peur se répandre parmi ses adversaires qui se demandent qui sera sa prochaine victime.",
      },
    ],
    abilities: [
      {
        img: "../img/abilities/paranoia.png",
        aname: "Paranoïa",
        description:
          "Tirez INSTANTANÉMENT un projectile d'ombre vers l'avant, ce qui réduit brièvement la portée de la vision de tous les joueurs touchés. Ce projectile peut traverser les murs.",
      },
      {
        img: "../img/abilities/smokeO.png",
        aname: "Voiles Sombres",
        description:
          "ÉQUIPEZ-vous d'un orbe d'ombre et entrez dans un monde déphasé afin d'y lancer des orbes. APPUYEZ sur la touche de la compétence pour lancer l'orbe à l'endroit marqué, ce qui crée une sphère d'ombre durable qui bloque la vision. MAINTENEZ LE TIR tout en visant pour éloigner le marqueur. MAINTENEZ LE TIR SECONDAIRE tout en visant pour rapprocher le marqueur. APPUYEZ sur RECHARGER pour repasser en visée normale.",
      },
      {
        img: "../img/abilities/tpO.png",
        aname: "Voie Des Ombres",
        description:
          "ÉQUIPEZ-vous d'une compétence de marche des ombres accompagnée d'un indicateur de portée. TIREZ pour commencer une courte canalisation avant de vous téléporter vers l'endroit marqué.",
      },
      {
        img: "../img/abilities/ultO.png",
        aname: "Depuis les Ombres",
        description:
          "ÉQUIPEZ-vous d'une carte tactique. TIREZ pour commencer à vous téléporter vers l'endroit sélectionné. Pendant la téléportation, vous apparaissez sous forme d'ombre. Les ennemis peuvent détruire cette ombre pour annuler votre téléportation.",
      },
    ],
  },
  {
    name: "Viper",
    image: "../img/viper.webp",
    info: [
      {
        description:
          "Viper est une chimiste américaine qui déploie un arsenal d'appareils toxiques pour contrôler le champ de bataille et entraver la vision des ennemis. Si les toxines ne suffisent pas à abattre sa proie, ses machinations finiront le travail.",
      },
    ],
    abilities: [
      {
        img: "../img/abilities/smokeV.png",
        aname: "Nuage de Poison",
        description:
          "ÉQUIPEZ-vous d'un diffuseur de gaz. TIREZ pour lancer le diffuseur, qui reste présent jusqu'à la fin de la manche. RÉUTILISEZ la compétence pour créer un nuage de fumée toxique qui consomme du carburant. Cette compétence peut être ramassée et REDÉPLOYÉE avant le début de la manche et RÉUTILISÉE plus d'une fois pendant la manche.",
      },
      {
        img: "../img/abilities/wallV.png",
        aname: "Ecran Toxique",
        description:
          "ÉQUIPEZ-vous d'un lance-diffuseurs de gaz. TIREZ pour déployer une longue ligne de diffuseurs de gaz. RÉUTILISEZ la compétence pour créer un mur de gaz toxique qui consomme du carburant. Cette compétence peut être RÉUTILISÉE plus d'une fois.",
      },
      {
        img: "../img/abilities/poison.png",
        aname: "Morsure du Serpent",
        description:
          "ÉQUIPEZ-vous d'un lance-grenades chimiques. TIREZ pour lancer une grenade qui se brise en touchant le sol, créant une zone chimique persistante qui blesse les ennemis.",
      },
      {
        img: "../img/abilities/ultV.png",
        aname: "Nid de Vipères",
        description:
          "ÉQUIPEZ-vous d'un vaporisateur chimique. TIREZ pour vaporiser un nuage chimique tout autour de Viper, créant un large nuage qui réduit la portée de la vision et les PV max des joueurs qui se trouvent dedans.",
      },
    ],
  },
  {
    name: "Breach",
    image: "../img/breach.webp",
    info: [
      {
        description:
          "Breach, le Suédois bionique, tire de puissantes décharges cinétiques pour ouvrir un chemin en territoire ennemi. Grâce aux dégâts et aux diversions ainsi provoqués, aucun combat n'est jamais en sa défaveur.",
      },
    ],
    abilities: [
      {
        img: "../img/abilities/flashBre.png",
        aname: "Points d'Ignition",
        description:
          "ÉQUIPEZ-vous d'une charge aveuglante. TIREZ pour provoquer une explosion rapide à travers le mur. La charge explose en aveuglant tous les joueurs qui la regardent.",
      },
      {
        img: "../img/abilities/stunB.png",
        aname: "Ligne de Fracture",
        description:
          "ÉQUIPEZ-vous d'un explosif sismique. MAINTENEZ LE TIR pour augmenter la distance. RELÂCHEZ pour provoquer un séisme qui désoriente tous les joueurs dans la zone et sur une ligne menant à la zone.",
      },
      {
        img: "../img/abilities/patate.png",
        aname: "Réplique",
        description:
          "ÉQUIPEZ-vous d'une charge à fusion. TIREZ pour provoquer une explosion lente à travers le mur. L'explosion inflige d'importants dégâts à tous ceux dans la zone.",
      },
      {
        img: "../img/abilities/ultBreach.png",
        aname: "Onde Sismique",
        description:
          "ÉQUIPEZ-vous d'une charge sismique. TIREZ pour envoyer un séisme déferlant à travers tous les obstacles dans une large zone conique. Le séisme désoriente et projette en l'air tous ceux qu'il touche.",
      },
    ],
  },
  {
    name: "Cypher",
    image: "../img/cypher.webp",
    info: [
      {
        description:
          "Informateur originaire du Maroc, Cypher est un véritable réseau de surveillance à lui tout seul. Il révèle tous les secrets. Il détecte toutes les manœuvres. Rien n'échappe à Cypher.",
      },
    ],
    abilities: [
      {
        img: "../img/abilities/cage.png",
        aname: "Cybercage",
        description:
          "Lancez INSTANTANÉMENT la cybercage devant Cypher. ACTIVEZ pour créer une zone qui bloque la vision et qui ralentit les ennemis qui la traversent.",
      },
      {
        img: "../img/abilities/camera.png",
        aname: "Caméra Espionne",
        description:
          "ÉQUIPEZ-vous d'une caméra espionne. TIREZ pour placer la caméra espionne à l'endroit ciblé. RÉUTILISEZ cette compétence pour prendre le contrôle de la caméra. Quand vous contrôlez la caméra, TIREZ pour envoyer une fléchette de marquage. Cette fléchette révélera la position de tout joueur qu'elle a touché. La balise peut être ramassée pour être REDÉPLOYÉE.",
      },
      {
        img: "../img/abilities/fildedet.png",
        aname: "Fil de Détente",
        description:
          "ÉQUIPEZ-vous d'un fil de détente. TIREZ pour placer un fil de détente dissimulé et destructible, créant une ligne qui va du point de placement au mur opposé. Les joueurs ennemis qui franchissent le fil de détente seront attachés, révélés et désorientés après un court instant s'ils ne détruisent pas le dispositif dans les temps. Le fil peut être ramassé pour être REDÉPLOYÉ.",
      },
      {
        img: "../img/abilities/ultCy.png",
        aname: "Vol Neural",
        description:
          "Utilisez cette compétence INSTANTANÉMENT sur un cadavre ennemi pour révéler la position de tous les joueurs ennemis en vie.",
      },
    ],
  },
  {
    name: "Sova",
    image: "../img/sova.webp",
    info: [
      {
        description:
          "Né dans l'hiver éternel de la toundra russe, Sova traque, trouve et élimine ses ennemis avec une efficacité et une précision redoutables. Ses incroyables talents d'éclaireur et son arc personnalisé lui garantissent que sa cible ne fuira jamais très longtemps.",
      },
    ],
    abilities: [
      {
        img: "../img/abilities/shockdart.png",
        aname: "Electroflèches",
        description:
          "ÉQUIPEZ-vous d'un arc et d'une flèche électrique. TIREZ pour décocher la flèche, qui explose à l'impact et blesse les joueurs proches. MAINTENEZ LE TIR pour augmenter la portée du projectile. Utilisez le TIR SECONDAIRE pour ajouter jusqu'à deux rebonds à cette flèche.",
      },
      {
        img: "../img/abilities/revealSo.png",
        aname: "Flèche de Reconnaissance",
        description:
          "ÉQUIPEZ-vous d'un arc et d'une flèche de reconnaissance. TIREZ pour décocher la flèche, qui s'active à l'impact et révèle la position des ennemis proches se trouvant dans sa ligne de vue. Les ennemis peuvent détruire cette flèche. MAINTENEZ LE TIR pour augmenter la portée du projectile. Utilisez le TIR SECONDAIRE pour ajouter jusqu'à deux rebonds à cette flèche.",
      },
      {
        img: "../img/abilities/drone.png",
        aname: "Drone Rapace",
        description:
          "ÉQUIPEZ-vous d'un drone rapace. TIREZ pour déployer et prendre le contrôle du drone. Quand vous contrôlez le drone, TIREZ pour envoyer une fléchette de marquage. Cette fléchette révélera la position de tout joueur qu'elle a touché. Les ennemis peuvent détruire le drone rapace.",
      },
      {
        img: "../img/abilities/ultSo.png",
        aname: "Fureur du Chasseur",
        description:
          "ÉQUIPEZ-vous d'un arc et de trois projectiles d'énergie à longue portée capables de traverser les murs. TIREZ pour décocher un projectile d'énergie en ligne droite, qui inflige des dégâts et révèle la position des ennemis touchés. Cette compétence peut être RÉUTILISÉE jusqu'à deux fois de plus tant que la compétence est active.",
      },
    ],
  },
  {
    name: "Astra",
    image: "../img/astra.webp",
    info: [
      {
        description:
          "L'agent ghanéen Astra canalise les énergies du cosmos pour façonner le champ de bataille à sa convenance. Avec une maîtrise complète de sa forme astrale et un talent pour la planification stratégique, elle a toujours une large avance sur ses ennemis.",
      },
    ],
    abilities: [
      {
        img: "../img/abilities/stunAs.png",
        aname: "Impulsion Nova",
        description:
          "Sous forme astrale, placez des étoiles. ACTIVEZ une étoile pour faire exploser une Impulsion Nova. L'Impulsion Nova se charge brièvement avant d'exploser, désorientant tous les joueurs dans son rayon d'effet.",
      },
      {
        img: "../img/abilities/smokeAs.png",
        aname: "Nébuleuse",
        description:
          "Sous forme astrale, placez des étoiles. ACTIVEZ une étoile pour la transformer en Nébuleuse (fumigène). UTILISEZ une étoile pour la dissiper, ce qui vous permettra d'en placer une autre à un autre endroit après un délai. La dissipation forme brièvement une fausse nébuleuse à l'emplacement de l'étoile.",
      },
      {
        img: "../img/abilities/pool.png",
        aname: "Puits de Gravité",
        description:
          "Placez des étoiles sous sa forme astrale (X). ACTIVEZ une étoile pour former un puits de gravité. Les joueurs dans la zone sont attirés vers le centre avant qu'il n'explose. L'explosion applique l'altération d'état Vulnérable aux joueurs piégés.",
      },
      {
        img: "../img/abilities/ultAs.png",
        aname: "Forme Astrale | Division Cosmique",
        description:
          "ACTIVEZ pour entrer en forme astrale, ce qui vous permet de placer des étoiles en TIRANT. Vous pouvez ensuite réactiver ces étoiles pour les transformer en impulsion nova, nébuleuse ou puits de gravité. Lorsque Division cosmique est chargée, utilisez le TIR SECONDAIRE en forme astrale pour viser, puis TIREZ pour s électionner deux emplacements. Une division cosmique infinie connectera les deux points sélectionnés. Division cosmique bloque les balles et étouffe fortement les sons.",
      },
    ],
  },
  {
    name: "Killjoy",
    image: "../img/killjoy.webp",
    info: [
      {
        description:
          "Véritable génie originaire d'Allemagne, Killjoy sécurise et défend les positions clés sans effort grâce à son arsenal d'inventions. Si son équipement ne suffit pas à arrêter l'ennemi, ce sont les entraves de ses robots qui en feront du menu fretin.",
      },
    ],
    abilities: [
      {
        img: "../img/abilities/alarmbot.png",
        aname: "Bot Alarme",
        description:
          "ÉQUIPEZ-vous d'un robot d'alarme camouflé. TIREZ pour déployer un robot qui traque les ennemis à sa portée. Quand il atteint sa cible, le robot explose, infligeant l'altération d'état Vulnérable. MAINTENEZ LA TOUCHE D'ÉQUIPEMENT pour rappeler un robot déployé.",
      },
      {
        img: "../img/abilities/turret.png",
        aname: "Tourelle",
        description:
          "ÉQUIPEZ-vous d'une tourelle. TIREZ pour déployer une tourelle qui tire sur les ennemis dans un cône de 180 degrés. MAINTENEZ LA TOUCHE D'ÉQUIPEMENT pour rappeler la tourelle déployée.",
      },
      {
        img: "../img/abilities/nanite.png",
        aname: "Essaim de Nanites",
        description:
          "ÉQUIPEZ-vous d'une grenade à essaim de nanites. TIREZ pour lancer la grenade. À l'atterrissage, la grenade se camoufle. ACTIVEZ la grenade pour déployer un essaim de nanites.",
      },
      {
        img: "../img/abilities/ultKj.png",
        aname: "Confinement",
        description:
          "ÉQUIPEZ-vous d'un dispositif de confinement. TIREZ pour déployer le dispositif. Après un long délai d'activation, le dispositif retient tous les ennemis pris dans sa zone d'effet. Le dispositif peut être détruit par les ennemis.",
      },
    ],
  },
  {
    name: "Yoru",
    image: "../img/yoru.webp",
    info: [
      {
        description:
          "Le Japonais Yoru perce des trous dans la réalité pour s'infiltrer derrière les lignes ennemies sans se faire repérer. En faisant preuve d'autant de ruse que d'agressivité, il prend ses cibles par surprise avant qu'elles n'aient le temps de se retourner.",
      },
    ],
    abilities: [
      {
        img: "../img/abilities/flashY.png",
        aname: "Angles Morts",
        description:
          "ÉQUIPEZ-vous d'un fragment dimensionnel instable arraché à la réalité. TIREZ pour lancer le fragment, qui provoquera un éclat aveuglant peu après avoir touché une surface dure.",
      },
      {
        img: "../img/abilities/tpY.png",
        aname: "Visites surprises",
        description:
          "ÉQUIPEZ-vous d'une balise dimensionnelle. TIREZ pour envoyer la balise vers l'avant. Utilisez le TIR SECONDAIRE pour poser une balise stationnaire devant vous. ACTIVEZ la balise pour vous y téléporter. UTILISEZ la balise pour feindre la téléportation.",
      },
      {
        img: "../img/abilities/clone.png",
        aname: "Feinte",
        description:
          "ÉQUIPEZ-vous d'un écho qui se transforme en double de Yoru une fois activé. TIREZ pour activer instantanément le double et l'envoyer vers l'avant. Utilisez le TIR SECONDAIRE pour poser un écho inactif devant vous. UTILISEZ un écho inactif pour le transformer en double et l'envoyer vers l'avant. Le double explose en émettant une lumière aveuglante quand les ennemis le détruisent.",
      },
      {
        img: "../img/abilities/ultY.png",
        aname: "Transfert Dimentionnel",
        description:
          "ÉQUIPEZ-vous d'un masque qui permet de voir entre les dimensions. TIREZ pour passer dans la dimension de Yoru. Les ennemis hors de la zone ne peuvent ni vous voir ni vous affecter. RÉACTIVEZ pour quitter la dimension de Yoru prématurément.",
      },
    ],
  },
  {
    name: "Vyse",
    image: "../img/vyse.webp",
    info: [
      {
        description:
          "La génie du métal Vyse utilise le métal liquide pour isoler, piéger et désarmer ses ennemis. Par la ruse et la manipulation, elle force tous ses adversaires à craindre le champ de bataille lui-même.",
      },
    ],
    abilities: [
      {
        img: "../img/abilities/wallVy.png",
        aname: "Cisaille",
        description:
          "ÉQUIPEZ-vous de filaments de métal liquide. TIREZ pour placer un piège invisible sur un mur. Lorsqu'un ennemi passe devant, un mur indestructible jaillit du sol derrière lui. Le mur ne dure qu'un bref instant avant de disparaître.",
      },
      {
        img: "../img/abilities/flashVy.png",
        aname: "Rose Métallique",
        description:
          "ÉQUIPEZ-vous d'une rose métallique. Visez une surface et TIREZ pour placer une rose métallique furtive, ou utilisez le TIR SECONDAIRE pour placer la rose métallique à travers la surface. RÉUTILISEZ pour aveugler tous les joueurs qui la regardent. La rose peut être ramassée pour être REDÉPLOYÉE.",
      },
      {
        img: "../img/abilities/ronce.png",
        aname: "Ronces Barbelées",
        description:
          "ÉQUIPEZ-vous d'un nid de métal liquide. TIREZ pour le lancer. En retombant, le nid devient invisible. Une fois ACTIVÉ, il s'étend en un large nid de ronces barbelées qui ralentit et blesse tous les joueurs qui le traversent.",
      },
      {
        img: "../img/abilities/ultVy.png",
        aname: "Jardin d'Acier",
        description:
          "ÉQUIPEZ-vous d'une ronce de métal liquide. TIREZ pour faire éclater le métal autour de vous en un torrent de ronces métalliques, ce qui ENRAYE les armes principales des adversaires après un bref délai.",
      },
    ],
  },
  {
    name: "Clove",
    image: "../img/clove.webp",
    info: [
      {
        description:
          "Clove, l'intenable Écossais·e, déstabilise l'ennemi dans le feu de l'action comme le froid de la mort. Iel sème le trouble dans les rangs ennemis, même depuis sa tombe, car sa mort ne dure jamais très longtemps.  ",
      },
    ],
    abilities: [
      {
        img: "../img/abilities/decayCl.png",
        aname: "Trouble-Fête",
        description:
          "ÉQUIPEZ-vous d'un fragment d'essence d'immortalité. TIREZ pour lancer le fragment, lequel explose après un court délai et désagrège temporairement toutes les cibles touchées.",
      },
      {
        img: "../img/abilities/smokeCl.png",
        aname: "Ruse",
        description:
          "ÉQUIPEZ pour visualiser le champ de bataille. TIREZ pour définir les endroits où poser les nuages de Clove. Utilisez le TIR SECONDAIRE pour confirmer, ce qui lance des nuages qui bloquent la vision dans les zones",
      },
      {
        img: "../img/abilities/healCl.png",
        aname: "Coup de Pouce",
        description:
          "ACTIVEZ pour absorber instantanément la force vitale d'un ennemi tombé au combat que Clove a blessé ou tué, ce qui vous accélère et vous fait gagner des PV temporaires.",
      },
      {
        img: "../img/abilities/ultCl.png",
        aname: "Toujours Debout",
        description:
          "Après votre mort, ACTIVEZ pour revenir à la vie. De retour parmi les vivants, vous avez un certain temps pour réussir une élimination ou une assistance blessante, sans quoi vous mourez.",
      },
    ],
  },
  {
    name: "Deadlock",
    image: "../img/deadlock.webp",
    info: [
      {
        description:
          "Deadlock, l'agent spécial norvégien, déploie un éventail de nanocâbles ultra-modernes pour défendre sa position contre le plus violent des assauts. Nul n'échappe à sa vigilance, ni ne survit à sa cruelle ténacité.",
      },
    ],
    abilities: [
      {
        img: "../img/abilities/sensorDea.png",
        aname: "Radar Ultrason",
        description:
          "ÉQUIPEZ-vous du Radar ultrason. TIREZ pour le déployer. Le radar détecte tous les sons générés par l'ennemi dans une zone. Il étourdit dans cette zone dès qu'il repère des bruits de pas, de tir ou tout autre son remarquable.",
      },
      {
        img: "../img/abilities/WallDe.png",
        aname: "Disque Barrière",
        description:
          "ÉQUIPEZ-vous du disque barrière. TIREZ pour le lancer vers l'avant. À l'atterrissage, le disque déploie à partir du point d'origine une barrière bloquant l'avancée des agents.",
      },
      {
        img: "../img/abilities/CatchDe.png",
        aname: "Gravnet",
        description:
          "ÉQUIPEZ-vous d'une grenade GravNet. TIREZ pour la lancer. Utilisez le TIR SECONDAIRE pour la lancer par en dessous. La GravNet explose à l'atterrissage, forçant tous les ennemis à portée à se baisser ou se déplacer au ralenti.",
      },
      {
        img: "../img/abilities/ultDea.png",
        aname: "Annihilation",
        description:
          "ÉQUIPEZ-vous de l'Accélérateur de nanocâbles. TIREZ pour envoyer une salve de nanocâbles qui captureront le premier ennemi touché. L'ennemi ainsi emmailloté sera attiré en ligne droite, au bout de laquelle il mourra, à moins d'être libéré. Le cocon de nanocâbles est destructible.",
      },
    ],
  },
  {
    name: "Harbor",
    image: "../img/harbor.webp",
    info: [
      {
        description:
          "Venu de la côte indienne, Harbor déferle sur le terrain grâce à une technologie antique qui lui permet de contrôler l'eau. Il déchaîne des torrents bouillonnants et de terribles lames d'eau pour protéger ses alliés et noyer ses adversaires.",
      },
    ],
    abilities: [
      {
        img: "../img/abilities/wallH.png",
        aname: "Dôme Acqueux",
        description:
          "ÉQUIPEZ-vous d'un mur d'eau. TIREZ pour lancer l'eau vers l'avant, parallèlement au sol. MAINTENEZ LE TIR pour la guider dans la direction du viseur, traverser le décor et créer un mur aqueux sur son passage. Utilisez le TIR SECONDAIRE tout en guidant l'eau pour arrêter la compétence prématurément. Les joueurs touchés sont RALENTIS.",
      },
      {
        img: "../img/abilities/smokeH.png",
        aname: "Marée Haute",
        description:
          "ÉQUIPEZ un bouclier d'eau sphérique. TIREZ pour le lancer. Utilisez le TIR SECONDAIRE pour faire un lancer par en dessous. Au contact du sol, il déploie un bouclier destructible capable d'arrêter les balles.",
      },
      {
        img: "../img/abilities/cascade.png",
        aname: "Cascade",
        description:
          "ÉQUIPEZ-vous d'une vague. TIREZ pour la déployer devant vous à travers les murs. RÉUTILISEZ pour empêcher la vague d'aller plus loin. Les joueurs touchés sont RALENTIS.",
      },
      {
        img: "../img/abilities/ultH.png",
        aname: "Jugement",
        description:
          "ÉQUIPEZ toute la puissance de votre artéfact. TIREZ pour invoquer une flaque bouillonnante sur le sol. Les ennemis dans la zone sont frappés par des geysers successifs. Les joueurs touchés par un jet sont DÉSORIENTÉS.",
      },
    ],
  },
  {
    name: "Neon",
    image: "../img/neon.webp",
    info: [
      {
        description:
          "L'agent philippin, Neon, s'élance vers l'avant à une vitesse fulgurante, libérant de grosses décharges de radiance biomagnétique générées frénétiquement par son corps. Elle se lance à la poursuite des ennemis qui n'ont pas le temps de s'y préparer et les élimine aussi vite que l'éclair.",
      },
    ],
    abilities: [
      {
        img: "../img/abilities/stunN.png",
        aname: "Eclairs Relais",
        description:
          "Lancez INSTANTANÉMENT un éclair d'énergie qui rebondit une fois. Chaque fois qu'il rencontre une surface, l'éclair électrifie le sol en dessous avec un coup de jus.",
      },
      {
        img: "../img/abilities/course.png",
        aname: "Vitesse supérieure",
        description:
          "Chargez INSTANTANÉMENT le pouvoir de Neon pour décupler sa vitesse. À la fin du chargement, utilisez TIR SECONDAIRE pour déclencher une glissade électrique. Vous regagnez une charge de glissade toutes les deux éliminations.",
      },
      {
        img: "../img/abilities/wallN.png",
        aname: "Voie Rapide",
        description:
          "TIREZ deux lignes d'énergie dans le sol devant vous qui parcourent une courte distance ou jusqu'à frapper une surface. Elles s'élèvent alors en murs d'électricité statique qui bloquent la vision et infligent des dégâts aux ennemis qui les traversent.",
      },
      {
        img: "../img/abilities/ultN.png",
        aname: "Surrégime",
        description:
          "Libérez toute la puissance et la vitesse de Neon pendant un court instant. TIREZ pour canaliser son pouvoir en un rayon électrique mortel à grande précision. Chaque élimination réinitialise sa durée.",
      },
    ],
  },
  {
    name: "Iso",
    image: "../img/iso.webp",
    info: [
      {
        description:
          "Venu de Chine et spécialiste de missions délicates, Iso se fond dans le flux de Radianite pour démanteler les réseaux ennemis. Capable de restructurer l'énergie ambiante en protection anti-balles, il ne dévie pas de la route vers son prochain duel à mort.",
      },
    ],
    abilities: [
      {
        img: "../img/abilities/decayI.png",
        aname: "Sape",
        description:
          "ÉQUIPEZ-vous d'un carreau moléculaire. Tirez pour le lancer vers l'avant, ce qui rend brièvement FRAGILES tous les joueurs touchés. Le carreau peut traverser les objets solides, murs y compris.",
      },
      {
        img: "../img/abilities/shield.png",
        aname: "Tir coupé",
        description:
          "LANCEZ un décompte de concentration. À la fin, vous entrez dans un état fluide pendant lequel les ennemis abattus que vous avez tués ou blessés génèrent un orbe d'énergie. Tirer sur cet orbe vous confère un bouclier absorbant une salve de dégâts de n'importe quelle source.",
      },
      {
        img: "../img/abilities/wallI.png",
        aname: "Contigence",
        description:
          "PRÉPAREZ une concentration d'énergie prismatique. Utilisez le TIR PRINCIPAL pour projeter un mur d'énergie indestructible qui bloque les balles.",
      },
      {
        img: "../img/abilities/ultI.png",
        aname: "Duel à huit clos",
        description:
          "ÉQUIPEZ-vous d'une arène inter-dimensionnelle. Utilisez le TIR PRINCIPAL pour produire une colonne d'énergie sur le terrain, attirant le premier ennemi touché avec vous dans l'arène. Vous vous y affrontez dans un duel à mort.",
      },
    ],
  },
  {
    name: "Kay/O",
    image: "../img/kayo.webp",
    info: [
      {
        description:
          "KAY/O est une machine de guerre conçue dans un but précis : neutraliser les radiants. La neutralisation des compétences ennemies réduit les possibilités de riposte des adversaires, ce qui confère un avantage décisif à son équipe.",
      },
    ],
    abilities: [
      {
        img: "../img/abilities/flashK.png",
        aname: "Mémoire Flash",
        description:
          "ÉQUIPEZ-vous d'une grenade aveuglante. TIREZ pour faire un lancer tendu. Utilisez le TIR SECONDAIRE pour la lancer en cloche (plus faible, mais explose plus rapidement). La grenade explose après un court instant et aveugle tous ceux qui voient l'explosion.",
      },
      {
        img: "../img/abilities/couteau.png",
        aname: "Point Zéro",
        description:
          "ÉQUIPEZ-vous d'une lame neutralisante. TIREZ pour la lancer. La lame se colle à la première surface touchée. Après un délai, elle neutralise tous ceux dans le rayon de l'explosion. Les ennemis peuvent détruire cette lame.",
      },
      {
        img: "../img/abilities/grenadeK.png",
        aname: "Fragment",
        description:
          "ÉQUIPEZ-vous d'un fragment explosif. TIREZ pour le lancer. Le fragment se colle au sol et explose à plusieurs reprises, infligeant des dégâts quasi mortels au centre de chaque explosion.",
      },
      {
        img: "../img/abilities/ultK.png",
        aname: "CMD Null",
        description:
          "Entrez INSTANTANÉMENT en surcharge, ce qui permet à KAY/O d'émettre des vagues d'énergie radianite polarisée dans un très large rayon. Les ennemis touchés par ces vagues sont neutralisés pendant un court instant. Pendant la surcharge, KAY/O gagne l'effet Stimulant de combat et peut être restabilisé s'il est mis à terre.",
      },
    ],
  },
  {
    name: "Gekko",
    image: "../img/gekko.webp",
    info: [
      {
        description:
          "Originaire de Los Angeles, Gekko dirige une bande de créatures chaotiques, mais très soudées. Ses amis s'occupent de disperser les ennemis, puis Gekko rassemble sa petite troupe pour recommencer.",
      },
    ],
    abilities: [
      {
        img: "../img/abilities/altego.png",
        aname: "Altego",
        description:
          "ÉQUIPEZ-vous d'Altego. TIREZ pour envoyer Altego chercher des ennemis. Altego provoque une explosion désorientante en direction du premier ennemi qu'il voit. En visant un site de pose du spike ou un spike posé, utilisez le TIR SECONDAIRE pour envoyer Altego poser ou désamorcer le spike. Pour poser le spike, Gekko doit l'avoir dans son inventaire. Quand Altego arrive à expiration, il redevient un globule dormant. INTERAGISSEZ avec lui pour récupérer le globule et, après un court délai, pouvoir réutiliser Altego.",
      },
      {
        img: "../img/abilities/verti.png",
        aname: "Verti",
        description:
          "ÉQUIPEZ-vous de Verti. TIREZ pour envoyer Verti dans les airs. Verti charge son attaque, puis tire des projectiles de plasma sur les ennemis dans son champ de vision. Les ennemis touchés par le plasma sont aveuglés. Quand Verti arrive à expiration, elle redevient un globule dormant. INTERAGISSEZ avec elle pour récupérer le globule et, après un court délai, pouvoir réutiliser Verti.",
      },
      {
        img: "../img/abilities/pogo.png",
        aname: "Pogo",
        description:
          "ÉQUIPEZ-vous de Pogo. TIREZ pour lancer Pogo comme une grenade. Utilisez le TIR SECONDAIRE pour faire un lancer par en dessous. Pogo se multiplie dans une large zone à l'atterrissage, puis explose après un court délai.",
      },
      {
        img: "../img/abilities/mordicus.png",
        aname: "Mordicus",
        description:
          "ÉQUIPEZ-vous de Mordicus. TIREZ pour vous lier mentalement avec Mordicus et la diriger en territoire ennemi. ACTIVEZ pour bondir vers l'avant et exploser, ce qui retient tous les ennemis dans un petit rayon. Quand Mordicus arrive à expiration, elle redevient un globule dormant. INTERAGISSEZ avec elle pour récupérer le globule et, après un court délai, pouvoir réutiliser Mordicus. Mordicus peut être récupérée une fois.",
      },
    ],
  },
  {
    name: "Chamber",
    image: "../img/chamber.webp",
    info: [
      {
        description:
          "Aussi classe que bien équipé, le concepteur d'armes français Chamber repousse les assaillants avec une précision mortelle. Il met à profit son arsenal bien particulier pour tenir sa position et éliminer les ennemis de loin en prévoyant une solution aux défis posés par chaque stratégie.",
      },
    ],
    abilities: [
      {
        img: "../img/abilities/deagle.png",
        aname: "Chasseur de tête",
        description:
          "ACTIVEZ pour équiper un gros calibre. Faites un TIR SECONDAIRE avec le pistolet équipé pour utiliser le viseur.",
      },
      {
        img: "../img/abilities/tpC.png",
        aname: "Rendez-vous",
        description:
          "ÉQUIPEZ-vous d'une balise de téléportation. TIREZ pour la poser sur le sol. Quand vous vous trouvez sur le sol à portée de la balise, RÉACTIVEZ pour vous y téléporter rapidement. La balise peut être ramassée pour être REDÉPLOYÉE.",
      },
      {
        img: "../img/abilities/webcam.png",
        aname: "Marque déposée",
        description:
          "ÉQUIPEZ-vous d'un piège qui détecte les ennemis. TIREZ pour le poser sur le sol. Quand un ennemi visible est à portée, le piège déclenche un compte à rebours avant d'ébranler le terrain autour de lui, créant un champ persistant qui ralentit les joueurs qui s'y trouvent. La balise peut être ramassée pour être REDÉPLOYÉE.",
      },
      {
        img: "../img/abilities/ultCha.png",
        aname: "Tour de force",
        description:
          "ACTIVEZ pour matérialiser un puissant fusil de sniper personnalisé qui tue l'ennemi en un coup s'il est touché au-dessus de la ceinture. Utilisez le TIR SECONDAIRE pour viser. Tuer un ennemi crée un champ persistant qui ralentit les joueurs qui s'y trouvent.",
      },
    ],
  },
  {
    name: "Skye",
    image: "../img/skye.webp",
    info: [
      {
        description:
          "Originaire d'Australie, Skye et sa bande de bêtes sauvages ouvrent la voie à travers les territoires hostiles. Grâce à ses créations qui entravent l'ennemi et à sa faculté à soigner les autres, l'équipe est plus forte et plus en sécurité quand elle compte Skye dans ses rangs.",
      },
    ],
    abilities: [
      {
        img: "../img/abilities/wolf.png",
        aname: "Eclaireur",
        description:
          "ÉQUIPEZ-vous d'une breloque Tigre de Tasmanie. TIREZ pour lancer et prendre le contrôle du prédateur. Lorsque vous le contrôlez, TIREZ pour bondir en avant, ce qui provoque une explosion qui désoriente et blesse les ennemis directement touchés.",
      },
      {
        img: "../img/abilities/flashSk.png",
        aname: "Guide Eclatant",
        description:
          "ÉQUIPEZ-vous d'une breloque Faucon. TIREZ pour lancer l'oiseau devant vous. MAINTENEZ LE TIR pour guider le faucon dans la direction de votre réticule. RÉUTILISEZ la compétence pendant que le faucon est dans les airs pour le transformer en lumière qui envoie une confirmation d'impact si un ennemi était à portée et en ligne de mire.",
      },
      {
        img: "../img/abilities/healSk.png",
        aname: "Revitalisation",
        description:
          "ÉQUIPEZ-vous d'une breloque de soin. MAINTENEZ LE TIR pour effectuer une canalisation qui soigne les alliés à portée et dans la ligne de mire. Peut être réutilisé jusqu'à épuisement de la capacité de soin. Skye ne peut pas se soigner. ",
      },
      {
        img: "../img/abilities/ultSk.png",
        aname: "Traqueurs",
        description:
          "ÉQUIPEZ-vous d'une breloque Traqueurs. TIREZ pour lancer trois traqueurs qui pourchasseront les trois ennemis les plus proches. Si un traqueur atteint sa cible, il réduit le champ de vision de celle-ci. Les ennemis peuvent détruire les traqueurs.",
      },
    ],
  },
  {
    name: "Fade",
    image: "../img/fade.webp",
    info: [
      {
        description:
          "Originaire de Turquie, la chasseuse de primes Fade utilise le pouvoir des cauchemars pour s'emparer des secrets ennemis. Elle traque ses cibles et révèle leurs plus grandes peurs pour mieux les briser dans l'obscurité.",
      },
    ],
    abilities: [
      {
        img: "../img/abilities/catchFa.png",
        aname: "Capteur",
        description:
          "Équipez-vous d'un orbe d'encre cauchemardesque. TIREZ pour lancer l'orbe. Celui-ci tombe au sol après un temps défini, ce qui fait exploser l'encre et crée une zone. Les ennemis pris dans cette zone ne peuvent pas en sortir par des moyens normaux. RÉUTILISEZ la compétence pour faire tomber le projectile plus tôt.",
      },
      {
        img: "../img/abilities/revealFa.png",
        aname: "Hanteur",
        description:
          "Équipez-vous d'une entité cauchemardesque. TIREZ pour lancer l'orbe. Celui-ci tombe au sol après un temps défini, et se transforme alors en entité cauchemardesque qui révèle les ennemis dans son champ de vision. Les ennemis peuvent détruire cette entité. RÉUTILISEZ la compétence pour faire tomber le projectile plus tôt.",
      },
      {
        img: "../img/abilities/rodeur.png",
        aname: "Rôdeur",
        description:
          "ÉQUIPEZ-vous d'un Rôdeur. TIREZ pour envoyer le Rôdeur sur une ligne droite. Le Rôdeur se verrouille sur les ennemis ou les pistes qui entrent dans son cône de vision frontal et les suit ; s'il atteint un ennemi, il le rend myope. MAINTENEZ la touche de TIR pour guider le Rôdeur dans la direction de votre réticule.",
      },
      {
        img: "../img/abilities/ultFa.png",
        aname: "Nuit Tombante",
        description:
          "ÉQUIPEZ-vous du pouvoir de la peur. TIREZ pour envoyer une vague d'énergie cauchemardesque qui peut traverser les murs. L'énergie crée une piste vers l'ennemi, en plus de l'assourdir et de désagréger ses PV.",
      },
    ],
  },
  {
    name: "Tejo",
    image: "../img/tejo.webp",
    info: [
      {
        description:
          "Originaire de Colombie, Tejo est un conseiller vétéran dans le domaine du renseignement. Son système de guidage balistique force les ennemis à perdre du terrain, voire la vie. Ses frappes chirurgicales lui permettent de garder les ennemis sous son emprise.",
      },
    ],
    abilities: [
      {
        img: "../img/abilities/droneT.png",
        aname: "Drone Furtif",
        description:
          "ÉQUIPEZ-vous d'un drone furtif. TIREZ pour lancer le drone vers l'avant et en prendre le contrôle. TIREZ à nouveau pour déclencher une impulsion qui neutralise et révèle les ennemis touchés.",
      },
      {
        img: "../img/abilities/stunT.png",
        aname: "Livraison Spéciale",
        description:
          "ÉQUIPEZ-vous d'une grenade adhésive. TIREZ pour la lancer. La grenade se colle à la première surface touchée et explose, désorientant les cibles touchées. Le TIR SECONDAIRE permet de lancer la grenade en la faisant rebondir une fois.",
      },
      {
        img: "../img/abilities/bombe.png",
        aname: "Salves autoguidées",
        description:
          "ÉQUIPEZ-vous d'un système de ciblage en réalité augmentée. TIREZ pour cibler jusqu'à deux positions sur la carte. Utilisez le TIR SECONDAIRE pour lancer des missiles autonomes qui iront jusqu'aux positions ciblées et exploseront à l'arrivée.",
      },
      {
        img: "../img/abilities/ultT.png",
        aname: "Apocalypse",
        description:
          "ÉQUIPEZ-vous d'une carte tactique. TIREZ pour sélectionner le point d'origine de la frappe. TIREZ à nouveau pour définir le point d'arrivée et lancer l'attaque, ce qui provoque une série d'explosions sur la ligne ainsi tracée. TIR SECONDAIRE pendant le ciblage de la carte annule le point d'origine.",
      },
    ],
  },
];

const btn = document.getElementById("randomize-btn");
const agentName = document.getElementById("agent-name");
const agentImage = document.getElementById("agent-image");
const abilitiesImageOne = document.getElementById("image-abilitiesone");
const abilitiesImageTwo = document.getElementById("image-abilitiestwo");
const abilitiesImageThree = document.getElementById("image-abilitiesthree");
const abilitiesImageFour = document.getElementById("image-abilitiesfour");
const agentDescription = document.querySelector("p#lightbox-text");
const textClick = document.querySelector("#bg-text");

//liste des abilités des personnages
const agentAbilitiesOne = document.querySelector("#lightbox-abilitiesone");
const agentAbilitiesTwo = document.querySelector("#lightbox-abilitiestwo");
const agentAbilitiesThree = document.querySelector("#lightbox-abilitiesthree");
const agentAbilitiesFour = document.querySelector("#lightbox-abilitiesfour");
////
////
//liste des descriptions des abilités des personnages
const agentAbilitiesDescOne = document.querySelector(
  "#lightbox-abilitiesdescone"
);
const agentAbilitiesDescTwo = document.querySelector(
  "#lightbox-abilitiesdesctwo"
);
const agentAbilitiesDescThree = document.querySelector(
  "#lightbox-abilitiesdescthree"
);
const agentAbilitiesDescFour = document.querySelector(
  "#lightbox-abilitiesdescfour"
);

function createParticles() {
  for (let i = 0; i < 30; i++) {
    let particle = document.createElement("div");
    particle.classList.add("particle");
    document.body.appendChild(particle);

    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    anime({
      targets: particle,
      translateX: [x, x + (Math.random() - 0.5) * 200],
      translateY: [y, y + (Math.random() - 0.5) * 200],
      opacity: [1, 0],
      scale: [1, 0],
      duration: 2000,
      easing: "easeOutQuad",
      complete: function (anim) {
        particle.remove();
      },
    });
  }
}

textClick.style.display = "none";

btn.addEventListener("click", function () {
  const randomAgent = agents[Math.floor(Math.random() * agents.length)];

  // Affichage du nom et de l'image de l'agent
  agentName.textContent = randomAgent.name;
  agentImage.src = randomAgent.image;
  textClick.style.display = "block";
  abilitiesImageOne.src = randomAgent.abilities[0].img;
  abilitiesImageTwo.src = randomAgent.abilities[1].img;
  abilitiesImageThree.src = randomAgent.abilities[2].img;
  abilitiesImageFour.src = randomAgent.abilities[3].img;
  agentImage.style.display = "block";
  agentDescription.textContent = randomAgent.info[0].description;

  agentAbilitiesOne.textContent = randomAgent.abilities[0].aname;
  agentAbilitiesTwo.textContent = randomAgent.abilities[1].aname;
  agentAbilitiesThree.textContent = randomAgent.abilities[2].aname;
  agentAbilitiesFour.textContent = randomAgent.abilities[3].aname;

  agentAbilitiesDescOne.textContent = randomAgent.abilities[0].description;
  agentAbilitiesDescTwo.textContent = randomAgent.abilities[1].description;
  agentAbilitiesDescThree.textContent = randomAgent.abilities[2].description;
  agentAbilitiesDescFour.textContent = randomAgent.abilities[3].description;

  anime({
    targets: "#display" + "#bg-text",
    opacity: [0, 1],
    scale: [0.5, 1],
    duration: 800,
    easing: "easeOutElastic",
  });

  createParticles();
});

document.getElementById("agent-image").addEventListener("click", function () {
  document.getElementById("lightbox").style.display = "flex";
});

document
  .getElementById("lightbox-close")
  .addEventListener("click", function () {
    document.getElementById("lightbox").style.display = "none";
  });
